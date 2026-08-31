from fastapi import APIRouter, HTTPException
from typing import Any

router = APIRouter()

_pages: dict[str, dict[str, Any]] = {
    'home': {
        'id': 'home',
        'slug': 'home',
        'title': 'GuideSoft Learning',
        'heroTitle': 'Learn skills that help you move.',
        'heroSubtitle': 'Build practical technology skills through focused courses, project checkpoints, and one workspace that keeps your next step visible.',
        'featuredCourseIds': ['ai--generative-ai-generative-ai', 'ux-ui--product-design', 'full-stack-development'],
    },
    'courses': {
        'id': 'courses',
        'slug': 'courses',
        'title': 'Catalog',
        'heroTitle': 'Find the skill you need next.',
        'heroSubtitle': 'Search by outcome, technology, or direction and open a focused learning path that is designed to help you continue.',
    },
    'learn': {
        'id': 'learn',
        'slug': 'learn',
        'title': 'Learning room',
        'heroTitle': 'Turn a course into momentum.',
        'heroSubtitle': 'Follow a guided lesson flow, track progress, and keep the work visible from the first lesson to the final project checkpoint.',
    },
    'studio': {
        'id': 'studio',
        'slug': 'studio',
        'title': 'AI Course Studio',
        'heroTitle': 'Turn transcripts into course structure.',
        'heroSubtitle': 'Use a transcript, workshop, or notes to generate a ready-made content brief for your next learning path.',
    },
    'contact': {
        'id': 'contact',
        'slug': 'contact',
        'title': 'Start a conversation',
        'heroTitle': 'Good questions are good momentum.',
        'heroSubtitle': 'Tell us what you want to learn, build, or change next so we can help you find the right place to begin.',
    },
}


@router.get('/')
async def list_pages() -> list[dict[str, Any]]:
    return [dict(page) for page in _pages.values()]


@router.post('/')
async def create_page(page: dict[str, Any]) -> dict[str, Any]:
    page_id = page.get('id') or f"page_{len(_pages) + 1}"
    _pages[page_id] = {**page, 'id': page_id}
    return dict(_pages[page_id])


@router.get('/{page_id}')
async def get_page(page_id: str) -> dict[str, Any]:
    page = _pages.get(page_id)
    if page is None:
        raise HTTPException(status_code=404, detail=f'Page not found: {page_id}')
    return dict(page)
