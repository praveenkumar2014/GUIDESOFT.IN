# Auth Application

Full-stack authentication application with a React/Vite frontend and a FastAPI backend.

## Projects

- `auth-frontend`: GuideSoft React frontend built with TypeScript and Vite.
- `auth-backend`: FastAPI backend for Google token verification and logout support.

## Frontend

```sh
cd auth-frontend
npm install
npm run dev
```

Build and lint:

```sh
npm run build
npm run lint
```

## Backend

```sh
cd auth-backend
uv sync
uv run fastapi dev server.py
```

Create local `.env` files from the included examples and keep real secrets out of Git.
