from fastapi import APIRouter, HTTPException
from typing import Any

router = APIRouter()

_COURSE_SEED: list[dict[str, Any]] = [
    {
        'id': 'ai--generative-ai-generative-ai',
        'title': 'Generative AI',
        'categoryId': 'ai--generative-ai',
        'category': 'AI & Generative AI',
        'description': 'Build practical AI workflows using prompts, AI evaluation, and automation patterns for real business tasks.',
        'level': 'Beginner',
        'price': 2999,
        'currency': 'INR',
        'duration': '4 weeks',
        'tags': ['LLMs', 'Prompting', 'Automation'],
        'shareKeywords': ['GenerativeAI', 'PromptEngineering', 'GuideSoft'],
    },
    {
        'id': 'ai--generative-ai-ai-agent-development',
        'title': 'AI Agent Development',
        'categoryId': 'ai--generative-ai',
        'category': 'AI & Generative AI',
        'description': 'Design AI agents, multi-step reasoning flows, and tool-calling patterns that work in real product teams.',
        'level': 'Intermediate',
        'price': 3499,
        'currency': 'INR',
        'duration': '5 weeks',
        'tags': ['Agents', 'LLM', 'Tool Use'],
        'shareKeywords': ['AIagents', 'LLM', 'Automation'],
    },
    {
        'id': 'ux-ui--product-design',
        'title': 'UX/UI & Product Design',
        'categoryId': 'ux-ui--product-design',
        'category': 'UX/UI & Product Design',
        'description': 'Learn to turn unclear user problems into clear product experiences with research, flows, and interfaces.',
        'level': 'Beginner',
        'price': 2499,
        'currency': 'INR',
        'duration': '4 weeks',
        'tags': ['Design Systems', 'Research', 'Prototyping'],
        'shareKeywords': ['UXDesign', 'ProductDesign', 'UI'],
    },
    {
        'id': 'full-stack-development',
        'title': 'Full-Stack Development',
        'categoryId': 'full-stack-development',
        'category': 'Full-Stack Development',
        'description': 'Build complete digital products with frontend, backend, database work, and deployment decisions that scale.',
        'level': 'Intermediate',
        'price': 3999,
        'currency': 'INR',
        'duration': '6 weeks',
        'tags': ['React', 'Node', 'Deployment'],
        'shareKeywords': ['FullStack', 'WebDevelopment', 'GuideSoft'],
    },
    {
        'id': 'python--backend-python-for-data',
        'title': 'Python for Data & Automation',
        'categoryId': 'python--backend',
        'category': 'Python & Backend',
        'description': 'Use Python to clean data, automate work, and build the backend logic behind useful tools.',
        'level': 'Beginner',
        'price': 2999,
        'currency': 'INR',
        'duration': '4 weeks',
        'tags': ['Python', 'Automation', 'Backend'],
        'shareKeywords': ['Python', 'Automation', 'Data'],
    },
    {
        'id': 'cloud-computing-cloud-foundations',
        'title': 'Cloud Foundations',
        'categoryId': 'cloud-computing',
        'category': 'Cloud Computing',
        'description': 'Learn how cloud services support reliability, scale, deployment, and modern software delivery.',
        'level': 'Beginner',
        'price': 3299,
        'currency': 'INR',
        'duration': '5 weeks',
        'tags': ['Cloud', 'Azure', 'Infrastructure'],
        'shareKeywords': ['Cloud', 'Azure', 'DevOps'],
    },
    {
        'id': 'careers--industry-programs',
        'title': 'Career & Industry Programs',
        'categoryId': 'career--industry-programs',
        'category': 'Career & Industry Programs',
        'description': 'Prepare for real-world roles with practical skills, projects, and professional direction that fit the market.',
        'level': 'Beginner',
        'price': 4999,
        'currency': 'INR',
        'duration': '6 weeks',
        'tags': ['Career', 'Portfolio', 'Mentoring'],
        'shareKeywords': ['CareerGrowth', 'GuideSoft', 'ProfessionalSkills'],
    },
    {
        'id': 'mobile-app-development',
        'title': 'Mobile App Development',
        'categoryId': 'mobile-app-development',
        'category': 'Mobile App Development',
        'description': 'Build cleaner mobile experiences with a practical approach to product thinking, APIs, and user experience.',
        'level': 'Intermediate',
        'price': 3499,
        'currency': 'INR',
        'duration': '5 weeks',
        'tags': ['React Native', 'Mobile', 'UX'],
        'shareKeywords': ['MobileApps', 'ReactNative', 'AppDevelopment'],
    },
]

_courses: dict[str, dict[str, Any]] = {course['id']: course for course in _COURSE_SEED}


@router.get('/')
async def list_courses() -> list[dict[str, Any]]:
    """List the currently available catalog items."""
    return [dict(course) for course in _courses.values()]


@router.get('/featured')
async def list_featured_courses() -> list[dict[str, Any]]:
    return [dict(course) for course in _courses.values()][:5]


@router.get('/{course_id}')
async def get_course(course_id: str) -> dict[str, Any]:
    course = _courses.get(course_id)
    if course is None:
        raise HTTPException(status_code=404, detail=f'Course not found: {course_id}')
    return dict(course)


@router.post('/')
async def create_course(course: dict[str, Any]) -> dict[str, Any]:
    course_id = course.get('id') or f'course_{len(_courses) + 1}'
    _courses[course_id] = {**course, 'id': course_id}
    return dict(_courses[course_id])
