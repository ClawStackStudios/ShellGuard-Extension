# Stage 05 — Granular Settings Sections Suite (`v0.0.0.6` • Build 6)

**Target Oracles:**
- `.agents/skills/project/modules/06-settings/01-account-and-security/spec.md` (`screen_10_account_security.png`)
- `.agents/skills/project/modules/06-settings/02-autofill-and-shadow-dom/spec.md` (`screen_11_autofill_settings.png`)
- `.agents/skills/project/modules/06-settings/03-notifications-and-prompts/spec.md` (`screen_11_autofill_settings.png`)
- `.agents/skills/project/modules/06-settings/04-vault-operations-hub/spec.md` (`screen_14a_vault_operations.png`)
- `.agents/skills/project/modules/06-settings/05-pods-and-compartments/spec.md` (`screen_15_pods_manager.png`)
- `.agents/skills/project/modules/06-settings/06-import-envelopes/spec.md` (`screen_16_import_credentials.png`)
- `.agents/skills/project/modules/06-settings/07-export-vault/spec.md` (`screen_17_export_vault.png`)
- `.agents/skills/project/modules/06-settings/08-trash-and-shredder/spec.md` (`screen_18_trash_shredder.png`)
- `.agents/skills/project/specs/network/wire-contracts.md`
- `.agents/skills/project/specs/crypto/key-hierarchy.md`

**Task A [Settings State Persistence & Handlers] & Task B [Sub-Screen Carapace Suite]:**
Implement settings state management: auto-lock duration timer configuration, PIN code hash storage, scoped Pod access policies (`LB-RW`, `LB-EXEC`, `HUMAN ONLY`, `LOCKED`), client-RAM multi-format importer (`.json`, `.csv`, `.1pux`, `.kdbx` with dry-run AAD signature audit), Master-Password-challenged HKDF encrypted exporter, and 30-day trash auto-purge with RAM shredder.

Build the 8 settings sub-screens to 100% visual oracle parity: Account Security (`Screen 10`), Autofill Settings (`Screen 11`), Vault Operations Hub (`Screen 14/14A`), Sovereign Pods Manager (`Screen 15`), Import Envelopes (`Screen 16`), Export Vault (`Screen 17`), and Archive/Trash Shredder (`Screen 18`).
