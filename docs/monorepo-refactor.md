# Monorepo / Shared `src` Refactor Proposal

Goal
- Reduce TypeScript configuration friction between the `next-app` Next.js app and the top-level shared `src` folder.

Current situation
- `next-app` imports code from `../src` via webpack aliases and `paths` in `next-app/tsconfig.json`.
- Type resolution can fail during Vercel builds unless the Next tsconfig includes the top-level `src` and ambient declarations are present.

Problems
- Fragile type resolution across project root boundaries.
- `node_modules` duplication risks and differing dependency versions between root and `next-app`.
- Harder CI/IDE integration; contributors may see different editor errors unless tsconfig is configured exactly.

Recommendations
1. Move shared code into `next-app/src` or create a real package in `packages/shared` and reference it as a workspace dependency.
   - Pros: Simplifies TypeScript config and dependency resolution.
   - Cons: Requires updating imports and possibly a one-time migration.

2. Adopt a package manager workspace (pnpm/yarn) and publish the shared code as `@aislesoft/shared` locally.
   - Pros: Clear separation; single source of truth for shared types and components.
   - Cons: More initial setup.

3. Keep current layout but: ensure `next-app/tsconfig.json` includes `../src` (as done), and add a small `types/` package with proper d.ts files instead of an ambient `global.d.ts`.
   - Pros: Minimal changes.
   - Cons: Still brittle and needs maintenance.

Implementation steps for option 1 (move into `next-app/src`)
1. Create `next-app/src` and copy files from top-level `src` that are currently used by `next-app`.
2. Update `next-app/tsconfig.json` `paths` to point to `./src/*` instead of `../src/*`.
3. Update imports across `next-app` to remove `../` references (mostly alias `@/...` will still work).
4. Run full local build and tests.

Notes
- If you expect other apps to consume the top-level `src`, prefer option 2.
- The current changes (including adding include entries in `next-app/tsconfig.json`) are a pragmatic stopgap that makes Vercel builds reliable for now.
