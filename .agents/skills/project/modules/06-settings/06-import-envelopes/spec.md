# 06.06 — Import Credentials & Envelopes (`screen_16_import_credentials`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_16_import_credentials.png` and `docs/stitch/screen_16_import_credentials.html`. Every visual control, `Target Pod` selector, `Source Password Manager / File Type` dropdown, local-memory dropzone (`Supports .json, .csv, .1pux, .kdbx`), and `Duplicate Handling Strategy` (`Skip`, `Overwrite`, `Duplicate`) visible in the oracle is mandatory.

**Subterranean Invariants:**
File ingestion (`.json`, `.csv`, `.1pux`, `.kdbx` from Bitwarden, 1Password, KeePassXC, Chrome, or ShellGuard backups) executes 100% inside isolated client RAM via `FileReader` / `ArrayBuffer` streams; raw import files never touch `chrome.storage.local` or network sockets. The parser normalizes foreign schemas into Zod-validated ShellGuard item structures, assigns them to the selected `Target Pod` envelope, and applies the chosen `Duplicate Handling Strategy` (`Skip` matching URI+username pairs, `Overwrite` existing records with incremented revision, or `Duplicate` with new v4 UUIDs).

Prior to committing any imported record, the enclave executes a mandatory **Dry-Run Signature & Encryption Audit** in volatile memory—deriving the target domain keys, encrypting each record with fresh 96-bit IVs and `uuid:namespace` AAD bindings, and verifying test decryption—before atomically writing the ciphertext batch and zeroizing the source `ArrayBuffer`.
