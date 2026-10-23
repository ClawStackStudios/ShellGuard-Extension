# 🗺️ ShellGuard-Extension — Active Roadmap

[![Build State](https://img.shields.io/badge/Release_Timeline-Sliding_Window-blue?style=for-the-badge)](#)
[![Parity](https://img.shields.io/badge/Ecosystem_Parity-1%3A1_Bitwarden_%2B_ShellGuard-purple?style=for-the-badge)](#)
[![Zero-Knowledge](https://img.shields.io/badge/Security-Zero_Knowledge-E4048A?style=for-the-badge)](#)

> The human-readable face of the machine roadmap (`.agents/skills/project/meta-prompt-antigravity.md`).  
> Operates as an organic **sliding release timeline**: completed stages are pruned from the active filesystem upon tag release, keeping the leading edge immediately clear.

---

## 📍 Current Position & Sliding Window

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║  CURRENT RELEASE: v0.0.1.0 (Build 1) Genesis Scaffold                           ║
║  ACTIVE STAGE:    Stage 00 — Extension Scaffold & Toolchain Genesis              ║
║  LOCATION:        .agents/skills/project/stages/stage-00-genesis/prompt.md       ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

---

## 🗓️ Staged Milestone Matrix

Each stage delivers exactly two tasks: **Task A (Core Logic/Engine)** and **Task B (Presentation/Carapace)**.

### 🟢 Stage 00 — Extension Scaffold & Toolchain Genesis
- [ ] **Task A [Core Infrastructure]:** Initialize WXT + TypeScript + Tailwind CSS v3 bundler configuration, manifest permissions (`storage`, `activeTab`, `scripting`, `alarms`, `offscreen`), and local pre-flight gate.
- [ ] **Task B [Carapace Scaffolding]:** Minimal compiling entrypoints (`background.ts`, `popup/App.tsx`), linked branding icons, and baseline GitHub Actions cloud CI.
- *Target Release:* `v0.0.1.0` (Build 1) | *Gate:* `npm run typecheck && npm run lint`

### ⚪ Stage 01 — Cryptographic Bedrock & Session Quarantine
- [ ] **Task A [WebCrypto Engine]:** HKDF-SHA256 key derivation across 10 namespaces and AES-GCM-256 with AAD record-binding (`uuid:namespace`).
- [ ] **Task B [Session Vault Persistence]:** IndexedDB StructuredClone store (`ShellGuardSessionVault`) for non-extractable `CryptoKey` survival across service worker idle sleep cycles.
- *Target Release:* `v0.0.1.1` (Build 2) | *Gate:* Tamper rejection unit tests & WebCrypto vector suite.

### ⚪ Stage 02 — MV3 Runtime & Offscreen Coordination
- [ ] **Task A [Service Worker Router]:** Event-driven lifecycle manager handling browser command shortcuts (`Ctrl+Shift+L`), periodic alarms, and Zod message envelope routing.
- [ ] **Task B [Offscreen Enclave]:** Dedicated offscreen document for persistent WebCrypto operations, pure-TS LAN fallbacks, and memory zeroization.
- *Target Release:* `v0.0.1.2` (Build 3) | *Gate:* Cross-context message envelope validation tests.

### ⚪ Stage 03 — Content Script & Autofill Heuristics
- [ ] **Task A [DOM Observer & Co-Presence Gate]:** MutationObserver for dynamic SPAs with strict username/password co-presence gate to suppress false-positive badges.
- [ ] **Task B [Anti-Pollution Injector]:** Pristine prototype value injector (`HTMLInputElement.prototype.value.set`) dispatching synthetic trusted `input` and `change` events.
- *Target Release:* `v0.0.1.3` (Build 4) | *Gate:* DOM isolation & synthetic event tests.

### ⚪ Stage 04 — Closed Shadow DOM Carapace Overlay
- [ ] **Task A [Coordinate Anchor Engine]:** Relative viewport coordinate tracking and scroll/resize auto-repositioning.
- [ ] **Task B [In-Page Badge, Anti-Collision & Prompts]:** Injected bioluminescent badge and drop-down menu mounted inside closed Shadow DOM (`attachShadow({ mode: 'closed' })` • `Screen 7`), Anti-Collision Dynamic Offset Engine (`DYNAMIC_INSET_RIGHT = 68px`) with 4 glyph states (`Screen 13`), and in-page save/update prompt bar (`Screen 12`).
- *Target Release:* `v0.0.1.4` (Build 5) | *Gate:* Shadow DOM encapsulation, anti-collision offset & CSS reset verification.

### ⚪ Stage 05 — Popup Vault Browser & Reef Modernist UI
- [ ] **Task A [Vault State & Filtering]:** In-memory decrypted vault index, instant search, and pod hierarchical filtering.
- [ ] **Task B [Popup SPA Viewport & Core Forms]:** High-density 384px Reef Modernist UI: Master Login Gateway (`Screen 1`), Resting Dashboard with active tab match priority (`Screen 2B`), 2×2 Filter Bento & 3-Dots Quick Actions Flyout (`Screen 2C`), Add/Edit form with under-stroke entropy meter (`Screen 6`), and 6-digit PIN Pad lock view (`Screen 8`).
- *Target Release:* `v0.0.1.5` (Build 6) | *Gate:* Visual component test suite, Eye-beside-Copy invariant & lint.

### ⚪ Stage 06 — Micro-TOTP Engine & Pulse Ring
- [ ] **Task A [RFC 6238 Engine]:** Pure-TS TOTP generator supporting HMAC-SHA1/256/512, 6/8 digits, and custom intervals.
- [ ] **Task B [Animated SVG Pulse Ring & Item Detail]:** Detailed credential view with live 28px SVG circular progress countdown in Claw Cyan (`#06B6D4`) transitioning to Coral Amber (`#D29922`) at $\le 5$s, split 6-digit formatting (`739 214`), and 800ms emerald flash copy feedback (`Screen 3`).
- *Target Release:* `v0.0.1.6` (Build 7) | *Gate:* RFC 6238 published test vector compliance.

### ⚪ Stage 07 — Credential Generator Suite & History
- [ ] **Task A [Entropy Builder]:** Diceware passphrase and character-class password generators with CSPRNG entropy guarantees.
- [ ] **Task B [Tactile Generator & Volatile History]:** Generator UI with tactile range slider, jump chips (`12..64`), 2×2 character matrix, and syntax-highlighted display card (`Screen 4`), paired with volatile RAM-only history drawer with clear action (`Screen 5`).
- *Target Release:* `v0.0.1.7` (Build 8) | *Gate:* Entropy randomness distribution tests & Rule 4 zeroization check.

### ⚪ Stage 08 — Server Sync Engine & Vault Operations Suite
- [ ] **Task A [Delta Sync & Offline Cache]:** Mutex-serialized delta reconciliation with self-hosted ShellGuard servers (`/api/sync`).
- [ ] **Task B [Settings & Vault Operations Carapace]:** Transport Sovereignty gateway with self-signed TLS consent (`Screen 1`), Settings Hub with operator session card (`Screen 9`), Account Security & Panic Wipe (`Screen 10`), Autofill Settings with fail-closed banner (`Screen 11`), Vault Operations Hub (`Screen 14A`), Import Dropzone (`Screen 16`), Export Envelopes (`Screen 17`), and 30-Day Trash Retention & Memory Shredder (`Screen 18`).
- *Target Release:* `v0.0.1.8` (Build 9) | *Gate:* Delta sync reconciliation, import/export signature check & LAN fallback tests.

### ⚪ Stage 09 — Agentic Delegation Port (`lb-` LobsterKeys)
- [ ] **Task A [Agent Protocol Port]:** Scoped sub-agent message port supporting structural permissions (`canRead`, `canWrite`, `canEdit`).
- [ ] **Task B [Sovereign Pods & Audit Bridge]:** Pods & Compartments Manager with per-pod `lb-` agent permission badges (`LB-READ`, `LB-RW`, `HUMAN ONLY`) and item counters (`Screen 15`), and transactional logging of agent vault operations to `audit.sqlite`.
- *Target Release:* `v0.0.1.9` (Build 10) | *Gate:* Permission boundary enforcement tests.

### ⚪ Stage 10 — Appearance Engine, About Enclave & Store Summit
- [ ] **Task A [Store Packaging]:** Automated `wxt zip` packaging, manifest policy validation, CSP audit, and production bundles.
- [ ] **Task B [Appearance, About Verification & Summit Gate]:** Appearance settings with 4 sovereign theme palettes, viewport width presets (`340/384/480px`), density switcher, zero-leakage local favicons (`Screens 19A/19B`), About Enclave Verification with GitHub repo card and 2×2 crypto spec (`Screens 20A/20B`), and 100% green Cloud CI pipeline.
- *Target Release:* `v0.0.2.0` (Build 11) | *Gate:* Zero-waste release workflow, SSoT doc drift audit & Cloud CI.
