FROM node:18-alpine as base

FROM base AS builder

WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install
RUN pnpm turbo build --filter=api

ENV TZ=Asia/Seoul
ENV PORT=3000
EXPOSE 3000

CMD pnpm turbo run start:dev --filter=api
