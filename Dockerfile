# Stage 1: Build
FROM node:22-bookworm-slim AS build

WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    g++ \
    make \
    && rm -rf /var/lib/apt/lists/*


# Copy package files
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY packages/app/package.json packages/app/package.json
COPY packages/backend/package.json packages/backend/package.json

# Install dependencies
RUN corepack enable && \
    yarn install --immutable

# Copy source code
COPY . .

# Build the application
RUN yarn tsc && \
    yarn build:backend --config ../../app-config.yaml

# Stage 2: Production
FROM node:22-bookworm-slim

WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    g++ \
    make \
    && rm -rf /var/lib/apt/lists/*


# Copy built backend
COPY --from=build /app/packages/backend/dist /app/packages/backend/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/yarn.lock /app/yarn.lock

# Copy app config (will be overridden by ConfigMap in K8s)
COPY --from=build /app/app-config.yaml /app/app-config.yaml


# Create non-root user
RUN groupadd -g 1000 backstage && \
    useradd -r -u 1000 -g backstage backstage && \
    chown -R backstage:backstage /app


USER backstage

EXPOSE 7007

CMD ["node", "packages/backend", "--config", "app-config.yaml"]

