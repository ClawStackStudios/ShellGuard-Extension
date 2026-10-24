# 03.01 — In-Page Closed Shadow DOM Autofill Overlay (`screen_7_inpage_overlay`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_7_inpage_overlay.png` and `docs/stitch/screen_7_inpage_overlay.html`. Every visual element, in-field cyan carapace glyph, floating dropdown (`• ZK ISOLATED`), matched rows with live `24s` TOTP countdown and `[Fill]` buttons, and footer actions (`⚡ Generate Password`, `Open Vault →`) visible in the oracle is mandatory.

**Subterranean Invariants:**
The in-page autofill dropdown mounts exclusively inside a closed Shadow DOM root (`host.attachShadow({ mode: 'closed' })`) with `adoptedStyleSheets` pixel-locked (`font-size: 13px`) so host-page scripts calling `host.shadowRoot` receive `null` and host CSS `rem` scaling cannot distort layout geometry. Prior to rendering suggestions, the content script only receives non-sensitive metadata (`id`, `title`, `username`, `totpRemainingSeconds`) for origins passing strict FQDN/port match validation and the **Co-Presence Gate** (suppressing overlays on standalone search/chat inputs unless a password field is co-present or the domain is a verified multi-step auth flow).

Plaintext passwords and TOTP codes never reside in the content script while the dropdown is open. Only when the operator explicitly clicks `[Fill]` (or invokes `Ctrl+Shift+L`) does the content script request a single-use JIT credential payload from the background worker, write the values through pristine prototype descriptors (`Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set`) followed by synthetic bubbling `input` and `change` events to satisfy React/Vue/Angular state trackers, and zeroize the local variable within `<1ms`.
