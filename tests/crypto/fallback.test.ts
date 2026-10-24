import { describe, it, expect } from 'vitest';
import { fallbackDeriveDomainKeyRaw, fallbackSealEnvelope, fallbackOpenEnvelope } from '../../src/crypto/webCryptoFallback';
import { KeyNamespace } from '../../src/crypto/types';
import { OperationError } from '../../src/crypto/aesGcm';

describe('Pure-TS WebCrypto Fallback', () => {
  const masterSecret = 'super-secret-master-key';
  const userUuid = '123e4567-e89b-12d3-a456-426614174000';
  const recordUuid = 'abcdef01-2345-6789-abcd-ef0123456789';
  const namespace: KeyNamespace = 'vault_pearls';
  const plaintext = 'sensitive credential data';

  it('derives a raw domain key', () => {
    const rawKey = fallbackDeriveDomainKeyRaw(masterSecret, userUuid, namespace);
    expect(rawKey.length).toBe(32); // 256 bits = 32 bytes
  });

  it('seals and opens an envelope successfully', () => {
    const rawKey = fallbackDeriveDomainKeyRaw(masterSecret, userUuid, namespace);
    const envelope = fallbackSealEnvelope(plaintext, rawKey, recordUuid, namespace);

    expect(envelope.v).toBe(1);
    expect(envelope.alg).toBe('AES-GCM-256');

    const decrypted = fallbackOpenEnvelope(envelope, rawKey, recordUuid, namespace);
    expect(decrypted).toBe(plaintext);
  });

  it('rejects tampered ciphertext', () => {
    const rawKey = fallbackDeriveDomainKeyRaw(masterSecret, userUuid, namespace);
    const envelope = fallbackSealEnvelope(plaintext, rawKey, recordUuid, namespace);

    // Tamper with ciphertext by modifying the base64 string slightly
    const ctChars = envelope.ct.split('');
    ctChars[0] = ctChars[0] === 'A' ? 'B' : 'A';
    envelope.ct = ctChars.join('');

    expect(() => fallbackOpenEnvelope(envelope, rawKey, recordUuid, namespace)).toThrow(OperationError);
  });
});
