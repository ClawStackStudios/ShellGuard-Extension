# 04.02 — Volatile Generator History (`screen_5_generator_history`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_5_generator_history.png` and `docs/stitch/screen_5_generator_history.html`. Every visual element, item counter pill (`10 items`), volatile session advisory banner, syntax-colored history cards with timestamps and type badges (`PASSWORD`, `USERNAME`, `PASSPHRASE`), and sticky footer (`🗑 Clear History`, `Close`) visible in the oracle is mandatory.

**Subterranean Invariants:**
Generated credentials logged in `Generator History` reside exclusively in volatile session memory (`chrome.storage.session` encrypted under the ephemeral session key, or offscreen enclave RAM) capped at a 50-item FIFO ring buffer; writing generator history to persistent disk (`chrome.storage.local` or unencrypted IndexedDB) is a critical zero-knowledge violation. Each history card records the syntax-colored secret, generation timestamp, and mode badge (`PASSWORD`, `PASSPHRASE`, `USERNAME`) to prevent credential loss when target registration forms refresh unexpectedly.

Invoking `[🗑️ Clear History]` or triggering any vault lock event (manual lock, inactivity timeout, or browser close) immediately overwrites and zeroizes the entire history buffer in RAM, resetting the header badge counter (`🕒 0`) and leaving zero forensic trace.
