# 🛡️ Security Policy & Threat Model: ShellGuard-Extension

[![Security](https://img.shields.io/badge/Security-Zero_Knowledge-E4048A?style=for-the-badge)](#)
[![Audit](https://img.shields.io/badge/Audit-Client_Decrypted-06B6D4?style=for-the-badge)](#)
[![Vulnerability Reporting](https://img.shields.io/badge/Reporting-Responsible_Disclosure-orange?style=for-the-badge)](#)

> Authoritative security policy, threat modeling, and cryptographic invariants for **ShellGuard-Extension v0.0.1.0**.  
> Axiom: *"Build features around security, never security around features."*

---

## 📋 Table of Contents

- [1. Supported Versions](#1-supported-versions)
- [2. Security Model Overview](#2-security-model-overview)
- [3. Key Hierarchy & Non-Extractable Quarantine](#3-key-hierarchy--non-extractable-quarantine)
- [4. Threat Model & Attack Scenarios](#4-threat-model--attack-scenarios)
- [5. DOM Boundary Defense & XSS Mitigation](#5-dom-boundary-defense--xss-mitigation)
- [6. Transport Security & Cleartext LAN Trade-Off](#6-transport-security--cleartext-lan-trade-off)
- [7. Volatile Memory Sanitization & Zeroization](#7-volatile-memory-sanitization--zeroization)
- [8. Responsible Vulnerability Disclosure](#8-responsible-vulnerability-disclosure)

---

## 1. Supported Versions

Security updates and critical patches are actively supported for the following extension builds:

| Extension Version | Status | Security Notes |
| :--- | :--- | :--- |
| **`v0.0.1.x`** | ✅ Active Development | Current release branch; Manifest V3 native. |

---

## 2. Security Model Overview

The browser runtime is an **untrusted execution environment**. Content scripts share DOM access with potentially hostile third-party JavaScript, malicious advertisements, or compromised web dependencies. 

To guarantee zero-knowledge confidentiality:
1. **The Server is Untrusted Storage:** The remote server stores only opaque AES-GCM ciphertext blobs. A complete database compromise of the server yields zero plaintext credentials.
2. **The Page DOM is a Hostile Execution Zone:** Web pages can inspect DOM nodes, poll properties, and attempt prototype poisoning. Content scripts must never hold master keys or decrypted vault caches.
3. **Cryptographic Operations are Quarantined:** All key derivation, encryption, and decryption execute inside the extension's privileged service worker and offscreen documents (`chrome-extension://` origin).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SHELLGUARD CRYPTO STACK                         │
│                                                                        │
│   Client Master Key (hu- / lb-)                                        │
│     │                                                                  │
│     ▼  HKDF-SHA256 (Salt = userUuid, Info = "ShellGuard-Domain-" + ns) │
│   Domain Symmetric Key (AES-GCM-256, Non-Extractable)                  │
│     │                                                                  │
│     ▼  AES-GCM-256 (IV = 12-byte CSPRNG, AAD = recordUuid:namespace)  │
│   Encrypted Envelope:                                                  │
│     { "v": 1, "alg": "AES-GCM-256", "iv": "...", "ct": "...", "aad" }  │
│                                                                        │
│   * AAD structurally binds record UUID and namespace to the auth tag.  │
│   * Tampered records fail decryption immediately.                      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Key Hierarchy & Non-Extractable Quarantine

### 3.1 Key Classifications
- **`hu-` (Human Sovereign Key):** High-entropy Base62 master key held exclusively by the human vault owner. Transmitted over the wire only as SHA-256 hash digests for stateless authentication.
- **`lb-` (LobsterKey Agent Token):** Scoped agent access key with discrete structural permissions (`canRead`, `canWrite`, `canEdit`, `canDelete`) and optional pod boundaries.
- **$K_{\text{domain}}$ (Domain Symmetric Keys):** 256-bit AES-GCM keys derived via HKDF-SHA256 for each storage namespace (`vault_pearls`, `vault_secure_notes`, `vault_ssh_keys`, etc.).

### 3.2 Non-Extractability via IndexedDB Structured Cloning
- Chromium's `chrome.storage.session` rejects non-serializable objects (including WebCrypto `CryptoKey` handles).
- Rather than exporting raw private key bytes to memory or session storage, ShellGuard-Extension writes the non-extractable `CryptoKey` handle directly into an isolated IndexedDB object store (`ShellGuardSessionVault`) using the browser's native **Structured Clone Algorithm**.
- Raw key bytes are **never extractable** (`extractable: false`). Calling `crypto.subtle.exportKey('raw', key)` throws a terminal `InvalidAccessError`.
- Upon vault lock, the IndexedDB transaction cleans the store in 0ms:
  ```typescript
  await db.transaction('keys', 'readwrite').objectStore('keys').clear();
  await chrome.storage.session.clear();
  ```

---

## 4. Threat Model & Attack Scenarios

### Scenario A: Compromised Web Page (Malicious Scripts & XSS)
- **Attack Vector:** An attacker injects malicious JS into a website where the user logs in, attempting to steal credentials.
- **Mitigation:**
  - In-page badges and autofill overlays render inside a **Closed Shadow DOM** (`attachShadow({ mode: 'closed' })`). Host scripts calling `document.querySelector('...').shadowRoot` receive `null`.
  - Content scripts are completely stateless and never retain decrypted secrets in memory.
  - Plaintext credentials pass across the internal message port **strictly Just-In-Time (<1ms in RAM)** during explicit fill execution and are immediately wiped.

### Scenario B: Host Prototype Pollution
- **Attack Vector:** A webpage pollutes `Object.prototype` or `HTMLInputElement.prototype.value` with rogue getters or setters to intercept autofill values.
- **Mitigation:**
  - Content script invokes native descriptors directly from pristine prototype references in its isolated world:
    ```typescript
    const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
    nativeSetter?.call(targetInput, credentialValue);
    ```

### Scenario C: Record-Swapping & Ciphertext Shuffling Attacks
- **Attack Vector:** An attacker intercepts or alters encrypted vault data in transit or on the server, swapping a low-privilege secret into a high-value bank record slot.
- **Mitigation:**
  - AES-GCM encryption enforces **Associated Authenticated Data (AAD)** bound to the record UUID and namespace:
    $$\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace}$$
  - If a ciphertext blob is moved to a different record UUID or table, AES-GCM tag verification fails catastrophically with `OperationError: Decryption failed`.

### Scenario D: Cross-Origin Iframe Credential Harvesting
- **Attack Vector:** A website embeds a deceptive third-party iframe (e.g., hidden `login.php`) attempting to trigger extension autofill.
- **Mitigation:**
  - Autofill strictly validates the frame origin against effective top-level domain rules (eTLD+1).
  - Cross-origin iframes without user interaction are rejected; credentials are never injected into unverified origins.

---

## 5. DOM Boundary Defense & XSS Mitigation

1. **Content Security Policy (CSP):**
   - Extension manifest enforces strict CSP: `script-src 'self'; object-src 'none';`.
   - `eval()`, `new Function()`, and inline `<script>` tags are strictly blocked across all extension contexts.
2. **Typography Reset:**
   - Injected closed Shadow DOM roots enforce absolute pixel-based font sizes (`px`) to prevent host page `rem` overrides from shrinking or enlarging the extension UI.
3. **Z-Index Containment:**
   - Overlay containers use calibrated CSS containment and maximum z-index coordinates (`z-[2147483647]`) with boundary clipping checks.

---

## 6. Transport Security & Cleartext LAN Trade-Off

### The Homelab Carve-Out
Self-hosters frequently operate ShellGuard on local Unraid, TrueNAS, or Proxmox servers accessible only over HTTP (`http://192.168.1.100:8080`).

- **Policy:** HTTP transport is permitted **strictly on private RFC 1918 subnets** (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), `localhost`, and Tailscale IP ranges.
- **Amber Warning Pill:** When connected to an HTTP LAN server, the extension UI permanently displays an amber badge:
  ```text
  ⚠️ HTTP LAN (Unencrypted Transport — Homelab Only)
  ```
- **WAN Prohibition:** Cleartext HTTP over public internet domains is strictly prohibited. The extension refuses connection and fails closed.
- **End-to-End Cryptography Still Holds:** Even over cleartext HTTP LAN, vault secrets remain end-to-end encrypted with Layer 1 ShellCryption. An eavesdropper sniffing LAN packets observes only AES-GCM ciphertext blobs.

---

## 7. Volatile Memory Sanitization & Zeroization

- **Explicit ArrayBuffer Scrubbing:** Ephemeral byte arrays and decrypted string buffers are overwritten with zero bytes (`buffer.fill(0)`) immediately after cryptographic processing.
- **Vault Auto-Lock Timers:** Configurable inactivity timer (default 15 minutes) schedules a service worker alarm. When triggered:
  - IndexedDB `ShellGuardSessionVault` object store is emptied.
  - `chrome.storage.session` is cleared.
  - UI state transitions to `LOCKED`.
- **Browser Exit Destruction:** `chrome.storage.session` and active service worker memory are destroyed unconditionally by Chromium when the browser exits.

---

## 8. Responsible Vulnerability Disclosure

If you discover a potential security vulnerability in ShellGuard-Extension:

1. **Do not open a public issue.**
2. Email full reproduction steps and technical details to:  
   📧 **`clawstackstudios@protonmail.com`**
3. We acknowledge receipt within 48 hours and provide remediation timelines prior to public disclosure.
