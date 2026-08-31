import os
from typing import Any, Dict

# Google Pay / UPI adapter scaffolding. Google Pay UPI on web typically uses the Google Pay API for
# Payments or can be integrated via PSP partners. This module prepares a UPI payment payload.

GUPI_MERCHANT_ID = os.getenv('GUPI_MERCHANT_ID')
GUPI_BASE_URL = os.getenv('GUPI_BASE_URL', 'https://pay.google.com/gp/p/ui/pay')


def create_order(payload: Dict[str, Any]) -> Dict[str, Any]:
    amount = payload.get('amount')
    order_id = payload.get('order_id') or f"gpayupi_{int(__import__('time').time())}"

    # Real UPI flows often depend on intent-based deep link or PSP integration.
    return {
        'provider': 'gpay_upi',
        'order_id': order_id,
        'amount': amount,
        'currency': payload.get('currency', 'INR'),
        'checkout_intent': f"upi://pay?pa=merchant@upi&pn=Merchant&am={amount}&tn=Order+{order_id}",
        'sandbox': True if not GUPI_MERCHANT_ID else False,
    }


def verify_webhook(raw_body: bytes, headers: Dict[str, str]) -> Dict[str, Any]:
    # UPI webhooks depend on PSP; this returns a verification placeholder.
    return {'status': 'verified', 'provider': 'gpay_upi', 'sandbox': True}
