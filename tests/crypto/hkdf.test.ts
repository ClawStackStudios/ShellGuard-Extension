import { describe, it, expect } from 'vitest';
import { deriveMasterPRK, deriveDomainKey } from '../../src/crypto/hkdf';

describe('HKDF Domain Key Derivation', () => {
  it('derives different keys for different domains', async () => {
    const masterSecret = 'super-secret-master-key';
    const userUuid = '123e4567-e89b-12d3-a456-426614174000';

    const baseKey = await deriveMasterPRK(masterSecret, userUuid);

    const pearlsKey = await deriveDomainKey(baseKey, userUuid, 'vault_pearls');
    const notesKey = await deriveDomainKey(baseKey, userUuid, 'vault_secure_notes');

    // Export keys to compare bytes (not normally extractable, but since they are AES-GCM
    // we cannot export them if extractable: false. We will export them for testing if we change
    // extractable to true, but in prod they are false.
    // To test they are different, we can try to encrypt with one and decrypt with the other.

    const enc = new TextEncoder();
    const data = enc.encode('test-data');
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const ct = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv, additionalData: enc.encode('aad'), tagLength: 128 },
      pearlsKey,
      data
    );

    await expect(
      crypto.subtle.decrypt(
        { name: 'AES-GCM', iv, additionalData: enc.encode('aad'), tagLength: 128 },
        notesKey,
        ct
      )
    ).rejects.toThrow(); // Should fail decryption since keys are different
  });

  it('generates non-extractable keys', async () => {
    const masterSecret = 'super-secret-master-key';
    const userUuid = '123e4567-e89b-12d3-a456-426614174000';
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, 'vault_pearls');

    expect(key.extractable).toBe(false);
  });
});
