# Stage 04 — Settings Hub (Base Carapace Navigation) (`v0.0.0.5` • Build 5)

**Target Oracles:**
- `.agents/skills/project/modules/06-settings/00-settings-hub/spec.md` (`screen_9_settings_hub.png`)
- `.agents/skills/project/specs/ui/design-tokens.md`

**Task A [Session Lifecycle & Lock/Logout Controller] & Task B [Screen 9 Settings Carapace]:**
Implement session lock and logout controllers: Quick Lock immediately destroys `ShellGuardSessionVault` IndexedDB keys and zeroizes in-memory secrets; Full Logout purges both session keys and `chrome.storage.local` encrypted envelopes, resetting the extension state machine to `LOGGED_OUT`. Probe server `/api/health` for live connection status.

Build the Settings Hub base menu (`Screen 9`) to 100% visual oracle parity: pinned carapace header with back-navigation, active identity card displaying connected server URL, identity type (`hu-` sovereign or `lb-` agentic), and sync timestamp, 6 top-level navigation target cards (`Account & Security`, `Autofill & Shadow DOM`, `Vault Operations`, `Pods & Compartments`, `Appearance & Themes`, `About & Enclave Audit`), prominent Lobster Red `Lock Vault Now` button, and `Log Out Entirely` danger link.
