# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Frontend dev server
pnpm --filter @workspace/jaquelines-flowers run dev

# Backend dev server
pnpm --filter @workspace/api-server run dev

# Build everything (runs typecheck first)
pnpm build

# Typecheck all packages
pnpm typecheck

# Push DB schema changes (requires DATABASE_URL env var)
pnpm --filter @workspace/db run push

# Regenerate API client + Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen
```

## Architecture

This is a **pnpm monorepo** with two top-level workspace directories:

- `artifacts/` — deployable applications
- `lib/` — shared internal packages

### Artifacts

| Package | Description |
|---|---|
| `artifacts/jaquelines-flowers/` | React 19 + Vite SPA (the main flower shop website) |
| `artifacts/api-server/` | Express 5 API server, compiled with esbuild |

### Shared Libraries

| Package | Description |
|---|---|
| `lib/api-spec/` | OpenAPI spec (`openapi.yaml`) — source of truth for the API |
| `lib/api-client-react/` | **Generated** React Query hooks (do not edit manually) |
| `lib/api-zod/` | **Generated** Zod validation schemas (do not edit manually) |
| `lib/db/` | Drizzle ORM schema + PostgreSQL connection (needs `DATABASE_URL`) |

### API-first Codegen Flow

Edit `lib/api-spec/openapi.yaml` → run `codegen` → `lib/api-client-react/src/generated/` and `lib/api-zod/src/generated/` update automatically via [Orval](https://orval.dev/).

Never edit files inside `generated/` directories — they are overwritten on each codegen run.

### Frontend (jaquelines-flowers)

- Single-page app with [Wouter](https://github.com/molefrog/wouter) for routing; currently only one route (`/`)
- `src/pages/Home.tsx` — the entire landing page, split into 7 sections linked by anchor IDs: Hero, Services, About, Gallery, Reviews, Contact, CTA
- `src/index.css` — design tokens as CSS custom properties: terracotta/rust primary (`--primary`), leaf green secondary (`--secondary`), creamy off-white background
- Custom fonts: **Playfair Display** (headings via `.font-heading`), **Plus Jakarta Sans** (body via `.font-body`)
- UI components: [Shadcn UI](https://ui.shadcn.com/) (New York style) on top of Radix UI primitives — configured in `components.json`
- Animations: Framer Motion (`motion.*` components, scroll-triggered variants)

### Backend (api-server)

- Express 5 with Pino structured logging
- Compiled to a single CJS bundle via esbuild (`build.mjs`)
- Validation uses `@workspace/api-zod` schemas generated from the OpenAPI spec
