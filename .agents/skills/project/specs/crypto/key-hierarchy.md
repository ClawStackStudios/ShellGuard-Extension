# 🔐 Crypto Oracle: Key Hierarchy & Domain Derivation

> Immutable specification for ShellGuard key derivation across human, agent, and storage namespaces.

---

## §1. Key Identifiers & Prefixes

| Prefix | Key Type | Entropy / Format | Boundary & Exposure Rules |
| :--- | :--- | :--- | :--- |
| **`hu-`** | Human Sovereign Key | Base62 (min 32 chars) | **Never stored in plaintext.** Client hashes via SHA-256 for auth. |
| **`lb-`** | LobsterKey (Agent) | Base62 (`lb-` + 32 chars) | Carries bitwise permissions: `canRead`, `canWrite`, `canEdit`, `canDelete`. |
| **`K_domain`** | Symmetric Storage Key | 256-bit AES-GCM Key | Derived via HKDF-SHA256 with `extractable: false`. Quarantined in IndexedDB. |

---

## §2. HKDF-SHA256 Domain Derivation

Every storage table derives an independent symmetric key:
$$K_{\text{domain}} = \text{HKDF-Expand}(\text{PRK}, \text{"ShellGuard-Domain-" + ns}, 32)$$

```typescript
export async function deriveDomainKey(masterSecret: string, userUuid: string, namespace: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(masterSecret),
    { name: "HKDF" },
    false,
    ["deriveKey"]
  );

  return await crypto.subtle.deriveKey(
    {
      name: "HKDF",
      hash: "SHA-256",
      salt: enc.encode(userUuid),
      info: enc.encode(`ShellGuard-Domain-${namespace}`)
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false, // Non-extractable
    ["encrypt", "decrypt"]
  );
}
```

---

## §3. Storage Namespaces (`ns`)

1. `vault_pearls` (Logins, Passwords, URLs)
2. `vault_secure_notes` (Encrypted Markdown documents)
3. `vault_credit_cards` (Cardholder data, CVV, PIN)
4. `vault_identities` (Personal info, passports, licenses)
5. `vault_ssh_keys` (Private/public keys, passphrases)
6. `vault_attachments` (Binary attachment payloads)
7. `vault_pearls_history` (Historical password snapshots)
