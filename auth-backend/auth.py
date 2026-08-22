from __future__ import annotations

import asyncio
import os
import re
import secrets
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import httpx
from dotenv import load_dotenv
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt


load_dotenv(Path(__file__).with_name('.env'))

GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
SECRET_KEY = os.getenv('SECRET_KEY')

if not GOOGLE_CLIENT_ID:
    raise RuntimeError('GOOGLE_CLIENT_ID is not configured.')
if not SECRET_KEY:
    raise RuntimeError('SECRET_KEY is not configured.')

ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES', '15'))
REFRESH_TOKEN_EXPIRE_DAYS = int(os.getenv('REFRESH_TOKEN_EXPIRE_DAYS', '30'))
REFRESH_COOKIE_NAME = 'refresh_token'
GOOGLE_CERTS_URL = 'https://www.googleapis.com/oauth2/v3/certs'
GOOGLE_ISSUERS = {'accounts.google.com', 'https://accounts.google.com'}
COOKIE_SECURE = os.getenv('COOKIE_SECURE', 'true').lower() not in {
    '0',
    'false',
    'no',
}


class GoogleTokenVerificationError(ValueError):
    """Raised when a Google ID token is invalid."""


class GoogleKeysUnavailable(RuntimeError):
    """Raised when Google's public signing keys cannot be retrieved."""


_google_keys: dict[str, Any] = {}
_google_keys_expires_at = 0.0
_google_keys_lock = asyncio.Lock()


def _cache_max_age(cache_control: str | None) -> int:
    if cache_control:
        match = re.search(r'max-age=(\d+)', cache_control)
        if match:
            return int(match.group(1))
    return 3600


async def _load_google_keys(force_refresh: bool = False) -> dict[str, Any]:
    global _google_keys, _google_keys_expires_at

    if not force_refresh and _google_keys and time.monotonic() < _google_keys_expires_at:
        return _google_keys

    async with _google_keys_lock:
        if not force_refresh and _google_keys and time.monotonic() < _google_keys_expires_at:
            return _google_keys

        try:
            async with httpx.AsyncClient(timeout=10.0) as client:
                google_response = await client.get(GOOGLE_CERTS_URL)
                google_response.raise_for_status()
                key_set = google_response.json()
        except (httpx.HTTPError, ValueError) as exc:
            raise GoogleKeysUnavailable(
                'Google public keys are temporarily unavailable.'
            ) from exc

        try:
            keys = {
                jwk['kid']: jwk
                for jwk in key_set['keys']
                if jwk.get('kid') and jwk.get('kty') == 'RSA'
            }
        except (KeyError, TypeError, ValueError) as exc:
            raise GoogleKeysUnavailable(
                'Google public keys returned an invalid response.'
            ) from exc

        if not keys:
            raise GoogleKeysUnavailable('Google returned no public signing keys.')

        _google_keys = keys
        _google_keys_expires_at = time.monotonic() + _cache_max_age(
            google_response.headers.get('cache-control'),
        )
        return _google_keys


async def _google_public_key(key_id: str) -> Any:
    keys = await _load_google_keys()
    key = keys.get(key_id)
    if key is not None:
        return key

    # A missing key ID usually means Google rotated its signing keys.
    keys = await _load_google_keys(force_refresh=True)
    return keys.get(key_id)


async def verify_google_id_token(token: str) -> dict[str, Any]:
    try:
        header = jwt.get_unverified_header(token)
    except JWTError as exc:
        raise GoogleTokenVerificationError('The Google token is malformed.') from exc

    if header.get('alg') != 'RS256':
        raise GoogleTokenVerificationError('The Google token uses an unsupported algorithm.')

    key_id = header.get('kid')
    if not key_id:
        raise GoogleTokenVerificationError('The Google token has no signing key ID.')

    public_key = await _google_public_key(key_id)
    if public_key is None:
        raise GoogleTokenVerificationError('The Google signing key was not found.')

    try:
        claims = jwt.decode(
            token,
            public_key,
            algorithms=['RS256'],
            audience=GOOGLE_CLIENT_ID,
            options={'verify_iss': False},
        )
    except JWTError as exc:
        raise GoogleTokenVerificationError('The Google token is invalid or expired.') from exc

    required_claims = ('exp', 'iat', 'sub', 'aud', 'iss')
    if any(claim not in claims for claim in required_claims):
        raise GoogleTokenVerificationError('The Google token is missing required claims.')
    if claims.get('iss') not in GOOGLE_ISSUERS:
        raise GoogleTokenVerificationError('The Google token has an invalid issuer.')
    if claims.get('email_verified') is not True:
        raise GoogleTokenVerificationError('The Google account email is not verified.')

    return claims


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


def create_access_token(subject: str, email: str | None = None) -> str:
    now = _utc_now()
    claims: dict[str, Any] = {
        'sub': subject,
        'type': 'access',
        'iat': now,
        'exp': now + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    }
    if email:
        claims['email'] = email
    return jwt.encode(claims, SECRET_KEY, algorithm='HS256')


def create_refresh_token(subject: str, email: str | None = None) -> str:
    now = _utc_now()
    claims: dict[str, Any] = {
        'sub': subject,
        'type': 'refresh',
        'jti': secrets.token_urlsafe(16),
        'iat': now,
        'exp': now + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS),
    }
    if email:
        claims['email'] = email
    return jwt.encode(claims, SECRET_KEY, algorithm='HS256')


def _decode_token(token: str, expected_type: str) -> dict[str, Any]:
    try:
        claims = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=['HS256'],
            options={'require': ['exp', 'iat', 'sub', 'type']},
        )
    except JWTError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Invalid or expired token.',
            headers={'WWW-Authenticate': 'Bearer'},
        ) from exc

    if claims.get('type') != expected_type:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Invalid token type.',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    return claims


def decode_refresh_token(token: str) -> dict[str, Any]:
    return _decode_token(token, expected_type='refresh')


bearer_scheme = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> dict[str, Any]:
    """FastAPI dependency for routes protected by an access token."""

    if credentials is None or credentials.scheme.lower() != 'bearer':
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Bearer access token required.',
            headers={'WWW-Authenticate': 'Bearer'},
        )
    return _decode_token(credentials.credentials, expected_type='access')
