# 05.01 — Vault Quick Lock, PIN & Biometric Pad (`screen_8_lock_screen`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_8_lock_screen.png` and `docs/stitch/screen_8_lock_screen.html`. Every visual element, `• VAULT ENCRYPTED` pill, glowing padlock emblem, 6-digit PIN indicator dots, 3×4 tactile keypad with WebAuthn biometric button and backspace, `Unlock with Master Password →` link, and `🔒 ZEROIZED MEMORY ACTIVE • AES-256-GCM SESSION KEY FLUSHED` footer visible in the oracle is mandatory.

**Subterranean Invariants:**
When the vault enters the locked state (`🔒 ZEROIZED MEMORY ACTIVE • AES-256-GCM SESSION KEY FLUSHED`), all decrypted vault indices, plaintext caches, and active `CryptoKey` handles in `ShellGuardSessionVault` are purged from memory. If the operator enabled PIN or WebAuthn fast-unlock, the offscreen enclave retains only an ephemeral wrapped Master PRK envelope inside `chrome.storage.session` encrypted under a key derived from the 6-digit PIN (via PBKDF2-SHA256, 600,000 iterations + random salt) or bound to a hardware WebAuthn PRF / credential assertion.

Entering the 6th digit on the tactile 3×4 keypad (or tapping the bottom-left biometric key) attempts to unwrap the session PRK and re-expand the 10 domain `CryptoKey` handles into `ShellGuardSessionVault`. Three consecutive failed PIN or biometric attempts immediately destroy the `chrome.storage.session` wrapped envelope and force fallback to `Unlock with Master Password →` (Screen 1), defeating brute-force keypad enumeration.
