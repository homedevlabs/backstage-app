# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN corepack enable && \
    yarn install --immutable

# Copy source code
COPY . .

# Build the application
RUN yarn tsc && \
    yarn build:backend --config ../../app-config.yaml

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache \
    python3 \
    g++ \
    make \
    && rm -rf /var/cache/apk/*

# Copy built backend
COPY --from=build /app/packages/backend/dist /app/packages/backend/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/yarn.lock /app/yarn.lock

# Copy app config (will be overridden by ConfigMap in K8s)
COPY --from=build /app/app-config.yaml /app/app-config.yaml
COPY --from=build /app/app-config.production.yaml /app/app-config.production.yaml

# Create non-root user
RUN addgroup -g 1000 backstage && \
    adduser -D -u 1000 -G backstage backstage && \
    chown -R backstage:backstage /app

USER backstage

EXPOSE 7007

CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
