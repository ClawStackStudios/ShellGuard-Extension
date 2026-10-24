# 02.02 — Vault Dashboard: Quick Actions Flyout (`screen_2c_dashboard_quick_menu`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_2c_dashboard_quick_menu.png` and `docs/stitch/screen_2c_dashboard_quick_menu.html`. Every flyout menu action (`Autofill`, `Favorite`, `Edit Item`, `Copy TOTP Code` with live countdown pill, `Copy Password`, `Move to Pod...`, and danger `Delete Item`), active cyan trigger highlight, and elevation border visible in the oracle is mandatory.

**Subterranean Invariants:**
Invoking `[⋮]` on any vault row mounts an elevated Tier-2 chitin flyout (`#1E252C` with `#06B6D4` active trigger ring) trapped within viewport bounds and keyboard-navigable via arrow keys and `Escape`. Executing `Autofill` dispatches the JIT fill payload to the active tab only after verifying origin parity against the item's URI rules; executing `Copy TOTP Code` or `Copy Password` writes to `navigator.clipboard` inside the user gesture and schedules an automatic background `chrome.alarms` clipboard zeroization timer (default `30s`) that overwrites the clipboard if its hash still matches the copied secret.

State mutations triggered from the flyout (`Favorite` toggle, `Move to Pod...` compartment reassignment, or soft-delete to `Trash`) re-encrypt the modified record inside the offscreen enclave using a fresh 96-bit CSPRNG IV and updated AAD binding (`uuid:namespace` — moving an item across pods or namespaces requires full AAD re-binding and GCM tag regeneration). The updated ciphertext envelope is committed atomically to `chrome.storage.local` and queued for mutex-serialized delta sync.
