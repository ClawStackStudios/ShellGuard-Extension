---
name: Reef Modernist (Extension Design System)
colors:
  light:
    bg-base: '241 245 249'          # Ocean Mist / slate-100
    bg-surface: '255 255 255'       # Crisp White
    text-main: '15 23 42'           # slate-900
    text-muted: '100 116 139'       # slate-500
    border-subtle: '203 213 225'    # slate-300
    header-border: '#3b0764'        # ShellGuard Dark Purple
    glass-bg: 'rgba(255, 255, 255, 0.85)'
  dark:
    bg-base: '15 20 25'             # Abyssal Dark (#0F1419)
    bg-surface: '23 28 33'          # Deep Subsurface (#171C21)
    text-main: '222 227 234'        # Luminous Shell (#DEE3EA)
    text-muted: '135 146 152'       # Abyssal Muted (#879298)
    border-subtle: '61 72 78'       # Carapace Ridge (#3D484E)
    header-border: '#e4048a'        # Lobster Red
    glass-bg: 'rgba(23, 28, 33, 0.85)'
  brand:
    lobster-red: '#e4048a'
    claw-cyan: '#06b6d4'
    coral-orange: '#f97316'
    emerald-sentry: '#10b981'
    amber-lan: '#f59e0b'
    shellguard-purple: '#3b0764'
    ocean-trench: '#0a0f14'
typography:
  headline:
    fontFamily: Outfit, sans-serif
    weights: ['600', '700', '800']
    letterSpacing: -0.02em
  body:
    fontFamily: Inter, system-ui, sans-serif
    weights: ['400', '500', '600']
    letterSpacing: -0.01em
  mono:
    fontFamily: JetBrains Mono, monospace
    weights: ['400', '500', '700']
rounded:
  sm: 0.25rem       # 4px - Badges, micro-buttons
  DEFAULT: 0.5rem  # 8px - Input fields, chips, inner controls
  md: 0.75rem      # 12px - Carapace cards, popup container
  lg: 1rem         # 16px - Dialogs, large containers
  full: 9999px     # Status pills, countdown rings, avatar circles
spacing:
  unit: 4px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-lg: 16px
  space-xl: 24px
---

# 🐚 ShellGuard Extension — Design System: Reef Modernist Extension

> **Chromium Manifest V3 Adaptation of the Reef Modernist ("Bioluminescent Defense") Design Language**  
> *Engineered for High-Density Popup Viewports (384px × 560px), Closed Shadow DOM Overlays, Active Tab Context-Aware Autofill, and Zero-Knowledge Cryptographic Parity.*

---

## 💎 1. Brand & Visual Identity

**Reef Modernist Extension** translates the ShellGuard ecosystem’s high-assurance visual identity into an agile, context-aware browser tool. It fuses **organic deep-sea resilience** with **mathematical zero-knowledge precision**:

- **Exoskeletal Carapace**: UI components emulate the calcified, segmented chitin of deep-trench crustacea. Containers feature flat elevations (`elevation: 0`), dense layout rhythms, crisp 1px structural borders (`#3D484E`), and disciplined 12px radii (`rounded-md`).
- **Bioluminescent Photonic Energy**: Interactive elements pulse with **Lobster Red (`#E4048A`)** for sovereign executions and **Claw Cyan (`#06B6D4`)** for active telemetry and focus rings. Token expirations shift dynamically to **Coral Orange (`#F97316`)**, while verified copy and fill actions flash in **Emerald Sentry (`#10B981`)**.
- **Context-Aware Prioritization**: Unlike full-screen desktop or mobile views, the browser extension immediately interrogates the active browser tab's origin and presents **Matching Logins** with one-tap execution.
- **Strict Zero-Knowledge Isolation**: All form overlays render exclusively in **Closed Shadow DOM** (`attachShadow({ mode: 'closed' })`), maintaining an impenetrable boundary between page DOM scripts and vault secrets.

---

## 🎨 2. Palette & Theme Tokens

The extension operates by default in **Abyssal Dark** mode with optional **Ocean Mist** light mode support via CSS Custom Properties:

| Token | Light Mode (Ocean Mist) | Dark Mode (Abyssal Dark) | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `rgb(241, 245, 249)` | `rgb(15, 20, 25)` | Popup floor, backdrop, and side panel canvas (`#0F1419`) |
| `--bg-surface` | `rgb(255, 255, 255)` | `rgb(23, 28, 33)` | Carapace cards, input fields, and elevated tiles (`#171C21`) |
| `--bg-elevated` | `rgb(248, 250, 252)` | `rgb(30, 37, 44)` | Dropdown menus, modal sheets, and floating tooltips (`#1E252C`) |
| `--text-main` | `rgb(15, 23, 42)` | `rgb(222, 227, 234)` | Primary titles, usernames, and cryptographic values (`#DEE3EA`) |
| `--text-muted` | `rgb(100, 116, 139)` | `rgb(135, 146, 152)` | Domain labels, timestamps, and secondary metadata (`#879298`) |
| `--border-subtle` | `rgb(203, 213, 225)` | `rgb(61, 72, 78)` | 1px carapace ridge outlines and structural dividers (`#3D484E`) |
| `--primary-action`| `#E4048A` (Lobster Red) | `#E4048A` (Lobster Red) | Primary Autofill CTA, critical triggers, brand headers |
| `--secondary-accent`| `#06B6D4` (Claw Cyan) | `#06B6D4` (Claw Cyan) | Active tab indicators, TOTP timers, focus halos, badges |
| `--warning` | `#F97316` (Coral Orange)| `#F97316` (Coral Orange)| TOTP expiration warnings (<10s), unsaved edits |
| `--amber-lan` | `#F59E0B` (Amber Gold) | `#F59E0B` (Amber Gold) | Cleartext HTTP LAN transport warning badge |
| `--success` | `#10B981` (Emerald) | `#10B981` (Emerald) | Successful autofill flash, clipboard copied, synced state |

---

## 🔤 3. Typographic Hierarchy

Typography prioritizes developer-first clarity and zero glyph ambiguity:

```
Headlines:   Outfit (SemiBold 600 / Bold 700, tracking -0.02em)
Body Text:   Inter (Regular 400 / Medium 500 / SemiBold 600, tracking -0.01em)
Monospace:   JetBrains Mono (Regular 400 / Bold 700)
```

- **`font-headline` (Outfit)**: Anchors header branding ("ShellGuard"), section headers ("Matching for github.com"), and modal dialog titles.
- **`font-sans` (Inter)**: Powers account usernames, URLs, settings labels, and contextual instructions.
- **`font-mono` (JetBrains Mono)**: Mandatory for all passwords, sovereign keys (`hu-`, `lb-`), TOTP 6-digit split tokens (`842 190`), and cryptographic hashes. Distinguishes `0`/`O` and `1`/`I` unequivocally.

---

## 📐 4. Viewport & Layout Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ 🐚 ShellGuard  [🟢 Synced]               [⚠️ LAN] [🔒 Lock] │ ← Pinned Carapace Header (44px)
├─────────────────────────────────────────────────────────────┤
│ 🌐 Matching for github.com (2)              [+ Add Login]  │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🐙 GitHub Corporate                    [⭐]             │ │
│ │    octocat@corp.io                                      │ │
│ │    ••••••••••••••••••••                    [👁️] [📋]    │ │ ← Eye-beside-Copy Invariant
│ │    ⏱️ 739 214 (24s)           [⚡ Quick Autofill]       │ │ ← Lobster Red Primary CTA
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🐙 GitHub Personal                                      │ │
│ │    lucas-personal             [⚡ Quick Autofill]       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ 🔍 Search vault (48 items)...                               │
│ [All] [Logins] [2FA] [Cards] [Notes] [SSH]                  │
│                                                             │
│ ── All Vault Items ───────────────────────────────────────  │
│ 🔑 AWS Root Infrastructure                                  │
│ 🔒 Proxmox Cluster LAN                                      │
├─────────────────────────────────────────────────────────────┤
│   [🗄️ Vault]             [🎲 Generator]         [⚙️ Settings] │ ← Pinned Bottom Nav Dock (48px)
└─────────────────────────────────────────────────────────────┘
```

### Key Scaffolding Metrics
- **Popup Container**: Fixed dimensions `384px` width by `560px` height (max `600px`).
- **Internal Scrolling**: Header (`44px`, `shrink-0 border-b`) and Bottom Navigation Dock (`48px`, `shrink-0 border-t`) remain permanently pinned. The central body scrolls smoothly (`overflow-y-auto custom-scrollbar`).
- **Side Panel Scaffolding**: Uses fluid width (`100%`) with the same vertical card and section rhythm.

---

## 🛡️ 5. Governing Invariants & Design Rules

### Rule 1: The "Eye-beside-Copy" Invariant
In every credential card or detail row, the unmask password toggle (`Eye` / `EyeOff`) is placed **directly to the LEFT** of the `Copy` button:
```
[ Masked Password: •••••••••••• ]   [ 👁️ Unmask ] [ 📋 Copy ]
```
*Rationale*: Prevents accidental clipboard overwrites when aiming to visually verify a password.

### Rule 2: Closed Shadow DOM Autofill Overlay
In-page credential pills and dropdown menus must attach exclusively to a closed shadow root:
```javascript
const shadowRoot = hostElement.attachShadow({ mode: 'closed' });
```
*Rationale*: Completely prevents third-party webpage JavaScript or malicious tracking scripts from querying or tampering with the injected autofill UI.

### Rule 3: Amber LAN HTTP Transport Warning Pill
In compliance with the ShellGuard security architecture, connecting to an unencrypted HTTP endpoint is permitted strictly on local RFC 1918 / Tailscale LANs. Whenever active:
- An unmistakable amber status pill (`⚠️ HTTP LAN`) must render in the pinned header.
- WAN HTTP connections are unconditionally blocked with a red security error card.

### Rule 4: Zero Native Browser Dialogs
Native browser `alert()`, `confirm()`, and `prompt()` calls are forbidden. All user confirmations (e.g. key deletion, session lock, panic wipe) render inside accessible, keyboard-trapped Reef Modernist modal sheets.

---

## 🧩 6. Core Component Specifications

### A. The Matching Login Card (`MatchingLoginCard`)
- **Container**: Background `--bg-surface` (`#171C21`), 1px solid `--border-subtle` (`#3D484E`), 12px border radius.
- **Header**: Circular 32px initial badge / favicon, item title in `Outfit` SemiBold, username in `Inter` muted.
- **Password Row**: Monospace masked bullets with Eye-beside-Copy action buttons.
- **Micro-TOTP Arc**: 24px SVG circular countdown ring with tabular 3x3 split numbers (`739 214`).
- **Autofill Trigger**: Solid Lobster Red (`#E4048A`) button with white text and spring press scaling (`active:scale-95`).

### B. In-Page Floating Autofill Dropdown (`AutofillDropdown`)
- **Container**: Translucent obsidian carapace (`rgba(23, 28, 33, 0.95)`), `backdrop-filter: blur(12px)`, 1px border `rgba(6, 182, 212, 0.4)`.
- **Anchor**: Floats directly underneath the focused `input[type="password"]` or `input[type="text"]` with arrow notch.
- **Interaction**: Keyboard navigable (ArrowUp, ArrowDown, Enter, Escape). Clicking an account executes synthetic trusted input events on the page inputs.

### C. Password & Passphrase Generator (`GeneratorView`)
- **Output Surface**: Large high-contrast `JetBrains Mono` display card with colored characters (digits cyan, symbols magenta).
- **Control Sliders**: Length slider (8–128 characters) with quick presets.
- **Passphrase Mode**: Word count slider (3–10 words) with customizable separators (`-`, `.`, `_`).
- **One-Click Insert**: "Use in Active Form" button directly injects the generated credential into the targeted input field.

### D. Volatile Quick-Unlock Overlay (`QuickUnlockModal`)
- **Shutter Overlay**: Frosted abyssal backdrop (`rgba(15, 20, 25, 0.92)`).
- **Unlock Methods**: 
  - Biometric WebAuthn challenge (Touch ID / Windows Hello / YubiKey).
  - PIN Pad (Reef Modernist circular numeric buttons).
  - Master Key input fallback (`hu-` / `lb-`).

---

## ⏱️ 7. Motion & Feedback Dynamics

1. **Card Spring Physics**: Interactive cards scale down to `0.97` on pointer down with spring damping `0.75` and stiffness `400`.
2. **Emerald Copy / Fill Flash**: Clicking Copy or Autofill flashes the card border to `#10B981` (Emerald) for `800ms` with an animated checkmark icon.
3. **Circular Countdown Arc**: Depletes smoothly counter-clockwise:
   - `> 10s`: Claw Cyan (`#06B6D4`)
   - `6s - 10s`: Coral Orange (`#F97316`)
   - `≤ 5s`: Lobster Red (`#E4048A`)
4. **Sensitive Clipboard Scrubbing**: Scrub timer countdown bar executes in background, wiping clipboard memory after 30 seconds.
