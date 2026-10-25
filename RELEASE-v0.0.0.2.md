# 🦞 ShellGuard Extension — Release v0.0.0.2 (Build 2)
> **"Cryptographic Bedrock, Ephemeral Session Quarantine & Manifest V3 Toolchain"** — Genesis Scaffold (Stage 00) & Cryptographic Engine (Stage 01): WebCrypto HKDF-SHA256 Non-Extractable Key Enclave, AES-GCM-256 with Strict AAD Record-Binding, IndexedDB StructuredClone Session Vault, Pure-TS `@noble` LAN Fallback, and Memory Zeroization.

```text
███████╗██╗   ██╗███████╗ ██╗     ██╗        ██████╗    ██╗   ██╗   █████╗    ██████╗    ██████╗ 
██╔════╝██║   ██║██╔════╝ ██║     ██║        ██╔═══╝    ██║   ██║  ██╔══██╗  ██╔══██╗    ██╔═══██╗
███████╗███████║ █████╗   ██║     ██║        ██║ ███╗   ██║   ██║  ███████║  ██████╔╝    ██║   ██║
╚════██║██╔══██║██╔══╝   ██║     ██║        ██║  ██║   ██║   ██║  ██╔══██║  ██╔══██╗    ██║   ██║
███████║██║   ██║███████╗ ███████╗███████╗   ╚██████╝   ╚██████╝   ██║  ██║  ██║   ██║   ██████╔╝
╚══════╝╚═╝   ╚═╝╚══════╝ ╚══════╝╚══════╝    ╚═════╝    ╚═════╝   ╚═╝  ╚═╝  ╚═╝   ╚═╝   ╚═════╝ 
                    ~ **ClawStack Studios©™ — Extension Enclave** ~
```

---

## 🚀 The Core Summary

Welcome to **v0.0.0.2 (Build 2)** of **ShellGuard-Extension**! This release marks the completion of **Stage 00 (Extension Scaffold & Toolchain Genesis)** and **Stage 01 (Cryptographic Bedrock & Session Quarantine)**, establishing the sovereign, zero-knowledge browser extension foundation for the self-hosted ShellGuard ecosystem.

ShellGuard-Extension brings zero-knowledge credential decryption, TOTP generation, and autonomous agentic delegation (`lb-` keys) directly into Chromium-based browsers without third-party cloud trust. Built upon Manifest V3, the extension operates across strict privilege boundaries: WebCrypto derivations and non-extractable keys are segregated into background service worker and offscreen document contexts, preventing page-level scripts from inspecting or extracting secrets.

All cryptographic primitives are tested against 1-bit tamper rejection, domain separation, and bidirectional cross-decryption interoperability between native WebCrypto and our pure-TypeScript fallback.

---

## 💎 Key Themes & Highlights

### 🛡️ 1. WebCrypto HKDF-SHA256 Domain Separation (Stage 01 • Task A)
- **Non-Extractable Key Hierarchy**: Imports sovereign master keys (`hu-` or `lb-`) into WebCrypto with `extractable: false`, deriving a 256-bit Master PRK salted with `userUuid`.
- **10 Independent Compartment Namespaces**: Derives distinct AES-GCM-256 domain keys ($K_{\text{domain}}$) using context info `ShellGuard-Domain-${namespace}` across:
  `vault_pearls`, `vault_secure_notes`, `vault_credit_cards`, `vault_identities`, `vault_ssh_keys`, `vault_attachments`, `vault_pearls_history`, `pods`, `settings`, and `export`.
- **Compromise Boundary**: A cryptographic compromise of the `vault_pearls` domain key mathematically prevents decrypting items in `vault_ssh_keys`, `pods`, or `settings`.

### 🔒 2. AES-GCM-256 with AAD Record-Binding & Tamper Rejection (Stage 01 • Task A)
- **Fresh CSPRNG Nonces**: Every sealed ciphertext envelope (`CiphertextEnvelope`) generates a fresh 96-bit (12-byte) random IV via `crypto.getRandomValues`.
- **Additional Authenticated Data (AAD)**: Cryptographically binds the item's immutable UUID, its compartment namespace, and its optional Pod container directly into the 128-bit authentication tag:
  $$\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace} \parallel (\text{":"} \parallel \text{podId})$$
- **Fail-Closed Splicing Defense**: Mutating a single bit of ciphertext, IV, `recordUuid`, `namespace`, or `podId` immediately throws a terminal `OperationError` without leaking partial plaintext.

### 💾 3. IndexedDB Session Vault Persistence (`ShellGuardSessionVault`) (Stage 01 • Task B)
- **MV3 Worker Sleep Cycle Survival**: Manifest V3 service workers terminate when idle (<30s). To prevent re-prompting operators on every worker wake cycle without exposing raw key bytes, `ShellGuardSessionVault` leverages native IndexedDB `structuredClone` support on non-extractable `CryptoKey` handles.
- **Zero-Disk Secret Invariant**: Raw key bytes are never exported, serialized to JSON, or written to `chrome.storage.local`. Only ciphertext envelopes reside on disk.
- **Deterministic Memory Zeroization (Rule 4)**: Purging the vault via `destroySessionVault()` wipes the IndexedDB store, while `zeroizeBytes()` / `zeroizeBuffer()` actively overwrites byte buffers with `0x00`.

### 🌐 4. Pure-TS LAN Fallback & Bidirectional Verification (Stage 01 • Task A)
- **Transport Sovereignty**: In homelab environments running over cleartext RFC 1918 / Tailscale LAN HTTP where browsers disable `crypto.subtle`, `@noble/hashes` (HKDF-SHA256) and `@noble/ciphers` (AES-GCM-256) provide an audited pure-TS fallback.
- **Bidirectional Interoperability**: Envelopes sealed via WebCrypto decrypt identically in the `@noble` fallback, and envelopes sealed via `@noble` decrypt identically in standard WebCrypto, verified in automated test suites (`tests/crypto/fallback.test.ts:43-58`).

### 🎨 5. Reef Modernist Toolchain & Scaffold (Stage 00)
- **Modern MV3 Architecture**: Configured with WXT + React 18 + TypeScript + Tailwind CSS v3.
- **Reef Modernist Design System**: Flat carapace (`elevation: 0`, 12px radii, `#161B22` fill, `#06B6D4` Claw Cyan accent, `#E4048A` Hydro Coral highlights).
- **Zone Segregation**: Zone 0 (Service Worker, Offscreen Enclave), Zone 1 (Popup SPA, Side Panel, Options Hub), and Zone 2 (Content Script).
- **Global Shortcuts**: `Ctrl+Shift+L` (Contextual Autofill) and `Ctrl+Shift+9` (Password/Passphrase Generator).
- **Sub-Second Static Gates**: Pre-flight verification (`lint`, `typecheck`, `audit_docs_drift.py`) running in $<1\text{s}$.

---

## 🔬 Mathematical & Architectural Invariants

| Invariant | Specification / Equation | Verification Method |
| :--- | :--- | :--- |
| **Domain Derivation** | $K_{\text{domain}} = \text{HKDF-Expand}(\text{PRK}, \text{"ShellGuard-Domain-" + ns}, 32)$ | `tests/crypto/hkdf.test.ts` |
| **AAD Record Binding** | $\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace} \parallel (\text{":"} \parallel \text{podId})$ | `tests/crypto/aesGcm.test.ts` |
| **Auth Tag Length** | 128-bit authentication tag appended to AES-GCM ciphertext | `tests/crypto/aesGcm.test.ts` |
| **Nonce Generation** | 96-bit (12-byte) CSPRNG IV via `crypto.getRandomValues` | `src/crypto/aesGcm.ts` |
| **Key Extraction** | `extractable: false` on all imported base keys and derived domain keys | `tests/crypto/hkdf.test.ts` |
| **Memory Zeroization** | Scrubbing sensitive buffers with `0x00` via `zeroizeBytes()` / `zeroizeBuffer()` | `tests/crypto/zeroizer.test.ts` |
| **Cross-Decryption** | Bidirectional ciphertext compatibility between WebCrypto and `@noble` | `tests/crypto/fallback.test.ts` |

---

## 📦 Distribution Artifacts & Checksums

| Filename | Description | SHA-256 Checksum |
| :--- | :--- | :--- |
| `shellguard-extension-v0.0.0.2.zip` | Packaged MV3 Chromium Extension distribution | *Computed automatically by Cloud CI Release Pipeline* |
| `sha256sums.txt` | Cryptographic SHA-256 verification manifest | *Attached to GitHub Release* |

---

## 🛣️ What's Next: Stage 02 Active Runway

With the cryptographic bedrock locked into `main`, the next release (**`v0.0.0.3` • Build 3**) implements:
1. **Service Worker Router (`entrypoints/background.ts`)**: Event-driven MV3 lifecycle router with synchronous Zod envelope message validation (`{ id, type, payload, timestamp, origin }`).
2. **`chrome.alarms` Watchdogs**: Automatic vault inactivity lock, 30-second clipboard purge timer, and 30-day trash shredder sweep.
3. **Singleton Offscreen Enclave (`entrypoints/offscreen/`)**: Persistent offscreen document hosting WebCrypto derivations, QR canvas decoding, and volatile generator history buffers.

*ClawStack Studios©™ — Sovereign, client-decrypted vault management for homelabs and agents.*
