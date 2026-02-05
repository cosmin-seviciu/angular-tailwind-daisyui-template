# AGENTS.md

Purpose

- This file guides agentic coding tools working in this repo.
- Keep changes aligned with existing Angular + Tailwind + daisyUI setup.

Repository Overview

- Framework: Angular 21 (standalone components enabled by default).
- Styling: Tailwind CSS v4 + daisyUI (PostCSS plugin).
- Package manager: pnpm (see package.json).
- TypeScript: strict mode enabled (tsconfig.json).

Commands

- Install: `pnpm install`
- Dev server: `pnpm start` (runs `ng serve`)
- Build: `pnpm build` (runs `ng build`)
- Watch build: `pnpm watch` (runs `ng build --watch --configuration development`)
- Unit tests: `pnpm test` (runs `ng test` with Angular build unit-test)
- Lint: `pnpm lint` (runs `ng lint`)
- Format: `pnpm format`
- Format check: `pnpm format:check`
- Check (lint + format): `pnpm check`
- Check + build: `pnpm check:build`

Single Test Runs

- Run a single spec file (Angular unit-test builder):
  - `ng test --include src/app/**/your-file.spec.ts`
- Run tests with a name pattern (Vitest under the hood):
  - `ng test --testNamePattern "My test name"`
- Debug a single file quickly:
  - `ng test --include src/app/app.component.spec.ts`

Linting

- ESLint is configured via `@angular-eslint` and `eslint.config.js`.
- Run `pnpm lint` for full linting.

Formatting

- Prettier config is embedded in package.json.
- Print width: 100; single quotes; HTML uses Angular parser.
- Prefer running formatting on changed files only if asked.
- Pre-commit uses lint-staged with Prettier on staged files.

File Structure Conventions

- Source root: `src/`
- App root: `src/app/`
- Features: `src/app/features/`
- Services: `src/app/services/`
- Components: `src/app/components/`
- Pipes: `src/app/pipes/`
- Directives: `src/app/directives/`
- Barrel exports: `src/app/index.ts` and per-folder `index.ts`
- Global styles: `src/styles.css`
- App shell template: `src/app/app.html`

Component and Domain Structure (Required)

- Before adding new UI, check if a reusable component already exists in `src/app/components/`.
- Any native/"dumb" reusable UI component must live in `src/app/components/`.
- Use path aliases for importing app-local modules (`@app/*`, `@components/*`, `@directives/*`, `@pipes/*`, `@services/*`).
- Feature aliases: `@features/*`.
- Feature areas live under `src/app/features/`.
- Each feature includes `services/` and `domain/` folders with `index.ts` barrels (even if empty).

Styling Guidelines

- Use Tailwind utility classes for layout and styling.
- daisyUI is the primary UI component library.
- Prefer daisyUI utility/component classes first (buttons, cards, borders, radius, colors) to keep theming consistent.
- Use daisyUI radius tokens (`rounded-box`, `rounded-field`, `rounded-selector`) instead of fixed Tailwind radius values.
- Avoid fractional font sizes; use Tailwind text sizes (e.g. `text-xs`, `text-sm`) instead of `text-[11px]`.
- Prefer Android-friendly sizing (touch targets >= 44-48px).
- Theming is managed via Tailwind CSS + daisyUI in `src/styles.css`.
- Use `dark:` variants when needed; respect light/dark theme toggles.
- DaisyUI reference docs live in `daisy-doc.md`; read it when choosing classes or CSS variables.

Angular Conventions

- Prefer standalone components; use `imports` array on @Component when needed.
- Inject services via `inject()` inside classes, not constructor injection.
- Use signals for reactive state when appropriate.
- Template bindings should be simple and readable.
- Use Angular 20+ APIs and patterns only.
- Use standalone components for all UI; no NgModules.
- Always use separate template files (`.component.html`). Never inline templates.
- Prefer signals for component/service state:
  - `signal()` for state
  - `computed()` for derived state
  - `effect()` for side effects
- Do not use RxJS for state management.
- Keep constructors light; use `inject()` where possible.
- Favor `readonly` for signals, constants, and injected services.

TypeScript Conventions

- Strict mode is on; avoid `any`.
- Prefer explicit return types for public methods.
- Use union types for constrained values (e.g., theme names).
- Do not disable TypeScript checks unless required.

Imports

- Group imports by source:
  - Angular core/common first
  - Router and other Angular packages
  - Third-party packages
  - Local relative imports last
- Keep imports sorted alphabetically within each group when practical.
- Prefer path aliases for app-level imports:
  - `@app/*`, `@components/*`, `@directives/*`, `@pipes/*`, `@services/*`

Naming Conventions

- Components: `PascalCase` class names, kebab-case selectors.
- Services: `PascalCase` with `Service` suffix.
- Files: kebab-case (Angular CLI default).
- Signals: noun-based names; boolean signals prefixed with `is`/`has`.

Error Handling

- Favor early returns and narrow error handling.
- Use user-friendly messages in UI; avoid `console.log` in production code.
- For async operations, handle errors via `catchError` (RxJS) or try/catch (async).

Testing Guidelines

- Place specs alongside source files as `*.spec.ts`.
- Keep tests focused and deterministic.
- Avoid heavy integration tests unless required.

HTML Templates

- Keep templates small and readable.
- Avoid inline styles; use Tailwind utilities.
- Use daisyUI components for consistent UI elements.
- Always use Angular’s new control flow syntax:
  - `@if`, `@for`, `@switch`
  - Do not use `*ngIf`, `*ngFor`, `*ngSwitch`
- Use `track` in `@for` loops for performance.
- Keep templates declarative; move logic into component class methods.

Routing

- Routes are defined in `src/app/app.routes.ts`.
- Keep routes flat unless nesting is required.

State/Theme Management

- Theme service at `src/app/services/theme.service.ts`.
- Theme changes should update `data-theme` on the document root.
- Default theme is "winter" unless specified otherwise.

PostCSS/Tailwind Setup

- PostCSS config: `.postcssrc.json` with `@tailwindcss/postcss`.
- Global Tailwind import: `@import "tailwindcss";` in `src/styles.css`.
- daisyUI plugin: `@plugin "daisyui";` in `src/styles.css`.

Known Tooling Notes

- The repo previously used npm; pnpm is now set in package.json.
- If Angular CLI prompts about package manager, use pnpm.

What To Avoid

- Do not add new global CSS files without a clear reason.
- Do not introduce a second theming system.
- Do not commit `package-lock.json` (use `pnpm-lock.yaml`).
- Avoid changing build settings unless requested.

When Updating Dependencies

- Use `pnpm add` / `pnpm add -D`.
- Keep versions aligned with Angular major versions.
- Regenerate lockfile with pnpm.

Docs and Rules

- No Cursor rules detected (`.cursor/rules/` or `.cursorrules`).
- No GitHub Copilot instructions detected (`.github/copilot-instructions.md`).
- daisyUI notes: `daisy-doc.md`.

Checklist For Changes

- Build passes: `pnpm build`.
- Tests pass when relevant: `pnpm test` or targeted `ng test --include`.
- Formatting matches Prettier defaults.
- Tailwind/daisyUI classes are used consistently.
- Pre-commit hook uses Husky + lint-staged; keep hooks passing.
- Run `pnpm check` for substantial changes; use `pnpm check:build` when build validation is needed.

Notes For Agents

- Prefer small, focused changes.
- Read existing files before editing.
- Keep templates concise and visually consistent.
- Important for LLMs: run `pnpm check` periodically for meaningful changes; use `pnpm check:build` when changes affect build behavior or require extra validation.
