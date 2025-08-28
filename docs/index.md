# app-template

Yet another template.

!!! tip "Design principles"

    - **DRY** Don't Repeat Yourself
    - **KISS** Keep It Simple, Stupid
    - **YAGNI** You Ain't Gonna Need It
    - **SOLID** Single responsibility, Open/closed, Liskov substitution, Interface
    segregation, Dependency inversion

## Setup

!!! tip "VS Code extensions"

    Start by installing the mandatory (and eventually optional) VS Code extensions.

This project uses [uv](https://docs.astral.sh/uv) as a Python package manager,
and [pnpm](https://pnpm.io) as a Node package manager.

Install Python dependencies.

```bash
uv sync --all-groups --all-packages --frozen
```

Install Node dependencies.

```bash
pnpm i --frozen-lockfile
```

## Development

Run the backend.

```bash
# cd backend
api # Run the API
cli # Run the CLI
```

Run the frontend.

```bash
# cd frontend
pnpm start
```

## Deployment

### Docker

Build the backend Docker image.

```bash
docker build -t app-backend:1.0.0 -f docker/backend/Dockerfile .
```

Build the frontend Docker image.

```bash
docker build -t app-frontend:1.0.0 -f docker/frontend/Dockerfile .
```

Deploy all the services.

```bash
# cd docker
docker compose up
```

### Distributions

Build the backend.

```bash
uv build backend -o backend/dist
```

Build the frontend.

```bash
pnpm build
```

## Miscellaneous

### Code style

This project uses [Ruff](https://docs.astral.sh/ruff) as a Python linter and
code formatter, and [Prettier](https://prettier.io) as a generic formatter.

Lint the code.

```bash
pnpm lint
```

Format the code.

```bash
pnpm format
```

### Documentation

This project uses
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material) as a
documentation framework.

Run the docs.

```bash
mkdocs serve
```

Build and embed the docs.

```bash
mkdocs build -d backend/static/site
```

!!! warning "Static documentation"

    Some features might not work properly with the static documentation. They will
    work properly with the embedded documentation.
