from fastapi import APIRouter, Depends
from typing import Any

from auth import get_current_user

router = APIRouter()

# Simple in-memory users placeholder
_users: dict[str, dict[str, Any]] = {}

@router.get('/')
async def list_users() -> list[dict[str, Any]]:
    """List users (placeholder)."""
    return list(_users.values())

@router.post('/')
async def create_user(user: dict[str, Any]) -> dict[str, Any]:
    """Create a user (placeholder)"""
    user_id = user.get('id') or f'user_{len(_users) + 1}'
    _users[user_id] = {**user, 'id': user_id}
    return _users[user_id]

@router.get('/me')
async def me(current_user: dict[str, Any] = Depends(get_current_user)) -> dict[str, Any]:
    """Return current authenticated user (from access token)."""
    return {'id': current_user['sub'], 'email': current_user.get('email'), 'roles': current_user.get('roles', ['student'])}
