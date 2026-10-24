# 06.01 — Account & Security Settings (`screen_10_account_security`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_10_account_security.png` and `docs/stitch/screen_10_account_security.html`. Every visual control, `FAST UNLOCK OPTIONS` (`Unlock with Biometrics`, `Unlock with PIN`, `Require Master Key on Browser Restart`), `Inactivity Timeout` chips (`1m`, `5m`, `15m`, `1h`, `On Close`), `Timeout Action` (`Lock Vault` vs `Full Zeroize`), `Clear Clipboard Timeout` dropdown, and `Security Fingerprint Phrase` (`VERIFIED`) visible in the oracle is mandatory.

**Subterranean Invariants:**
Toggling `Unlock with Biometrics` or `Unlock with PIN` requires an active unlocked session (or master key challenge) to wrap the session Master PRK inside `chrome.storage.session`; enabling `Require Master Key on Browser Restart` forces complete purge of any wrapped session key on `chrome.runtime.onStartup` so cold browser launches always require Screen 1 authentication. The `Inactivity Timeout` selector (`1m`, `5m`, `15m`, `1h`, `On Close`) registers a persistent `chrome.alarms` watchdog reset on user interaction; when fired, `Lock Vault` flushes `ShellGuardSessionVault` while retaining encrypted local storage, whereas `Full Zeroize` wipes both session RAM and all `chrome.storage.local` ciphertext envelopes.

The `Clear Clipboard Timeout` dropdown (`10s`, `30s`, `1m`, `5m`, `Never`) governs the background alarm duration after any credential copy action. The `Security Fingerprint Phrase` (`VERIFIED`) deterministically hashes the account's public identity and Master PRK verification token via SHA-256 into a 5-word EFF dictionary phrase, enabling visual out-of-band MITM verification against ShellGuard Web and Mobile clients.
