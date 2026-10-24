# 06.08 — Trash & Memory Shredder (`screen_18_trash_shredder`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_18_trash_shredder.png` and `docs/stitch/screen_18_trash_shredder.html`. Every visual element, segmented switcher (`❄️ Archive` vs `🗑️ Trash`), `30-Day Auto-Purge Policy` banner, retention queue rows with `Deleted Xd ago • Expires in Yd` badges, `Restore` and `[🗑️]` triggers, and full-width `🗑️ Empty Trash & Shred Memory Now` button visible in the oracle is mandatory.

**Subterranean Invariants:**
The top segmented control switches between `Archive (Cold Storage)` and `Trash (30-Day Purge)`. Soft-deleted items record a cryptographic `deletedAt` timestamp inside their AAD-bound payload and display live countdown badges (`Deleted 12d ago • Expires in 18d`, escalating to Coral Red when $\le 5\text{d}$ remain); a daily background `chrome.alarms` sweep automatically purges any record where `Date.now() - deletedAt >= 30 days`.

Clicking `Restore` clears `deletedAt`, re-encrypts the record with a fresh IV into its original Pod, and restores it to active search/autofill indices. Clicking an individual item's `[🗑️]` icon or the full-width `[🗑️ Empty Trash & Shred Memory Now]` button deletes the ciphertext envelopes from `chrome.storage.local`, pushes a signed tombstone delta to the server, and overwrites the corresponding in-memory buffers inside the offscreen enclave (`ZEROIZATION_ENGINE : ENFORCED`).
