# The Story of ShellGuard-Extension UI

I am working on the User Interface design track for the ShellGuard browser extension.

### Stitch Connection & Sibling Mapping
1. I verified the connection to Google Stitch via StitchMCP. 
2. I inspected the existing sibling projects in Google Stitch and across the local repository structure:
   - **ShellGuard (Web & Server)**: `projects/11297015231862245744` ("ShellGuard Design System"), `/config/Local-Storage/workspace-lucas/projects/Agents/ShellGuard/DESIGN.md`, and `project/ui-ux-design-system.md`.
     - Master-Detail three-pane layout (Sidebar Pods -> List -> Detail).
     - Reef Modernist CSS tokens: Abyssal Dark (`#0F1419` base, `#171C21` surface, `#3D484E` carapace ridges, `#E4048A` Lobster Red primary, `#06B6D4` Claw Cyan secondary).
     - Standardized ClawStack Gateway with `hu-` and `lb-` key inputs, protocol diagrams, and amber transport warnings for LAN HTTP.
     - Bitwarden-style custom fields (Text, Hidden, Checkbox, Linked) and lock discipline.
   - **ShellGuard-Mobile (Android)**: `projects/2260877849238380316`, `/config/Local-Storage/workspace-lucas/projects/Agents/ShellGuard-Mobile/DESIGN.md`, and `project/ui-ux-design-system.md`.
     - Material 3 Compose adaptation with flat exoskeletal cards, 6 dynamic theme accents, spring press physics (0.97 scale on touch), circular TOTP countdown arcs, and adaptive window scaffolding.
     - Decoupled top-level LockScreen overlay.
     - Settings hub with 6 granular sub-screens.
   - **ShellGuard-TOTP (Android Companion)**: `projects/15122831413530552128`, `/config/Local-Storage/workspace-lucas/projects/Agents/ShellGuard-TOTP/DESIGN.md`, and `project/ui-ux-design-system.md`.
     - Specialized 3x3 monospace split codes (`123 456`), live circular countdown rings with color shifting (Cyan -> Coral Orange <10s -> Lobster Red <5s), swipe actions, and auto-clearing clipboard toasts.

### Extension Design Synthesis (Bespoke Extension Ergonomics)
I synthesized the Reef Modernist design language into the bespoke constraints and superpowers of a Chromium MV3 Extension:
1. **Primary Context Awareness (Active Tab URI Matching)**: Unlike full-screen Web or Mobile views, the extension popup defaults immediately to items matching the active browser tab (`Matching Logins for <domain>`).
2. **Compact Viewport Optimization (384px x 560px)**: Pinned carapace header with search + quick lock, scrollable list of matching cards followed by all-vault search, and pinned bottom navigation bar (`Vault`, `Generator`, `Settings`).
3. **Action-First Layout**: Direct "Autofill" button (`#E4048A`), unmask toggle directly LEFT of Copy ("Eye-beside-Copy" rule from `AGENTS.md`), and integrated micro TOTP countdown ring.
4. **Closed Shadow DOM In-Page Overlay**: Floating bioluminescent carapace pill directly anchored below username/password fields on web pages with zero style contamination.
5. **Amber HTTP Indicator**: Strict compliance with the LAN cleartext rule (RFC 1918 / Tailscale HTTP triggers an amber warning pill).

### Project Setup & Visual Assets
- Created Stitch project: `projects/16721661696857232516` (`ShellGuard Extension UI`).
- Created vector SVG icons: `assets/icons/shellguard-shell.svg`, `public/icons/shellguard-shell.svg`, `assets/icons/icon-128.svg`.
- Generated 16:9 feature graphic for `README.md` (`docs/assets/feature-graphic.png`).
- Authored canonical root `DESIGN.md`.

### Screen 1 Generated in Google Stitch: Vault Login
- Screen Name: `projects/16721661696857232516/screens/9c05ac8cab7344de9c5be7e05b829499`
- Screen Title: `ShellGuard Extension Vault Login`
- Device: `MOBILE` (390px viewport matching extension popup)
- Faithful 1:1 port of `ShellGuard` Web `LoginView.tsx`.
- Saved screenshot to `docs/stitch/screen_1_login.png` and HTML to `docs/stitch/screen_1_login.html`.

### Screen 2 Generated in Google Stitch: Vault Dashboard (Bitwarden-Pattern Enhanced)
- Screen Name: `projects/16721661696857232516/screens/6191de156bd44f46a7d1257453ed3cab`
- Screen Title: `ShellGuard Extension Vault - Bitwarden Layout`
- Device: `MOBILE` (390px viewport matching extension popup)
- Bitwarden-pattern enhancements implemented:
  - Pinned Carapace Header with glowing brand emblem, emerald `SYNCED` badge, `+ New` button in Lobster Red, Popout trigger, and `LU` avatar badge.
  - Top Search Bar with live count (`Search vault (48 items)...`) and filter sliders trigger.
  - 2x2 Scoped Filter Matrix (`Pod ▾`, `Tag ▾`, `Type ▾`, `Domain ▾`).
  - Clean Section Hierarchy: `AUTOFILL SUGGESTIONS` with cyan count pill (`2`) and `INFRASTRUCTURE & SSH` with count pill (`2`).
  - High-Density Row Ergonomics: Favicon/initial badge on left, Title + Username in middle, and right-aligned Action Cluster (`24s` cyan TOTP countdown circle, compact Lobster Red `Fill` button, Copy button, and `⋮` overflow menu).
  - Pinned 4-Tab Bottom Navigation Dock (`Vault`, `Generator`, `Send`, `Settings`).
- Saved screenshot to `docs/stitch/screen_2_dashboard_bitwarden.png` and HTML to `docs/stitch/screen_2_dashboard_bitwarden.html`.

### Screen 2C Generated in Google Stitch: Vault Dashboard - Quick Actions Menu (Active State)
- Screen Name: `projects/16721661696857232516/screens/b3d5f658be0a414fa4b08a6d7fd6e371`
- Screen Title: `ShellGuard Extension - Vault Quick Action Menu`
- Device: `MOBILE` (390px viewport matching extension popup)
- Interaction Architecture:
  - Instead of overwriting the clean resting dashboard, I created an explicit interactive state screen for the open overflow menu. This preserves the resting dashboard as the baseline SSoT while giving frontend engineers a pixel-perfect spec for menu positioning, elevation, and hover styling.
  - The 3-dots button on `GitHub Corporate` shows an active selected state with cyan highlight ring.
  - Floating elevated chitin flyout menu (`#1E252C`, 1px `#3D484E` border, 12px rounded corners, bioluminescent cyan halo):
    - `⚡ Autofill`
    - `⭐ Favorite` (hover state with cyan accent, directly matching the Bitwarden pattern)
    - `✏️ Edit Item`
    - `⏱ Copy TOTP Code` (with live `24s` countdown pill)
    - `📋 Copy Password`
    - `📁 Move to Pod...` (ShellGuard collection mapping)
    - `🗑 Delete Item` (danger state)
- Saved screenshot to `docs/stitch/screen_2c_dashboard_quick_menu.png` and HTML to `docs/stitch/screen_2c_dashboard_quick_menu.html`.

### Screen 3 Generated in Google Stitch: View Login Item Detail
- Screen Name: `projects/16721661696857232516/screens/2fb3746af91142278dae862f9caa029c`
- Screen Title: `ShellGuard Extension - View Login Item`
- Device: `MOBILE` (390px viewport matching extension popup)
- Extracted Bitwarden patterns repurposed for ShellGuard:
  - **Top Contextual Hero Card**: Pinned server icon, title (`Checkmk Server`), taxonomy tag (`📁 Infrastructure Pod`), status pill (`• ACTIVE`), and prominent full-width Lobster Red CTA (`⚡ Autofill into Page`).
  - **Card-Grouped Field Ergonomics**: Divided row structure for credentials.
    - Username (`cmkadmin`) with direct copy trigger.
    - Password (`••••••••••••••••`) preserving the **Eye-beside-Copy invariant** (unmask eye icon directly to the left of the copy button).
    - Monospace TOTP 2FA authenticator row with live split code (`839 204`) in Claw Cyan `#06B6D4`, circular countdown progress ring (`20s`), and 1-tap copy.
  - **RFC 1918 Private LAN Indicator**: Cleartext HTTP warning pill (`⚠️ HTTP LAN (RFC 1918 Private Net)`) strictly adhering to ecosystem rule 2/carve-out.
  - **Zero-Knowledge Header Pill**: Explicit `ZERO-KNOWLEDGE` telemetry indicator.
  - **Sticky Action Footer**: Bottom-docked `✏️ Edit` button, clone icon, and red delete icon.
- Saved screenshot to `docs/stitch/screen_3_view_item.png` and HTML to `docs/stitch/screen_3_view_item.html`.

### Screen 4 Generated in Google Stitch: Password & Passphrase Generator
- Screen Name: `projects/16721661696857232516/screens/4b13983c0c054b879738460e54e81389`
- Screen Title: `ShellGuard Extension - Generator Screen`
- Device: `MOBILE` (390px viewport matching extension popup)
- Re-organized Bespoke Ergonomics:
  - **Segmented Mode Switcher**: Seamless switching between `Password`, `Passphrase`, and `Username`.
  - **Reef Modernist Output Deck**: Syntax-colored JetBrains Mono display (digits in Claw Cyan `#06B6D4`, special symbols in Lobster Red `#E4048A`), with inline instant re-roll (🔄) and copy (⧉).
  - **Live Bioluminescent Entropy Gauge**: 4-segment bar indicating `104 bits entropy • Cryptographically Strong` in Emerald `#10B981`.
  - **Extension-First Primary CTA**: Full-width `⚡ Insert into Active Tab` button in Lobster Red `#E4048A`.
  - **Tactile Length Slider & Preset Jump Chips**: Range slider with dynamic numeric badge (`16`) and quick-jump pills (`12`, `16`, `24`, `32`, `64`).
  - **2x2 Character Set Matrix**: Segmented button tiles for `A-Z`, `a-z`, `0-9`, `!@#$`, side-by-side steppers for minimum numbers/symbols, and an ambiguous character filter toggle.
  - **History Header Trigger**: Direct navigation via `🕒 12` badge in header.
  - **Pinned Dock**: Bottom navigation bar with `Generator` tab active in Claw Cyan.
- Saved screenshot to `docs/stitch/screen_4_generator.png` and HTML to `docs/stitch/screen_4_generator.html`.

### Screen 5 Generated in Google Stitch: Generator History
- Screen Name: `projects/16721661696857232516/screens/9f07b7a8bcfc4416a334372964aa2aba`
- Screen Title: `ShellGuard Extension - Generator History`
- Device: `MOBILE` (390px viewport matching extension popup)
- Security & Layout Features:
  - Top app bar with back navigation `←` and cyan item counter pill (`10 items`).
  - **Volatile Storage Advisory**: Zero-knowledge callout reminding operators that generation history is stored purely in volatile session memory and zeroized on lock (Rule 4).
  - High-density history cards with monospace output, syntax-highlighted characters, timestamp, type tags (`PASSWORD`, `USERNAME`, `PASSPHRASE`), and 1-tap copy buttons.
  - Sticky bottom action bar with Coral Red `🗑 Clear History` button and `Close` button.
- Saved screenshot to `docs/stitch/screen_5_generator_history.png` and HTML to `docs/stitch/screen_5_generator_history.html`.

### Screen 6 Generated in Google Stitch: Edit / Add Login Credential (Phase A)
- Screen Name: `projects/16721661696857232516/screens/84f9c31d1eb64aeb971714712e60a31a`
- Screen Title: `ShellGuard Extension - Edit Login Credential`
- Device: `MOBILE` (390px viewport matching extension popup)
- Edit Form Architecture:
  - Pinned Top App Bar: `Cancel` text on left, centered `• Edit Login` title, and high-impact `Save` pill button in solid Lobster Red `#E4048A`.
  - Item Identity Card: Recessed `#0F1419` field for Item Name (`Checkmk Server`) with server squircle, and `Vault Pod` selector (`📁 Infrastructure Pod ▾`).
  - Credentials Deck:
    - Monospace `Username` field (`cmkadmin`) with copy action.
    - `Password` field featuring `••••••••••••••••`, inline under-stroke entropy diagnostic bar (`104 bits • cryptographically strong • 0 breaches`), and the **Eye-beside-Action** button cluster (`[👁]` directly to the left of the generate `[⚡]` trigger).
    - `AES-256-GCM` cryptographic cipher badge.
    - `Authenticator Key (TOTP Seed)` in Claw Cyan `#06B6D4` JetBrains Mono with QR code scan trigger.
  - Autofill & Network Card: URI mapping with RFC 1918 LAN warning.
  - Status footer: `• Zero-Knowledge Master Root` indicator.
- Saved screenshot to `docs/stitch/screen_6_edit_item.png` and HTML to `docs/stitch/screen_6_edit_item.html`.

### Screen 7 Generated in Google Stitch: In-Page Closed Shadow DOM Autofill Overlay (Phase B)
- Screen Name: `projects/16721661696857232516/screens/fb7af079a89243b39dc8dabe1fefcd53`
- Screen Title: `ShellGuard Extension - Desktop In-Page Autofill Overlay`
- Device: `DESKTOP` (2560x2048 authentic browser environment)
- In-Page Shadow DOM Architecture:
  - **Browser Context**: Renders an authentic desktop browser tab at `https://github.com/login`, with active ShellGuard extension icon in the toolbar.
  - **In-Field Glyph**: On the focused username input field (`octocat|`), a bioluminescent Claw Cyan `#06B6D4` ShellGuard carapace glyph is docked on the right edge.
  - **Closed Shadow DOM Floating Carapace Dropdown**:
    - Floating 6px directly below the input field, protected by `attachShadow({ mode: 'closed' })` to guarantee strict DOM isolation from hostile page scripts (Rule 2).
    - Top carapace rim features a micro 1px gradient accent line (`#06B6D4` to `#E4048A`).
    - Header: Branded ShellGuard mark, `ShellGuard Autofill`, and emerald `• ZK ISOLATED` badge.
    - Matching Credential Rows:
      - Active row (`GitHub Corporate` / `octocat@corp.io`): Cyan accent highlight, live `24s` TOTP countdown ring, and prominent Lobster Red `Fill` button (`#E4048A`).
      - Secondary row (`GitHub Personal` / `lucas-personal`): High-density card with quick `Fill`.
    - Footer Utility: `⚡ Generate Password` (in Claw Cyan) and `Open Vault →`.
- Saved screenshot to `docs/stitch/screen_7_inpage_overlay.png` and HTML to `docs/stitch/screen_7_inpage_overlay.html`.

### Screen 8 Generated in Google Stitch: Vault Quick Lock / Biometric & PIN Pad (Phase C)
- Screen Name: `projects/16721661696857232516/screens/c414609e94804ad5ab653a3d759d667e`
- Screen Title: `ShellGuard Extension - Vault Quick Lock & PIN Pad`
- Device: `MOBILE` (390px viewport matching extension popup)
- Quick Lock Architecture:
  - Top Bar: ShellGuard emblem with active cyan dot, `• VAULT ENCRYPTED` cyan pill badge, and `LU` operator avatar.
  - Hero Lock Shutter: Glowing cyan carapace padlock emblem with dual halo, Space Grotesk `Vault Locked` headline, and memory zeroization warning.
  - 6-Digit PIN Indicator: Discrete slots showing 3 active cyan bioluminescent dots and 3 empty framed slots.
  - Tactile 3×4 Keypad Matrix:
    - Squircles (`#171C21`, 1px `#3D484E` border) with Space Grotesk bold numbers and monospace sub-letters (`ABC`, `DEF`, etc.).
    - WebAuthn / Passkey Biometric Fingerprint button in Claw Cyan `#06B6D4` with active glow.
    - Tactile `0` and backspace keys.
  - Fallback: `Unlock with Master Password →` link.
  - Cryptographic Zeroization Telemetry: `🔒 ZEROIZED MEMORY ACTIVE • AES-256-GCM SESSION KEY FLUSHED` (strictly enforcing Rule 4 Volatile Session Zeroization).
- Saved screenshot to `docs/stitch/screen_8_lock_screen.png` and HTML to `docs/stitch/screen_8_lock_screen.html`.

### Full UI Suite Inspection: Screens 9 through 20b
I inspected the complete suite of 28 screens created in Google Stitch and stored in `docs/stitch/`:
1. **Screen 9 (Settings Hub):** Operator session card, auto-lock timeout interval chips, and categorized settings navigation matrix.
2. **Screen 10 (Account & Security):** Fast PIN/WebAuthn toggles, 5-word account fingerprint phrase, and emergency panic wipe.
3. **Screen 11 (Autofill Settings):** Closed Shadow DOM overlay toggle, in-field carapace glyphs toggle, and default URI match detection heuristics (Base Domain vs Host & Port vs Exact).
4. **Screens 12, 12a, 12b (Notifications & Prompts):** Pinned popup view (12a) with save prompts for Passkeys, new logins, password rotations, and `lb-` keys. Expanded side panel (12b) with target Pod routing, anchor position, strict iframe verification, CIDR exclusion lists (`10.0.0.0/8`), and live intercept terminal log.
5. **Screen 13 (In-Page Autofill Overlay & Carapace Glyph States):** Authored the **Anti-Collision Dynamic Offset Engine** (`DYNAMIC_INSET_RIGHT = 68px`) eliminating Bitwarden's password-reveal eye collision bug, and defined the 4 bioluminescent glyph states (Resting Slate, Active Cyan + Count, Locked Padlock, Error Coral).
6. **Screens 14 & 14a (Vault Operations Hub):** Operational telemetry deck (`48 Active`, `12 Archived`, `3 Trash`), delta sync triggers, and navigation cards.
7. **Screen 15 (Pods & Compartments Manager):** Sovereign cryptographic compartments with per-pod `lb-` agent permission badges (`LB-RW`, `LB-EXEC`, `HUMAN ONLY`, `LOCKED`).
8. **Screen 16 (Import Credentials):** Multi-format drag-and-drop ingestion (`.json`, `.csv`, `.1pux`, `.kdbx`) with in-memory dry-run signature audit.
9. **Screen 17 (Export Vault):** HKDF-bound AES-256-GCM encrypted backup export and challenged plaintext CSV export.
10. **Screen 18 (Trash & Memory Shredder):** 30-day soft-delete retention with expiration countdown badges, and immediate Rule 4 volatile session shredder.
11. **Screens 19, 19a, 19b (Appearance Engine):** 4 biomorphic themes (Abyssal Dark, Trench Slate, Hydro Coral, Bioluminescent Cyan), viewport width presets (`340/384/480px`), density switcher, and **Zero-Leakage Local Favicons** resolving strictly via browser-origin cache with zero third-party CDN leaks.
12. **Screens 20a & 20b (About & Enclave Verification):** Genesis `v0.0.0.1` hero deck, AGPLv3 / MIT Sovereign license, direct GitHub repo card, and 2×2 Cryptographic Enclave Specification.

### Oracles & Documentation Alignment
- Codified `.agents/rules/ui-stewardship-philosophy.md` establishing the 6 UI stewardship invariants.
- Authored `specs/ui/screen-blueprints-core.md` (Screens 1–8) and `specs/ui/screen-blueprints-settings.md` (Screens 9–20B).
- Updated `specs/autofill/autofill-mechanics.md` with the Anti-Collision Dynamic Offset Formula and glyph state machine.
- Expanded `ROADMAP.md` across Stages 04 through 10 to incorporate all 28 screens.
- Updated `08-project-skill-blueprint.md` and `09-user-facing-docs-blueprint.md` in the brain artifacts to cover all 28 screens and 11 user-facing documentation guides.
- Authored synthesis artifact `10-full-ui-inspection-synthesis.md`.
- Ran `python3 scripts/audit_docs_drift.py`; passed 100% green.






