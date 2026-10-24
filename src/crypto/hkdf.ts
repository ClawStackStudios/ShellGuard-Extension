import { KeyNamespace } from './types';

/**
 * Derives a master PRK (Pseudo-Random Key) from a master secret and user UUID salt.
 */
export async function deriveMasterPRK(masterSecret: string | Uint8Array, _userUuid: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const secretBuffer = typeof masterSecret === 'string' ? enc.encode(masterSecret) : masterSecret;

  const baseKey = await crypto.subtle.importKey(
    'raw',
    secretBuffer as BufferSource,
    { name: 'HKDF' },
    false,
    ['deriveKey']
  );

  // We actually need a master PRK here to derive from. But WebCrypto's deriveKey directly
  // goes from base key to target key.
  // Instead, if we want to expand domain keys, we can just pass the base key to the domain
  // key derivation and provide salt+info, or derive a 256-bit PRK if we really want a generic one.
  // Let's return the baseKey directly to use it for deriving domain keys later, along with the salt.
  // Or we can derive an intermediate key if strictly needed, but HKDF-Extract is done internally by deriveKey.

  // Wait, WebCrypto API deriveKey for HKDF does both extract and expand.
  // We can just keep the base key imported as HKDF key, and then use it for domain derivation.
  return baseKey;
}

/**
 * Derives domain-scoped AES-GCM-256 keys (K_domain) from master secret base key.
 */
export async function deriveDomainKey(baseKey: CryptoKey, userUuid: string, namespace: KeyNamespace): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const salt = enc.encode(userUuid);
  const info = enc.encode(`ShellGuard-Domain-${namespace}`);

  return await crypto.subtle.deriveKey(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: salt,
      info: info,
    },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false, // Non-extractable
    ['encrypt', 'decrypt']
  );
}

/**
 * Convenience method to derive a single domain key directly from strings.
 */
export async function deriveDomainKeyFromSecret(masterSecret: string, userUuid: string, namespace: KeyNamespace): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(masterSecret),
    { name: 'HKDF' },
    false,
    ['deriveKey']
  );
  return deriveDomainKey(baseKey, userUuid, namespace);
}
