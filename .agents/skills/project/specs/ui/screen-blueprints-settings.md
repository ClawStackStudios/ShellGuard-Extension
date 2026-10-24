# 🎨 UI Oracle: Settings, Vault Operations & Enclave Blueprints (Screens 9–20B)

> **Authoritative Specification:** Technical and visual blueprints for the Settings Hub, Security Enclave, Vault Operations, Sovereign Pods, Import/Export, Trash Shredder, Appearance Engine, and About Screen.

---

## §1. Screen 9: Settings Hub & Operator Session Card
- **Stitch ID:** `2094158a10cf487ebfdf90a36a346492` | **Asset:** `docs/stitch/screen_9_settings_hub.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Header Bar:** Category title `SETTINGS`, popout icon `[↗]`, and active account tag (`LU`).
  - **Operator Session Card:**
    - Operator identifier: `Lucas (Operator)` with emerald `ROOT` badge.
    - Server sync status: `• Synced to Pod 04 (LAN)` with live heartbeat.
    - 1-tap `[🔒 Lock]` button in Hydro Coral `#E4048A` triggering immediate session zeroization.
  - **Categorized Navigation Matrix (Tier 1 Chitin Cards):**
    - *Security & Encryption:* `Security & Auto-Lock` (PIN & WebAuthn active • 5 min timeout) and `Agentic Access Keys` (`lb-` sub-keys).
    - *Autofill & Browser Integration:* `Autofill & Shadow DOM` and `URI Match Heuristics` (Default rule: Host & Port).
    - *Reef Ecosystem & Server:* `Server Connection` (`http://192.168.1.50:8080`) and `Sync Vault Now` (Last synced: 2 mins ago).
    - *Appearance & Customization:* Deep-link to theme swatches and display settings.
    - *About & Diagnostics:* Deep-link to enclave verification.
  - **Pinned Bottom Nav Dock:** `[🗄️ Vault]`, `[🎲 Generator]`, `[⚙️ Settings]` (Active).

---

## §2. Screen 10: Account & Security Settings
- **Stitch ID:** `33e4597ffb1e45b7ba9791e0b7036305` | **Asset:** `docs/stitch/screen_10_account_security.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Top Bar:** Back link `< Settings` in cyan font-mono, title `Account & Security`.
  - **Fast Unlock Toggles:**
    - `Unlock with WebAuthn / Biometrics` (TouchID, Windows Hello, YubiKey) [ON].
    - `Unlock with 6-Digit PIN` [ON] with *Change PIN* link.
  - **Vault Timeout Selector:**
    - Preset jump chips: `[ Immediate ]`, `[ 1m ]`, `[ 5m ]` (Active), `[ 15m ]`, `[ On Browser Restart ]`.
    - Lock Action Mode: Segmented toggle between `Zeroize Session RAM` (Rule 4 default) and `Full Ciphertext Purge`.
  - **Account Fingerprint Phrase Deck:**
    - 5-word cryptographic identity phrase in `JetBrains Mono` high-contrast badge.
    - Security callout: *“Verify this phrase matches your ShellGuard Web/Mobile client to detect MITM tampering.”*
  - **Danger Zone:** Full-width red button: `⚠️ Emergency Panic Wipe (Purge All Local Data)`.

---

## §3. Screen 11: Autofill & Shadow DOM Settings
- **Stitch ID:** `76ac423429b54e8c86b2946cf15f06c0` | **Asset:** `docs/stitch/screen_11_autofill_settings.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **In-Page Injection Toggles:**
    - `Closed Shadow DOM Overlay` [ON] (`attachShadow({ mode: "closed" })` anti-XSS boundary).
    - `In-Field Carapace Glyphs` [ON] (Bioluminescent indicators inside inputs).
    - `Suggest SSH & Agent Keys (lb-)` [ON] (Offers agentic sub-keys on terminal & dev auth prompts).
  - **Keyboard Shortcuts (Bitwarden Parity):**
    - High-contrast visual hotkey chips: `Autofill Active Tab` (`Ctrl + Shift + L`) and `Next Matching Login` (`Ctrl + Shift + 9`).
    - Deeplink shortcut: `Customize Hotkeys in Chrome Settings ↗` (`chrome://extensions/shortcuts`).
  - **Fail-Closed Protection Banner:**
    - Amber card with `FAIL-CLOSED` badge: *“Autofill on page load is disabled by default to prevent cross-origin credential harvesting.”*
  - **Bottom Status:** Green pulsing indicator: `• SHADOW_DOM : ACTIVE` | `SHELLGUARD V2.4.1`.

---

## §4. Screen 12A & 12B: Notifications & Prompt Policy
- **Stitch IDs:** `be2bd37ddb7c463f9cb6f853f2e45663` (12A), `40a716a7efa24c65863967f847838e5c` (12B)
- **Assets:** `docs/stitch/screen_12a_notifications_pinned.png`, `docs/stitch/screen_12b_notifications_expanded.png`
- **Dual-Viewport Architecture:**
  - **Screen 12A (Pinned Popup View - 384×600px):**
    - Save to Vault Toggles: `Passkeys`, `Submitted Logins`, `Password Rotation Updates`, `Agent Keys (lb-)`.
    - Delivery Style Dropdown: `Closed Shadow DOM Pill (Floating) ▾`.
    - Auto-Dismiss Jump Chips: `[ 10s ]`, `[ 15s ]` (Active), `[ 30s ]`, `[ Never ]`.
    - Domain exclusions link: `3 domains excluded Manage →`.
  - **Screen 12B (Expanded View - Full Height Docked):**
    - Target Pod for Auto-Captures: Dropdown selector (`📁 Infrastructure Pod [Default]`).
    - Screen Anchor Position: Segmented control (`[Bottom-Right]`, `[Top-Right]`, `[Bottom-Left]`).
    - Heuristic Sensitivity & Protections: `Strict Origin Verification`, `Third-Party Iframe Protection`, `Incognito Suppression`.
    - CIDR & Domain Exclusions Deck: Interactive list with `+ Add Rule` (`localhost:3000`, `127.0.0.1:8080`, `10.0.0.0/8 [RFC 1918]`).
    - Live Detection Event Log: Real-time terminal feed of intercepted credential prompts.

---

## §5. Screen 14A & 15: Vault Operations & Sovereign Pods
- **Stitch IDs:** `c18bf8d191ce484180abc7db010a6d33` (14A), `9a57957b0a4640fdb76f980693d6bd41` (15)
- **Assets:** `docs/stitch/screen_14a_vault_operations.png`, `docs/stitch/screen_15_pods_manager.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Vault Operations Hub (Screen 14A):**
    - Telemetry Counters: 3-column chip bar: `48 Active` (Emerald), `12 Archived` (Cyan), `3 Trash` (Amber).
    - Sync Vault Card: `Sync Vault Now` with last sync timestamp and delta SHA `8f92..e1a`.
    - Operational Cards: `Pods & Compartments`, `Import Envelopes`, `Export Vault`, `Archive`, `Trash & Shredder`.
  - **Pods Manager (Screen 15):**
    - Action Header: `+ New Pod` button in Lobster Red `#E4048A`.
    - Pod Cards with Per-Pod `lb-` Agent Scopes:
      - *Infrastructure & Nodes:* `LB-RW` (Read/Write) • 24 items.
      - *Autonomous AI Agents:* `LB-EXEC` • 12 items.
      - *Personal & Root:* `HUMAN ONLY` (Agent Access Forbidden) • 8 items.
      - *Cold Archive:* `LOCKED` • 4 items.

---

## §6. Screen 16 & 17: Import & Export Envelopes
- **Stitch IDs:** `864ff9ad50774ba5aa3a38aaed268966` (16), `729490d879a64fefb1cac2850cc8629b` (17)
- **Assets:** `docs/stitch/screen_16_import_credentials.png`, `docs/stitch/screen_17_export_vault.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Import Credentials (Screen 16):**
    - Volatile Memory Dropzone: Drag-and-drop box supporting `.json`, `.csv`, `.1pux`, `.kdbx`.
    - Target Pod Selector: Dropdown routing imported records into a specific pod.
    - Ingestion Policy: Conflict resolution selector (`Skip`, `Overwrite`, `Duplicate`).
    - Toggle: `Dry Run Signature Audit` (tests decryption and AAD tags before persisting).
    - Primary Button: `⚡ Ingest & Encrypt into Pod`.
  - **Export Vault Envelopes (Screen 17):**
    - Export Format: Default `ShellGuard Encrypted JSON (.json)` bound to Master PRK via HKDF.
    - Security Advisory: Plaintext `.csv` export requires explicit checkbox acknowledging unencrypted risk.
    - Scope Selector: `Entire Vault` vs individual Pod.
    - Master Challenge Gate: Monospace Master Password (`hu-`) input to authorize derivation.

---

## §7. Screen 18: 30-Day Trash Retention & Memory Shredder
- **Stitch ID:** `146c1f4de6bb4affad8323fd43b6a528` | **Asset:** `docs/stitch/screen_18_trash_shredder.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Segmented View Switcher:** `[ ❄️ Archive (12) ]` vs `[ 🗑️ Trash (3) ]`.
  - **30-Day Auto-Purge Banner:** Amber policy card: *“Removed items remain in trash for 30 days before permanent zeroization. Purge early using Shredder below.”*
  - **Retention Queue Cards:**
    - Item title with exact expiration countdown chips:
      - `Legacy Postgres DB` (`Deleted 12d ago • Expires in 18d`)
      - `Staging API Token` (`Deleted 26d ago • Expires in 4d`)
      - `Production Bastion SSH` (`Deleted 28d ago • Expires in 2d`)
    - 1-click `Restore` trigger and individual item `Shred` trigger.
  - **Immediate Memory Shredder Trigger:**
    - Full-width destructive button: `🗑️ Empty Trash & Shred Memory Now` enforcing Rule 4 zeroization.

---

## §8. Screen 19A & 19B: Appearance, Themes & Zero-Leakage Favicons
- **Stitch IDs:** `06b46b09452c447e979124ef1d074948` (19A), `31e936e29c35466a8ec4c33bf53c4cea` (19B)
- **Assets:** `docs/stitch/screen_19a_appearance_pinned.png`, `docs/stitch/screen_19b_appearance_expanded.png`
- **Dual-Viewport Architecture:**
  - **Screen 19A (Pinned Popup View - 384px fixed):**
    - 2×2 Theme Swatches: `Abyssal Dark` (Active cyan glow), `Trench Slate`, `Hydro Coral`, `Bioluminescent`.
    - Viewport Width Pills: `Compact (340px)`, `Default (384px)` [Active], `Wide (480px)`.
    - Toggles: `Micro-Animations & Spring Physics` (0.97 scale press) and `Show Match Count on Extension Icon`.
    - Vault Display Essentials: `Local Website Favicons & Cache` (`🛡️ Zero-Leakage`) and `Eye-beside-Copy Action Cluster`.
    - Transition Trigger: `More Appearance & Vault Options in Expanded View ↗`.
  - **Screen 19B (Expanded View - Full Height):**
    - Dynamic Accent Color Bar: `Electric Cyan (#06B6D4)`, `Hydro Coral (#E4048A)`, `Tactical Amber (#F59E0B)`.
    - Display Density: `Comfortable (Standard)` vs `Dense Chitin (Compact Rows)`.
    - Vault Customization:
      - `Local Favicons & Cache` (`Zero-Leakage` origin-cache resolution only).
      - `Eye-beside-Copy Action Cluster` (enforcing invariant unmask trigger left of copy).
      - `1-Tap Inline Autofill from Suggestion Dropdown` (`FAIL-SAFE` default OFF).
      - `Proactive Security Diagnostic Badges` (highlights weak/breached credentials).
      - `Obfuscate Secrets in Vault Listings` (bullet glyph masking).
      - `Show Item Counters on Pod Compartments`.
    - Accessibility: Typography scale `100% Default`, `110% Medium`, `120% Large` + `High-Contrast Chitin Outlines`.

---

## §9. Screen 20A & 20B: About ShellGuard & Enclave Verification
- **Stitch IDs:** `f366ed84d4d246a797d0edf12d21610d` (20A), `af3ad64a27774c899eb22c127549a692` (20B)
- **Assets:** `docs/stitch/screen_20a_about_pinned.png`, `docs/stitch/screen_20b_about_expanded.png`
- **Dual-Viewport Architecture:**
  - **Screen 20A (Pinned Popup View - 384px fixed):**
    - Hero Identity: Glowing carapace emblem, `v0.0.0.1 • GENESIS`, and Axiom: *"Your reef. Your keys. Your vault. In your browser."*
    - Primary Action: Interactive GitHub repository card linking to `https://github.com/ClawStackStudios/ShellGuard-Extension` with `[↗]`.
    - Portal Links: Official Documentation (`https://clawstackstudios.github.io/ShellGuard/`), Enclave Diagnostics, Self-Hosted Server Console, and Chrome Web Store rating.
    - Pinned Telemetry: `• ENCLAVE : VERIFIED_CLIENT` | `CLAWSTACK STUDIOS`.
  - **Screen 20B (Expanded View - Full Height):**
    - Expanded hero carapace with `⭐ Public Sovereign Repo` tag.
    - 2×2 Cryptographic Enclave Specification Grid:
      - *Key Derivation:* `WebCrypto HKDF-SHA256 (32 bytes)`
      - *Cipher Envelope:* `AES-GCM-256 with AAD Record Binding`
      - *DOM Security:* `Closed Shadow DOM (attachShadow mode: closed)`
      - *Memory Policy:* `Volatile Session Zeroization (Rule 4)`
    - Build Provenance: `Build Commit: 04d2cd7 • Manifest: Chromium MV3 • License: MIT Sovereign`.
    - Client Enclave Guarantee: *“Zero third-party telemetry, trackers, or cloud reliance. Sovereign client execution.”*
