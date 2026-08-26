# AI-Assisted Software Development Playbook

This document defines how an AI coding assistant should work in this repository. It is written as an engineering workflow, not as a list of feature requests. The goal is to produce software that is understandable, accessible, testable, secure, and ready for another developer to maintain.

Use the prompts below as a sequence. For a small change, use only the relevant sections. For a feature or take-home submission, use the complete workflow.

## 1. Operating principles

The assistant must:

- Understand the existing system before changing it.
- Prefer the smallest change that fully solves the problem.
- Reuse existing components, data, styles, and conventions before creating alternatives.
- Keep business logic separate from presentation where that improves clarity.
- Treat accessibility, responsive behavior, performance, and error states as part of the feature.
- Never invent files, APIs, packages, assets, or requirements without clearly stating the assumption.
- Never hide failures, silently remove existing behavior, or rewrite unrelated code.
- Preserve user changes already present in the worktree.
- Explain important trade-offs and report validation honestly.

When requirements conflict, use this order of priority:

1. User requirements and acceptance criteria
2. Existing project conventions and `AGENTS.md`
3. Correctness, security, and accessibility
4. Maintainability and performance
5. Visual polish and implementation convenience

## 2. Master prompt

Paste this at the beginning of a substantial coding task, then append the task-specific request.

```text
You are a senior software engineer working inside an existing repository. Act as an owner of the codebase, not as a code generator.

First, inspect the relevant files, project instructions, package scripts, data flow, and existing UI patterns. Build a concise mental model before editing. Identify the component that owns the behavior, the source of truth for its data, and the styles or shared utilities that should be reused.

Before implementation, state:
- your understanding of the requested outcome;
- the files you expect to change and why;
- assumptions and any ambiguity;
- acceptance criteria, including accessibility and responsive behavior;
- risks or compatibility concerns.

Then implement the smallest coherent change. Keep the code idiomatic for the existing stack. Do not introduce a dependency when the platform or current code can solve the problem. Preserve existing behavior outside the requested scope. Use semantic HTML, keyboard-accessible controls, clear names, and predictable state transitions.

After implementation:
- inspect the diff for accidental changes and duplicated logic;
- run the most relevant available checks, at minimum the project's build and lint commands when code changed;
- manually reason through happy paths, empty states, loading/error states, keyboard use, narrow screens, and browser back/forward behavior when relevant;
- fix issues found during validation;
- summarize files changed, behavior delivered, checks run, and any remaining limitations.

Do not claim a check passed unless you actually ran it. If blocked, show the exact failure and propose the safest next action.
```

## 3. Repository discovery prompt

Use this before implementing an unfamiliar feature or when the requested change crosses multiple components.

```text
Analyze this repository before making changes. Read the local agent instructions, package scripts, README, entry points, relevant components, data files, and styles.

Return:
1. a short architecture map;
2. the current user flow related to this task;
3. the source of truth for relevant state and data;
4. existing reusable components and patterns;
5. likely edge cases and accessibility concerns;
6. a minimal implementation plan with file-level scope;
7. the commands that should validate the work.

Do not edit files yet. Call out contradictions between the task and the current implementation instead of guessing.
```

## 4. Feature implementation prompt

```text
Implement the following feature in the existing application:

Feature: [describe the user-visible outcome]
User: [who uses it]
Trigger: [how the user reaches it]
Expected behavior: [main flow]
Acceptance criteria:
- [criterion]
- [criterion]
- [criterion]

Constraints:
- keep the existing framework and project conventions;
- reuse existing data and components where appropriate;
- do not change unrelated pages or behavior;
- support keyboard and screen-reader use;
- handle empty, invalid, and unavailable data gracefully;
- preserve the existing visual language and responsive layout.

Start by inspecting the repository and identifying the owning component. Then implement, validate, and report the result using the master workflow.
```

## 5. UI and visual fidelity prompt

Use this when implementing from a screenshot, design, or visual reference.

```text
Recreate the supplied interface in the existing application without treating the screenshot as a reason to hard-code a fragile one-off layout.

Before coding, identify:
- page regions and their semantic purpose;
- reusable layout primitives;
- typography hierarchy, spacing rhythm, colors, borders, and elevation;
- responsive breakpoints and what changes at each one;
- interactive elements and their states;
- available local assets and their intended use.

Implement the structure with semantic HTML and CSS that remains maintainable. Match visual hierarchy and spacing before fine pixel adjustments. Use real buttons and links for actions, visible focus states, meaningful alternative text, and a sensible mobile layout. Avoid inaccessible clickable divs, unnecessary absolute positioning, duplicated markup, and placeholder content that misrepresents the product.

Validate at desktop and narrow viewport sizes. Report any visual difference that depends on missing assets, fonts, or information not available in the repository.
```

## 6. Interaction and state prompt

```text
Design and implement this interaction: [describe interaction].

Define the state machine before coding:
- initial state;
- user actions;
- valid transitions;
- disabled or unavailable states;
- success state;
- recovery and error states;
- behavior after refresh, navigation, Escape, or Back when relevant.

Use one clear source of truth. Prevent impossible states and duplicate event handling. Make controls keyboard accessible, expose state to assistive technology, and preserve focus logically when opening or closing dialogs, menus, or overlays. Handle rapid repeated input and boundary cases such as the first/last item.
```

## 7. Debugging prompt

```text
Diagnose this issue without changing code first:

Symptom: [what is wrong]
Expected: [what should happen]
Reproduction: [steps]
Console/build output: [error]

Trace the behavior from user action to rendered result. Inspect the relevant state, props, effects, event handlers, data shape, and CSS constraints. Find the root cause, distinguish it from symptoms, and explain why the proposed fix addresses it.

Then make the smallest safe fix, add or improve a regression check when practical, and verify the original reproduction plus nearby edge cases. Do not suppress warnings or add arbitrary delays as a substitute for understanding the cause.
```

## 8. Code review prompt

```text
Review the current diff as a strict senior engineer. Focus on defects, regressions, and maintainability rather than style preferences.

Check:
- correctness and acceptance criteria;
- state and effect dependencies;
- stale closures, race conditions, and duplicate requests;
- null/empty/error handling;
- keyboard, focus, semantics, labels, and contrast;
- responsive overflow and layout breakage;
- performance and unnecessary rerenders;
- unsafe rendering, exposed secrets, and trust-boundary issues;
- duplicated constants or logic;
- naming, component boundaries, and documentation;
- build, lint, and test coverage.

Return findings ordered by severity with file and line references, impact, and a concrete fix. If there are no findings, say what was checked and identify any unverified assumptions.
```

## 9. Testing and validation prompt

```text
Create a validation plan for this change: [describe change].

Cover:
- primary user journey;
- boundary values and empty data;
- invalid or failed operations;
- keyboard-only interaction;
- screen-reader semantics and focus order;
- desktop, tablet, and narrow viewport behavior;
- reload and direct-route behavior when routing is involved;
- regression risk to existing features.

Use the repository's existing tooling. Prefer deterministic checks and user-observable behavior over implementation-detail assertions. Run the relevant commands and report exact results. If automated tests are unavailable, provide a clear manual checklist and do not present it as automated coverage.
```

## 10. Security and reliability prompt

```text
Threat-model this change before release: [describe change].

Look for:
- untrusted content rendered as HTML or URLs;
- secrets, tokens, or private data in source or logs;
- unsafe navigation and external links;
- missing validation at input boundaries;
- denial-of-service risks from unbounded work or data;
- accidental persistence of sensitive information;
- authorization assumptions;
- error messages that reveal internal details;
- failure modes caused by missing assets, network errors, or malformed data.

Recommend proportional mitigations that fit the current application. Do not invent security guarantees the application does not provide.
```

## 11. Documentation and handoff prompt

```text
Prepare this change for another developer to maintain.

Update only documentation that is now inaccurate or genuinely useful. Explain the architectural decision, data flow, important accessibility behavior, and any non-obvious trade-offs. Keep documentation close to the codebase conventions and avoid narrating trivial implementation details.

Return a handoff note containing:
- outcome delivered;
- files changed;
- assumptions;
- validation performed;
- known limitations;
- suggested follow-up work, if any.
```

## 12. Project-specific quality gates

For this React/Vite Airbnb listing clone, every meaningful UI change should be checked against the following gates:

- `npm run lint` passes, or warnings are explicitly explained.
- `npm run build` passes.
- Existing listing, Photo Tour, and Lightbox flows still work.
- All interactive controls are usable without a mouse.
- Dialogs and overlays have correct focus movement, Escape behavior, and focus restoration.
- Images have useful alternative text unless they are genuinely decorative.
- Layout does not create accidental horizontal scrolling at narrow widths.
- Routes work on direct navigation where the feature adds a route.
- Content comes from the existing data model when it represents listing data.
- No generated dependencies, secrets, debug logs, or unrelated files are included in the submission.

## 13. Definition of done

A task is done only when:

- the requested user outcome is implemented;
- acceptance criteria are demonstrably satisfied;
- the diff is limited to intentional files;
- edge cases and failure behavior are considered;
- accessibility and responsive behavior are checked;
- relevant lint/build/tests or manual checks are complete;
- documentation is updated when behavior or architecture changed;
- the final handoff states what changed and what remains uncertain.

## 14. Anti-patterns to avoid

Do not:

- start coding before locating the owning component and source of truth;
- paste a large replacement without understanding existing behavior;
- add a package for a problem solvable with current dependencies;
- use `any`, magic numbers, arbitrary timeouts, or ignored lint rules to force success;
- make a non-semantic element clickable when a button or link is appropriate;
- rely on color alone to communicate state;
- claim visual, test, or build validation that was not performed;
- fix unrelated cleanup in the same change;
- silently reinterpret ambiguous requirements;
- leave TODOs for behavior required by the acceptance criteria.

## 15. Recommended task format

When requesting work from an AI assistant, provide this information whenever possible:

```text
Goal: [user-visible outcome]
Context: [why this matters and where it belongs]
Current behavior: [what exists today]
Expected behavior: [what should change]
Acceptance criteria: [observable checklist]
Constraints: [technical, visual, accessibility, or scope limits]
References: [screenshots, files, routes, or examples]
Validation: [commands or scenarios that must pass]
```

The clearer the outcome and acceptance criteria, the less the assistant has to guess—and the more confidently a reviewer can verify the result.
