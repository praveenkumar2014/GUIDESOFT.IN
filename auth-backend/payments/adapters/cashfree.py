import os
from typing import Any, Dict

# Cashfree adapter scaffolding — uses CASHFREE_APP_ID, CASHFREE_SECRET, CASHFREE_BASE_URL
# Sandbox-ready interface. With real credentials, call Cashfree's Orders/Payments APIs.

CASHFREE_APP_ID = os.getenv('CASHFREE_APP_ID')
CASHFREE_SECRET = os.getenv('CASHFREE_SECRET')
CASHFREE_BASE_URL = os.getenv('CASHFREE_BASE_URL', 'https://sandbox.cashfree.com')


def create_order(payload: Dict[str, Any]) -> Dict[str, Any]:
    amount = payload.get('amount')
    order_id = payload.get('order_id') or f"cashfree_{int(__import__('time').time())}"

    # In production, generate order and token via Cashfree APIs.
    return {
        'provider': 'cashfree',
        'order_id': order_id,
        'amount': amount,
        'currency': payload.get('currency', 'INR'),
        'checkout_url': f"{CASHFREE_BASE_URL}/checkout",  # placeholder
        'sandbox': True if not (CASHFREE_APP_ID and CASHFREE_SECRET) else False,
    }


def verify_webhook(raw_body: bytes, headers: Dict[str, str]) -> Dict[str, Any]:
    # Cashfree verification requires signature header verification.
    return {'status': 'verified', 'provider': 'cashfree', 'sandbox': True}
