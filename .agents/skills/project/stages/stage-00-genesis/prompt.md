# Stage 00 — Extension Scaffold & Toolchain Genesis (`v0.0.0.1` • Build 1)

**Target Oracles:** `ARCHITECTURE.md`, `.agents/skills/project/specs/ui/design-tokens.md`, `.agents/skills/project/specs/verification/test-oracles.md`.

**Task A [Core Infrastructure] & Task B [Carapace Scaffolding]:**
Initialize the WXT + React 18 + TypeScript + Tailwind CSS v3 workspace targeting Chromium Manifest V3 with strict permissions (`storage`, `unlimitedStorage`, `activeTab`, `scripting`, `alarms`, `offscreen`, `sidePanel`, `favicon`, `contextMenus`) and keyboard command bindings (`Ctrl+Shift+L`, `Ctrl+Shift+9`). Bind the four Reef Modernist theme palettes and tripartite font stack (`Space Grotesk`, `Hanken Grotesk`/`Inter`, `JetBrains Mono`) into `tailwind.config.ts` and root CSS custom properties with zero external CDN requests.

Create minimal compiling entrypoints (`entrypoints/background.ts`, `entrypoints/offscreen/`, `entrypoints/content.ts`, `entrypoints/popup/`, `entrypoints/sidepanel/`), link the vector carapace icons (`assets/icons/`), and establish `.github/workflows/ci.yml` to execute full test/build verification on GitHub Actions while keeping local pre-flight checks sub-second (`npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py`).
