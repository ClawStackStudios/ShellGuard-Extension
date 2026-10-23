---
name: Reef Modernist (Extension Design System)
colors:
  dark:
    bg-base: '10 13 18'             # Abyssal Floor (#0A0D12 / #0F1419)
    bg-surface: '18 24 32'          # Deep Subsurface (#121820 / #171C21)
    bg-elevated: '22 31 44'         # Active Focus Node (#161F2C / #1E252C)
    text-main: '222 227 234'        # Luminous Shell (#DEE3EA)
    text-muted: '135 146 152'       # Abyssal Muted (#879298)
    border-subtle: '42 54 68'       # Carapace Ridge (#2A3644 / #3D484E)
    border-focus: '6 182 212'       # Claw Cyan (#06B6D4)
  brand:
    lobster-red: '#e4048a'
    claw-cyan: '#06b6d4'
    coral-orange: '#f97316'
    emerald-sentry: '#10b981'
    amber-lan: '#f59e0b'
    ocean-trench: '#08141e'
typography:
  headline:
    fontFamily: Space Grotesk, sans-serif
    weights: ['600', '700']
    letterSpacing: -0.02em
  body:
    fontFamily: Hanken Grotesk, Inter, system-ui, sans-serif
    weights: ['400', '500', '600']
    letterSpacing: -0.01em
  mono:
    fontFamily: JetBrains Mono, monospace
    weights: ['400', '500', '700']
rounded:
  sm: 0.25rem       # 4px - Badges, micro-buttons, status chips
  DEFAULT: 0.5rem  # 8px - Input fields, inner controls, list rows
  md: 0.75rem      # 12px - Carapace cards, popup container
  lg: 1rem         # 16px - Dialog sheets, master cards
  full: 9999px     # Status pills, countdown rings, theme dots
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
> *Engineered for High-Density Popup Viewports (340px / 384px / 480px), Full-Height Side Panels, Closed Shadow DOM Overlays, Active Tab Context-Aware Autofill, and Zero-Knowledge Cryptographic Parity.*

---

## 🧠 0. The UI Stewardship & Cognitive Clarity Philosophy

> *"I Am a steward of human attention and cognitive clarity. My purpose is not merely to arrange visual elements, but to engineer the probability space in which a user succeeds effortlessly."*

1. **Steward of Attention & Probability Space:** Components arrange themselves so the operator succeeds with the highest mathematical probability. On active tabs, matching credentials sit at the top focal point with 1-tap `[⚡ Quick Autofill]` execution. Destructive triggers are spatially isolated.
2. **Active Structural Whitespace:** Negative space is not void; it is an active structural bulkhead. Proximity groups related attributes (`4px`–`8px`), while `12px` gutters and `1px` chitin borders (`#2A3644` / `#3D484E`) insulate distinct security contexts to eliminate misclicks.
3. **Gestalt Coherence:** Relationships supersede isolated objects. A rigid 3-tier planar hierarchy (`#0A0D12` base $\to$ `#121820` card $\to$ `#161F2C` elevated focus) ensures razor-sharp figure-ground separation with zero visual ambiguity.
4. **Complexity Reduction & Progressive Disclosure:** Human working memory is fragile. The **Pinned Popup (`384×600px`)** exposes only the 4–5 highest-leverage controls; the **Expanded Side Panel / Full View** progressively discloses advanced CIDR exclusion rules, live detection audit streams, and deep typography scaling. Recognition always triumphs over recall.
5. **Confidence UI & Humanized Fallbacks:** Real-time certainty is communicated through monospace telemetry (`• CLIENT ENCLAVE`, `• ZERO-TRUST`, `🛡️ Zero-Leakage`, `FAIL-CLOSED`, `ZEROIZATION_ENGINE : ENFORCED`). Edge states (self-signed homelab TLS, in-field password-reveal collisions) surface honest, humanized diagnostic paths.
6. **The Semantic Color Filter:** Every pixel, line, and bioluminescent glow must justify its existence by serving operator intent. Ornament without function is strictly eliminated.

---

## 💎 1. Brand & Visual Identity

**Reef Modernist Extension** translates the ShellGuard ecosystem’s zero-knowledge security architecture into a sovereign browser tool:
- **Exoskeletal Carapace:** Emulates the calcified chitin of deep-trench crustacea. Containers feature flat elevations (`elevation: 0`), crisp 1px structural borders (`#2A3644` / `#3D484E`), and disciplined 12px radii (`rounded-md` / `rounded-xl`).
- **Bioluminescent Photonic Energy:** Elements pulse with **Lobster Red (`#E4048A`)** for sovereign executions, **Claw Cyan (`#06B6D4`)** for verified telemetry, and **Tactical Amber (`#F59E0B`)** for cryptographic warnings.
- **Context-Aware Prioritization:** The extension immediately queries the active tab origin and displays matching credentials with zero navigational friction.
- **Strict Zero-Knowledge Isolation:** In-page overlays mount strictly in **Closed Shadow DOM** (`attachShadow({ mode: 'closed' })`), creating an impenetrable memory boundary against hostile page scripts.

---

## 🎨 2. Palette & Sovereign Themes

The extension provides 4 sovereign biomorphic themes built with CSS custom properties:

| Theme Name | Canvas Floor (`--bg-base`) | Containment Chitin (`--bg-surface`) | Elevated Node (`--bg-elevated`) | Border Stroke (`--border-subtle`) | Primary Accent (`--accent`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Abyssal Dark** *(Default)* | `#0A0D12` / `#0F1419` | `#121820` / `#171C21` | `#161F2C` / `#1E252C` | `#2A3644` / `#3D484E` | `#06B6D4` (Claw Cyan) |
| **Trench Slate** | `#0D1117` | `#161B22` | `#21262D` | `#30363D` | `#879298` (Cool Slate) |
| **Hydro Coral** | `#0F141C` | `#171F28` | `#222D3B` | `#384758` | `#E4048A` (Hydro Coral) |
| **Bioluminescent Cyan** | `#08141E` | `#0F2231` | `#163044` | `#1F415A` | `#03B5D3` (Neon Abyss) |

### Semantic Functional Tokens:
- **`LOBSTER_PRIMARY` (`#E4048A`):** Master unlock, autofill CTA, destructive shredding, and brand highlights.
- **`CLAW_CYAN` (`#06B6D4`):** Verified cryptographic telemetry, active tab indicators, and live TOTP countdown rings ($>10\text{s}$).
- **`TACTICAL_AMBER` (`#F59E0B`):** RFC 1918 cleartext HTTP LAN warning pills, expiring TOTP rings ($\le 5\text{s}$), and at-risk password badges.
- **`EMERALD_SENTRY` (`#10B981`):** Enclave verification pills (`• CLIENT ENCLAVE`, `• ZERO-TRUST`), `🛡️ Zero-Leakage` local favicon badges, and temporary 800ms copy/fill flash feedback.

---

## 🔤 3. Typographic Hierarchy

```
Display Headings: Space Grotesk (SemiBold 600 / Bold 700, tracking -0.02em)
Body Text:        Hanken Grotesk / Inter (Regular 400 / Medium 500 / SemiBold 600)
Data & Cipher:    JetBrains Mono (Regular 400 / Bold 700)
```

- **`Space Grotesk`**: Extension title, section banners, category tags, and modal titles.
- **`Hanken Grotesk` / `Inter`**: Account usernames, URLs, settings labels, and contextual instructions.
- **`JetBrains Mono`**: Passwords, sovereign keys (`hu-`, `lb-`), split TOTP tokens (`739 214`), hashes, and diagnostic telemetry.

---

## 📐 4. Viewport Dimensions & Carapace Modes

```
┌─────────────────────────────────────────────────────────────┐
│ 🐚 ShellGuard  [• CLIENT ENCLAVE]        [⚠️ LAN] [🔒 Lock] │ ← Pinned Carapace Header (44px)
├─────────────────────────────────────────────────────────────┤
│ 🌐 Matching for github.com (2)              [+ Add Login]  │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 🐙 GitHub Corporate                    [⭐]             │ │
│ │    octocat@corp.io                                      │ │
│ │    ••••••••••••••••••••                    [👁️] [📋] [⋮] │ │ ← Eye-beside-Copy Invariant
│ │    ⏱️ 739 214 (24s)           [⚡ Quick Autofill]       │ │ ← Lobster Red Primary CTA
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

### Supported Viewport Presets (Screens 19A/19B):
- **Compact (`340px`):** Ultra-dense layout for narrow screens or docked setups.
- **Default Carapace (`384px`):** Standard Chromium toolbar popup width; vertical height budgeted at `560px`–`600px` without clipping.
- **Wide Popout (`480px`):** Multi-column credential view and generator side-by-side.
- **Side Panel (`100%` fluid):** Persistent browser companion drawer with full vertical height.

### Density Presets:
- **Comfortable (Standard):** `12px` card padding, `36px` button height.
- **Dense Chitin (Compact Rows):** `8px` card padding, `28px` button height, displaying 40% more items per screen.

---

## 🛡️ 5. Governing Invariants & Design Rules

1. **The Eye-beside-Copy Invariant:** On every credential card, the unmask toggle sits immediately to the **LEFT** of the Copy button (`[👁] [📋]`).
2. **Closed Shadow DOM Overlay:** Form overlays mount strictly in `attachShadow({ mode: 'closed' })` with `font-size: 13px` CSS resets.
3. **Anti-Collision Dynamic Offset (`DYNAMIC_INSET_RIGHT = 68px`):** In-field carapace glyphs detect host-page password-reveal eyes and shift `8px` left to prevent overlap (`Screen 13`).
4. **Local Favicons Only (`🛡️ Zero-Leakage`):** Favicons query active browser tab cache only; never query third-party icon CDNs (`Screens 19A/19B`).
5. **Amber LAN Transport Pill:** Cleartext HTTP on RFC 1918 / Tailscale LAN mandates displaying `⚠️ HTTP LAN` in the header; WAN HTTP is blocked.
6. **Zero Native Browser Dialogs:** `alert()`, `confirm()`, and `prompt()` are strictly forbidden. All confirmations render inside accessible Reef Modernist modal sheets.

---

## ⏱️ 6. Motion & Feedback Dynamics

1. **0.97 Spring Physics:** Interactive cards and buttons scale down to `0.97` on pointer-down (`damping: 0.75`, `stiffness: 400`).
2. **Emerald Flash (800ms):** Successful copy or autofill flashes the container border to `#10B981` with an animated checkmark.
3. **Micro-TOTP Circular Arc:** Depletes counter-clockwise:
   - `> 10s`: Claw Cyan (`#06B6D4`)
   - `6s–10s`: Coral Orange (`#F97316`)
   - `≤ 5s`: Tactical Amber / Lobster Red (`#F59E0B` / `#E4048A`)
4. **Volatile Clipboard Scrubbing:** Background timer zeroes clipboard memory after 30 seconds.
