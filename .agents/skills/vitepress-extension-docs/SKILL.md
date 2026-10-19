---
name: vitepress-extension-docs
description: Guides authoring and synchronizing user-facing VitePress documentation for ShellGuard-Extension in the main ShellGuard documentation portal. Use when creating, updating, or reviewing end-user extension guides, screenshot maps, or navigation structures.
---

# VitePress Extension Documentation Skill

Authoritative runbook for documenting **ShellGuard-Extension** within the canonical **ShellGuard VitePress Documentation Portal** (`ShellGuard/docs/`).

## 1. Prime Directives for User Docs

1. **The Server Account Prerequisite:**
   Every onboarding guide must state up front:  
   > **Accounts cannot be created inside the browser extension.**  
   > ShellGuard is a self-hosted sovereign vault. Users must first create their account on their personal ShellGuard Web Server to generate their master `hu-` sovereign key.
2. **Beginner-Friendly Clarity:**
   Explain features in plain words. Whenever cryptographic terms appear (e.g. Zero-Knowledge, AAD, HKDF), immediately follow with user value ("The server never sees your passwords in plaintext").
3. **Screenshot Alignment (Docs Bow to UI):**
   Every feature guide must reference its corresponding Stitch UI screen asset:
   - Login & Gateway Setup: `screen_1_login.png`
   - Active Tab Vault Dashboard: `screen_2_dashboard.png`
   - All Items & Pod Navigation: `screen_2_dashboard_bitwarden.png`
   - Item View & Micro-TOTP: `screen_3_view_item.png`
   - Credential Generator & History: `screen_4_generator.png`, `screen_5_generator_history.png`
   - Item Edit & Custom Fields: `screen_6_edit_item.png`
   - In-Page Overlay & Autofill: `screen_7_inpage_overlay.png`
   - PIN Lock & Quick Unlock: `screen_8_lock_screen.png`
   - Settings & Homelab Transport: `screen_9_settings_hub.png`, `screen_10_account_security.png`, `screen_11_autofill_settings.png`

## 2. VitePress Navigation Target

In `ShellGuard/docs/.vitepress/config.ts`:
- Add `{ text: 'Browser Extension', link: '/extension/' }` to `themeConfig.nav`.
- Add sidebar group `'/extension/'`:
  ```typescript
  '/extension/': [
    {
      text: 'Browser Extension Guide',
      items: [
        { text: 'Overview & Prerequisites', link: '/extension/' },
        { text: 'Installation & Setup', link: '/extension/quickstart' },
        { text: 'Autofill & Keyboard Shortcuts', link: '/extension/autofill' },
        { text: 'Micro-TOTP Authenticator', link: '/extension/micro-totp' },
        { text: 'Password & Passphrase Generator', link: '/extension/generator' },
        { text: 'Homelab & Transport Sovereignty', link: '/extension/homelab-transport' },
        { text: 'Security, PINs & Auto-Lock', link: '/extension/security-and-lock' },
      ]
    }
  ]
  ```

## 3. Homelab & Transport Documentation Policy

When explaining connection setup:
- State that **Cleartext HTTP** is supported for local RFC 1918 LANs and Tailscale with an ambient amber UI warning pill.
- Explain the **"Trust Self-Signed Certificates"** toggle:
  If running HTTPS on a local server with an untrusted certificate, users must click the "Authorize in Browser" helper to allow the browser socket to accept the origin certificate.
