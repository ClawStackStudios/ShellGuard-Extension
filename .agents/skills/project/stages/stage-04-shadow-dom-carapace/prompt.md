# Stage 04 — Closed Shadow DOM Carapace, Anti-Collision Glyphs & Prompts (`v0.0.1.4` • Build 5)

**Target Oracles:**
- `.agents/skills/project/modules/03-inpage-autofill/01-shadow-dropdown-overlay/spec.md` (`screen_7_inpage_overlay.png`)
- `.agents/skills/project/modules/03-inpage-autofill/02-glyph-states-and-inset/spec.md` (`screen_13_inpage_glyph_states.png`)
- `.agents/skills/project/modules/06-settings/03-notifications-and-prompts/spec.md` (`screen_12a_notifications_pinned.png`, `screen_12b_notifications_expanded.png`)

**Task A [Anti-Collision Coordinate Engine] & Task B [Closed Shadow Overlays & Capture Bar]:**
Mount all in-page UI (`<shellguard-autofill-carapace>`) inside `attachShadow({ mode: 'closed' })` with pixel-locked `adoptedStyleSheets`. Implement the `ResizeObserver` **Anti-Collision Inset Engine** that detects native password-reveal eyes or clear buttons inside input containers and shifts the 4-state carapace glyph left by `12px + siblingWidth + 8px` (up to `68px`).

Implement the floating Shadow DOM suggestion dropdown (`Screen 7` & `Screen 13` State 01/02) featuring `AUTO-CASCADE 2FA` (`[Fill All]`), inline password/alias generation, and `Never for this site`, alongside the floating Shadow DOM save/update/passkey/agent-key capture bar (`Screen 12A/12B`) honoring target Pod routing, screen anchor position, CIDR/domain exclusions, and auto-dismiss timers.
