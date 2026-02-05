# Angular Tailwind DaisyUI Template

Angular 21 template with Tailwind CSS v4, daisyUI themes, ESLint, Prettier, and Husky.

## Quick Start

```bash
pnpm install
pnpm start
```

Open `http://localhost:4200/`.

## Scripts

- Dev server: `pnpm start`
- Build: `pnpm build`
- Watch build: `pnpm watch`
- Unit tests: `pnpm test`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Format check: `pnpm format:check`
- Check (lint + format): `pnpm check`
- Check + build: `pnpm check:build`

## Project Structure

```
src/
  app/
    features/            # Route-level features
      home/
        domain/
        services/
    components/          # Reusable UI components
    directives/
    pipes/
    services/            # App-wide services
    app.html             # App shell
    app.routes.ts        # Routes
  styles.css             # Tailwind + daisyUI themes
```

Feature rule: each feature folder includes `services/` and `domain/` with `index.ts` barrels.

## Aliases

Use path aliases instead of relative imports:

- `@app/*`
- `@features/*`
- `@components/*`
- `@directives/*`
- `@pipes/*`
- `@services/*`

Configured in `tsconfig.json`.

## Styling & Themes

- Tailwind CSS v4 + daisyUI via `src/styles.css`.
- Theme tokens live in `src/styles.css` under `@plugin "daisyui/theme"`.
- Theme switch updates `data-theme` on `<html>`.
- daisyUI notes: `daisy-doc.md`.

## Linting & Formatting

- ESLint configured in `eslint.config.js` with `@angular-eslint`.
- `any` is forbidden; explicit module boundary return types are required.
- Prettier settings in `package.json` (print width 100, single quotes).

## Pre-commit

Husky + lint-staged:

- Runs `eslint --fix` on staged `src/**/*.{ts,html}`
- Runs `prettier --write` on common file types

## Where to Start

- App shell: `src/app/app.html`
- Home route: `src/app/features/home/`
- New routes: add a feature under `src/app/features/` and register in `src/app/app.routes.ts`
- Reusable UI: `src/app/components/`

## Tests

Run a single spec file:

```bash
ng test --include src/app/**/your-file.spec.ts
```

Run tests by name:

```bash
ng test --testNamePattern "My test name"
```

## Notes

- Package manager: pnpm (`packageManager` in `package.json`).
- Strict TypeScript is enabled in `tsconfig.json`.
- For LLM/agent usage: run `pnpm check` periodically for meaningful changes; use `pnpm check:build` when changes affect build behavior or require extra validation.
