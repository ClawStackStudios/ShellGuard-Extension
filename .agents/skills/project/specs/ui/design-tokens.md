# 🎨 UI Oracle: Reef Modernist Design Tokens & Invariants

> Bioluminescent defense design system: flat carapace, 1px tactile borders, and strict Eye-beside-Copy ergonomics.

---

## §1. Color Tokens & Scales

| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `CANVAS_ABYSS` | `#0F1419` | Extension root background |
| `CARAPACE_CONTAINER` | `#171C21` | Card and panel container background |
| `RIDGE_BORDER` | `#3D484E` | 1px tactile border on cards, inputs, and modals |
| `LOBSTER_PRIMARY` | `#E4048A` | Primary execution buttons and active highlights |
| `CLAW_CYAN` | `#06B6D4` | TOTP rings, telemetry, and focused state rings |
| `CORAL_AMBER` | `#D29922` | HTTP LAN warning badges and expiring TOTP rings ($\le 5\text{s}$) |
| `ALGAL_EMERALD` | `#10B981` | Success indicators and verified vault states |

---

## §2. Eye-beside-Copy Invariant

On every credential detail view and password input:
- The **Unmask Toggle (`Eye` / `EyeOff`)** sits immediately to the **LEFT** of the Copy button.
- Length-truthful bullet masking (`••••••••••••••••`) matches character count.
- Native browser dialogs (`alert`, `confirm`, `prompt`) are forbidden; use custom accessible modals.
