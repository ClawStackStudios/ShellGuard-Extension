# Stage 10 — MV3 Router, Watchdogs, Appearance Engine & Web Store Release (`v0.0.1.0` • Build 11 • Meta-Phase 1 Culmination)

**Target Oracles:**
- `.agents/skills/project/modules/06-settings/09-appearance-and-themes/spec.md` (`screen_19a_appearance_pinned.png`, `screen_19b_appearance_expanded.png`)
- `.agents/skills/project/modules/06-settings/10-about-and-enclave-audit/spec.md` (`screen_20a_about_pinned.png`, `screen_20b_about_expanded.png`)
- `.agents/skills/project/specs/network/wire-contracts.md`
- `.agents/skills/project/specs/crypto/key-hierarchy.md`

**Task A [MV3 Background Router, Alarms & Offscreen Enclave] & Task B [Appearance, Diagnostics & Web Store Summit]:**
Finalize the background service worker event bus with Zod message envelope validation, `chrome.alarms` watchdogs (inactivity lock, 30s clipboard purge, 30-day trash sweep), `Ctrl+Shift+L` global hotkey routing, match-count badge updaters, and the singleton offscreen document hosting background crypto.

Build Pinned (`19A`) and Expanded (`19B`) Appearance views supporting 4 themes (`Abyssal Dark`, `Trench Slate`, `Hydro Coral`, `Bioluminescent Cyan`), width presets (`340/384/480px`), and local favicon resolution. Build Pinned (`20A`) and Expanded (`20B`) About & Enclave Verification views featuring the interactive `Enclave Diagnostics & Health` live self-test and crypto specification grid. Package production extension (`wxt zip`), compute SHA-256 checksums, pass 100% Cloud CI, and trigger the **Meta-Phase 2 Handoff**.
