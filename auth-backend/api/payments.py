import os
from fastapi import APIRouter, Request, HTTPException
from typing import Any
from db import AsyncSessionLocal
from models import Order

router = APIRouter()

_in_memory_orders: dict[str, dict[str, Any]] = {}

# Real Razorpay integration — requires environment variables:
# RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET
RAZORPAY_KEY_ID = os.getenv('RAZORPAY_KEY_ID')
RAZORPAY_KEY_SECRET = os.getenv('RAZORPAY_KEY_SECRET')
RAZORPAY_WEBHOOK_SECRET = os.getenv('RAZORPAY_WEBHOOK_SECRET')

try:
    import razorpay
    _razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET)) if RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET else None
except Exception:
    _razorpay_client = None


async def _save_order_to_db(order_id: str, payload: dict[str, Any]):
    """Save order to the configured async DB. If the DB is not available or migrations haven't been run,
    fall back to an in-memory store to keep local development flows working.
    """
    try:
        async with AsyncSessionLocal() as session:
            order = Order(id=order_id, user_id=payload.get('user_id'), course_id=payload.get('course_id'), amount=payload.get('amount'), currency=payload.get('currency', 'INR'), status='created')
            session.add(order)
            await session.commit()
    except Exception:
        # Fallback for local development when DB is not configured or table missing
        global _in_memory_orders
        try:
            _in_memory_orders
        except NameError:
            _in_memory_orders = {}
        _in_memory_orders[order_id] = {**payload, 'id': order_id, 'status': 'created', 'created_at': __import__('datetime').datetime.utcnow().isoformat()}


@router.post('/create')
async def create_order(payload: dict[str, Any]):
    """Create an order and forward to the chosen provider for payment.
    Payload may include 'provider' (razorpay|payu|cashfree|gpay_upi). Default: razorpay.
    Expects amount in rupees (int or float).
    """
    provider = (payload.get('provider') or 'razorpay').lower()
    amount = payload.get('amount')
    if amount is None:
        raise HTTPException(status_code=400, detail='Amount is required')

    import time
    our_order_id = payload.get('order_id') or f'order_{int(time.time())}'

    # Route to provider-specific adapters where available.
    if provider == 'razorpay':
        if _razorpay_client is None:
            raise HTTPException(status_code=500, detail='Razorpay not configured')
        amount_paise = int(float(amount) * 100)
        razorpay_order = _razorpay_client.order.create({
            'amount': amount_paise,
            'currency': 'INR',
            'receipt': our_order_id,
            'payment_capture': 1,
        })
        await _save_order_to_db(our_order_id, {**payload, 'razorpay_order_id': razorpay_order.get('id')})
        return {
            'order_id': our_order_id,
            'provider': 'razorpay',
            'provider_order': razorpay_order,
            'provider_key_id': RAZORPAY_KEY_ID,
        }

    # Lazy import adapters to avoid hard dependency when not used
    if provider == 'payu':
        try:
            from payments.adapters import payu as _payu
        except Exception:
            raise HTTPException(status_code=500, detail='PayU adapter not available')
        provider_order = _payu.create_order({**payload, 'order_id': our_order_id})
        await _save_order_to_db(our_order_id, {**payload, 'provider_order_id': provider_order.get('order_id'), 'provider': 'payu'})
        return {'order_id': our_order_id, 'provider': 'payu', 'provider_order': provider_order}

    if provider == 'cashfree':
        try:
            from payments.adapters import cashfree as _cashfree
        except Exception:
            raise HTTPException(status_code=500, detail='Cashfree adapter not available')
        provider_order = _cashfree.create_order({**payload, 'order_id': our_order_id})
        await _save_order_to_db(our_order_id, {**payload, 'provider_order_id': provider_order.get('order_id'), 'provider': 'cashfree'})
        return {'order_id': our_order_id, 'provider': 'cashfree', 'provider_order': provider_order}

    if provider in ('gpay', 'gpay_upi', 'upi'):
        try:
            from payments.adapters import gpay_upi as _gpay
        except Exception:
            raise HTTPException(status_code=500, detail='GPay/UPI adapter not available')
        provider_order = _gpay.create_order({**payload, 'order_id': our_order_id})
        await _save_order_to_db(our_order_id, {**payload, 'provider_order_id': provider_order.get('order_id'), 'provider': 'gpay_upi'})
        return {'order_id': our_order_id, 'provider': 'gpay_upi', 'provider_order': provider_order}

    raise HTTPException(status_code=400, detail=f'Unknown provider: {provider}')


@router.post('/webhook')
async def webhook(request: Request):
    # Backwards-compatible single webhook endpoint expects Razorpay signature
    payload = await request.body()
    signature = request.headers.get('X-Razorpay-Signature')
    if not signature or not RAZORPAY_WEBHOOK_SECRET:
        raise HTTPException(status_code=400, detail='Webhook signature or secret not configured')

    try:
        import razorpay as _rz
        _rz.utils.verify_webhook_signature(payload.decode(), signature, RAZORPAY_WEBHOOK_SECRET)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f'Invalid signature: {exc}')

    event = await request.json()
    event_type = event.get('event')
    # TODO: map to our orders and update state accordingly
    return {'status': 'ok', 'event': event_type}


@router.post('/webhook/{provider}')
async def webhook_provider(provider: str, request: Request):
    """Generic webhook receiver for multiple providers. Provider path param routes verification to adapter."""
    raw = await request.body()
    headers = {k: v for k, v in request.headers.items()}
    p = provider.lower()

    if p == 'razorpay':
        # reuse existing logic
        sig = headers.get('x-razorpay-signature') or headers.get('X-Razorpay-Signature')
        if not sig or not RAZORPAY_WEBHOOK_SECRET:
            raise HTTPException(status_code=400, detail='Razorpay webhook not configured')
        try:
            import razorpay as _rz
            _rz.utils.verify_webhook_signature(raw.decode(), sig, RAZORPAY_WEBHOOK_SECRET)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=f'Invalid signature: {exc}')
        event = await request.json()
        return {'status': 'ok', 'provider': 'razorpay', 'event': event.get('event')}

    # Try adapter-based verification
    try:
        adapter_mod = None
        if p == 'payu':
            from payments.adapters import payu as adapter_mod
        elif p == 'cashfree':
            from payments.adapters import cashfree as adapter_mod
        elif p in ('gpay', 'gpay_upi', 'upi'):
            from payments.adapters import gpay_upi as adapter_mod
    except Exception:
        adapter_mod = None

    if adapter_mod is None:
        raise HTTPException(status_code=400, detail=f'No adapter available for provider: {provider}')

    try:
        verified = adapter_mod.verify_webhook(raw, headers)
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f'Verification failed: {exc}')

    return {'status': 'ok', 'provider': provider, 'verified': verified}
