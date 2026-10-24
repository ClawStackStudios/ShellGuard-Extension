# Stage 01 — Cryptographic Bedrock & Session Quarantine (`v0.0.0.2` • Build 2)

**Target Oracles:** `.agents/skills/project/specs/crypto/key-hierarchy.md`, `.agents/skills/project/specs/crypto/encryption-layers.md`, `.agents/skills/project/specs/verification/test-oracles.md`.

**Task A [WebCrypto & Pure-TS Engine] & Task B [Session Vault Persistence]:**
Implement the zero-knowledge cryptographic engine supporting `hu-` sovereign keys and `lb-` scoped agent keys: derive the 256-bit Master PRK salted with `userUuid` and expand all 10 domain keys via $K_{\text{domain}} = \text{HKDF-Expand-SHA256}(\text{PRK}, \text{"ShellGuard-Domain-" + ns}, 32)$ using WebCrypto (`extractable: false`) with automatic fallback to `@noble/hashes` / `@noble/ciphers` strictly on RFC 1918 LAN HTTP origins. Seal and unseal all records inside `{ v: 1, alg: "AES-GCM-256", iv, ct, aad }` envelopes using fresh 96-bit CSPRNG IVs and strict $\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace} \parallel (\text{":"} \parallel \text{podId})$ binding so any single-bit mutation throws `OperationError`.

Implement the `ShellGuardSessionVault` IndexedDB StructuredClone store to persist non-extractable `CryptoKey` handles across MV3 service worker sleep cycles without writing raw key bytes to disk, paired with deterministic Rule 4 memory and store zeroization upon lock, timeout, or 3-strike PIN failure.
