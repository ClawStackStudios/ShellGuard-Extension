# Stage 09 — In-Page Autofill, Anti-Collision Inset & Closed Shadow DOM Overlays (`v0.0.0.10` • Build 10)

**Target Oracles:**
- `.agents/skills/project/modules/03-inpage-autofill/01-shadow-dropdown-overlay/spec.md` (`screen_7_shadow_dropdown.png`)
- `.agents/skills/project/modules/03-inpage-autofill/02-glyph-states-and-inset/spec.md` (`screen_13_glyph_states.png`)
- `.agents/skills/project/specs/autofill/autofill-mechanics.md`

**Task A [DOM Observer & Anti-Pollution Injection] & Task B [Closed Shadow DOM & Inset Engine]:**
Implement content script `MutationObserver` enforcing username/password co-presence, 6-mode URI matching, and iframe origin verification. Execute credential insertion via pristine prototype setter (`HTMLInputElement.prototype.value.set`) with synthetic bubbling `input`/`change` events and $<1\text{ms}$ transient secret zeroization.

Build the closed Shadow DOM (`attachShadow({ mode: 'closed' })`) in-page dropdown (`Screen 7`), dynamic `ResizeObserver` anti-collision glyph inset engine (`Screen 13` shifting up to 68px when native reveal/clear buttons exist), and floating credential capture notification bar (`Screens 12/12A/12B`).
