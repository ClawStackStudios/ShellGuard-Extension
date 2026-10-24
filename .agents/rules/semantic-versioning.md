---
trigger: model_decision
description: When updating project/application versioning, releasing builds, or applying out-of-band hotfixes
---

# Workflow: Intelligent Project Versioning & Documentation

This rule defines an automated, multi-step process for releasing a new version or applying out-of-band hotfixes for **ShellGuard-Extension**. I MUST follow this logic precisely to ensure a correct and consistent release version incrementation methodology.

---

### Step 1: Determine New Version (Work-Driven 4-Digit Logic)

My primary task is to calculate the new version number following the `MAJOR.MINOR.PATCH.REVISION` (`X.Y.Z.N`) convention. Chromium Manifest V3 explicitly supports 1 to 4 dot-separated integers (`0` to `65535` per integer). **We do not force artificial target versions**; the nature and magnitude of the actual completed work dictates which tier increments:

1. **Check for Explicit User Input:**
   - First, check if the user has provided an explicit version type or number (e.g., `major`, `minor`, `patch`, `revision`, `v0.0.0.2`, `v0.0.1.0`).
   - If yes, this is the highest priority. Proceed to calculate the new version based on this input.

2. **Infer from Implemented Work & `CHANGELOG.md`:**
   - If no explicit type is given, calculate the increment by parsing commit types and changelog entries:
     - **MAJOR (`X+1.0.0.0`)**: Triggered by breaking change indicators (`!` in commit header like `feat!:`, `refactor!:`, or `BREAKING CHANGE:` footer). Includes breaking cryptographic envelope ciphers, breaking storage schema migrations, or major ecosystem paradigm shifts.
     - **MINOR (`X.Y+1.0.0`)**: Triggered by major cohesive milestone deliverables. In ShellGuard-Extension, advances when completing an entire Meta-Phase (e.g., Meta-Phase 1 `v0.0.1.0` $\to$ Meta-Phase 2 `v0.1.0.0`).
     - **PATCH (`X.Y.Z+1.0`)**: Triggered by substantial multi-module feature clusters (`feat`), structural refactors (`refactor`), or major subsystem integrations.
     - **REVISION (`X.Y.Z.N+1`)**: Triggered by scheduled sliding stages (`v0.0.0.1`..`v0.0.0.10`), bug fixes (`fix`), maintenance (`chore`), documentation (`docs`), style (`style`), or out-of-band hotfixes.

3. **🔥 The Hotfix / Bugfix Cascading Push Invariant:**
   - When an out-of-band hotfix or bugfix patch is released **in between set planned release stages**, the hotfix **takes the next sequential version digit**, and **all planned downstream stages push forward by $+1$**:
     $$\text{Hotfix Version} = \text{Current Version} + 1 \quad (\text{e.g. } \text{v}0.0.0.8 \to \text{v}0.0.0.9)$$
     $$\text{Downstream Planned Stages} = \text{Planned Version} + 1 \quad (\text{e.g. Stage 09: } \text{v}0.0.0.9 \to \text{v}0.0.0.10)$$
   - *Example Scenario:* If currently on Stage 08 at `v0.0.0.8` and an urgent zero-day patch is required:
     - The hotfix is tagged and released as **`v0.0.0.9`**.
     - Planned Stage 09 shifts from `v0.0.0.9` $\to$ **`v0.0.0.10`**.
     - Planned Stage 10 shifts from `v0.0.0.10` $\to$ **`v0.0.0.11`** (or retains the final culmination milestone `v0.0.1.0` while internal build numbers advance).
     - `ROADMAP.md`, `meta-prompt-antigravity.md`, and `stages/` are immediately synchronized to reflect the pushed numbers, guaranteeing monotonic versioning without collisions or gaps.

4. **Ask User on Ambiguity (Fallback):**
   - ⚠️ **If my inference is ambiguous**, I **MUST NOT GUESS**.
   - Instead, I MUST ask the user for clarification. Present my analysis and provide clear choices:
     > "I have analyzed the changes in `[Unreleased]` and the version increment tier is ambiguous. Based on the work completed:
     > - **PATCH (`vX.Y.Z+1.0`):** For completed feature phases or substantial architectural fixes.
     > - **REVISION (`vX.Y.Z.N+1`):** For small adjustments, iterative stage releases, or hotfixes.
     > - **CASCADING HOTFIX (`vX.Y.Z.N+1` + downstream push):** For urgent out-of-band patches between planned stages.
     >
     > Which version increment should we apply?"

---

### Step 2: Pre-flight Check & Confirmation

Before modifying any files, perform an internal verification and present a plan to the user.

1. **Internal Verification:** Use a thinking block to confirm all necessary information read dynamically from the project:
   ```xml
   <thinking>
   1. Current version source file read (`package.json`).
   2. Current version read dynamically: [e.g., version = "0.0.0.1"]
   3. Increment type determined: [e.g., stage advance to "0.0.0.2", or hotfix push]
   4. Calculated new version: [e.g., version = "0.0.0.2"]
   5. Cascading roadmap displacement calculated: [e.g., none / stages shifted by +1]
   6. Required files are present and accessible.
   Plan is ready for execution.
   </thinking>
   ```

2. **State Your Plan:** Present the confirmed new version number and any downstream stage displacement to the user before applying changes.

---

### Step 3: Execute Core File Modifications

Once confirmed, proceed with the following precise file modifications:

1. **Update Central Version Sources:**
   - `package.json`: Update `"version": "X.Y.Z.N"`.
   - Run `npm install --package-lock-only` to update `package-lock.json`.
   - `wxt.config.ts`: Update `manifest.version: 'X.Y.Z.N'`.
   - `entrypoints/popup/App.tsx`: Update displayed version string `vX.Y.Z.N (Build N)`.
   - `tests/genesis.test.ts` (or active version test oracle): Assert `packageJson.version === 'X.Y.Z.N'`.

2. **Update `CHANGELOG.md`:**
   - Create a new version heading below `[Unreleased]` using the format `## [X.Y.Z.N] - YYYY-MM-DD`.
   - Move summarized changes from `[Unreleased]` into this section.
   - For hotfixes, clearly denote `### Fixed (Hotfix)` with context.

3. **Update `README.md` & `ROADMAP.md` Version Anchors:**
   - Update version badges and active release tables in `README.md` and `ROADMAP.md`.
   - If a cascading hotfix was applied, update all subsequent stage release targets in `ROADMAP.md` and `.agents/skills/project/meta-prompt-antigravity.md`.

---

### Step 4: 🧠 Intelligently Update Project Documentation

1. **Analyze Changes:** Review finalized changelog entries.
2. **Identify Affected Docs:** Scan `ARCHITECTURE.md`, `SECURITY.md`, `specs/`, and user guides.
3. **Run Documentation Drift Audit:**
   ```bash
   python3 scripts/audit_docs_drift.py
   ```
   Must exit `0` before any release or hotfix commit.

---

### Step 5: Prepare Git Commit Message

Commit following the two-layer attribution format from `.agents/rules/git-hygiene.md`:

```
chore(release): bump version to vX.Y.Z.N (Build N) --release vX.Y.Z.N

User: <intent/direction provided by human>
AI: <files updated, tests verified, and documentation synchronized>
```

For hotfixes:
```
fix(hotfix): <imperative summary under 72 chars> [vX.Y.Z.N]

User: <urgent fix directive and cascading version instruction>
AI: <fix implementation details, version bump to vX.Y.Z.N, and downstream roadmap displacement by +1>
```

---

## 🚫 Versioning Anti-Patterns to Avoid

1. **Never Hardcode Static Version Assumptions**: Always read the live version dynamically from `package.json`. Never assume a hardcoded starting number.
2. **Never Allow Manifest Version Mismatches**: `package.json`, `wxt.config.ts`, and generated `manifest.json` must be 100% in sync. Chrome Web Store rejects uploads with non-monotonic or conflicting versions.
3. **Never Swallow Hotfixes Without Pushing the Roadmap**: Inserting a hotfix without displacing planned downstream stages causes version collisions or duplicate version releases. Always increment the versions ahead by $+1$.
4. **Never Guess Ambiguous Increments**: If changes do not cleanly map to a single SemVer tier, always ask the user.
5. **Never Ignore the Downstream Blast Radius**: If a version bumps in `ROADMAP.md`, update `meta-prompt-antigravity.md` and stage prompt headers so the SSoT drift audit remains green.

---

## 🛡️ Version Conflict Resolution Matrix

| Scenario | Resolution Strategy |
| :--- | :--- |
| **Out-of-band Hotfix Between Stages** | Hotfix consumes `vX.Y.Z.N+1`. All downstream planned stages in `ROADMAP.md` and `meta-prompt-antigravity.md` shift forward by $+1$. |
| **Web Store Store Package Rejection** | Increment the 4th digit: `vX.Y.Z.N` ➔ `vX.Y.Z.N+1`. |
| **Simultaneous Breaking + Non-Breaking Changes** | Higher-precedence tier wins: `MAJOR` (`X+1.0.0.0`) supersedes `MINOR` and `PATCH`. |
| **Meta-Phase Transition** | Mark culmination (e.g. `v0.0.1.0`), seal release tag, and trigger Meta-Phase 2 handoff protocol. |
