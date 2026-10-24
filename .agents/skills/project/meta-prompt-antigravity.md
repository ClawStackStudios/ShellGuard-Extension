# 🧭 Meta-Prompt Antigravity: Master Orchestration & Module Router

> State router for ShellGuard-Extension reverse-build releases. Binds the sliding timeline in `stages/` to the permanent feature-activity oracles in `modules/` and `specs/`.

---

## 1. Sliding Release Timeline & Module Matrix

| Stage | Version / Build | Stage Directory | Bound Feature-Activity Modules (`modules/`) & Core Laws (`specs/`) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 00** | `v0.0.1.0 (Build 1)` | `stages/stage-00-genesis/` | `specs/ui/design-tokens.md`, `specs/verification/test-oracles.md`, `ARCHITECTURE.md` | 🟢 **ACTIVE LEADING EDGE** |
| **Stage 01** | `v0.0.1.1 (Build 2)` | `stages/stage-01-crypto-bedrock/` | `specs/crypto/key-hierarchy.md`, `specs/crypto/encryption-layers.md` | ⚪ Queued |
| **Stage 02** | `v0.0.1.2 (Build 3)` | `stages/stage-02-mv3-runtime/` | `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md` | ⚪ Queued |
| **Stage 03** | `v0.0.1.3 (Build 4)` | `stages/stage-03-autofill-heuristics/` | `specs/autofill/autofill-mechanics.md`, `modules/06-settings/02-autofill-and-shadow-dom/` | ⚪ Queued |
| **Stage 04** | `v0.0.1.4 (Build 5)` | `stages/stage-04-shadow-dom-carapace/` | `modules/03-inpage-autofill/01-shadow-dropdown-overlay/`, `modules/03-inpage-autofill/02-glyph-states-and-inset/`, `modules/06-settings/03-notifications-and-prompts/` | ⚪ Queued |
| **Stage 05** | `v0.0.1.5 (Build 6)` | `stages/stage-05-popup-vault-browser/` | `modules/01-login-gateway/`, `modules/02-vault-dashboard/{01,02,04}`, `modules/05-lock-enclave/01-pin-and-biometric-pad/` | ⚪ Queued |
| **Stage 06** | `v0.0.1.6 (Build 7)` | `stages/stage-06-micro-totp-engine/` | `modules/02-vault-dashboard/03-view-item-and-totp/` | ⚪ Queued |
| **Stage 07** | `v0.0.1.7 (Build 8)` | `stages/stage-07-generator-suite/` | `modules/04-generator-suite/01-generator-deck/`, `modules/04-generator-suite/02-volatile-history/` | ⚪ Queued |
| **Stage 08** | `v0.0.1.8 (Build 9)` | `stages/stage-08-server-sync-engine/` | `modules/06-settings/{00,01,02,04,06,07,08}`, `specs/network/wire-contracts.md` | ⚪ Queued |
| **Stage 09** | `v0.0.1.9 (Build 10)` | `stages/stage-09-agentic-delegation/` | `modules/06-settings/05-pods-and-compartments/` | ⚪ Queued |
| **Stage 10** | `v0.0.2.0 (Build 11)` | `stages/stage-10-web-store-release/` | `modules/06-settings/09-appearance-and-themes/`, `modules/06-settings/10-about-and-enclave-audit/` | ⚪ Queued |

---

## 2. Active Stage Pointer

- **Current Active Stage:** `Stage 00: Extension Scaffold & Toolchain Genesis`
- **Location:** `.agents/skills/project/stages/stage-00-genesis/prompt.md`

---

## 3. The Molt Protocol (Strictly Scoped Pruning)

When Stage XX satisfies its verification gate and merges to `main`:
1. Remove **ONLY** `.agents/skills/project/stages/stage-XX/`. Never remove files inside `modules/` or `specs/`.
2. Mark Stage XX as `PRUNED (Commit <hash>)` in the table above and advance the Active Stage Pointer to the next lowest directory in `stages/`.
