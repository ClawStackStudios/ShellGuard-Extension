# 🗺️ ShellGuard-Extension — Active Roadmap

[![Build State](https://img.shields.io/badge/Release_Timeline-Sliding_Window-blue?style=for-the-badge)](#)
[![Parity](https://img.shields.io/badge/Ecosystem_Parity-1%3A1_Bitwarden_%2B_ShellGuard-purple?style=for-the-badge)](#)
[![Zero-Knowledge](https://img.shields.io/badge/Security-Zero_Knowledge-E4048A?style=for-the-badge)](#)

> The human-readable face of the machine roadmap ([`.agents/skills/project/meta-prompt-antigravity.md`](file:///config/Local-Storage/workspace-lucas/projects/Agents/ShellGuard-Extension/.agents/skills/project/meta-prompt-antigravity.md)).  
> Operates as an organic **sliding release timeline**: completed stages in `.agents/skills/project/stages/` are pruned from the active filesystem upon tag release, while `.agents/skills/project/modules/` and `specs/` remain permanent ground truth.

---

## 📍 Current Position & Sliding Window (Meta-Phase 1)

```text
╔══════════════════════════════════════════════════════════════════════════════════╗
║  CURRENT RELEASE: v0.0.0.2 (Build 2) Cryptographic Bedrock & Session Quarantine  ║
║  ACTIVE STAGE:    Stage 02 — Login Gateway & Session State Machine               ║
║  LOCATION:        .agents/skills/project/stages/stage-02-login-gateway/prompt.md ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

---

## 🗓️ Staged Milestone Matrix (Meta-Phase 1: Extension Core & Sovereign Parity)

Each stage delivers exactly two tasks: **Task A (Core Logic/Engine)** and **Task B (Presentation/Carapace)**, bound directly to the multimodal specifications in `.agents/skills/project/modules/` and `.agents/skills/project/specs/`.

### 🟢 Stage 00 — Extension Scaffold & Toolchain Genesis
- **Bound Oracles:** `ARCHITECTURE.md`, `specs/ui/design-tokens.md`, `specs/verification/test-oracles.md`
- [x] **Task A [Core Infrastructure]:** Initialize WXT + React 18 + TypeScript + Tailwind CSS v3 bundler configuration, MV3 manifest permissions (`storage`, `unlimitedStorage`, `activeTab`, `scripting`, `alarms`, `offscreen`, `sidePanel`, `favicon`, `contextMenus`), and hotkey bindings (`Ctrl+Shift+L`, `Ctrl+Shift+9`).
- [x] **Task B [Carapace Scaffolding]:** Minimal compiling entrypoints (`background.ts`, `offscreen/`, `content.ts`, `popup/`, `sidepanel/`), linked carapace icons, and GitHub Actions Cloud CI pipeline.
- *Target Release:* `v0.0.0.1` (Build 1) | *Gate:* `npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py`

### 🟢 Stage 01 — Cryptographic Bedrock & Session Quarantine
- **Bound Oracles:** `specs/crypto/key-hierarchy.md`, `specs/crypto/encryption-layers.md`
- [x] **Task A [WebCrypto & Pure-TS Engine]:** HKDF-SHA256 derivation across 10 namespaces (`vault_pearls`..`export`), AES-GCM-256 envelope sealing with fresh 96-bit IVs and strict $\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace} \parallel (\text{":"} \parallel \text{podId})$ binding, plus `@noble` pure-TS fallback strictly for RFC 1918 LAN HTTP with bidirectional cross-decryption testing.
- [x] **Task B [Session Vault Persistence]:** IndexedDB StructuredClone store (`ShellGuardSessionVault`) for non-extractable `CryptoKey` survival across MV3 worker sleep cycles, with deterministic Rule 4 memory and store zeroization on lock (`zeroizeBytes`, `zeroizeBuffer`).
- *Target Release:* `v0.0.0.2` (Build 2) | *Gate:* Tamper rejection unit tests & WebCrypto vector suite (16/16 tests green).


### ⚪ Stage 02 — Login Gateway & Session State Machine
- **Bound Oracles:** `modules/01-login-gateway/spec.md`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md`
- [ ] **Task A [Session State Machine & Auth Handshake]:** Tri-state vault session machine (`LOGGED_OUT`, `AUTHENTICATING`, `UNLOCKED`, `LOCKED`), split Protocol / Host / Port (`https://` | `host` | `:port`) endpoint bar with amber LAN HTTP pill, server `/api/salt` query and Bearer token retrieval, HKDF PRK derivation into `ShellGuardSessionVault`.
- [ ] **Task B [Screen 1 Carapace Presentation]:** Pixel-perfect implementation of `Screen 1` (`docs/stitch/screen_1_login.html`), segmented mode toggle (`Upload Identity File` vs `Paste ClawKey`), amber LAN pill, and telemetry footer badge (`🔒 HKDF-SHA256 • AES-GCM-256 • Axiom 1 Active`).
- *Target Release:* `v0.0.0.3` (Build 3) | *Gate:* Visual component test suite, login handshake mock & pre-flight audits.

### ⚪ Stage 03 — Vault Dashboard & Basic Sync
- **Bound Oracles:** `modules/02-vault-dashboard/01-active-tab-and-list/spec.md`, `specs/network/wire-contracts.md`, `specs/crypto/encryption-layers.md`
- [ ] **Task A [Basic Delta Sync & Local Vault Storage]:** Delta sync `/api/sync` on login and tab focus, client-side AES-GCM-256 envelope decryption with AAD check, and encrypted envelope caching in `chrome.storage.local`.
- [ ] **Task B [Bitwarden Dashboard Carapace]:** Bitwarden-pattern Vault Dashboard (`Screens 2 & 2B`): pinned Carapace Header, search bar with live item count, active-tab matching section (`Matching Logins for <domain>`), credential cards with Favicon, Title, Username, Eye-beside-Copy secret row, and compact `Fill` CTA.
- *Target Release:* `v0.0.0.4` (Build 4) | *Gate:* Sync reconciliation & active-tab matching unit tests.

### ⚪ Stage 04 — Settings Hub (Base Carapace Navigation)
- **Bound Oracles:** `modules/06-settings/00-settings-hub/spec.md`, `specs/ui/design-tokens.md`
- [ ] **Task A [Session Lifecycle & Lock/Logout Controller]:** Quick Lock (`destroySessionVault()`), Full Logout (purging session keys and `chrome.storage.local` encrypted cache), and server `/api/health` live connection check.
- [ ] **Task B [Screen 9 Settings Carapace]:** Base settings carapace menu (`Screen 9`): connected server URL, active identity badge (`hu-` sovereign or `lb-` agentic), 6 navigation target cards (resting state), Lobster Red `Lock Vault Now` button, and `Log Out Entirely` danger link.
- *Target Release:* `v0.0.0.5` (Build 5) | *Gate:* Session zeroization verification & navigation routing tests.

### ⚪ Stage 05 — Granular Settings Sections Suite
- **Bound Modules:** `modules/06-settings/{01,02,03,04,05,06,07,08}/spec.md`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md`
- [ ] **Task A [Settings State Persistence & Handlers]:** Auto-lock duration timers, PIN code hash storage, scoped Pod access policies (`LB-RW`, `LB-EXEC`, `HUMAN ONLY`), client-RAM multi-format importer (`.json`, `.csv`, `.1pux`, `.kdbx`), HKDF encrypted exporter, and 30-day trash shredder.
- [ ] **Task B [Sub-Screen Carapace Suite]:** Account Security (`Screen 10`), Autofill Settings (`Screen 11`), Vault Operations Hub (`Screen 14/14A`), Sovereign Pods Manager (`Screen 15`), Import Envelopes (`Screen 16`), Export Vault (`Screen 17`), and Archive/Trash Shredder (`Screen 18`).
- *Target Release:* `v0.0.0.6` (Build 6) | *Gate:* Import/export signature check, auto-lock timer & pod policy tests.

### ⚪ Stage 06 — Dashboard Polish, Attachments, Detail View & Lock Screen
- **Bound Modules:** `modules/02-vault-dashboard/{02,04}/spec.md`, `modules/05-lock-enclave/01-pin-and-biometric-pad/spec.md`, `specs/crypto/encryption-layers.md`
- [ ] **Task A [Item CRUD, Attachments & Lock Enclave Engine]:** Full item add/edit/soft-delete synced to `/api/vault/items`, custom fields support (Text, Hidden, Checkbox, Linked), AES-GCM-256 encrypted attachments, and session lock enforcement.
- [ ] **Task B [Carapace Polish & Lock Screen]:** 3-Dots Quick Actions Menu flyout (`Screen 2C`), Credential Detail View (`Screen 3`), Add/Edit Item modal (`Screen 6`), and Lock Enclave 6-digit PIN Keypad & WebAuthn Biometric unlock screen (`Screen 8`).
- *Target Release:* `v0.0.0.7` (Build 7) | *Gate:* CRUD mutation tests & lock screen security validation.

### ⚪ Stage 07 — Micro-TOTP Engine & Animated SVG Pulse Ring
- **Bound Module:** `modules/02-vault-dashboard/03-view-item-and-totp/spec.md`, `specs/crypto/key-hierarchy.md`
- [ ] **Task A [RFC 6238 TOTP Engine]:** Pure-TS TOTP generator supporting Base32/otpauth URIs, HMAC-SHA1/256/512, 6/8 digits, 30s/60s intervals in offscreen enclave, verified against RFC 6238 test vectors.
- [ ] **Task B [SVG Pulse Ring & Split Code Readout]:** Monospace 3x3 split code display (`123 456`) with instant copy, smooth `requestAnimationFrame` SVG countdown ring with color shifting (`#06B6D4` $\to$ `#F97316` $\to$ `#E4048A`), and 30s clipboard auto-scrubber.
- *Target Release:* `v0.0.0.8` (Build 8) | *Gate:* RFC 6238 test vector compliance & clipboard timer audit.

### ⚪ Stage 08 — Credential Generator Suite & Volatile History
- **Bound Modules:** `modules/04-generator-suite/{01,02}/spec.md`
- [ ] **Task A [Rejection-Sampled CSPRNG Builder]:** Unbiased CSPRNG generation for passwords, EFF Diceware passphrases, and usernames/aliases, enforcing minimum character quotas and exact combinatorial entropy math.
- [ ] **Task B [Generator Deck & History UI]:** Generator Deck (`Screen 4` with mode switcher, syntax-colored output, 4-segment entropy bar, `⚡ Insert into Active Tab`, slider, `12..64` chips) and Volatile History Drawer (`Screen 5` capped at 50 items strictly in session RAM, zeroized on lock).
- *Target Release:* `v0.0.0.9` (Build 9) | *Gate:* Entropy distribution tests & Rule 4 zeroization check.

### ⚪ Stage 09 — In-Page Autofill, Anti-Collision Inset & Closed Shadow DOM Overlays
- **Bound Modules:** `modules/03-inpage-autofill/{01,02}/spec.md`, `specs/autofill/autofill-mechanics.md`
- [ ] **Task A [DOM Observer & Anti-Pollution Injection]:** Page `MutationObserver` enforcing username/password co-presence gate, 6-mode URI matching, iframe validation, pristine prototype value setter (`HTMLInputElement.prototype.value.set`), and $<1\text{ms}$ transient secret zeroization.
- [ ] **Task B [Closed Shadow DOM Overlays & Anti-Collision Engine]:** Closed Shadow DOM (`attachShadow({ mode: 'closed' })`) in-page dropdown (`Screen 7`), dynamic `ResizeObserver` anti-collision glyph inset engine (`Screen 13`), and floating credential capture notification bar (`Screens 12/12A/12B`).
- *Target Release:* `v0.0.0.10` (Build 10) | *Gate:* Shadow DOM encapsulation, anti-collision offset & synthetic event tests.

### ⚪ Stage 10 — MV3 Router, Watchdogs, Appearance Engine & Web Store Release (Meta-Phase 1 Culmination)
- **Bound Modules:** `modules/06-settings/{09,10}/spec.md`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md`
- [ ] **Task A [MV3 Background Router, Alarms & Offscreen Enclave]:** Service worker event bus with Zod message envelope validation, `chrome.alarms` watchdogs (inactivity lock, 30s clipboard purge, 30d trash sweep), `Ctrl+Shift+L` global shortcut autofill, match-count badge updaters, and singleton offscreen document.
- [ ] **Task B [Appearance, Diagnostics & Web Store Summit]:** 4 sovereign theme presets (`Abyssal Dark`, `Trench Slate`, `Hydro Coral`, `Bioluminescent Cyan`), local favicon resolution, Enclave Diagnostic self-test suite (`Screens 20A/B`), production package (`wxt zip`), SHA-256 checksums, and **Meta-Phase 2 Handoff**.
- *Target Release:* `v0.0.1.0` (Build 11) • **Meta-Phase 1 Culmination** | *Gate:* Zero-waste release workflow, SSoT doc drift audit & Cloud CI.

---

## 🚀 Meta-Phase 2 Handoff & Scoping Protocol

Reaching **Stage 10 (`v0.0.1.0` • Build 11)** marks the successful completion of **Meta-Phase 1 (Extension Core & Sovereign Parity)**.

### Handoff Trigger & Molt Sequence:
1. **Meta-Phase 1 Tagging:** Git tag `v0.0.1.0` is published along with the production Chrome Web Store zip artifact.
2. **Ground State Synthesis:** The agent reads the complete live codebase state, test coverage matrices, and audit logs.
3. **Meta-Phase 2 Prompt Formation:** A new `meta-prompt-antigravity.md` and `ROADMAP.md` are synthesized from the ground state of `v0.0.1.0`, defining the next release milestones for:
   - **Passkey & FIDO2 Enclave Sync:** Cross-device WebAuthn passkey registration and assertion handling.
   - **Multi-Agent Swarm Orchestration:** Sub-agent concurrent vault access via granular ephemeral `lb-` token leases.
   - **Decentralized P2P Compartment Sharing:** End-to-end encrypted direct peer sync without central server relay.
   - **Local LLM Autofill Inference:** Local on-device AI form heuristic classification for dynamic complex DOMs.
