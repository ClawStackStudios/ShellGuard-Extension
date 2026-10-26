# 🦞 ShellGuard Extension — Release v0.0.0.3 (Build 3)
> **"Login Gateway & Session State Machine"** — Stage 02: Network Transport Classification (RFC 1918 / Tailscale), Authentication Orchestrator (`POST /api/auth/token`), React Reactive Session Switching, and Reef Modernist Login UI.

```text
███████╗██╗   ██╗███████╗ ██╗     ██╗        ██████╗    ██╗   ██╗   █████╗    ██████╗    ██████╗
██╔════╝██║   ██║██╔════╝ ██║     ██║        ██╔═══╝    ██║   ██║  ██╔══██╗  ██╔══██╗    ██╔═══██╗
███████╗███████║ █████╗   ██║     ██║        ██║ ███╗   ██║   ██║  ███████║  ██████╔╝    ██████╔╝
╚════██║██╔══██║██╔══╝   ██║     ██║        ██║  ██║   ██║   ██║  ██╔══██║  ██╔══██╗    ╚════██║
███████║██║   ██║███████╗ ███████╗███████╗   ╚██████╝   ╚██████╝   ██║  ██║  ██║   ██║   ██████╔╝
╚══════╝╚═╝   ╚═╝╚══════╝ ╚══════╝╚══════╝    ╚═════╝    ╚═════╝   ╚═╝  ╚═╝  ╚═╝   ╚═╝   ╚═════╝
                    ~ **ClawStack Studios©™ — Extension Enclave** ~
```

---

## 🚀 The Core Summary

Welcome to **v0.0.0.3 (Build 3)** of **ShellGuard-Extension**! This release implements **Stage 02 (Login Gateway & Session State Machine)**, establishing the interactive front door to the zero-knowledge vault.

This release introduces the `LoginGateway` interface matched precisely to `docs/stitch/screen_1_login.html`, implementing the split protocol/host/port UI, segmented mode toggles (Identity Upload vs ClawKey Paste), and active transport classification.

Under the hood, `authService.ts` seamlessly authenticates against `/api/auth/token`, hashes the raw secret, derives the master PRK and domain keys, safely deposits the `vault_pearls` non-extractable key into the `ShellGuardSessionVault`, and deterministically scrubs ephemeral buffers with `zeroizeBuffer()`.

---

## 💎 Key Themes & Highlights

### 🛡️ 1. Transport Sovereignty & Homelab TLS Control Plane
- **Public WAN HTTP Blocked**: Strict enforcement blocking cleartext `http://` against public endpoints.
- **LAN Grace & Amber Telemetry**: Cleartext HTTP permitted strictly on `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `100.64.0.0/10` (Tailscale), and `localhost`. Detection dynamically renders the Amber UI warning pill.
- **Self-Signed Certificate Toggle**: Introduces the persistent `Allow ShellGuard Self Signed Cert` toggle (`sg_allow_self_signed`) pairing seamlessly with ShellGuard's Phase 27 SuperLobster TLS engine.
- **In-Carapace Origin Exception CTA**: In adherence with the Zero Native Browser Dialogs rule, failed self-signed HTTPS connections present an in-carapace button opening `/api/health` in a browser tab to establish Chromium session trust without dismissing the popup.
- **Reverse Proxy Subpath Routing**: `apiClient.ts` cleanly isolates host and subpaths (e.g. `homelab.local/shellguard` or `192.168.1.100:8080/vault`), injecting ports cleanly before subpaths without double-slashes.
- **Endpoint Persistence**: Saves `{ protocol, host, port }` in `localStorage` across popup sessions.

### 🔒 2. Authentication Orchestration
- **Zod-validated Payloads**: Defines `AuthTokenRequestSchema` and `AuthTokenResponseSchema`.
- **Zero-knowledge Exchange**: Calculates `SHA-256(cleanedKey)` strictly client-side. The raw secret is *never* transmitted over the wire.
- **Buffer Zeroization**: Employs `@noble/hashes` for fast processing and enforces `zeroizeBuffer()` natively on `keyBytes` post-derivation to close potential heap extraction vulnerabilities.
- **Raw Key Memory Hygiene**: Input buffer is wiped immediately upon submission.

### 💾 3. Reactive Session State Machine
- **App.tsx State Refactor**: Migrates the extension popup to check `ShellGuardSessionVault` on mount.
- **Dynamic Routing & Manual Lock**: Serves `LoginGateway.tsx` unauthenticated, immediately transitioning into the locked Dashboard SPA view upon key hydration, and adds a manual Lock button calling `destroySessionVault()`.

### 🎨 4. Reef Modernist Login UI Alignment
- **Pixel-Perfect Oracles**: Implements the dark carapace aesthetics (`#0F1419` floor, `#E4048A` accents), telemetry metrics footer, and the segmented visual mode selection logic extracted directly from Stitch documentation.
- **Zero Dialog Invariant**: Replaces all modal dialogs with in-carapace action cards.

---

## 🛣️ What's Next: Stage 03 Active Runway

With the Gateway operational, the next release expands into **Stage 03 (Vault Dashboard & Records)** — focusing on decrypted list view rendering, quick action menus, and TOTP generation mechanisms.

*ClawStack Studios©™ — Sovereign, client-decrypted vault management for homelabs and agents.*
