# Screen Manifest & Visual Assets Mapping

Maps the high-resolution UI screens in `docs/stitch/` to user-facing documentation topics:

| Screen File | Title & View | User Documentation Topic | Key Invariant to Highlight |
| :--- | :--- | :--- | :--- |
| `screen_1_login.png` | Server Gateway & Master Login | [Installation & Setup] | Cannot create accounts here; requires pre-existing server `hu-` key. |
| `screen_2_dashboard.png` | Active Tab Logins | [Overview & Autofill] | Extension automatically surfaces logins matching the current active browser tab. |
| `screen_2_dashboard_bitwarden.png` | Vault Browser (All Items & Pods) | [Vault Management] | Filter by Passwords, Secure Notes, Cards, SSH Keys, and Collections/Pods. |
| `screen_2c_dashboard_quick_menu.png` | Quick Action Menu | [Navigation] | One-click access to Lock Vault, Sync Now, Clone to Pod, and Generator. |
| `screen_3_view_item.png` | Item Detail & Micro-TOTP | [Micro-TOTP Authenticator] | Eye-beside-Copy ergonomics; animated SVG circular countdown ring. |
| `screen_4_generator.png` | Credential Generator | [Password & Passphrase Generator] | Diceware passphrases and high-entropy character sliders with CSPRNG entropy. |
| `screen_5_generator_history.png` | Generator History | [Password History] | Temporary in-memory log of generated passwords prevents lost credentials (Rule 4). |
| `screen_6_edit_item.png` | Add / Edit Vault Item | [Vault Management] | Custom fields (text, hidden, boolean), URIs, and under-stroke entropy meter. |
| `screen_7_inpage_overlay.png` | In-Page Closed Shadow Overlay | [Autofill & Shortcuts] | Closed Shadow DOM isolation defeats page-level XSS; `Ctrl+Shift+L` instant fill. |
| `screen_8_lock_screen.png` | Quick-Unlock PIN View | [Security & Auto-Lock] | Memory zeroization on lock; rapid unlock via 6-digit numeric PIN or WebAuthn. |
| `screen_9_settings_hub.png` | Settings Hub | [Settings] | Operator session card, auto-lock timeout intervals, and sync triggers. |
| `screen_10_account_security.png` | Account & Security Hub | [Security & Auto-Lock] | Fingerprint phrase verification, panic wipe, and master session management. |
| `screen_11_autofill_settings.png` | Autofill & Match Detection | [Autofill & Shortcuts] | Base Domain vs Host match detection rules, overlay badge toggles & fail-closed rule. |
| `screen_12a_notifications_pinned.png` | Notifications (Pinned Popup) | [Notifications & Prompts] | Compact save prompts for passkeys, new logins, password rotations, and `lb-` keys. |
| `screen_12b_notifications_expanded.png`| Notifications (Expanded View) | [Notifications & Prompts] | Target pod routing, screen anchor positioning, CIDR exclusions & live event log. |
| `screen_13_inpage_glyph_states.png` | In-Field Anti-Collision Glyphs| [Autofill & Shortcuts] | Dynamic inset formula (`DYNAMIC_INSET_RIGHT = 68px`) eliminating Bitwarden eye overlap. |
| `screen_14a_vault_operations.png` | Vault Operations Hub | [Vault Operations] | Central telemetry deck (`48 Active`, `12 Archive`, `3 Trash`) and delta sync triggers. |
| `screen_15_pods_manager.png` | Pods & Compartments Manager | [Pod Management & Agents] | Sovereign cryptographic compartments with per-pod `lb-` agent permission scopes. |
| `screen_16_import_credentials.png` | Import Credentials & Envelopes| [Import & Export] | Multi-format dropzone (`.json`, `.csv`, `.1pux`, `.kdbx`) with volatile client decryption. |
| `screen_17_export_vault.png` | Export Vault Envelopes | [Import & Export] | HKDF-bound AES-256-GCM encrypted backup envelopes with master password challenge. |
| `screen_18_trash_shredder.png` | Trash & Memory Shredder | [Vault Operations] | 30-day auto-purge retention policy countdowns and immediate volatile memory shredder. |
| `screen_19a_appearance_pinned.png` | Appearance (Pinned Popup) | [Appearance & Themes] | 4 biomorphic theme swatches, carapace width pills, and zero-leakage local favicons. |
| `screen_19b_appearance_expanded.png`| Appearance (Expanded View) | [Appearance & Themes] | Dynamic accent color bar, density switcher, typography scaling, and high-contrast chitin. |
| `screen_20a_about_pinned.png` | About (Pinned Popup) | [About & Diagnostics] | Genesis `v0.0.0.1` hero deck, sovereign axiom, and direct GitHub repository card. |
| `screen_20b_about_expanded.png` | About (Expanded View) | [About & Diagnostics] | Full ecosystem portal links, 2×2 cryptographic enclave specification & commit hash. |
