from fastapi import APIRouter
from typing import Any

router = APIRouter()

@router.post('/upi/initiate')
async def initiate_upi_payment(payload: dict[str, Any]) -> dict[str, Any]:
    """Placeholder: initiate a UPI payment. Replace with real payment provider integration."""
    # Expected payload: { amount: int, currency: 'INR', order_id: str, vpa: 'user@bank' }
    return {'status': 'pending', 'provider': 'gpay', 'payment_id': f"pay_{int(__import__('time').time())}", 'payload': payload}

@router.post('/upi/webhook')
async def upi_webhook(event: dict[str, Any]) -> dict[str, Any]:
    """Placeholder webhook receiver for payment provider events."""
    # In production: verify signature, update order state, acknowledge
    return {'status': 'received', 'event': event}
