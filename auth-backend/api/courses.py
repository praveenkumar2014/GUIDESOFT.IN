from fastapi import APIRouter
from typing import Any

router = APIRouter()

_courses: dict[str, dict[str, Any]] = {}

@router.get('/')
async def list_courses() -> list[dict[str, Any]]:
    """List courses (placeholder)."""
    return list(_courses.values())

@router.post('/')
async def create_course(course: dict[str, Any]) -> dict[str, Any]:
    course_id = course.get('id') or f'course_{len(_courses) + 1}'
    _courses[course_id] = {**course, 'id': course_id}
    return _courses[course_id]
