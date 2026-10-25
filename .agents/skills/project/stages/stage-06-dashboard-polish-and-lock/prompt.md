# Stage 06 — Dashboard Polish, Attachments, Detail View & Lock Screen (`v0.0.0.7` • Build 7)

**Target Oracles:**
- `.agents/skills/project/modules/02-vault-dashboard/02-quick-actions-flyout/spec.md` (`screen_2c_dashboard_quick_menu.png`)
- `.agents/skills/project/modules/02-vault-dashboard/04-add-edit-item/spec.md` (`screen_6_edit_item.png`)
- `.agents/skills/project/modules/05-lock-enclave/01-pin-and-biometric-pad/spec.md` (`screen_8_lock_screen.png`)
- `.agents/skills/project/specs/crypto/encryption-layers.md`

**Task A [Item CRUD, Attachments & Lock Enclave Engine] & Task B [Carapace Polish & Lock Screen]:**
Implement full vault item mutation lifecycle: add, edit, and soft-delete operations synced to `/api/vault/items`, custom fields support (Text, Hidden, Checkbox, Linked), and encrypted attachment upload/download via AES-GCM-256 with AAD record binding. Implement session lock enforcement on inactivity timeout or manual trigger.

Build the interactive dashboard additions and Lock Screen: 3-Dots Quick Actions Menu flyout (`Screen 2C`), Add/Edit Item modal (`Screen 6` with live password generator entropy bar and Eye-beside-Action rows), and the Lock Enclave PIN Keypad & WebAuthn Biometric unlock screen (`Screen 8`).
