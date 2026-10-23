---
name: project
description: Reverse-build execution harness for ShellGuard-Extension. Coordinates modular staged releases, domain oracles, and sliding-timeline prune hooks. Use when planning, executing, or verifying build stages.
---

# Project Skill — Reverse-Build Execution Harness

> Built for the delete key: stages advance sequentially along a sliding release timeline. Ground truth lives in domain specs; procedural memory lives in Git history.

## 1. Operating Model

The system operates across three structural layers:
1. **The Scheduler & State Machine (`meta-prompt-antigravity.md`):** Maps stage IDs to release tags and tracks the leading edge.
2. **The Sliding Release Timeline (`stages/`):** The lowest-numbered directory in `stages/` is always the active next stage.
3. **The Domain Oracles (`specs/`):** Immutable specifications governing crypto, autofill, UI, network, and verification.

```
[Agent Turn]
    │
    ▼ (1. Discover active stage: lowest directory in stages/)
stages/stage-XX/prompt.md
    │
    ▼ (2. Read surgical oracle anchors via search)
specs/<domain>/<spec>.md §N
    │
    ▼ (3. Build, lint, and verify via Cloud CI)
Git Feature Branch ──► Cloud CI (Green) ──► Merge to main
    │
    ▼ (4. The Molt Hook: Prune stages/stage-XX/ only)
Next stage becomes leading edge (Permanent receipt preserved in Git tag)
```

## 2. Invariable Rules of the Skill

1. **Map, Don't Tell:** Never hardcode static file paths or enumerate broad directories in prompts. Reference the domain area or symbol; use native search tools (`grep`, `find`, `view_file`) and subagents (`research`) to locate files dynamically.
2. **Surgical Anchoring:** Never dump an entire oracle into context. Reference specific anchors: `specs/crypto/key-hierarchy.md §2 (Domain Derivation)`.
3. **Strictly Scoped Pruning:** When Stage XX completes and merges to `main`, remove **ONLY `stages/stage-XX/`**. No other files are touched. Clean up stage references in `meta-prompt-antigravity.md`.
4. **Binary Task Invariant:** Every phase delivers exactly two tasks:
   - **Task A (Core Logic):** Cryptography, message routing, background worker, or data persistence.
   - **Task B (Presentation/Carapace):** Closed Shadow DOM overlay, React SPA view, or generator widget.
5. **Fail-Closed Verification:** A stage cannot be pruned until local lint passes and GitHub Actions Cloud CI is 100% green.

## 3. Directory Cartography

- `meta-prompt-antigravity.md`: Orchestration index, active stage pointer, version table.
- `stages/`: Shifting directories (`stage-00-genesis`, `stage-01-crypto-bedrock`, etc.).
- `specs/crypto/`: WebCrypto HKDF derivation, AES-GCM-256 AAD binding, IndexedDB structured cloning, LAN fallback.
- `specs/autofill/`: Co-presence gate heuristics, anti-collision offset engine (§4), closed Shadow DOM mounting, pristine prototype descriptor injection.
- `specs/ui/`: `design-tokens.md` (4 themes, typography scales, 3-tier elevation), `screen-blueprints-core.md` (Screens 1–8: login, dashboard, TOTP, generator, PIN lock), `screen-blueprints-settings.md` (Screens 9–20B: settings hub, security, autofill, notifications, vault ops, pods, import/export, trash shredder, appearance, about).
- `specs/network/`: Zod envelope wire schemas, delta sync protocols, cleartext RFC 1918 LAN carve-out.
- `specs/verification/`: Unit test oracles, tamper rejection suites, Cloud CI workflows.
