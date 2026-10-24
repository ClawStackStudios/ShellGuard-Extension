# 06.02 — Autofill & Shadow DOM Settings (`screen_11_autofill_settings`)

**Visual & Markup Oracle (Inspect First):**
Invoke `view_file` on `docs/stitch/screen_11_autofill_settings.png` and `docs/stitch/screen_11_autofill_settings.html`. Every visual control, `IN-PAGE SHADOW DOM INJECTION` toggles (`Closed Shadow DOM Overlay`, `In-Field Carapace Glyphs`, `Suggest SSH & Agent Keys lb-`), `KEYBOARD SHORTCUTS` (`Ctrl + Shift + L`, `Ctrl + Shift + 9`, `Customize Hotkeys in Chrome Settings ↗`), and `PAGE LOAD & CREDENTIAL PIPELINE` (`FAIL-CLOSED`) banner visible in the oracle is mandatory.

**Subterranean Invariants:**
Toggling `Closed Shadow DOM Overlay` or `In-Field Carapace Glyphs` broadcasts an immediate state update to all active content scripts via `chrome.tabs.sendMessage` to mount or unmount `<shellguard-autofill-carapace>` roots without page reload; toggling `Suggest SSH & Agent Keys (lb-)` permits developer console and web-terminal inputs to surface scoped agentic sub-keys alongside standard logins. Global hotkey badges (`Ctrl + Shift + L` for JIT Autofill, `Ctrl + Shift + 9` for cycling matched accounts) read live bindings from `chrome.commands.getAll()`, and clicking `Customize Hotkeys in Chrome Settings ↗` invokes `chrome.tabs.create({ url: 'chrome://extensions/shortcuts' })`.

In strict compliance with Rule 3, **Autofill on page load is fail-closed (disabled by default)** and guarded by the amber `FAIL-CLOSED` pipeline banner so hidden or cross-origin DOM elements can never harvest credentials silently on navigation; injection strictly requires an explicit operator gesture (hotkey, glyph click, or popup Fill button).
