# Stage 03 — Vault Dashboard & Basic Sync (`v0.0.0.4` • Build 4)

**Target Oracles:**
- `.agents/skills/project/modules/02-vault-dashboard/01-active-tab-and-list/spec.md` (`screen_2_dashboard.png`, `screen_2_dashboard_bitwarden.png`)
- `.agents/skills/project/specs/network/wire-contracts.md`
- `.agents/skills/project/specs/crypto/encryption-layers.md`

**Task A [Basic Delta Sync & Local Vault Storage] & Task B [Bitwarden Dashboard Carapace]:**
Implement initial delta synchronization querying `/api/sync` on login and tab focus. Decrypt item ciphertext envelopes client-side via Stage 01's AES-GCM-256 engine with AAD validation; persist encrypted envelopes in `chrome.storage.local` to survive worker sleep cycles while preserving the zero-disk plaintext invariant.

Build the Bitwarden-pattern Vault Dashboard (`Screens 2 & 2B`): pinned Carapace Header (`ShellGuard`, emerald `SYNCED` badge, `+ New` button, popout trigger, avatar badge), search bar with live item count (`Search vault (N items)...`), active-tab URI matching section (`Matching Logins for <domain>`), high-density credential cards with Favicon/initial badge, Title, Username, Eye-beside-Copy password row, and compact `Fill` CTA, anchored by the pinned 4-tab bottom navigation dock (`Vault`, `Generator`, `Send`, `Settings`).
