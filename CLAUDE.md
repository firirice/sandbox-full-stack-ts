# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an sandbox full stack typescript project built as an npm workspaces monorepo. The primary application is a Nuxt 4 web application located in `packages/ec-shop/`.

## Repository Structure

- **Root**: Monorepo configuration using npm workspaces
- **packages/ec-shop/**: Nuxt 4 application (main web frontend)

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

# Or directly from packages/ec-shop/
npm run dev
```

Development server runs on `http://localhost:3000`

### Build

```bash
# From packages/ec-shop/
npm run build
```

### Preview Production Build

```bash
# From packages/ec-shop/
npm run preview
```

### Linting

```bash
# From packages/ec-shop/ (ESLint is configured per package)
npx eslint .
```

The project uses `@nuxt/eslint` with configuration in `packages/ec-shop/eslint.config.mjs`.

### Type Checking

Nuxt 4 uses project references for TypeScript configuration. The tsconfig files are auto-generated in `.nuxt/` directory.

```bash
# From packages/ec-shop/
npx nuxi typecheck
```

## Architecture

### Monorepo Structure

This project uses **npm workspaces** for monorepo management. The root `package.json` defines the workspace pattern `packages/*`. Each package has its own dependencies and scripts.

