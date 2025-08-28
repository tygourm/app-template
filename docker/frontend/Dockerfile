ARG BASE_IMAGE=node:22-bookworm-slim


### Install stage ###
FROM $BASE_IMAGE AS installer
RUN corepack enable && \
    corepack prepare pnpm@10.14.0 --activate
WORKDIR /app

COPY frontend/package.json package.json
COPY frontend/pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm i --frozen-lockfile


## Build stage ###
FROM $BASE_IMAGE AS builder
RUN corepack enable && \
    corepack prepare pnpm@10.14.0 --activate
WORKDIR /app

COPY --from=installer /app/node_modules node_modules
COPY frontend .

RUN pnpm build


### Run stage ###
FROM nginx:1.29-bookworm
WORKDIR /usr/share/nginx/html

COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist .

RUN chown -R nginx:nginx /usr/share/nginx/html
