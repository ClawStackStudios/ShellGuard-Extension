# UI Stewardship & Cognitive Clarity Invariants

> **The Mandate of the Interface:** I Am a steward of human attention and cognitive clarity. My purpose is not merely to arrange visual elements, but to engineer the probability space in which a user succeeds effortlessly.

---

## 1. Attention Engineering & Probability Space
- **Pristine Probability:** Interface components must arrange themselves to maximize the probability of intuitive operator success. The highest-value action in any given context must demand zero navigational depth.
- **Active Tab Priority:** In the extension popup (`384px`), matching logins for the active tab origin MUST anchor to the top focal zone with a 1-tap `[⚡ Quick Autofill]` trigger. Operators must never hunt through folder hierarchies to authenticate on the current page.
- **Destructive Insulation:** Destructive or high-impact actions (Session Lock, Memory Shred, Panic Wipe, Plaintext Export) must be spatially separated from routine navigation and require deliberate, friction-conscious confirmation.

## 2. Active Structural Whitespace & Noise Omission
- **Negative Space as Structure:** Whitespace is not empty background; it is an active structural bulkhead that isolates high-value actions and prevents misclicks.
- **Proximity & Grouping:** Group related controls through tight, disciplined proximity (`space-xs: 4px`, `space-sm: 8px`). Disjoint cryptographic contexts must be separated by `space-md: 12px` or structural `1px` chitin borders (`#3D484E` / `#2A3644`).
- **The Eye-beside-Copy Invariant:** On every credential card and password input, the unmask toggle (`Eye` / `EyeOff`) MUST sit immediately to the **LEFT** of the Copy trigger (`[👁] [📋]`). This physical separation eliminates accidental clipboard overwrites.
- **Zero Decorative Clutter:** Strip all ornamental drop shadows, gradient noise, and marketing telemetry. If an element does not increase the probability of user success or understanding, it is forbidden.

## 3. Gestalt Coherence & Planar Stratification
- **Figure-Ground Hierarchy:** Maintain rigid three-tier planar elevation to eliminate visual ambiguity:
  - *Tier 0 (Abyssal Floor `#0A0D12` / `#0F1419`):* Completely non-interactive base canvas.
  - *Tier 1 (Chitin Containment `#121820` / `#171C21`):* Structural chassis for credential cards, settings pods, and menus.
  - *Tier 2 (Elevated Nodes & Focus `#161F2C` / `#1E252C`):* Elevated cards with active bioluminescent halos (`#06B6D4` cyan or `#E4048A` coral).
- **Perceptual Continuity:** Use `2px` left-edge semantic chitin accent tags (`#06B6D4` for synced items, `#F59E0B` for exposed/weak credentials, `#E4048A` for locked or agentic pods) to allow rapid peripheral parsing across long lists.
- **Natural Closure:** Maintain disciplined `12px` container radii (`rounded-xl` or `rounded-md`) and `4px` inner component radii (`rounded-sm`). Eliminate jarring mixed geometries.

## 4. Complexity Reduction & Progressive Disclosure
- **Fragile Working Memory:** Strictly limit the number of simultaneous active choices on any single view to avoid decision paralysis.
- **Dual-Viewport Architecture (Pinned vs. Expanded):**
  - *Pinned Browser Popup (`384×600px`):* Expose strictly core immediate controls (4–5 high-leverage toggles, 2×2 theme swatches, essential display preferences). Prevent vertical clipping and scroll overwhelm by providing a prominent `More Options in Expanded View ↗` transition.
  - *Expanded Side Panel / Full-Tab View:* Progressively disclose advanced CIDR exclusions, live detection audit streams, full typography scaling, and deep cryptographic enclave telemetry.
- **Recognition Over Recall:**
  - Never force users to remember password strength rules; render real-time under-stroke entropy diagnostics (`104 bits • cryptographically strong • 0 breaches`).
  - Never make users calculate trash retention; badge every deleted item with its remaining lifespan (`Expires in 4d`).
  - Never hide themes in blind text dropdowns; display live visual color-dot swatches.

## 5. Confidence UI & Humanized Edge States
- **Certainty Telemetry:** Communicate real-time cryptographic status through explicit, compact monospace indicators:
  - `• CLIENT ENCLAVE` / `• ZERO-TRUST` (Emerald `#10B981`)
  - `🛡️ Zero-Leakage` (Browser-origin local favicon cache; zero CDN pings)
  - `⚠️ HTTP LAN` (RFC 1918 / Tailscale LAN transport carve-out)
  - `FAIL-CLOSED` (Page-load autofill disabled by default)
  - `ZEROIZATION_ENGINE : ENFORCED` (Rule 4 session zeroization verified)
- **Graceful Error Handling:** Do not hide errors behind generic codes. Surface honest, humanized diagnostic paths:
  - Guide self-signed homelab TLS operators through browser certificate authorization rather than throwing silent network exceptions.
  - Dynamically shift in-field autofill glyphs (`DYNAMIC_INSET_RIGHT = 68px`) when native password-reveal eye icons are detected, preventing collision.

## 6. The Semantic Color Filter
Every color and glowing halo must justify its existence through strict cryptographic semantics:
- **Lobster Red (`#E4048A`):** High-priority execution (`Autofill`, `Save`, `Master Unlock`) and destructive zeroization (`Shred`, `Lock`).
- **Claw Cyan (`#06B6D4`):** Active verified telemetry, live TOTP countdown rings, focus rings, and `lb-` agentic keys.
- **Tactical Amber (`#F59E0B`):** Heuristic alerts, RFC 1918 LAN warning pills, expiring TOTP ($\le 5\text{s}$), and weak/compromised credential diagnostics.
- **Emerald Sentry (`#10B981`):** Verified client enclaves, zero-leakage confirmations, and temporary copy/fill flash feedback.
