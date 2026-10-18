# 🧭 Meta-Prompt Antigravity: The Master Orchestration Index

> State router for ShellGuard-Extension reverse-build releases. Tracks the sliding timeline of active, queued, and completed stages.

---

## 1. Sliding Release Timeline Matrix

| Stage | Version / Build | Domain Focus | Stage Directory | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 00** | `v0.0.1.0 (Build 1)` | Toolchain, WXT Scaffold & Manifest V3 Core | `stages/stage-00-genesis/` | 🟢 **ACTIVE LEADING EDGE** |
| **Stage 01** | `v0.0.1.1 (Build 2)` | Cryptographic Bedrock (HKDF, AAD & Session Vault) | `stages/stage-01-crypto-bedrock/` | ⚪ Queued |
| **Stage 02** | `v0.0.1.2 (Build 3)` | Ephemeral Service Worker & Offscreen Router | `stages/stage-02-mv3-runtime/` | ⚪ Queued |
| **Stage 03** | `v0.0.1.3 (Build 4)` | Content Script Observer & Co-Presence Gate | `stages/stage-03-autofill-heuristics/` | ⚪ Queued |
| **Stage 04** | `v0.0.1.4 (Build 5)` | Closed Shadow DOM Badge & In-Page Overlay | `stages/stage-04-shadow-dom-carapace/` | ⚪ Queued |
| **Stage 05** | `v0.0.1.5 (Build 6)` | Popup Vault Browser & Reef Modernist UI | `stages/stage-05-popup-vault-browser/` | ⚪ Queued |
| **Stage 06** | `v0.0.1.6 (Build 7)` | Micro-TOTP Engine & SVG Pulse Ring | `stages/stage-06-micro-totp-engine/` | ⚪ Queued |
| **Stage 07** | `v0.0.1.7 (Build 8)` | Credential Generator Suite & Password History | `stages/stage-07-generator-suite/` | ⚪ Queued |
| **Stage 08** | `v0.0.1.8 (Build 9)` | Server Delta Sync & HTTP LAN Carve-Out | `stages/stage-08-server-sync-engine/` | ⚪ Queued |
| **Stage 09** | `v0.0.1.9 (Build 10)` | Agentic Delegation Port (`lb-` LobsterKeys) | `stages/stage-09-agentic-delegation/` | ⚪ Queued |
| **Stage 10** | `v0.0.2.0 (Build 11)` | Chrome Web Store Packaging & Verification Summit | `stages/stage-10-web-store-release/` | ⚪ Queued |

---

## 2. Active Stage Pointer

- **Current Active Stage:** `Stage 00: Extension Scaffold & Toolchain Genesis`
- **Location:** `.agents/skills/project/stages/stage-00-genesis/prompt.md`
- **Target Deliverable:** Initializing WXT with React 18, Tailwind CSS, TypeScript, and verification harness.

---

## 3. The Molt Protocol (Pruning Completed Stages)

When Stage XX satisfies its verification gate and merges to `main`:
1. Delete directory: `rm -rf .agents/skills/project/stages/stage-XX/`
2. Update this file: Mark Stage XX as `PRUNED (Commit <hash>)` and advance the Active Stage Pointer to the next directory.
3. The next lowest directory automatically becomes the leading edge.
