---
trigger: always_on
---

# Git Hygiene & Attribution

## 1. Branch Isolation
- Never commit directly to `main`. Every task or feature develops on a scoped branch: `git checkout -b <type>/<short-desc>`.
- One task = one branch.

## 2. Two-Layer Conventional Commits
- Commit messages must follow Conventional Commits format with mandatory two-layer attribution trailers:
  ```
  <type>(<scope>): <imperative summary under 72 chars>

  User: <architectural intent, specification, or design directive>
  AI: <concrete implementation details, tests, or documentation alignment>
  ```
- Forbidden operations: `git push --force` or `--force-with-lease` on public branches.

## 3. Host Preservation & Cloud CI Gate
- Host CPU/RAM is constrained. Never run heavy local compilation or long-running test suites on host.
- Run instant lint and docs drift audits locally; offload packaging and tests to GitHub Actions.
