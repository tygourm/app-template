ARG BASE_IMAGE=python:3.13-slim-bookworm
ARG USER=app-template
ARG GROUP=app-template


### Install stage ###
FROM $BASE_IMAGE AS installer
RUN pip install uv
WORKDIR /app

COPY uv.lock uv.lock
COPY pyproject.toml pyproject.toml
COPY backend/pyproject.toml backend/pyproject.toml

RUN uv export -o requirements.docs.txt --only-group docs && \
    pip wheel -r requirements.docs.txt -w /wheels/docs --no-deps --no-cache-dir && \
    uv export -o requirements.backend.txt --package backend --no-emit-package backend && \
    pip wheel -r requirements.backend.txt -w /wheels/backend --no-deps --no-cache-dir


### Build stage ###
FROM $BASE_IMAGE AS builder
RUN pip install build hatchling
WORKDIR /app

COPY --from=installer /wheels/docs /wheels
RUN pip install /wheels/* --no-deps --no-cache-dir && \
    rm -rf /wheels

COPY docs docs
COPY mkdocs.yml .
COPY backend backend

RUN mkdocs build && \
    python -m build backend -w -nx -o /wheels


### Run stage ###
FROM $BASE_IMAGE
ARG USER
ARG GROUP
RUN groupadd $GROUP && \
    useradd -m -g $GROUP -u 1000 $USER
WORKDIR /home/$USER/app

COPY --from=installer /wheels/backend /wheels
RUN pip install /wheels/* --no-deps --no-cache-dir && \
    rm -rf /wheels

COPY --from=builder /wheels /wheels
RUN pip install /wheels/* --no-deps --no-cache-dir && \
    rm -rf /wheels

COPY backend/static static
COPY --from=builder /app/site static/site

RUN chown -R $USER:$GROUP /home/$USER
USER $USER
CMD ["api"]
