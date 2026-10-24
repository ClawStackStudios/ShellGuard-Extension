# 06.04 — Vault Operations Hub (`screen_14_vault_operations`, `screen_14a_vault_operations`)

**Visual & Markup Oracles (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_14_vault_operations.png`, `docs/stitch/screen_14a_vault_operations.png`, `docs/stitch/screen_14_vault_operations.html`, and `docs/stitch/screen_14a_vault_operations.html`. Every visual card (`Pods & Compartments`, `Archive (Cold Storage)`, `Trash & Memory Shredder`, `Import Credentials`, `Export Vault Envelope`), telemetry counter badge, and `Real-Time Pod Sync & Gateway Telemetry` deck (`⚠️ HTTP LAN`, `Deltas: N pending`, `Sync Vault Now`) visible in the oracles is mandatory.

**Subterranean Invariants:**
The Vault Operations Hub aggregates live item counts across compartments (`Pods & Compartments`, `Archive (Cold Storage)`, and `Trash & Memory Shredder`) by scanning envelope metadata in `chrome.storage.local` without decrypting secret payloads. Selecting `Archive (Cold Storage)` views items flagged `archived: true`, which remain encrypted under their pod's HKDF domain key but are strictly omitted from content-script autofill suggestions and default global search queries until unarchived.

The `Real-Time Pod Sync & Gateway Telemetry` deck displays the active `ClawStack Gateway` endpoint with automatic RFC 1918 LAN amber badge detection, the ISO/local timestamp of the last verified sync, and the count of uncommitted local mutation deltas (`Deltas: N pending`). Clicking `[🔄 Sync Vault Now]` flushes pending delta envelopes to the server, reconciles remote revisions via highest-monotonic-revision-wins (archiving conflicted revisions into item history), and verifies every AAD signature before updating local storage.
