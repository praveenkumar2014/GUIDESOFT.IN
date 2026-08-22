from fastapi import APIRouter
from typing import Any
import time

router = APIRouter()

_orders: dict[str, dict[str, Any]] = {}

@router.post('/')
async def create_order(payload: dict[str, Any]) -> dict[str, Any]:
    """Create an order placeholder (course purchase).
    Expected payload: { user_id, course_id, amount, currency }
    """
    order_id = f'order_{int(time.time())}'
    _orders[order_id] = {**payload, 'id': order_id, 'status': 'created', 'created_at': int(time.time())}
    return _orders[order_id]

@router.get('/{order_id}')
async def get_order(order_id: str) -> dict[str, Any]:
    return _orders.get(order_id, {})
