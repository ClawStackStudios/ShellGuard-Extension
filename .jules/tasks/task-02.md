# Task 02: Login Gateway & Session State Machine (`v0.0.0.3` • Build 3)

## Milestone
Stage 02 of Meta-Phase 1: Establishing the interactive front door of the extension.

## Target Branch
Branch from `main` $\to$ PR targeting `main`.

## Visual Oracle
- `docs/stitch/screen_1_login.png`
- `docs/stitch/screen_1_login.html`

## Files In Scope
- `src/types/auth.ts` (new)
- `src/utils/transport.ts` (new)
- `src/services/apiClient.ts` (new)
- `src/services/authService.ts` (new)
- `entrypoints/popup/components/LoginGateway.tsx` (new)
- `entrypoints/popup/App.tsx` (modified)
- `package.json` (bump to 0.0.0.3)
- `tests/network/transport.test.ts` (new)
- `tests/auth/login.test.ts` (new)

## Acceptance Criteria
1. When unauthenticated, `App.tsx` renders `LoginGateway.tsx`.
2. `LoginGateway.tsx` matches `docs/stitch/screen_1_login.html` layout: split URL bar, amber LAN pill on RFC 1918 / Tailscale, segmented upload/paste toggle, and telemetry footer.
3. Authenticating against `POST /api/auth/token` hashes the key with SHA-256, derives Master PRK via HKDF-SHA256, stores `vault_pearls` key in `ShellGuardSessionVault`, zeroizes input buffers, and switches `App.tsx` to unlocked dashboard.
4. Public WAN `http://` URLs are blocked immediately.
5. All tests in `tests/` pass; `npm run lint`, `npm run typecheck`, and `python3 scripts/audit_docs_drift.py` pass with 0 errors.
