---
name: zero-knowledge-crypto
description: Cryptographic recipes for WebCrypto HKDF-SHA256, AES-GCM-256 with AAD record-binding, IndexedDB StructuredClone key persistence, and pure-TS LAN fallbacks. Use when authoring or auditing crypto routines, vault sync, or session key management.
---

# Zero-Knowledge Crypto Skill

## 1. HKDF-SHA256 Symmetric Derivation
Derives domain-scoped AES-GCM-256 keys ($K_{\text{domain}}$) from master secret:
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

## 2. AES-GCM-256 with AAD Record-Binding
Prevents record-swapping attacks by cryptographically binding record UUID and namespace to the authentication tag:
```typescript
export async function encryptField(plaintext: string, key: CryptoKey, recordUuid: string, namespace: string) {
  const enc = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit CSPRNG IV
  const aad = enc.encode(`${recordUuid}:${namespace}`);

  const ciphertextBuffer = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv, additionalData: aad, tagLength: 128 },
    key,
    enc.encode(plaintext)
  );

  return {
    v: 1,
    alg: "AES-GCM-256",
    iv: arrayBufferToBase64(iv),
    ct: arrayBufferToBase64(ciphertextBuffer),
    aad: `${recordUuid}:${namespace}`
  };
}
```

## 3. IndexedDB StructuredClone Key Persistence
Preserves non-extractable `CryptoKey` handles across service worker idle sleep cycles without exposing raw key bytes:
```typescript
export async function saveSessionKey(key: CryptoKey): Promise<void> {
  const db = await openSessionDB();
  const tx = db.transaction("keys", "readwrite");
  tx.objectStore("keys").put(key, "active_domain_key");
  await tx.done;
}

export async function clearSessionKeys(): Promise<void> {
  const db = await openSessionDB();
  const tx = db.transaction("keys", "readwrite");
  tx.objectStore("keys").clear();
  await tx.done;
}
```
