# 🦞 ShellGuard Extension — Release v0.0.0.4 (Build 4)
> **"Lucide Vector Icon Migration & Typography Hardening"** — Stage 02b-HF: Pure-TS Inline SVG Icon Engine, Accessible Zero-Bleed Dropzone Layering, and Offline Homelab Enclave Resilience.

```text
███████╗██╗   ██╗███████╗ ██╗     ██╗        ██████╗    ██╗   ██╗   █████╗    ██████╗    ██╗  ██╗
██╔════╝██║   ██║██╔════╝ ██║     ██║        ██╔═══╝    ██║   ██║  ██╔══██╗  ██╔══██╗   ██║  ██║
███████╗███████║ █████╗   ██║     ██║        ██║ ███╗   ██║   ██║  ███████║  ██████╔╝   ███████║
╚════██║██╔══██║██╔══╝   ██║     ██║        ██║  ██║   ██║   ██║  ██╔══██║  ██╔══██╗   ╚════██║
███████║██║   ██║███████╗ ███████╗███████╗   ╚██████╝   ╚██████╝   ██║  ██║  ██║   ██║        ██║
╚══════╝╚═╝   ╚═╝╚══════╝ ╚══════╝╚══════╝    ╚═════╝    ╚═════╝   ╚═╝  ╚═╝  ╚═╝   ╚═╝        ╚═╝
                    ~ **ClawStack Studios©™ — Extension Enclave** ~
```

---

## 🚀 The Core Summary

Welcome to **v0.0.0.4 (Build 4)** of **ShellGuard-Extension**! This release delivers **Stage 02b-HF (Hotfix)**, an out-of-band visual resilience update that completely replaces external font ligatures with bundled, offline-resilient inline SVGs.

In prior builds, relying on Google Material Symbols ligatures caused UI breakdowns when running inside extension contexts or offline homelabs: icons rendered as raw text strings (e.g. `arrow_back`, `cloud_upload`, `shield`), pushing buttons out of alignment and causing the hero emblem to truncate.

This hotfix migrates 100% of icons to bundled **`lucide-react`** inline SVGs, centers the hero squircle emblem, and encapsulates the file dropzone inside an accessible `<label>` pairing with an `sr-only` input to permanently eliminate browser chooser button bleed-through.

---

## 💎 Key Themes & Highlights

### 🎨 1. Pure Inline SVG Iconography (`lucide-react`)
- **Zero-FOUT & Offline Resilient**: Completely purged all `<span className="material-symbols-outlined">...</span>` ligature strings.
- **Crisp Vector Rendering**: Integrated `ArrowLeft`, `Lock`, `LockOpen`, `Check`, `Shield`, `Upload`, `KeyRound`, `ShieldCheck`, `UploadCloud`, `ExternalLink`, `ShieldAlert`, and `Key` directly into the DOM tree.
- **Zero Third-Party Font Requests**: Extension is 100% immune to Google Font network blockages, CSP restrictions, and homelab air-gaps.

### 🛡️ 2. Hero Squircle Alignment & Glow
- **Re-Centered Shield SVG**: The central ShellGuard shield is cleanly centered inside the 64×64 rounded carapace squircle with Claw Cyan (`#06B6D4`) bioluminescent drop-shadow.

### 📁 3. File Chooser Layering & Sanitization
- **Accessible `<label>` Wrapper**: Replaces overlay hacks with a native `<label>` containing an `sr-only` input.
- **Zero Leaked Browser Controls**: Eliminates the native browser `"No file chosen"` button from ever rendering across the styled dropzone.

---

## 🛣️ What's Next: Cascaded Stage 03 Runway

Per Rule 7, all planned downstream stages have cascaded forward by $+1$. The active leading edge now points to **Stage 03 (Vault Dashboard & Basic Sync — `v0.0.0.5` • Build 5)**.

*ClawStack Studios©™ — Sovereign, client-decrypted vault management for homelabs and agents.*
