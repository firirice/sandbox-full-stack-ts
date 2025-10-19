# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an e-commerce sandbox project built as an npm workspaces monorepo. The primary application is a Nuxt 4 web application located in `packages/web/`.

## Repository Structure

- **Root**: Monorepo configuration using npm workspaces
- **packages/web/**: Nuxt 4 application (main web frontend)

## Commands

All commands should be run from the **root directory** of the monorepo unless specified otherwise.

### Installation

```bash
npm install
```

This will install dependencies for all workspace packages.

### Development

```bash
# From root
cd packages/web && npm run dev

# Or directly from packages/web/
npm run dev
```

Development server runs on `http://localhost:3000`

### Build

```bash
# From packages/web/
npm run build
```

### Preview Production Build

```bash
# From packages/web/
npm run preview
```

### Linting

```bash
# From packages/web/ (ESLint is configured per package)
npx eslint .
```

The project uses `@nuxt/eslint` with configuration in `packages/web/eslint.config.mjs`.

### Type Checking

Nuxt 4 uses project references for TypeScript configuration. The tsconfig files are auto-generated in `.nuxt/` directory.

```bash
# From packages/web/
npx nuxi typecheck
```

## Architecture

### Monorepo Structure

This project uses **npm workspaces** for monorepo management. The root `package.json` defines the workspace pattern `packages/*`. Each package has its own dependencies and scripts.

### Web Application (packages/web/)

Built with **Nuxt 4** (latest version), a Vue 3 meta-framework.

**Key Technologies:**
- **Nuxt 4**: Full-stack framework with file-based routing
- **Vue 3**: Component framework with Composition API
- **TypeScript**: Strongly typed development
- **Tailwind CSS**: Utility-first CSS framework (configured via PostCSS)
- **@nuxt/ui**: Nuxt UI component library
- **@nuxt/image**: Image optimization module
- **@nuxt/test-utils**: Testing utilities for Nuxt

**Nuxt Modules Enabled:**
- `@nuxt/eslint`: ESLint integration
- `@nuxt/ui`: UI component library
- `@nuxt/test-utils`: Testing utilities
- `@nuxt/image`: Image optimization

**Directory Convention (Nuxt 4):**
- `app/`: Application source code (Nuxt 4 uses `app/` instead of root-level directories)
  - `app/app.vue`: Root application component
  - Standard Nuxt directories like `pages/`, `components/`, `composables/`, `layouts/`, etc. would go in `app/`
- `public/`: Static assets served at root path
- `.nuxt/`: Auto-generated files (gitignored, recreated on build)
- `nuxt.config.ts`: Nuxt configuration file

**TypeScript Configuration:**
TypeScript uses project references pointing to auto-generated configs in `.nuxt/`:
- `.nuxt/tsconfig.app.json`: App-side types
- `.nuxt/tsconfig.server.json`: Server-side types
- `.nuxt/tsconfig.shared.json`: Shared types
- `.nuxt/tsconfig.node.json`: Node.js types

**Styling:**
PostCSS configured with Tailwind CSS and Autoprefixer in `nuxt.config.ts`.

### Adding New Packages

To add a new package to the monorepo:

1. Create directory: `packages/<package-name>/`
2. Initialize with `npm init` inside the new package
3. Add dependencies from root: `npm install <dep> -w <package-name>`
4. Or cd into package and run `npm install <dep>`

### Working with Nuxt 4

**File-based Routing:**
Create `.vue` files in `app/pages/` for automatic routing.

**Auto-imports:**
Nuxt auto-imports Vue composables, components from `app/components/`, and utilities. No explicit imports needed for most Vue/Nuxt APIs.

**Server API Routes:**
Create API endpoints in `app/server/api/` (e.g., `app/server/api/hello.ts`).

**State Management:**
Use `useState()` composable for reactive state or install Pinia if needed.
