# 06.07 — Export Vault Envelopes (`screen_17_export_vault`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_17_export_vault.png` and `docs/stitch/screen_17_export_vault.html`. Every visual control, `Export Scope` dropdown (`Entire Vault` vs single Pod), `File & Cipher Format` selector (`ShellGuard Encrypted JSON (.json)`), zero-knowledge advisory card, and `Master Password Challenge` input visible in the oracle is mandatory.

**Subterranean Invariants:**
Vault export is gated behind a mandatory **Master Password Challenge** (`hu-` key re-entry; active session PINs or `lb-` agent keys are strictly rejected). Verifying the master key derives a dedicated export key via HKDF-SHA256 (`ShellGuard-Domain-export`) to package the selected `Export Scope` (`Entire Vault` or single Pod) into the default `ShellGuard Encrypted JSON (.json)` envelope protected by AES-GCM-256 with full AAD record integrity.

Selecting an unencrypted format (`.csv`) triggers a high-friction destructive warning requiring explicit operator confirmation before serializing plaintext into a transient `Blob` URL that is immediately revoked (`URL.revokeObjectURL`) and zeroized from memory once the browser download stream completes.
