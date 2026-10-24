# Stage 02 — MV3 Runtime & Offscreen Enclave Router (`v0.0.1.2` • Build 3)

**Target Oracles:** `.agents/skills/project/specs/network/wire-contracts.md`, `.agents/skills/project/specs/crypto/key-hierarchy.md`.

**Task A [Service Worker Router] & Task B [Offscreen Enclave]:**
Implement the ephemeral MV3 background service worker and synchronous Zod message envelope validator (`{ id, type, payload, timestamp, origin }`) governing all communication between popup, side panel, content scripts, and the offscreen document. Register `chrome.commands` listeners (`Ctrl+Shift+L` JIT autofill, `Ctrl+Shift+9` cycle match), `chrome.alarms` watchdogs (inactivity auto-lock, 30s clipboard scrubber, 30-day trash sweep), and `chrome.action` match-count badge updaters; any message failing Zod schema validation or sender origin verification terminates immediately.

Implement the singleton offscreen enclave document (`entrypoints/offscreen/`) hosting all WebCrypto key derivations, AES-GCM-256 record encryptions/decryptions, QR canvas decoding, and volatile generator history ring buffers so decrypted vault state never enters content script memory.
