# 02.04 — Add / Edit Login Credential (`screen_6_edit_item`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_6_edit_item.png` and `docs/stitch/screen_6_edit_item.html`. Every visual control, top bar (`Cancel`, `• Edit Login`, `Save`), `Item Name` and `Vault Pod` selector, password row with `[👁]` left of `[⚡]` and under-stroke entropy meter (`104 bits • cryptographically strong • 0 breaches`), `Authenticator Key (TOTP Seed)` with QR scan button, and `AUTOFILL & NETWORK` URI card visible in the oracle is mandatory.

**Subterranean Invariants:**
The credential editor enforces the **Eye-beside-Action** cluster (`[👁]` unmask toggle immediately left of `[⚡]` inline generator trigger) and computes real-time under-stroke Shannon/combinatorial entropy diagnostics (`104 bits • cryptographically strong • 0 breaches`) on every keystroke purely in client memory without transmitting password hashes to external APIs. The `Authenticator Key (TOTP Seed)` field validates Base32/otpauth URI syntax locally, while its right-aligned `[📷]` scanner trigger captures and parses QR codes from the active tab viewport via `chrome.tabs.captureVisibleTab` inside the offscreen canvas without external network calls.

Clicking `[Save]` validates the form payload via Zod, assigns or preserves the immutable v4 `uuid`, binds the selected `Vault Pod` compartment, and dispatches the plaintext structure to the offscreen enclave. The enclave encrypts the payload using AES-GCM-256 with a newly generated 12-byte random IV and strict Additional Authenticated Data (`AAD = uuid || ":" || namespace`), increments the monotonic revision counter, persists the ciphertext envelope to `chrome.storage.local`, and triggers a non-blocking delta sync with the ShellGuard server.
