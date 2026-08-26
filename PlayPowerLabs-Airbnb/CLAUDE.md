# CLAUDE.md

Guidance for Claude Code when working in this repository. This file is read automatically at the start of every session — keep it accurate as the project evolves.

For the full project context (fidelity requirements, sub-agent roles, scope boundaries), see **AGENTS.md** first — this file only adds Claude Code–specific workflow notes.

---

## Project in one line

A pixel-perfect React + Vite clone of a single Airbnb listing page (listing view, photo tour, lightbox), desktop only, matched against https://airbnb-clone-umber-two.vercel.app as the source of truth.

---

## Commands

```bash
npm install       # install dependencies
npm run dev        # start dev server (check this before assuming it's already running)
npm run build       # production build — must pass before a task is considered done
npm run lint        # oxlint — run before finishing any change
```

There is no test suite in this project. Verification is visual/behavioral against the reference URL, not automated tests — see "How to verify a change" below.

---

## How to verify a change

Since this is a fidelity-matching task, don't mark a UI change complete from code review alone:

1. Run `npm run dev` and view the affected component locally.
2. Compare directly against https://airbnb-clone-umber-two.vercel.app — same section, same interaction.
3. Check spacing, colors, font sizes, and any hover/transition behavior, not just static layout.
4. For the Photo Tour and Lightbox specifically, verify keyboard behavior (←/→ to navigate, Escape to close, Tab order) — these are explicitly graded.
5. Run `npm run lint` and `npm run build` before considering the change finished.

---

## Code style

- Functional components with hooks only — no class components.
- One component per file, filename matches the export (`Host.jsx` exports `Host`).
- Component CSS lives in `src/styles/`, named after the component.
- Semantic HTML for interactive elements (`<button>`, not a `div` with `onClick`); add `aria-label` on icon-only controls.
- No inline styles except one-off dynamic values.
- Don't add a dependency (state library, UI framework, CSS framework) without flagging it first — the stack is intentionally minimal.

---

## Repository etiquette

- Small, focused commits — one component or one behavior per commit, not sweeping rewrites.
- Do not copy markup, CSS, or assets directly from the reference site — reproduce behavior independently. This is graded and direct lift-and-shift can disqualify the submission.
- Keep `AGENTS.md` and `ARCHITECTURE.md` in sync if a change alters project structure or the scaling plan they describe.
- This repo is submitted as a zip, not pushed to a public GitHub repo — don't add remotes or push instructions assuming a public repo.

---

## Boundaries — confirm before doing any of these

- Adding mobile/responsive breakpoints (explicitly out of scope).
- Adding a backend, database, or real API call (see `ARCHITECTURE.md` — this is a documented future step, not part of this build).
- Adding authentication, booking, or payment flows.
- Introducing Next.js, Tailwind, Redux, or any framework not already in `package.json`.

If a request seems to require one of these, stop and ask rather than assuming scope has expanded.
