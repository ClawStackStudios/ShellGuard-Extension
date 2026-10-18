# 🔐 Crypto Oracle: AES-GCM-256 with AAD Record-Binding

> Prevents record-swapping and ciphertext-shuffling attacks by fusing record UUID and namespace into the authentication tag.

---

## §1. Mathematical Formula

$$\text{Ciphertext} = \text{AES-GCM-256}_{K_{\text{domain}}}(\text{Plaintext}, \text{IV}, \text{AAD})$$
$$\text{AAD} = \text{recordUuid} \parallel \text{":"} \parallel \text{namespace}$$

---

## §2. Envelope JSON Schema

Encrypted records stored on disk (`chrome.storage.local`) or transmitted across network endpoints follow this schema:

```json
{
  "v": 1,
  "alg": "AES-GCM-256",
  "iv": "12-byte base64 string",
  "ct": "base64 ciphertext including 16-byte auth tag",
  "aad": "recordUuid:namespace"
}
```

---

## §3. Tamper Rejection Invariant

If an attacker modifies:
1. Even 1 bit of `ct`
2. The `recordUuid` in `aad`
3. The `namespace` in `aad`
4. The 12-byte `iv`

WebCrypto `crypto.subtle.decrypt()` throws a terminal `OperationError: Decryption failed`.
