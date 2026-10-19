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
- [ ] **Task B [In-Page Badge & Picker]:** Injected bioluminescent badge and drop-down menu mounted inside closed Shadow DOM (`attachShadow({ mode: 'closed' })`).
- *Target Release:* `v0.0.1.4` (Build 5) | *Gate:* Shadow DOM encapsulation & CSS reset verification.

### ⚪ Stage 05 — Popup Vault Browser & Reef Modernist UI
- [ ] **Task A [Vault State & Filtering]:** In-memory decrypted vault index, instant search, and pod hierarchical filtering.
- [ ] **Task B [Popup SPA Viewport]:** High-density 400x600 Reef Modernist UI, Eye-beside-Copy layout, and amber LAN warning pill.
- *Target Release:* `v0.0.1.5` (Build 6) | *Gate:* Visual component test suite & lint.

### ⚪ Stage 06 — Micro-TOTP Engine & Pulse Ring
- [ ] **Task A [RFC 6238 Engine]:** Pure-TS TOTP generator supporting HMAC-SHA1/256/512, 6/8 digits, and custom intervals.
- [ ] **Task B [Animated SVG Pulse Ring]:** Visual circular progress countdown in Claw Cyan (`#06B6D4`) transitioning to Coral Amber (`#D29922`) at $\le 5$s.
- *Target Release:* `v0.0.1.6` (Build 7) | *Gate:* RFC 6238 published test vector compliance.

### ⚪ Stage 07 — Credential Generator Suite & History
- [ ] **Task A [Entropy Builder]:** Diceware passphrase and character-class password generators with CSPRNG entropy guarantees.
- [ ] **Task B [History Drawer]:** In-memory password generation history drawer with one-click restore.
- *Target Release:* `v0.0.1.7` (Build 8) | *Gate:* Entropy randomness distribution tests.

### ⚪ Stage 08 — Server Sync Engine & Transport Sovereignty
- [ ] **Task A [Delta Sync & Offline Cache]:** Mutex-serialized delta reconciliation with self-hosted ShellGuard servers (`/api/sync`).
- [ ] **Task B [Transport Sovereignty Gateway]:** Explicit "Trust self-signed certificates" toggle, browser origin whitelisting helper, and cleartext LAN fallback.
- *Target Release:* `v0.0.1.8` (Build 9) | *Gate:* Delta sync reconciliation and LAN fallback tests.

### ⚪ Stage 09 — Agentic Delegation Port (`lb-` LobsterKeys)
- [ ] **Task A [Agent Protocol Port]:** Scoped sub-agent message port supporting structural permissions (`canRead`, `canWrite`, `canEdit`).
- [ ] **Task B [Audit Logging Bridge]:** Transactional logging of all agent vault operations to server `audit.sqlite`.
- *Target Release:* `v0.0.1.9` (Build 10) | *Gate:* Permission boundary enforcement tests.

### ⚪ Stage 10 — Web Store Packaging & Verification Summit
- [ ] **Task A [Store Packaging]:** Automated `wxt zip` packaging, manifest policy validation, and CSP audit.
- [ ] **Task B [Full Verification Gate]:** 100% green Cloud CI pipeline and documentation alignment.
- *Target Release:* `v0.0.2.0` (Build 11) | *Gate:* Zero-waste release workflow.
