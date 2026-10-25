# Stage 02 — Login Gateway & Session State Machine (`v0.0.0.3` • Build 3)

**Target Oracles:**
- `.agents/skills/project/modules/01-login-gateway/spec.md` (`screen_1_login.png`)
- `.agents/skills/project/specs/network/wire-contracts.md`
- `.agents/skills/project/specs/crypto/key-hierarchy.md`

**Task A [Session State Machine & Auth Handshake] & Task B [Screen 1 Carapace Presentation]:**
Implement the tri-state vault session state machine (`LOGGED_OUT`, `AUTHENTICATING`, `UNLOCKED`, `LOCKED`) managing popup view routing and session lifecycle. Connect to the configured server endpoint via split Protocol / Host / Port (`https://` | `192.168.1.50` | `:8443`), dynamically activating the amber LAN transport warning pill for RFC 1918 / Tailscale addresses. Query server `/api/salt`, retrieve Bearer tokens on authentication, derive the Master PRK via HKDF-SHA256 using Stage 01's cryptographic engine, and store non-extractable session handles inside `ShellGuardSessionVault`.

Build the Login Gateway view (`Screen 1`) to 100% visual oracle parity (`docs/stitch/screen_1_login.html`): segmented toggle between `Upload Identity File` (`.json` dropzone) and `Paste ClawKey` (`hu-` sovereign or `lb-` agentic), amber LAN HTTP pill, error state banners (invalid key format, unreachable server, self-signed TLS exception helper), and telemetry footer badge (`🔒 HKDF-SHA256 • AES-GCM-256 • Axiom 1 Active`).
