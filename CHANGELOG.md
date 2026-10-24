# Changelog — ShellGuard-Extension

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- **Core Architecture Specification (`ARCHITECTURE.md`):** Complete system blueprint covering the Three-Zone Security Boundary (Privileged Service Worker, React SPAs, Untrusted DOM Content Scripts), WXT + Vite + React 18 directory layout, Zod envelope messaging contract, and sequence flows.
- **Security Policy & Threat Model (`SECURITY.md`):** Authoritative threat model articulating attack scenarios (host page XSS, prototype pollution, record-swapping, cross-origin iframes), WebCrypto non-extractable key quarantine via IndexedDB Structured Cloning, volatile memory zeroization, and responsible vulnerability disclosure policy.
- **Reef Modernist Design Specification (`DESIGN.md`):** Visual design system integrating bioluminescent tokens (`#0F1419`, `#171C21`, `#E4048A`, `#06B6D4`), tactile 1px carapace borders, Eye-beside-Copy layout invariant, and screen templates (`docs/stitch/`).
- **Initial Repository Governance (`AGENTS.md`):** Root onboarding file defining project meaning, top-level invariables, immutable rules, foundational patterns, and dynamic cartography.
- **Extension Security Invariants Rule (`.agents/rules/extension-security-invariants.md`):** Always-on rule enforcing zero-exposure content script boundaries, pristine prototype value injection (`HTMLInputElement.prototype.value.set`), closed Shadow DOM UI mounts (`attachShadow({ mode: 'closed' })`), and key quarantine.
- **Git Hygiene Rule (`.agents/rules/git-hygiene.md`):** Always-on rule enforcing scoped feature branch isolation, Conventional Commits with mandatory `User:` / `AI:` attribution trailers, and host preservation via Cloud CI gates.
- **Zero-Knowledge Crypto Skill (`.agents/skills/zero-knowledge-crypto/SKILL.md`):** Cryptographic recipes for WebCrypto HKDF-SHA256 domain derivation, AES-GCM-256 with AAD record-binding, and IndexedDB structured cloning for non-extractable session keys.
- **Visual Assets & Icons (`assets/`, `public/`):** High-resolution branding assets including `feature-graphic.png` (1400x560), vector SVGs (`icon-128.svg`, `shellguard-shell.svg`), and Chrome Web Store promotional materials.

---

## [0.0.1.0] - 2026-10-24

### Added
- **Stage 00 Genesis Scaffold:**
  - WXT Manifest V3 bundler toolchain with React 18, TypeScript, and Tailwind CSS v3.
  - Chromium MV3 manifest permissions (`storage`, `unlimitedStorage`, `activeTab`, `scripting`, `alarms`, `offscreen`, `sidePanel`, `favicon`, `contextMenus`) and keyboard shortcuts (`Ctrl+Shift+L`, `Ctrl+Shift+9`).
  - Four Reef Modernist theme palettes (Abyssal Dark, Trench Slate, Hydro Coral, Bioluminescent Cyan) bound to CSS variables and Tailwind utility classes with tripartite typography (`Space Grotesk`, `Hanken Grotesk`/`Inter`, `JetBrains Mono`).
  - Compiling entrypoints: `entrypoints/background.ts` (Zone 0 Service Worker), `entrypoints/offscreen/` (Zone 0 Cryptographic Enclave), `entrypoints/content.ts` (Zone 2 Content Script), `entrypoints/popup/` (Zone 1 Popup SPA), `entrypoints/sidepanel/` (Zone 1 Side Panel), and `entrypoints/options/` (Zone 1 Settings Hub).
  - High-density vector icons and generated PNG assets (16x16, 48x48, 128x128) in `assets/icons/` and `public/icons/`.
  - GitHub Actions CI pipeline (`.github/workflows/ci.yml`) enforcing sub-second local pre-flight gates (`npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py`) while offloading test runner and packaging suites (`wxt build`, `wxt zip`) to cloud runners.
