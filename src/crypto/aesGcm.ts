import { CiphertextEnvelope, KeyNamespace, createAadBinding, AadBindingSchema } from './types';

export class OperationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OperationError';
  }
}

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
function base64ToArrayBuffer(base64: string): BufferSource {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes as unknown as BufferSource;
}

/**
 * Seals (encrypts) plaintext into a CiphertextEnvelope.
 * Generates fresh 96-bit CSPRNG IV and appends 128-bit auth tag.
 * Cryptographically binds recordUuid and namespace via AAD.
 */
export async function sealEnvelope(
  plaintext: string,
  key: CryptoKey,
  recordUuid: string,
  namespace: KeyNamespace,
  podId?: string
): Promise<CiphertextEnvelope> {
  const enc = new TextEncoder();
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96-bit CSPRNG IV
  const aadString = createAadBinding(recordUuid, namespace, podId);
  const aad = enc.encode(aadString);

  try {
    const ciphertextBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv, additionalData: aad, tagLength: 128 },
      key,
      enc.encode(plaintext)
    );

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
 * Opens (decrypts) a CiphertextEnvelope.
 * Enforces strict AAD binding check. Mutating 1 bit of ciphertext, IV, or AAD will throw OperationError.
 */
export async function openEnvelope(
  envelope: CiphertextEnvelope,
  key: CryptoKey,
  expectedRecordUuid: string,
  expectedNamespace: KeyNamespace,
  expectedPodId?: string
): Promise<string> {
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

  let ivBuffer: BufferSource;
  let ctBuffer: BufferSource;

  try {
    ivBuffer = base64ToArrayBuffer(envelope.iv);
    ctBuffer = base64ToArrayBuffer(envelope.ct);
  } catch (err: unknown) {
    throw new OperationError(`Failed to decode Base64: ${err instanceof Error ? err.message : String(err)}`);
  }

  const aad = enc.encode(envelope.aad);

  try {
    const plaintextBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: ivBuffer, additionalData: aad, tagLength: 128 },
      key,
      ctBuffer as BufferSource
    );
    return dec.decode(plaintextBuffer);
  } catch {
    // SubtleCrypto throws OperationError on decryption/authentication failure.
    throw new OperationError('Decryption failed. The ciphertext, IV, or AAD may have been tampered with or the wrong key was used.');
  }
}
