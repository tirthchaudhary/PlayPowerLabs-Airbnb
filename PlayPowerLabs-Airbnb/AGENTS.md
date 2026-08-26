# AGENTS.md

This file is the entry point for any AI coding agent (Claude Code, Cursor, Codex, etc.) working in this repository. Read this in full before making changes.

---

## 1. Project overview

This repository is a pixel-perfect clone of a single Airbnb listing page, built for a take-home technical assessment. The reference implementation is the **single source of truth**:

**Reference:** https://airbnb-clone-umber-two.vercel.app

The clone must match the reference exactly across three views:

| View | Behavior |
|---|---|
| **Listing Page** | Full property page — layout, spacing, typography, colors, icons, assets |
| **Photo Tour** | Full-screen gallery, opened via "Show all photos" or any hero image |
| **Lightbox** | Single-photo viewer with prev/next arrows and ←/→ keyboard navigation |

**Scope:** Desktop only. No mobile breakpoints required. No backend — data is served from `src/data/listingData.js`.

---

## 2. Tech stack

- **React 18 + Vite** — component-based SPA, no meta-framework
- **Plain CSS**, scoped per component in `src/styles/`
- **oxlint** — linting
- **Vercel** — hosting and CI/CD

Do not introduce a UI framework (Tailwind, MUI, etc.), a state management library, or a meta-framework (Next.js) unless explicitly asked. The existing stack is intentionally minimal — keep it that way.

---

## 3. Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # production build
npm run lint      # run oxlint
```

Run `npm run lint` before considering any change complete. Run `npm run build` before considering the task done — a change that breaks the build is not done.

---

## 4. Project structure

```
src/
├── components/     → one component per file, one responsibility per component
├── data/           → mock listing data (stand-in for an API response)
├── styles/         → component-scoped CSS files
├── assets/         → images and icons
└── App.jsx         → top-level layout, composes components
```

**Convention:** a component's CSS file lives in `src/styles/` and is named after the component (e.g. `ListingDetails.jsx` → `ListingDetails.css`). Follow this pattern for any new component.

---

## 5. Fidelity requirements (read before writing UI code)

The primary grading criterion is how closely this matches the reference — visually and behaviorally. When implementing or modifying any view:

1. **Compare against the live reference**, not against memory or assumption. Check spacing, font sizes, colors, and icon assets directly against https://airbnb-clone-umber-two.vercel.app.
2. **Animations and transitions matter as much as static layout** — hover states, scroll behavior, and open/close transitions on the Photo Tour and Lightbox must match, not just approximate.
3. **Do not copy code, markup, or assets directly from the reference site.** Reproduce the behavior and appearance independently. Direct lift-and-shift is explicitly disqualifying for this assessment.
4. **Keyboard and accessibility behavior is graded, not optional:**
   - Lightbox must support ←/→ for prev/next and Escape to close.
   - All interactive elements (buttons, gallery thumbnails, close/arrow controls) must be reachable via Tab and usable via Enter/Space.
   - Focus should move sensibly when the Photo Tour or Lightbox opens, and return to a sensible element when it closes.
   - Use semantic HTML (`button`, not `div` with an onClick) and appropriate `aria-*` attributes for controls that aren't self-explanatory (e.g. `aria-label` on icon-only buttons).

---

## 6. Coding conventions

- Functional components with hooks — no class components.
- One component, one file, named to match (`Host.jsx` exports `Host`).
- Keep components focused: if a component starts handling more than one concern (e.g. a gallery component that also manages page-level layout), split it.
- Prefer clear, descriptive prop names over abbreviations.
- No inline styles for anything beyond a one-off dynamic value — use the component's CSS file.
- Keep new dependencies to a minimum; justify any addition in the PR/commit description.

---

## 7. Suggested agent roles (for multi-agent / sub-agent workflows)

If working with a sub-agent setup (e.g. Claude Code sub-agents), the following role split keeps fidelity and code quality independently checkable:

- **UI Fidelity Agent** — compares in-progress work against the reference URL (layout, spacing, colors, assets) and flags visual deltas.
- **Interaction & Accessibility Agent** — verifies keyboard navigation, focus management, and ARIA attributes on the Photo Tour and Lightbox specifically.
- **Code Quality Agent** — runs lint/build, checks component boundaries and naming conventions against Section 6.
- **Docs Agent** — keeps this file and `ARCHITECTURE.md` in sync with any structural changes made during implementation.

A single agent can perform all four passes sequentially; the point is treating fidelity, accessibility, and code quality as separate checks rather than one pass.

---

## 8. Explicitly out of scope

- Mobile/responsive layouts
- Backend, database, or real API integration (see `ARCHITECTURE.md` for how this would be added)
- Authentication, booking, or payment flows
- Any UI framework or state library not already in `package.json`

If a task seems to require one of the above, stop and confirm scope before proceeding.
