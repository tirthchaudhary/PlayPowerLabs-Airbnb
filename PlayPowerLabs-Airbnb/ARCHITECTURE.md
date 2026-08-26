# Architecture — Vacation Rental Marketplace (Frontend)

This document explains how the frontend of this project is structured, how it is designed to scale, and how it would be extended into a full production system.

See `architecture-diagram.png` / `architecture-diagram.pdf` for the visual version of everything described here.

---

## 1. Scope of this submission

The assignment scope is **frontend only** — no backend, no database. This submission is a React + Vite single-page application, deployed on Vercel, using static mock data (`src/data/listingData.js`) in place of a live API response.

**Stack:**
- **React 18 + Vite** — component-based UI, fast build and dev experience
- **Vercel** — hosting, global CDN, and CI/CD (automatic deploy on every push)
- **Component-scoped CSS** — no framework overhead
- **oxlint** — fast linting to enforce consistent code quality

**Folder structure:**

```
src/
├── components/     → one file per UI unit (Header, Map, Review, etc.)
├── data/           → mock listing data, standing in for an API response
├── styles/         → component-specific stylesheets
├── assets/         → images and icons
└── App.jsx         → top-level layout, composes components together
```

Each component has a single responsibility — `Lightbox.jsx` only handles the image lightbox, `Host.jsx` only renders host information, and so on. This keeps the codebase easy to test, extend, and hand off, and mirrors the component boundaries a larger team would use at scale.

---

## 2. Frontend scaling strategy

The frontend is built to scale even in the absence of a backend:

- **Static build served from a CDN.** `vite build` produces static HTML/CSS/JS, served from Vercel's edge network. Users in different regions are served from the nearest edge location, so no single origin server becomes a bottleneck.
- **Code splitting.** Routes and heavy components can be lazy-loaded with `React.lazy()`, so each user only downloads the code required for the page they're viewing.
- **Image optimization.** Listing photos are the heaviest assets on a page like this. In production, images would be served through a CDN/image pipeline (e.g. Vercel Image Optimization or Cloudinary) so each device receives an appropriately sized image rather than the original file.
- **Caching.** Static assets are cached with long lifetimes; only the small HTML shell needs frequent re-fetching, so repeat visits are nearly free from a network standpoint.

This means traffic growth is absorbed primarily by the CDN layer — which scales automatically — rather than by adding application servers.

---

## 3. Path to a full production system

The system would be extended incrementally, with each stage building on real functionality delivered by the one before it:

### Step 1 — API and database
Replace `listingData.js` with a backend service (Node.js/Express) backed by PostgreSQL. This comes first because every subsequent feature — search, bookings, authentication — depends on having real, persisted data.

### Step 2 — Authentication
Email/password or provider-based login (e.g. Auth0, Firebase Auth), enabling saved favorites, host listing management, and guest bookings.

### Step 3 — Booking and payments
A booking flow that checks availability, prevents double-booking, and processes payment (Stripe is a common choice). This stage requires the most rigor, since it touches real transactions and reservations.

### Step 4 — Search
Filtering by location, dates, and price directly against the primary database becomes slow as listing volume grows. Search would move to a dedicated index (Elasticsearch or Algolia) optimized for fast filtering, kept in sync with the database via an event pipeline.

### Step 5 — Storage scaling
As users and listings grow:
- **Read replicas** of the database, since browsing traffic (reads) far outweighs booking traffic (writes).
- **Redis** as a caching layer in front of the database for frequently requested data, such as popular listings.
- **Object storage** (Amazon S3) for images, served through the CDN rather than the database.

### Step 6 — Deployment scaling
- Frontend remains on Vercel, which already scales automatically.
- Backend services run in containers (Docker), scaled horizontally by adding instances under load rather than resizing a single server.
- Monitoring and alerting (error tracking, uptime checks) to surface issues before they affect users.

---

## 4. Design rationale

Each step depends on the state established by the previous one — search only becomes necessary once real listing data exists; payments only make sense once authentication is in place. This sequencing keeps the system correct and testable at every stage, rather than introducing infrastructure ahead of the functionality that would justify it.

---

## 5. Scope discipline

This plan deliberately favors a simple, correct system that can be scaled deliberately, over introducing complexity upfront:
- No microservices until the backend's actual load patterns justify splitting it.
- No multi-region database until real traffic data shows the need.
- No custom caching layer beyond Redis and CDN caching, which covers the majority of use cases at this stage.

These decisions are revisited once production usage data is available to inform them — scaling ahead of real load tends to add cost and complexity without a corresponding benefit.
