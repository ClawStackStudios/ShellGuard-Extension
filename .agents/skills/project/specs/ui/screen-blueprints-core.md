# 🎨 UI Oracle: Core Vault, Authentication & Generator Blueprints (Screens 1–8)

> **Authoritative Specification:** Direct technical and visual implementation guide for the core extension popup screens, micro-interactions, and cryptographic state bindings.

---

## §1. Screen 1: Server Gateway & Master Login
- **Stitch ID:** `9c05ac8cab7344de9c5be7e05b829499` | **Asset:** `docs/stitch/screen_1_login.png`
- **Viewport:** `MOBILE` (384px fixed extension popup)
- **Component Blueprint:**
  - **Header Bar:** Brand emblem with `ShellGuard` logo, subtitle *Zero-Knowledge Sovereign Vault*, and `• CLIENT ENCLAVE` badge.
  - **Server Gateway Selector:**
    - Segmented toggle: `[ Self-Hosted Server (LAN/WAN) ]` vs `[ Cloud Relay Node ]`.
    - Server URI Input: Monospace field defaulted to `http://192.168.1.50:8080`.
    - **Transport Sovereignty Pill:** If URI is RFC 1918 / Tailscale LAN, display `⚠️ HTTP LAN (Unencrypted Transport — Homelab Only)`.
    - **Self-Signed HTTPS Toggle:** Checkbox `[ ] Trust Self-Signed Certificates` paired with an *Authorize in Browser* button.
  - **Master Credential Deck:**
    - Dual-Mode Input: Accepts either Human Sovereign Key (`hu-`) or Agentic LobsterKey (`lb-`).
    - Password Input with Eye-beside-Action cluster (`[👁]` unmask toggle left of input clearance).
  - **Execution Trigger:** Solid Lobster Red `#E4048A` button: `⚡ Derive Keys & Unlock Enclave`.
  - **Zero-Registration Boundary:** Recessed notice at footer: *“Accounts must be provisioned on your self-hosted ShellGuard server. Client extension cannot create master root identities.”*

---

## §2. Screen 2B & 2C: Vault Dashboard & Quick Action Menu
- **Stitch IDs:** `6191de156bd44f46a7d1257453ed3cab` (2B), `b3d5f658be0a414fa4b08a6d7fd6e371` (2C)
- **Assets:** `docs/stitch/screen_2_dashboard_bitwarden.png`, `docs/stitch/screen_2c_dashboard_quick_menu.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Pinned Header (44px):** ShellGuard mark, `• ENCLAVE : SECURE` pill, active server indicator, and 1-tap `[🔒 Lock]` trigger.
  - **Active Tab Priority Zone:**
    - Section header: `🌐 Matching for <active-domain> (<count>)` with `+ Add Login` shortcut.
    - Matching Credential Card:
      - 32px squircle favicon / initial badge.
      - Item title in `Space Grotesk` SemiBold with username in `Inter` muted.
      - **The Inline Action Cluster:** `[⚡ Quick Autofill]` (Lobster Red `#E4048A`), `[👁]` unmask, `[📋]` copy password, and `[⋮]` 3-dots overflow.
  - **The 3-Dots Quick Actions Flyout (Screen 2C):**
    - Mounts directly beneath `[⋮]` in elevated Tier 2 chassis (`#161F2C`, 1px border `#06B6D4`):
      - `📋 Copy Username`
      - `🔑 Copy Password`
      - `⏱️ Copy Verification Code (TOTP)`
      - `⚡ Auto-fill & Save`
      - `📁 Clone to Another Pod`
      - `🗑️ Move to Trash` (Coral red text)
  - **2×2 Filter Bento Grid:** Segmented filter tiles: `[ All Items (48) ]`, `[ ⭐ Favorites (6) ]`, `[ 📁 Pods (4) ]`, `[ 🗑️ Trash (3) ]`.
  - **Instant Monospace Search:** Recessed input filtering items with sub-millisecond local indexing.
  - **Pinned Bottom Navigation Dock (48px):** `[🗄️ Vault]`, `[🎲 Generator]`, `[⚙️ Settings]`.

---

## §3. Screen 3: View Login Item & Micro-TOTP Pulse Ring
- **Stitch ID:** `2fb3746af91142278dae862f9caa029c` | **Asset:** `docs/stitch/screen_3_view_item.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Top App Bar:** Back button `< Vault`, item title `Checkmk Server`, favorite star `[⭐]`, and edit action `[✎ Edit]`.
  - **Identity Header:** Service icon, pod compartment chip (`📁 Infrastructure Pod`), and RFC 1918 LAN transport pill (`⚠️ HTTP LAN`).
  - **Credentials Deck:**
    - Username row with 1-click copy action.
    - Password row with **Eye-beside-Copy Invariant**: `[••••••••••••]` `[👁]` `[📋]`.
    - **Under-Stroke Entropy Diagnostic:** Monospace readout: `104 bits entropy • cryptographically strong • 0 known breaches`.
  - **Micro-TOTP Authenticator Card:**
    - 6-digit tabular split code (`739 214`) rendered in `JetBrains Mono` bold 20px Claw Cyan (`#06B6D4`).
    - **Animated SVG Circular Pulse Ring:**
      - 28px diameter countdown ring depleting smoothly counter-clockwise.
      - Color dynamics: `> 10s` Claw Cyan (`#06B6D4`), `6s–10s` Coral Orange (`#F97316`), `≤ 5s` Tactical Amber (`#F59E0B`).
    - 1-click copy button with temporary 800ms `[✓ Copied]` emerald flash.
  - **URI Matching & Custom Fields:** Target URL with URI match mode badge (`Host & Port`), and custom encrypted fields (`Cluster Node ID`).
  - **Revision Audit Footer:** Monospace timestamp: `Revision 4 • Updated 2 days ago • HKDF AAD bound`.

---

## §4. Screen 4 & 5: Credential Generator & Volatile Session History
- **Stitch IDs:** `4b13983c0c054b879738460e54e81389` (4), `9f07b7a8bcfc4416a334372964aa2aba` (5)
- **Assets:** `docs/stitch/screen_4_generator.png`, `docs/stitch/screen_5_generator_history.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Header Bar:** Title `Generator`, and history drawer link `🕒 History (12)`.
  - **Generator Mode Tabs:** Segmented switcher: `[ Password ]` | `[ Passphrase ]` | `[ Username ]`.
  - **Output Carapace Card:**
    - High-contrast `JetBrains Mono` display card with character-class syntax coloring:
      - Letters: Luminous Shell `#DEE3EA`
      - Numbers: Claw Cyan `#06B6D4`
      - Special Symbols: Hydro Coral `#E4048A`
    - Quick actions: `[🔄 Regenerate]` and `[📋 Copy]`.
    - Live entropy indicator bar: `128 bits • CSPRNG entropy`.
  - **Tactile Range Slider:** Smooth slider with numeric badge (`24`) and 1-tap jump chips (`12`, `16`, `24`, `32`, `64`).
  - **2×2 Character Matrix:** Toggle tiles for `A-Z`, `a-z`, `0-9`, and `!@#$%^&*`, with side-by-side steppers for minimum numbers/symbols.
  - **Generator History Drawer (Screen 5):**
    - **Volatile Storage Advisory:** Emerald banner: *“Generation history resides strictly in volatile session RAM and zeroizes on lock (Rule 4).”*
    - High-density list rows with type chips (`PASSWORD`, `PASSPHRASE`), syntax coloring, and 1-click copy.
    - Destructive footer button: `🗑️ Clear History Now`.

---

## §5. Screen 6: Add / Edit Vault Item Form
- **Stitch ID:** `84f9c31d1eb64aeb971714712e60a31a` | **Asset:** `docs/stitch/screen_6_edit_item.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Top Bar:** Cancel link `Cancel`, centered title `• Edit Login`, and primary action `[ Save ]` in solid Lobster Red `#E4048A`.
  - **Item Identity Deck:** Recessed field for Title (`Checkmk Server`) and Pod Compartment selector (`📁 Infrastructure Pod ▾`).
  - **Credentials Deck:**
    - Username field with inline copy shortcut.
    - Password field with **Eye-beside-Action Cluster**:
      ```text
      [ Password: •••••••••••••••• ]   [👁️] [⚡ Generate]
      ```
      The unmask eye sits directly to the left of the generate trigger.
    - Inline under-stroke entropy meter updating on every keystroke.
    - Authenticator Key (TOTP Seed) input with integrated QR code scanner button.
  - **URI Mapping Deck:** URL input with match detection dropdown (`Base Domain`, `Host & Port`, `Exact`, `Regex`).
  - **Custom Fields Builder:** Dynamic rows supporting `Text`, `Hidden Secret`, and `Boolean` types.
  - **Danger Zone:** Destructive `[🗑️ Delete Item]` trigger at the bottom of the scroll container.

---

## §6. Screen 8: Vault Quick Lock & PIN Pad
- **Stitch ID:** `c414609e94804ad5ab653a3d759d667e` | **Asset:** `docs/stitch/screen_8_lock_screen.png`
- **Viewport:** `MOBILE` (384px fixed popup)
- **Component Blueprint:**
  - **Volatile Zeroization Pill:** Pinned top banner verifying: `🔒 VAULT LOCKED • 0 BYTES IN RAM`.
  - **Hero Shield Emblem:** Bioluminescent carapace glyph with amber status ring.
  - **6-Digit PIN Indicator Dots:** 6 circular dots that illuminate in Claw Cyan `#06B6D4` as digits are entered.
  - **Tactile 3×4 Numeric Keypad:**
    - Large circular buttons (`1` through `9`, `0`).
    - Bottom-left key: `[🔏 WebAuthn]` fingerprint trigger invoking biometric hardware authentication.
    - Bottom-right key: `[⌫]` backspace trigger.
  - **Master Key Fallback:** Text link: `Unlock with Master Key (hu-) instead →`.
  - **Emergency Panic Trigger:** Sub-footer link: `Switch Account / Wipe Local Cache`.
