import { describe, it, expect, beforeEach } from 'vitest';
import { saveSessionKey, getSessionKey, destroySessionVault } from '../../src/crypto/sessionVault';
import { deriveMasterPRK, deriveDomainKey } from '../../src/crypto/hkdf';
import 'fake-indexeddb/auto';

describe('Session Vault (IndexedDB)', () => {
  beforeEach(async () => {
    await destroySessionVault();
  });

  it('saves and retrieves non-extractable keys', async () => {
    const masterSecret = 'super-secret-master-key';
    const userUuid = '123e4567-e89b-12d3-a456-426614174000';
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, 'vault_pearls');

    expect(key.extractable).toBe(false);

    await saveSessionKey('vault_pearls', key);

    const retrievedKey = await getSessionKey('vault_pearls');
    expect(retrievedKey).not.toBeNull();
    expect(retrievedKey!.extractable).toBe(false);
    expect(retrievedKey!.algorithm.name).toBe('AES-GCM');
  });

  it('destroys all keys', async () => {
    const masterSecret = 'super-secret-master-key';
    const userUuid = '123e4567-e89b-12d3-a456-426614174000';
    const baseKey = await deriveMasterPRK(masterSecret, userUuid);
    const key = await deriveDomainKey(baseKey, userUuid, 'vault_pearls');

    await saveSessionKey('vault_pearls', key);
    let retrievedKey = await getSessionKey('vault_pearls');
    expect(retrievedKey).not.toBeNull();

    await destroySessionVault();

    retrievedKey = await getSessionKey('vault_pearls');
    expect(retrievedKey).toBeNull();
  });
});
