from fastapi import APIRouter
from typing import Any

router = APIRouter()

_pages: dict[str, dict[str, Any]] = {}

@router.get('/')
async def list_pages() -> list[dict[str, Any]]:
    return list(_pages.values())

@router.post('/')
async def create_page(page: dict[str, Any]) -> dict[str, Any]:
    page_id = page.get('id') or f"page_{len(_pages)+1}"
    _pages[page_id] = {**page, 'id': page_id}
    return _pages[page_id]

@router.get('/{page_id}')
async def get_page(page_id: str) -> dict[str, Any]:
    return _pages.get(page_id, {})
