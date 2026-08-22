import os
from fastapi import APIRouter, Request, HTTPException
from typing import Any
from db import AsyncSessionLocal
from models import Order

router = APIRouter()

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
    async with AsyncSessionLocal() as session:
        order = Order(id=order_id, user_id=payload.get('user_id'), course_id=payload.get('course_id'), amount=payload.get('amount'), currency=payload.get('currency', 'INR'), status='created')
        session.add(order)
        await session.commit()


@router.post('/create')
async def create_order(payload: dict[str, Any]):
    """Create an order and forward to Razorpay for payment. Expects amount in rupees (int or float). Returns razorpay order info and our order id.
    """
    if _razorpay_client is None:
        raise HTTPException(status_code=500, detail='Razorpay not configured')

    amount = payload.get('amount')
    if amount is None:
        raise HTTPException(status_code=400, detail='Amount is required')
    # convert to paise
    amount_paise = int(float(amount) * 100)

    # create internal order id
    import time
    our_order_id = f'order_{int(time.time())}'

    razorpay_order = _razorpay_client.order.create({
        'amount': amount_paise,
        'currency': 'INR',
        'receipt': our_order_id,
        'payment_capture': 1,
    })

    # persist order
    await _save_order_to_db(our_order_id, {**payload, 'razorpay_order_id': razorpay_order.get('id')})

    return {
        'order_id': our_order_id,
        'razorpay_order': razorpay_order,
        'razorpay_key_id': RAZORPAY_KEY_ID,
    }


@router.post('/webhook')
async def webhook(request: Request):
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
    # handle events like payment.captured, payment.failed
    event_type = event.get('event')
    data = event.get('payload', {})
    # TODO: map to our orders and update state accordingly

    return {'status': 'ok', 'event': event_type}
