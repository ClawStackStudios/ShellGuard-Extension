# 06.10 — About ShellGuard & Enclave Verification (`screen_20a_pinned`, `screen_20b_expanded`)

**Visual & Markup Oracles (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_20a_about_pinned.png`, `docs/stitch/screen_20b_about_expanded.png`, `docs/stitch/screen_20a_about_pinned.html`, and `docs/stitch/screen_20b_about_expanded.html`. Every visual card across both the Pinned Popup and Expanded Side Panel viewports is mandatory.

**Subterranean Invariants:**
The Pinned View (`20a`) surfaces the extension version (`chrome.runtime.getManifest().version`), the existence axiom (*"Your reef. Your keys. Your vault. In your browser."*), external links (`GitHub Source Repository`, `Official Documentation`, `Self-Hosted Server Console`, `Rate on Chrome Web Store`), and the `Enclave Diagnostics & Health` route, which runs an interactive live self-test verifying service worker responsiveness, `ShellGuardSessionVault` non-extractability (`key.extractable === false`), and Rule 4 memory zeroization latency.

The Expanded View (`20b`) renders the full **2×2 Cryptographic Enclave Specification** (`WebCrypto HKDF-SHA256`, `AES-GCM-256 with AAD Record Binding`, `Closed Shadow DOM mode: closed`, `Volatile Session Zeroization`), build commit provenance, and `Responsible Disclosure & Security Advisories`. The extension guarantees zero third-party telemetry, analytics, or external network beacons under a strict `connect-src` Content Security Policy limited solely to the operator's configured ShellGuard server.
