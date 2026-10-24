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
║  CURRENT RELEASE: v0.0.0.1 (Build 1) Genesis Scaffold                           ║
║  ACTIVE STAGE:    Stage 00 — Extension Scaffold & Toolchain Genesis              ║
║  LOCATION:        .agents/skills/project/stages/stage-00-genesis/prompt.md       ║
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

### ⚪ Stage 01 — Cryptographic Bedrock & Session Quarantine
- **Bound Oracles:** `specs/crypto/key-hierarchy.md`, `specs/crypto/encryption-layers.md`
- [ ] **Task A [WebCrypto & Pure-TS Engine]:** HKDF-SHA256 derivation across 10 namespaces (`vault_pearls`..`export`), AES-GCM-256 envelope sealing with fresh 96-bit IVs and strict $\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace} \parallel (\text{":"} \parallel \text{podId})$ binding, plus `@noble` pure-TS fallback strictly for RFC 1918 LAN HTTP.
- [ ] **Task B [Session Vault Persistence]:** IndexedDB StructuredClone store (`ShellGuardSessionVault`) for non-extractable `CryptoKey` survival across MV3 worker sleep cycles, with deterministic Rule 4 memory and store zeroization on lock.
- *Target Release:* `v0.0.0.2` (Build 2) | *Gate:* Tamper rejection unit tests & WebCrypto vector suite.

### ⚪ Stage 02 — MV3 Runtime & Offscreen Enclave Router
- **Bound Oracles:** `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md`
- [ ] **Task A [Service Worker Router]:** Event-driven lifecycle manager enforcing synchronous Zod message envelope validation (`{ id, type, payload, timestamp, origin }`), hotkey routing, `chrome.alarms` watchdogs (inactivity lock, 30s clipboard wipe, 30d trash sweep), and badge counters.
- [ ] **Task B [Offscreen Enclave]:** Singleton offscreen document hosting all WebCrypto derivations, AES-GCM-256 operations, QR canvas decoding, and volatile generator history ring buffers.
- *Target Release:* `v0.0.0.3` (Build 3) | *Gate:* Cross-context message envelope validation tests.

### ⚪ Stage 03 — Content Script Observers & Pristine Injector
- **Bound Oracles:** `specs/autofill/autofill-mechanics.md`, `modules/06-settings/02-autofill-and-shadow-dom/spec.md`
- [ ] **Task A [DOM Observer & Co-Presence Gate]:** SPA `MutationObserver` enforcing the username/password **Co-Presence Gate**, 6-mode URI matcher (`Base Domain`, `Host & Port`, `Exact`, `Starts With`, `Regex`, `Never`), cross-origin iframe rejection, and page-load fail-closed protection.
- [ ] **Task B [Anti-Pollution Injector]:** Pristine prototype value setter (`HTMLInputElement.prototype.value.set`) dispatching bubbling `input` and `change` events with `<1ms` transient secret zeroization.
- *Target Release:* `v0.0.0.4` (Build 4) | *Gate:* DOM isolation & synthetic event tests.

### ⚪ Stage 04 — Closed Shadow DOM Carapace, Anti-Collision Glyphs & Prompts
- **Bound Modules:** `modules/03-inpage-autofill/01-shadow-dropdown-overlay/`, `modules/03-inpage-autofill/02-glyph-states-and-inset/`, `modules/06-settings/03-notifications-and-prompts/`
- [ ] **Task A [Anti-Collision Coordinate Engine]:** `ResizeObserver` dynamic inset engine shifting the 4-state carapace glyph left by `12px + siblingWidth + 8px` (up to `68px` • `Screen 13`) when native password-reveal eyes or clear buttons are present.
- [ ] **Task B [Closed Shadow Overlays & Capture Bar]:** Closed Shadow DOM (`attachShadow({ mode: 'closed' })`) dropdown (`Screen 7` & `Screen 13` State 01/02 with `AUTO-CASCADE 2FA` `[Fill All]` and `Never for this site`) and floating capture bar (`Screens 12/12A/12B` with 6 capture triggers, target Pod routing, and CIDR exclusions).
- *Target Release:* `v0.0.0.5` (Build 5) | *Gate:* Shadow DOM encapsulation, anti-collision offset & CSS reset verification.

### ⚪ Stage 05 — Core Popup SPA: Login, Dashboard, Editor & Lock Pad
- **Bound Modules:** `modules/01-login-gateway/`, `modules/02-vault-dashboard/{01,02,04}`, `modules/05-lock-enclave/01-pin-and-biometric-pad/`
- [ ] **Task A [Vault State & Search Index]:** In-memory decrypted vault state supporting `<16ms` active-tab URI matching, 2×2 matrix filtering (`Pod`, `Tag`, `Type`, `Domain`), and `Archive (Cold Storage)` / `Trash` exclusion.
- [ ] **Task B [Core Popup Views]:** Login Gateway (`Screen 1` with `.json` Identity File upload, `hu-`/`lb-` ClawKey input, split host/port bar, and RFC 1918 LAN / Self-Signed TLS handling), Resting Dashboard (`Screens 2 & 2B`), 3-Dots Quick Actions Flyout (`Screen 2C`), Add/Edit Form (`Screen 6` with Eye-beside-Action and entropy bar), and 6-digit PIN / WebAuthn Keypad (`Screen 8`).
- *Target Release:* `v0.0.0.6` (Build 6) | *Gate:* Visual component test suite, Eye-beside-Copy invariant & lint.

### ⚪ Stage 06 — Micro-TOTP Engine & Animated SVG Pulse Ring
- **Bound Module:** `modules/02-vault-dashboard/03-view-item-and-totp/`
- [ ] **Task A [RFC 6238 TOTP Engine]:** Pure-TS TOTP generator supporting Base32/otpauth URIs, HMAC-SHA1/256/512, 6/8 digits, and custom epochs.
- [ ] **Task B [Item Detail & SVG Pulse Ring]:** Credential Detail View (`Screen 3`) with `Autofill into Page` CTA, Eye-beside-Copy password row, `⚠️ HTTP LAN` warning pill, split `839 204` readout, and `requestAnimationFrame` SVG countdown ring (`#06B6D4` $\to$ `#F97316` $\to$ `#F59E0B`/`#E4048A`).
- *Target Release:* `v0.0.0.7` (Build 7) | *Gate:* RFC 6238 published test vector compliance.

### ⚪ Stage 07 — Credential Generator Suite & Volatile History
- **Bound Modules:** `modules/04-generator-suite/01-generator-deck/`, `modules/04-generator-suite/02-volatile-history/`
- [ ] **Task A [Rejection-Sampled CSPRNG Builder]:** Unbiased `crypto.getRandomValues()` password, EFF Diceware passphrase, and username generator enforcing minimum character quotas and exact combinatorial entropy math.
- [ ] **Task B [Generator Deck & History UI]:** Generator Deck (`Screen 4` with mode switcher, syntax-colored output, 4-segment entropy bar, `⚡ Insert into Active Tab`, slider, `12..64` chips, 2×2 matrix) and Volatile History Drawer (`Screen 5` capped at 50 items strictly in session RAM, zeroized on lock).
- *Target Release:* `v0.0.0.8` (Build 8) | *Gate:* Entropy distribution tests & Rule 4 zeroization check.

### ⚪ Stage 08 — Server Delta Sync, Settings Suite, Envelopes & Shredder
- **Bound Modules:** `modules/06-settings/{00,01,02,04,06,07,08}`, `specs/network/wire-contracts.md`
- [ ] **Task A [Mutex Delta Sync & Envelope I/O]:** Mutex-serialized `/api/sync` delta reconciliation, client-RAM multi-format importer (`.json`, `.csv`, `.1pux`, `.kdbx` with dry-run AAD signature audit), Master-Password-challenged HKDF exporter, and 30-day trash auto-purge with RAM shredder.
- [ ] **Task B [Settings & Vault Operations Carapace]:** Settings Hub (`Screen 9`), Account Security (`Screen 10`), Autofill Settings (`Screen 11`), Vault Operations Hub (`Screens 14/14A`), Import (`Screen 16`), Export (`Screen 17`), and Archive/Trash Shredder (`Screen 18`).
- *Target Release:* `v0.0.0.9` (Build 9) | *Gate:* Delta sync reconciliation, import/export signature check & LAN fallback tests.

### ⚪ Stage 09 — Agentic Delegation Port (`lb-`) & Sovereign Pods Manager
- **Bound Module:** `modules/06-settings/05-pods-and-compartments/`
- [ ] **Task A [Scoped LobsterKey Port]:** Autonomous agent message port and AAD compartment guard enforcing per-pod `lb-` scopes (`LB-RW`, `LB-EXEC`, `HUMAN ONLY`, `LOCKED`) with encrypted audit stream logging.
- [ ] **Task B [Pods & Compartments Manager]:** Sovereign Pods Manager (`Screen 15`) with `+ New Pod` creation, live pod filtering, item counter pills, and `hu-`-signed compartment permission badges.
- *Target Release:* `v0.0.0.10` (Build 10) | *Gate:* Permission boundary & cross-pod AAD tamper rejection tests.

### ⚪ Stage 10 — Appearance Engine, Enclave Audit & Web Store Summit (Meta-Phase 1 Culmination)
- **Bound Modules:** `modules/06-settings/09-appearance-and-themes/`, `modules/06-settings/10-about-and-enclave-audit/`
- [ ] **Task A [Appearance & Zero-Leakage Favicon Engine]:** Pinned (`19A`) and Expanded (`19B`) Appearance views supporting 4 sovereign themes, dynamic accents, viewport width presets (`340/384/480px`), density modes, typography scaling (`100/110/120%`), high-contrast outlines, and local `chrome-extension://<id>/_favicon/` resolution.
- [ ] **Task B [Enclave Audit & Release Bundle]:** Pinned (`20A`) and Expanded (`20B`) About & Enclave Verification views with live `Enclave Diagnostics & Health` self-test and 2×2 crypto spec grid, plus production `wxt zip` packaging and 100% green Cloud CI gate.
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
