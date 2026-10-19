# Screen Manifest & Visual Assets Mapping

Maps the high-resolution UI screens in `docs/stitch/` to user-facing documentation topics:

| Screen File | Title & View | User Documentation Topic | Key Invariant to Highlight |
| :--- | :--- | :--- | :--- |
| `screen_1_login.png` | Server Gateway & Master Login | [Installation & Setup] | Cannot create accounts here; requires pre-existing server `hu-` key. |
| `screen_2_dashboard.png` | Active Tab Logins | [Overview & Autofill] | Extension automatically surfaces logins matching the current active browser tab. |
| `screen_2_dashboard_bitwarden.png` | Vault Browser (All Items & Pods) | [Vault Management] | Filter by Passwords, Secure Notes, Cards, SSH Keys, and Collections/Pods. |
| `screen_2c_dashboard_quick_menu.png` | Quick Action Menu | [Navigation] | One-click access to Lock Vault, Sync Now, and Generator. |
| `screen_3_view_item.png` | Item Detail & Micro-TOTP | [Micro-TOTP Authenticator] | Eye-beside-Copy ergonomics; animated SVG circular countdown ring. |
| `screen_4_generator.png` | Credential Generator | [Password & Passphrase Generator] | Diceware passphrases and high-entropy character sliders with CSPRNG entropy. |
| `screen_5_generator_history.png` | Generator History | [Password History] | Temporary in-memory log of generated passwords prevents lost credentials. |
| `screen_6_edit_item.png` | Add / Edit Vault Item | [Vault Management] | Custom fields (text, hidden, boolean), URIs, and notes. |
| `screen_7_inpage_overlay.png` | In-Page Closed Shadow Overlay | [Autofill & Shortcuts] | Closed Shadow DOM isolation defeats page-level XSS; `Ctrl+Shift+L` instant fill. |
| `screen_8_lock_screen.png` | Quick-Unlock PIN View | [Security & Auto-Lock] | Memory zeroization on lock; rapid unlock via 4-8 digit numeric PIN. |
| `screen_9_settings_hub.png` | Settings Hub | [Settings] | Auto-lock timeout intervals and sync triggers. |
| `screen_10_account_security.png` | Account & Security Hub | [Security & Auto-Lock] | Fingerprint verification, panic wipe, and master session management. |
| `screen_11_autofill_settings.png` | Autofill & Match Detection | [Autofill & Shortcuts] | Base Domain vs Host match detection rules and overlay badge toggles. |
