# ShellGuard Extension Knowledge Base for Jules

## 1. Authentication Wire Contract (`ShellGuard` Web Server)
- **POST `/api/auth/token`**:
  - Request body: `{ uuid?: string, keyHash: string }`
  - `keyHash` calculation: `SHA-256(cleanedKey)` encoded as a 64-character lowercase hex string.
  - `cleanedKey`: Strip all spaces, tabs, and newlines (`rawKey.trim().replace(/[\s\r\n]+/g, '')`).
  - Expected Response (201 Created):
    ```json
    {
      "success": true,
      "data": {
        "token": "api-...",
        "type": "human",
        "expiresAt": "..."
      },
      "user": {
        "uuid": "...",
        "username": "...",
        "displayName": "..."
      }
    }
    ```

## 2. Key Derivation Pipeline (Stage 01 WebCrypto Bedrock)
- **Functions in `src/crypto/hkdf.ts`**:
  - `deriveMasterPrk(masterKey: string | Uint8Array, salt: string | Uint8Array): Promise<Uint8Array>`:
    Uses `user.uuid` as the salt!
  - `expandNamespaceKey(prk: Uint8Array, namespace: string, returnType: 'cryptoKey' | 'raw')`:
    For namespace `'vault_pearls'`, derive non-extractable `CryptoKey`.
- **Session Vault Storage in `src/crypto/sessionVault.ts`**:
  - `sessionVault.putKey(namespace, cryptoKey)` stores the non-extractable `CryptoKey` into native IndexedDB with structured clone.
  - `sessionVault.hasKey(namespace)` checks if an active session key exists.
- **Memory Zeroization in `src/crypto/zeroizer.ts`**:
  - `zeroizeBuffer(buffer)`: Overwrites a Uint8Array or Buffer with `0x00`.
  - Always clean input byte arrays after deriving PRK.

## 3. Transport Sovereignty Rules
- Cleartext `http://` is allowed ONLY on:
  - RFC 1918 IPv4: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
  - Loopback: `127.0.0.1`, `localhost`
  - Tailscale: `100.64.0.0/10`
- If LAN HTTP is detected, show the amber pill: `⚠️ HTTP LAN Transport — Encrypted Client-Side, Plaintext Wire`.
- Public WAN `http://` MUST be rejected with a red error before dispatch.

## 4. Epistemic Escape Hatch Protocol
- If you face an architectural dilemma or edge case where you must make a pragmatic compromise, DO NOT disguise doubt.
- Plant an inline comment:
  ```typescript
  // TODO(uncertainty): [Your clear explanation of the tradeoff or potential edge case]
  ```
- Mention all planted uncertainties in your PR description.
