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


# Copy and extract built backend
COPY --from=build /app/packages/backend/dist/skeleton.tar.gz /app/packages/backend/dist/bundle.tar.gz ./
RUN tar xzf skeleton.tar.gz && tar xzf bundle.tar.gz && rm skeleton.tar.gz bundle.tar.gz

# Install production dependencies
RUN corepack enable && \
    yarn install --immutable --production --production-only

# Copy app config
COPY --from=build /app/app-config.yaml /app/app-config.yaml


# Create non-root user
RUN groupadd -g 1001 backstage && \
    useradd -r -u 1001 -g backstage backstage && \
    chown -R backstage:backstage /app



USER backstage

EXPOSE 7007

CMD ["node", "packages/backend", "--config", "app-config.yaml"]

