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
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

COPY --from=builder /app/out/full/ .
RUN pnpm install
RUN pnpm turbo run build --filter=api...

# FROM base AS runner

# # package
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nestjs
# USER nestjs

# COPY --from=installer /app/apps/api/next.config.js .
# COPY --from=installer /app/apps/api/package.json .

# ENV TZ=Asia/Seoul
# ENV PORT=3000
# EXPOSE 3000

# COPY --from=installer --chown=nestjs:nodejs /app/apps/api/dist ./

# CMD node apps/api/dist/main.js
