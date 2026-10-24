# Stage 08 — Server Delta Sync, Settings Suite, Envelopes & Shredder (`v0.0.1.8` • Build 9)

**Target Oracles:**
- `.agents/skills/project/modules/06-settings/00-settings-hub/spec.md` (`screen_9_settings_hub.png`)
- `.agents/skills/project/modules/06-settings/01-account-and-security/spec.md` (`screen_10_account_security.png`)
- `.agents/skills/project/modules/06-settings/02-autofill-and-shadow-dom/spec.md` (`screen_11_autofill_settings.png`)
- `.agents/skills/project/modules/06-settings/04-vault-operations-hub/spec.md` (`screen_14a_vault_operations.png`)
- `.agents/skills/project/modules/06-settings/06-import-envelopes/spec.md` (`screen_16_import_credentials.png`)
- `.agents/skills/project/modules/06-settings/07-export-vault/spec.md` (`screen_17_export_vault.png`)
- `.agents/skills/project/modules/06-settings/08-trash-and-shredder/spec.md` (`screen_18_trash_shredder.png`)

**Task A [Mutex Delta Sync & Envelope I/O] & Task B [Settings & Vault Operations Suite]:**
Implement the mutex-serialized `/api/sync` delta reconciliation engine, client-side multi-format importer (`.json`, `.csv`, `.1pux`, `.kdbx` with dry-run AAD signature audit), Master-Password-challenged HKDF encrypted exporter, and 30-day soft-delete trash sweeper with immediate memory shredder. Build the corresponding Settings Hub (`Screen 9`), Account Security (`Screen 10`), Autofill Settings (`Screen 11`), Vault Operations Hub (`Screen 14/14A`), Import (`Screen 16`), Export (`Screen 17`), and Trash/Archive Shredder (`Screen 18`) views.
