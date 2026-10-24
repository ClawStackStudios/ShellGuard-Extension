import { describe, it, expect } from 'vitest';
import { sealEnvelope, openEnvelope, OperationError } from '../../src/crypto/aesGcm';
import { deriveMasterPRK, deriveDomainKey } from '../../src/crypto/hkdf';
import { KeyNamespace } from '../../src/crypto/types';

describe('AES-GCM Encryption and AAD Binding', () => {
  const masterSecret = 'super-secret-master-key';
  const userUuid = '123e4567-e89b-12d3-a456-426614174000';
  const recordUuid = 'abcdef01-2345-6789-abcd-ef0123456789';
  const namespace: KeyNamespace = 'vault_pearls';
  const plaintext = 'sensitive credential data';

  it('seals and opens an envelope successfully', async () => {
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, namespace);

    const envelope = await sealEnvelope(plaintext, key, recordUuid, namespace);

    const decrypted = await openEnvelope(envelope, key, recordUuid, namespace);
    expect(decrypted).toBe(plaintext);
  });

  it('rejects tampered ciphertext', async () => {
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, namespace);

    const envelope = await sealEnvelope(plaintext, key, recordUuid, namespace);

    // Tamper with ciphertext by modifying the base64 string slightly
    const ctChars = envelope.ct.split('');
    // Flip a character to simulate a bit flip
    ctChars[0] = ctChars[0] === 'A' ? 'B' : 'A';
    envelope.ct = ctChars.join('');

    await expect(openEnvelope(envelope, key, recordUuid, namespace)).rejects.toThrow(OperationError);
  });

  it('rejects tampered AAD', async () => {
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, namespace);

    const envelope = await sealEnvelope(plaintext, key, recordUuid, namespace);

    // Provide incorrect expected values during openEnvelope
    await expect(openEnvelope(envelope, key, 'wrong-uuid-0000-0000-0000-000000000000', namespace)).rejects.toThrow(OperationError);
  });

  it('rejects swapped envelopes from different records', async () => {
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, namespace);

    await sealEnvelope(plaintext, key, recordUuid, namespace);
    const envelope2 = await sealEnvelope(plaintext, key, 'another-uuid-1111-2222-3333-444444444444', namespace);

    // Trying to open envelope2 pretending it is envelope1
    await expect(openEnvelope(envelope2, key, recordUuid, namespace)).rejects.toThrow(OperationError);
  });
});
