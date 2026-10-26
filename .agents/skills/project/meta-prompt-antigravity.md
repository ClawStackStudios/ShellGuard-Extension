# 🧭 Meta-Prompt Antigravity: Master Orchestration & Module Router

> State router for ShellGuard-Extension reverse-build releases. Binds the sliding timeline in `stages/` to the permanent feature-activity oracles in `modules/` and `specs/`.

---

## 1. Sliding Release Timeline & Module Matrix (Meta-Phase 1)

| Stage | Version / Build | Stage Directory | Bound Feature-Activity Modules (`modules/`) & Core Laws (`specs/`) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Stage 00** | `v0.0.0.1 (Build 1)` | `stages/stage-00-genesis/` | `specs/ui/design-tokens.md`, `specs/verification/test-oracles.md`, `ARCHITECTURE.md` | 🟢 Complete |
| **Stage 01** | `v0.0.0.2 (Build 2)` | `stages/stage-01-crypto-bedrock/` | `specs/crypto/key-hierarchy.md`, `specs/crypto/encryption-layers.md` | 🟢 Complete |
| **Stage 02** | `v0.0.0.3 (Build 3)` | `stages/stage-02-login-gateway/` | `modules/01-login-gateway/`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md` | 🟢 Complete |
| **Stage 03** | `v0.0.0.4 (Build 4)` | `stages/stage-03-vault-dashboard/` | `modules/02-vault-dashboard/01-active-tab-and-list/`, `specs/network/wire-contracts.md`, `specs/crypto/encryption-layers.md` | 🟢 **ACTIVE LEADING EDGE** |
| **Stage 04** | `v0.0.0.5 (Build 5)` | `stages/stage-04-settings-hub-base/` | `modules/06-settings/00-settings-hub/`, `specs/ui/design-tokens.md` | ⚪ Queued |
| **Stage 05** | `v0.0.0.6 (Build 6)` | `stages/stage-05-settings-sections-suite/` | `modules/06-settings/{01,02,03,04,05,06,07,08}/`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md` | ⚪ Queued |
| **Stage 06** | `v0.0.0.7 (Build 7)` | `stages/stage-06-dashboard-polish-and-lock/` | `modules/02-vault-dashboard/{02,04}/`, `modules/05-lock-enclave/01-pin-and-biometric-pad/`, `specs/crypto/encryption-layers.md` | ⚪ Queued |
| **Stage 07** | `v0.0.0.8 (Build 8)` | `stages/stage-07-micro-totp-engine/` | `modules/02-vault-dashboard/03-view-item-and-totp/`, `specs/crypto/key-hierarchy.md` | ⚪ Queued |
| **Stage 08** | `v0.0.0.9 (Build 9)` | `stages/stage-08-generator-suite/` | `modules/04-generator-suite/{01,02}/` | ⚪ Queued |
| **Stage 09** | `v0.0.0.10 (Build 10)` | `stages/stage-09-inpage-shadow-autofill/` | `modules/03-inpage-autofill/{01,02}/`, `specs/autofill/autofill-mechanics.md` | ⚪ Queued |
| **Stage 10** | `v0.0.1.0 (Build 11)` | `stages/stage-10-mv3-router-and-release/` | `modules/06-settings/{09,10}/`, `specs/network/wire-contracts.md`, `specs/crypto/key-hierarchy.md` | ⚪ **META-PHASE 1 CULMINATION** |

---

## 2. Active Stage Pointer

- **Current Active Stage:** `Stage 03: Vault Dashboard & Basic Sync`
- **Location:** `.agents/skills/project/stages/stage-03-vault-dashboard/prompt.md`


---

## 3. The Molt Protocol (Strictly Scoped Pruning)

When Stage XX satisfies its verification gate and merges to `main`:
1. Remove **ONLY** `.agents/skills/project/stages/stage-XX/`. Never remove files inside `modules/` or `specs/`.
2. Mark Stage XX as `PRUNED (Commit <hash>)` in the table above and advance the Active Stage Pointer to the next lowest directory in `stages/`.

---

## 4. Meta-Phase 1 Culmination & Phase 2 Handoff Protocol

Stage 10 lands on **`v0.0.1.0` (Build 11)**, marking the formal completion of **Meta-Phase 1: Extension Core & Sovereign Parity**. Upon satisfying the Stage 10 Cloud CI gate and release tagging:
1. Meta-Phase 1 is sealed into Git release tags (`v0.0.1.0`).
2. An automated synthesis and handoff protocol evaluates the ground state of the extension.
3. A brand-new Meta-Phase 2 roadmap is authored, transitioning into advanced agentic orchestration, biometric WebAuthn enclave syncing, decentralized p2p vault sharing, and local LLM autofill inference.
