from __future__ import annotations

import os
from typing import Any

from fastapi import Depends, FastAPI, HTTPException, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from auth import (
    ACCESS_TOKEN_EXPIRE_MINUTES,
    COOKIE_SECURE,
    REFRESH_COOKIE_NAME,
    REFRESH_TOKEN_EXPIRE_DAYS,
    GoogleKeysUnavailable,
    GoogleTokenVerificationError,
    create_access_token,
    create_refresh_token,
    decode_refresh_token,
    get_current_user,
    verify_google_id_token,
)


class GoogleTokenRequest(BaseModel):
    token: str = Field(min_length=1)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = 'bearer'
    expires_in: int


app = FastAPI(title='Auth API')

cors_origins = [
    origin.strip()
    for origin in os.getenv('CORS_ORIGINS', 'http://localhost:5174').split(',')
    if origin.strip()
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


def _token_response(access_token: str) -> TokenResponse:
    # Keep the response format consistent for the verify and refresh endpoints.
    return TokenResponse(
        access_token=access_token,
        expires_in=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )


def _set_refresh_cookie(response: Response, refresh_token: str) -> None:
    response.set_cookie(
        key=REFRESH_COOKIE_NAME,
        value=refresh_token,
        max_age=REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60,
        httponly=True,
        secure=COOKIE_SECURE,
        samesite='lax',
        path='/',
    )


@app.get('/')
async def root() -> dict[str, str]:
    return {'message': 'Auth API is running'}


@app.post('/api/token/verify/', response_model=TokenResponse)
async def verify_google_token(
    payload: GoogleTokenRequest,
    response: Response,
) -> TokenResponse:
    try:
        google_claims = await verify_google_id_token(payload.token)
    except GoogleKeysUnavailable as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail='Google verification is temporarily unavailable.',
        ) from exc
    except GoogleTokenVerificationError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
        ) from exc

    subject = google_claims['sub']
    email = google_claims.get('email')
    access_token = create_access_token(subject, email=email)
    refresh_token = create_refresh_token(subject, email=email)
    _set_refresh_cookie(response, refresh_token)
    return _token_response(access_token)


@app.post('/api/token/refresh/', response_model=TokenResponse)
async def refresh_access_token(request: Request) -> TokenResponse:
    refresh_token = request.cookies.get(REFRESH_COOKIE_NAME)
    if not refresh_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Refresh token cookie is missing.',
        )

    refresh_claims = decode_refresh_token(refresh_token)
    access_token = create_access_token(
        refresh_claims['sub'],
        email=refresh_claims.get('email'),
    )
    return _token_response(access_token)


@app.post('/api/token/logout/')
async def logout(response: Response) -> dict[str, str]:
    response.delete_cookie(
        key=REFRESH_COOKIE_NAME,
        httponly=True,
        secure=COOKIE_SECURE,
        samesite='lax',
        path='/',
    )
    return {'message': 'Logged out successfully'}


@app.get('/api/protected/')
async def protected_route(
    current_user: dict[str, Any] = Depends(get_current_user),
) -> dict[str, Any]:
    """Example route showing how to use the access-token dependency."""

    return {
        'authenticated': True,
        'user': {
            'id': current_user['sub'],
            'email': current_user.get('email'),
        },
    }
