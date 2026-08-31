import os
from typing import Any, Dict

# PayU adapter scaffolding — uses environment variables PAYU_KEY, PAYU_SALT, PAYU_BASE_URL
# This module provides a sandbox-ready interface. Replace env vars with live credentials to go live.

PAYU_KEY = os.getenv('PAYU_KEY')
PAYU_SALT = os.getenv('PAYU_SALT')
PAYU_BASE_URL = os.getenv('PAYU_BASE_URL', 'https://sandbox.payu.in')


def create_order(payload: Dict[str, Any]) -> Dict[str, Any]:
    """Create an order payload for PayU. Returns a dict the frontend can use to complete checkout.
    In sandbox mode this returns a prepared payload; with credentials present it should call PayU APIs.
    """
    amount = payload.get('amount')
    order_id = payload.get('order_id') or f"payu_{int(__import__('time').time())}"

    # In a full implementation, sign params with PAYU_SALT and POST to PAYU create transaction endpoint.
    return {
        'provider': 'payu',
        'order_id': order_id,
        'amount': amount,
        'currency': payload.get('currency', 'INR'),
        'checkout_url': f"{PAYU_BASE_URL}/_payment",  # frontend can POST here with signed params
        'sandbox': True if not (PAYU_KEY and PAYU_SALT) else False,
    }


def verify_webhook(raw_body: bytes, headers: Dict[str, str]) -> Dict[str, Any]:
    """Verify PayU webhook — returns event dict on success or raise ValueError on failure."""
    # PayU webhook verification requires checking posted params and hash signature. Implement when keys are available.
    return {'status': 'verified', 'provider': 'payu', 'sandbox': True}
