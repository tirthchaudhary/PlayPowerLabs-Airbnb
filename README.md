# Airbnb Listing Clone

This project recreates a desktop Airbnb listing experience with a listing page, Photo Tour, accessible Lightbox, reviews, map, host details, and a nearby stays carousel.

## Run locally

```bash
npm install
npm run dev
```

The Photo Tour is available from the listing's `Show all photos` button and at `/photo-tour`.

## Validation

```bash
npm run build
npm run lint
```

## Submission artifacts

- [Architecture diagram](architecture-diagram.svg)
- [Architecture notes](ARCHITECTURE.md)
- [AI prompt sequence](AI_PROMPTS.md)
- [Agent configuration](AGENTS.md)

## Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
