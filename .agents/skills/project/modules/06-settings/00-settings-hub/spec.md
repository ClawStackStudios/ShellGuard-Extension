# 06.00 — Settings Hub & Operator Session Card (`screen_9_settings_hub`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_9_settings_hub.png` and `docs/stitch/screen_9_settings_hub.html`. Every visual element, header (`SETTINGS`, popout `[↗]`, `• LU` badge), Operator Session Card (`Lucas (Operator)`, `ROOT`, `• Synced to Pod 04 (LAN)`, `[🔒 Lock]`), categorized navigation rows, and bottom dock visible in the oracle is mandatory.

**Subterranean Invariants:**
The Settings Hub renders live enclave telemetry inside the top Operator Session Card (`ROOT` vs `AGENT` key scope badge, active Pod sync target, transport mode `LAN`/`WAN`, and last sync delta age) alongside an isolated 1-tap `[🔒 Lock]` button that immediately flushes `ShellGuardSessionVault` and routes to Screen 8. Each navigation row dynamically reflects real-time state summaries read from the encrypted `settings` namespace (`PIN & WebAuthn active • 5 min timeout`, `Closed Shadow DOM • In-field glyph enabled`, `Default rule: Host & Port`, active server URI).

Clicking `[↗]` in the header opens the current settings route inside the Chromium Side Panel (`chrome.sidePanel.open`) or full-tab expanded view (`?view=expanded`), preserving navigation state without URL secret leakage. Triggering `Sync Vault Now` acquires the background sync mutex, performs an authenticated delta pull/push against `/api/sync`, verifies HKDF AAD tags on all incoming ciphertext envelopes before committing to `chrome.storage.local`, and updates the relative timestamp in place.
