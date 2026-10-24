# Stage 05 — Core Popup SPA: Login, Dashboard, Editor & Lock Pad (`v0.0.1.5` • Build 6)

**Target Oracles:**
- `.agents/skills/project/modules/01-login-gateway/spec.md` (`screen_1_login.png`)
- `.agents/skills/project/modules/02-vault-dashboard/01-active-tab-and-list/spec.md` (`screen_2_dashboard.png`, `screen_2_dashboard_bitwarden.png`)
- `.agents/skills/project/modules/02-vault-dashboard/02-quick-actions-flyout/spec.md` (`screen_2c_dashboard_quick_menu.png`)
- `.agents/skills/project/modules/02-vault-dashboard/04-add-edit-item/spec.md` (`screen_6_edit_item.png`)
- `.agents/skills/project/modules/05-lock-enclave/01-pin-and-biometric-pad/spec.md` (`screen_8_lock_screen.png`)

**Task A [Vault State & Search Index] & Task B [Core Popup Views]:**
Implement the in-memory decrypted vault state manager supporting `<16ms` active-tab URI matching, 2×2 matrix filtering (`Pod`, `Tag`, `Type`, `Domain`), and cold-storage archive exclusion. Build the 5 core popup views to 100% visual oracle parity: Login Gateway (`Screen 1` with `.json` identity upload, `hu-`/`lb-` ClawKey input, and RFC 1918 LAN / Self-Signed TLS handling), Resting Dashboard (`Screen 2` & `2B`), 3-Dots Quick Actions Flyout (`Screen 2C`), Add/Edit Credential Form (`Screen 6` with Eye-beside-Action and under-stroke entropy meter), and Quick Lock 6-digit PIN / WebAuthn Keypad (`Screen 8`).
