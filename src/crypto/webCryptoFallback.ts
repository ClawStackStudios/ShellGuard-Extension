import { hkdf } from '@noble/hashes/hkdf.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { gcm } from '@noble/ciphers/aes.js';
import { CiphertextEnvelope, KeyNamespace, createAadBinding, AadBindingSchema } from './types';
import { OperationError } from './aesGcm';

// We implement pure TS fallback using noble packages.

/**
 * Converts a Uint8Array to a Base64 string.
 */
function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Converts a Base64 string to a Uint8Array.
 */
function base64ToArrayBuffer(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Fallback: Derives a domain key using noble/hashes HKDF-SHA256.
 * Returns raw key bytes since we aren't using WebCrypto handles in the fallback.
 */
export function fallbackDeriveDomainKeyRaw(
  masterSecret: string | Uint8Array,
  userUuid: string,
  namespace: KeyNamespace
): Uint8Array {
  const enc = new TextEncoder();
  const secretBuffer = typeof masterSecret === 'string' ? enc.encode(masterSecret) : masterSecret;
  const salt = enc.encode(userUuid);
  const info = enc.encode(`ShellGuard-Domain-${namespace}`);

  // WebCrypto deriveKey(HKDF) does both Extract and Expand. noble's hkdf does exactly that.
  return hkdf(sha256, secretBuffer, salt, info, 32); // 256 bits = 32 bytes
}

/**
 * Fallback: Seals (encrypts) plaintext using noble/ciphers AES-GCM-256.
 */
export function fallbackSealEnvelope(
  plaintext: string,
  rawKey: Uint8Array,
  recordUuid: string,
  namespace: KeyNamespace,
  podId?: string
): CiphertextEnvelope {
  const enc = new TextEncoder();
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv); // Assuming crypto.getRandomValues is still available, or we use a fallback rng if needed.
  // We can assume crypto.getRandomValues is present even in non-secure contexts for most environments,
  // but if crypto is completely undefined, we might need a different CSPRNG.
  // Modern browsers provide crypto.getRandomValues even over HTTP.
  const aadString = createAadBinding(recordUuid, namespace, podId);
  const aad = enc.encode(aadString);
  const plaintextBytes = enc.encode(plaintext);

  try {
    const cipher = gcm(rawKey, iv, aad);
    const ciphertextBuffer = cipher.encrypt(plaintextBytes);

    return {
      v: 1,
      alg: 'AES-GCM-256',
      iv: arrayBufferToBase64(iv),
      ct: arrayBufferToBase64(ciphertextBuffer),
      aad: aadString,
    };
  } catch (err: unknown) {
    throw new OperationError(`Encryption failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}

/**
 * Fallback: Opens (decrypts) a CiphertextEnvelope using noble/ciphers AES-GCM-256.
 */
export function fallbackOpenEnvelope(
  envelope: CiphertextEnvelope,
  rawKey: Uint8Array,
  expectedRecordUuid: string,
  expectedNamespace: KeyNamespace,
  expectedPodId?: string
): string {
  if (envelope.v !== 1 || envelope.alg !== 'AES-GCM-256') {
    throw new OperationError('Unsupported envelope version or algorithm');
  }

  const expectedAad = createAadBinding(expectedRecordUuid, expectedNamespace, expectedPodId);
  if (envelope.aad !== expectedAad) {
    throw new OperationError(`AAD mismatch. Expected: ${expectedAad}, Got: ${envelope.aad}`);
  }

  const parseResult = AadBindingSchema.safeParse(envelope.aad);
  if (!parseResult.success) {
    throw new OperationError('Invalid AAD format in envelope');
  }

  const dec = new TextDecoder();
  const enc = new TextEncoder();

  let ivBuffer: Uint8Array;
  let ctBuffer: Uint8Array;

  try {
    ivBuffer = base64ToArrayBuffer(envelope.iv);
    ctBuffer = base64ToArrayBuffer(envelope.ct);
  } catch (err: unknown) {
    throw new OperationError(`Failed to decode Base64: ${err instanceof Error ? err.message : String(err)}`);
  }

  const aad = enc.encode(envelope.aad);

  try {
    const cipher = gcm(rawKey, ivBuffer, aad);
    const plaintextBuffer = cipher.decrypt(ctBuffer);
    return dec.decode(plaintextBuffer);
  } catch {
    throw new OperationError('Decryption failed. The ciphertext, IV, or AAD may have been tampered with or the wrong key was used.');
  }
}
