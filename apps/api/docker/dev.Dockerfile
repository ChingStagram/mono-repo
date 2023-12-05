FROM node:18-alpine as base

FROM base AS builder

WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm add turbo

COPY . .

RUN pnpm turbo prune api --docker

FROM base AS installer

WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN apk update
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY .gitignore .gitignore

COPY --from=builder /app/out/full .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install


RUN pnpm turbo run build --filter=api...

FROM base AS runner

WORKDIR /app
# package
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

ENV TZ=Asia/Seoul
ENV PORT=3000
EXPOSE 3000

COPY --from=installer --chown=nestjs:nodejs /app .

CMD node /app/apps/api/dist/main.js
