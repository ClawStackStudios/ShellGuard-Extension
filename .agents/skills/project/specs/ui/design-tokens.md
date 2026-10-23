# 🎨 UI Oracle: Reef Modernist Design Tokens & Invariants

> **The Sovereign Interface System:** Chitinous armor plating, pressurized bioluminescent depth, and mathematical zero-knowledge precision. Engineered for browser extension viewports (`384px` fixed popup, fluid side-panel drawers, and closed Shadow DOM overlays).

---

## §1. Sovereign Theme Palettes

ShellGuard provides 4 sovereign biomorphic themes designed to maintain high-contrast legibility across ambient light conditions without emitting glare:

| Theme Name | Canvas Floor (`--bg-base`) | Containment Chitin (`--bg-surface`) | Elevated Node (`--bg-elevated`) | Border Stroke (`--border-subtle`) | Primary Accent (`--accent`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Abyssal Dark** *(Default)* | `#0A0D12` / `#0F1419` | `#121820` / `#171C21` | `#161F2C` / `#1E252C` | `#2A3644` / `#3D484E` | `#06B6D4` (Claw Cyan) |
| **Trench Slate** | `#0D1117` | `#161B22` | `#21262D` | `#30363D` | `#879298` (Cool Slate) |
| **Hydro Coral** | `#0F141C` | `#171F28` | `#222D3B` | `#384758` | `#E4048A` (Hydro Coral) |
| **Bioluminescent Cyan** | `#08141E` | `#0F2231` | `#163044` | `#1F415A` | `#03B5D3` (Neon Abyss) |

### Theme Variable Binding:
```css
:root {
  --bg-base: #0a0d12;
  --bg-surface: #121820;
  --bg-elevated: #161f2c;
  --text-main: #dee3ea;
  --text-muted: #879298;
  --border-subtle: #2a3644;
  --border-focus: #06b6d4;
  --radius-container: 12px;
  --radius-item: 8px;
  --radius-control: 4px;
}
```

---

## §2. Semantic Accent Tokens & Signals

Color is strictly functional and conveys instantaneous cryptographic and network state:

| Semantic Token | Hex Code | Visual State & Role |
| :--- | :--- | :--- |
| `LOBSTER_PRIMARY` | `#E4048A` | Primary sovereign executions (`Autofill`, `Save`, `Master Unlock`), destructive confirmation (`Shred`), active theme highlights. |
| `CLAW_CYAN` | `#06B6D4` | Verified cryptographic telemetry, active tab focus rings, live TOTP countdown rings ($>10\text{s}$), and `lb-` agentic key badges. |
| `TACTICAL_AMBER` | `#F59E0B` | RFC 1918 cleartext HTTP LAN warnings, expiring TOTP rings ($\le 5\text{s}$), at-risk credential badges, and clipboard timeout alerts. |
| `EMERALD_SENTRY` | `#10B981` | Verified enclave status (`• CLIENT ENCLAVE`, `• ZERO-TRUST`), `🛡️ Zero-Leakage` local favicon badges, and temporary 800ms copy/fill flash feedback. |
| `CORAL_ORANGE` | `#F97316` | Intermediate TOTP warning ($6\text{s}–10\text{s}$ remaining) and unsaved changes indicators. |

---

## §3. Tripartite Typography Hierarchy

Engineered for dense data visualization, terminal readability, and zero glyph ambiguity:

```
Display Headings: Space Grotesk (600 / 700, tracking -0.02em)
Body Text:        Hanken Grotesk / Inter (400 / 500 / 600, tracking -0.01em)
Data & Secrets:   JetBrains Mono (400 / 500 / 700)
```

1. **`Space Grotesk` (Headings):** Section banners, popup title headers, modal titles, and major category tags.
2. **`Hanken Grotesk` / `Inter` (Body):** Usernames, domain names, settings instructions, and descriptive metadata.
3. **`JetBrains Mono` (Data & Cipher):** Mandatory for all passwords, sovereign keys (`hu-`, `lb-`), TOTP 6-digit split readouts (`739 214`), hashes, timestamps, and UI chips. Tabular numeric alignment ensures zero horizontal jitter during countdowns.

### Typography Scale Presets (Screen 19B):
- **100% Default:** Base font size `13px` / `14px` (`root: 16px`).
- **110% Medium:** Scaled `14.3px` for improved legibility on high-DPI displays.
- **120% Large:** Scaled `15.6px` for accessibility compliance.

---

## §4. Three-Tier Planar Elevation & Cipher Glows

Eliminates diffuse ambient drop shadows in favor of crisp structural stratification with focused atmospheric halos:

```
Tier 0 (Canvas Base)       ──► #0A0D12 / #0F1419 (solid impenetrable floor)
  └── Tier 1 (Carapace)    ──► #121820 / #171C21 (1px border #2A3644 / #3D484E)
        └── Tier 2 (Focus) ──► #161F2C / #1E252C (1px border #06B6D4 + cipher halo)
```

### Active Cipher Glows:
- **Verified Telemetry Halo:** `box-shadow: 0 0 16px -2px rgba(6, 182, 212, 0.25)` (Cyan)
- **Master Action Halo:** `box-shadow: 0 0 16px -2px rgba(228, 4, 138, 0.30)` (Lobster Red)
- **Security Alert Halo:** `box-shadow: 0 0 16px -2px rgba(245, 158, 11, 0.25)` (Tactical Amber)

---

## §5. Carapace Viewport Dimensions & Motion Physics

### Viewport Dimension Presets (Screens 19A/19B):
- **Compact (`340px`):** Ultra-dense layout for narrow side docks or small monitors.
- **Default Carapace (`384px`):** Standard Chromium toolbar popup width; vertical height budgeted at `560px`–`600px`.
- **Wide Popout (`480px`):** Wide popout window for multi-column credential inspection and generator side-by-side.
- **Docked Side Panel (`100%` fluid):** Persistent browser companion drawer with full vertical height.

### Density Modes:
- **Comfortable (Standard):** Row padding `12px` (`space-md`), button height `36px`.
- **Dense Chitin (Compact Rows):** Row padding `8px` (`space-sm`), button height `28px`, displaying 40% more items per viewport.

### Sensory Motion & Spring Physics:
- **0.97 Scale Press:** Interactive cards and buttons scale down to `0.97` on pointer-down with spring damping `0.75` and stiffness `400`.
- **Emerald Flash (800ms):** Copying a secret or executing autofill temporarily flashes the container border to `#10B981` with an animated checkmark icon.

---

## §6. Invariant Action Clusters & Ergonomics

### The Eye-beside-Copy Invariant
On every credential row, detail card, and password field:
- The **Unmask Toggle (`Eye` / `EyeOff`)** MUST sit immediately to the **LEFT** of the Copy button:
  ```text
  [ Masked Secret: •••••••••••• ]   [ 👁️ Unmask ] [ 📋 Copy ]
  ```
- **Rationale:** Prevents accidental clipboard overwrites when aiming to visually inspect secrets.

### High-Contrast Chitin Outlines
- When enabled in Accessibility settings (`Screen 19B`), border stroke transitions from `#2A3644` to `100% rgba(222, 227, 234, 0.5)` with high-contrast text contrast ratios $\ge 7:1$.

### Zero Native Browser Dialogs
- Native browser `alert()`, `confirm()`, and `prompt()` dialogs are strictly forbidden. All operator confirmations (Lock, Wipe, Shred, Export) render within closed, accessible Reef Modernist modal sheets.
