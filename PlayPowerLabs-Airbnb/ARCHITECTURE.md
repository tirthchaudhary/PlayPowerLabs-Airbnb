# Marketplace Architecture

The companion `architecture-diagram.svg` shows a production-scale vacation-rental marketplace design.

## Request flow

1. Clients request the application through a CDN and WAF.
2. The React/Next.js frontend serves the listing experience and uses SSR for fast first paint.
3. The API gateway authenticates requests, applies rate limits, and routes traffic to domain services.
4. Listing, booking, and review services use PostgreSQL for transactional data.
5. Search queries use OpenSearch for geo, availability, and filtered listing discovery.
6. Object storage holds original photos; an image CDN serves resized responsive assets.
7. Redis, queues, metrics, logs, and traces support caching, async work, and operations.

## Scaling strategy

Frontend assets are immutable and cached at the edge. Stateless services scale horizontally behind the gateway. PostgreSQL uses read replicas for listing reads and automated backups for recovery. Search is independently scaled and rebuilt from database events. Booking writes remain transactional and publish events to queues for notifications and analytics. Secrets stay in a managed secret store, and monitoring tracks latency, errors, conversion, and booking failures.
