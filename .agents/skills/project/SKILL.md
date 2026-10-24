---
name: project
description: Deterministic multimodal reverse-build harness for ShellGuard-Extension. Pairs Stitch visual screenshot oracles with 2-paragraph probability-collapse specifications across feature-activity modules and sliding release stages.
---

# Project Skill — Deterministic Multimodal Reverse-Build Harness

> **Core Axiom:** Screenshots (`docs/stitch/*.png` + `.html`) hold 100% of the visual and control truth; `modules/<activity>/spec.md` and `specs/<domain>/` hold 100% of the subterranean cryptographic, storage, and latency invariants in $\le 2$ paragraphs of probability-collapse prose.

## 1. The Dual-Channel Execution Protocol

When building or modifying any stage or feature activity, the agent executes four deterministic steps:
1. **Locate the Target Slice:** Read `meta-prompt-antigravity.md` to identify the active leading-edge directory in `stages/` (the lowest-numbered directory), or navigate directly to the relevant feature-activity directory in `modules/`.
2. **Inspect the Visual Oracle First (`view_file`):** Every `modules/<activity>/spec.md` opens with a mandatory link to its `docs/stitch/screen_*.png` and `.html` files. Invoke `view_file` on the screenshot **before writing any code** so every toggle, badge, segmented control, and layout boundary is locked visually.
3. **Decompress the Probability-Collapse Prose:** Read the $\le 2$ paragraphs of high-density subterranean invariants in `spec.md` and any linked cross-cutting law in `specs/`. Every clause is **Generative** (unfolds across UI, Zod message bus, offscreen worker, and storage), **Falsifiable** (ignoring it causes a specific test or audit failure), and **Decompressible** (expands into full implementation without boilerplate templates).
4. **Verify & Molt ("Built for the Delete Key"):** Run the sub-second local gate (`npm run lint && npm run typecheck && python3 scripts/audit_docs_drift.py`), push to a scoped branch for GitHub Actions Cloud CI verification, squash-merge to `main`, and prune **ONLY the completed `stages/stage-XX/` directory** (`modules/` and `specs/` remain permanent ground truth).

## 2. Three-Pillar Directory Cartography

```text
.agents/skills/project/
├── SKILL.md                                     # Entrypoint & Dual-Channel Protocol
├── meta-prompt-antigravity.md                   # Sliding release router & stage-to-module index
│
├── modules/                                     # PILLAR 1: Feature-Activity Screen Modules (21 Modules)
│   ├── 01-login-gateway/spec.md                 # -> screen_1_login.{png,html}
│   ├── 02-vault-dashboard/
│   │   ├── 01-active-tab-and-list/spec.md       # -> screen_2_dashboard*.{png,html}
│   │   ├── 02-quick-actions-flyout/spec.md      # -> screen_2c_dashboard_quick_menu.{png,html}
│   │   ├── 03-view-item-and-totp/spec.md        # -> screen_3_view_item.{png,html}
│   │   └── 04-add-edit-item/spec.md             # -> screen_6_edit_item.{png,html}
│   ├── 03-inpage-autofill/
│   │   ├── 01-shadow-dropdown-overlay/spec.md   # -> screen_7_inpage_overlay.{png,html}
│   │   └── 02-glyph-states-and-inset/spec.md    # -> screen_13_inpage_glyph_states.{png,html}
│   ├── 04-generator-suite/
│   │   ├── 01-generator-deck/spec.md            # -> screen_4_generator.{png,html}
│   │   └── 02-volatile-history/spec.md          # -> screen_5_generator_history.{png,html}
│   ├── 05-lock-enclave/
│   │   └── 01-pin-and-biometric-pad/spec.md     # -> screen_8_lock_screen.{png,html}
│   └── 06-settings/
│       ├── 00-settings-hub/spec.md              # -> screen_9_settings_hub.{png,html}
│       ├── 01-account-and-security/spec.md      # -> screen_10_account_security.{png,html}
│       ├── 02-autofill-and-shadow-dom/spec.md   # -> screen_11_autofill_settings.{png,html}
│       ├── 03-notifications-and-prompts/spec.md # -> screen_12*.{png,html}
│       ├── 04-vault-operations-hub/spec.md      # -> screen_14*.{png,html}
│       ├── 05-pods-and-compartments/spec.md     # -> screen_15_pods_manager.{png,html}
│       ├── 06-import-envelopes/spec.md          # -> screen_16_import_credentials.{png,html}
│       ├── 07-export-vault/spec.md              # -> screen_17_export_vault.{png,html}
│       ├── 08-trash-and-shredder/spec.md        # -> screen_18_trash_shredder.{png,html}
│       ├── 09-appearance-and-themes/spec.md     # -> screen_19*.{png,html}
│       └── 10-about-and-enclave-audit/spec.md   # -> screen_20*.{png,html}
│
├── specs/                                       # PILLAR 2: Cross-Cutting Core Laws (<=2 Paragraphs Each)
│   ├── crypto/{key-hierarchy,encryption-layers}.md
│   ├── autofill/autofill-mechanics.md
│   ├── ui/design-tokens.md
│   ├── network/wire-contracts.md
│   └── verification/test-oracles.md
│
└── stages/                                      # PILLAR 3: Sliding Release Timeline (Pruned on Merge)
    └── stage-00-genesis/ ... stage-10-web-store-release/
```
