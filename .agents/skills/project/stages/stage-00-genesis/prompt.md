# Stage 00 — Extension Scaffold & Toolchain Genesis

> Version: `v0.0.1.0` (Build 1) | Target: Genesis Scaffold

---

## Required Reference Oracles
- Architecture: `ARCHITECTURE.md` §3 (Complete Directory Structure)
- Design Tokens: `.agents/skills/project/specs/ui/design-tokens.md` §1
- Verification Gate: `.agents/skills/project/specs/verification/test-oracles.md` §1

---

## Execution Tasks

### Task A [Core Infrastructure]: WXT + TypeScript + Tailwind Setup
Initialize the project directory with WXT, React 18, Tailwind CSS v3, and TypeScript configuration.
- Configure `wxt.config.ts` targeting Manifest V3 with permissions: `storage`, `activeTab`, `scripting`, `alarms`, `offscreen`, and `unlimitedStorage`.
- Configure `tailwind.config.ts` binding the Reef Modernist color tokens (`CANVAS_ABYSS`, `CARAPACE_CONTAINER`, `LOBSTER_PRIMARY`, `CLAW_CYAN`).
- Configure `package.json` with scripts: `dev`, `build`, `zip`, `typecheck`, `lint`.

### Task B [Carapace Scaffolding]: Entrypoint Stubs & Branding Assets
Create minimal compiling entrypoints:
- `entrypoints/background.ts`: MV3 service worker lifecycle listener stub.
- `entrypoints/popup/`: Minimal React popup rendering the Reef carapace card and version label.
- Verify icons and graphics are correctly linked in `wxt.config.ts` / manifest.

---

## Verification Criteria
```bash
npm run typecheck && npm run lint
```
- Cloud CI workflow is established in `.github/workflows/ci.yml`.
