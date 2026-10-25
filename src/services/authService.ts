import { apiClient } from './apiClient';
import { AuthTokenResponseSchema, type AuthTokenResponse, type AuthTokenRequest } from '../types/auth';
import { sha256 } from '@noble/hashes/sha2.js';
import { bytesToHex } from '@noble/hashes/utils.js';
import { deriveMasterPRK, deriveDomainKey } from '../crypto/hkdf';
import { saveSessionKey } from '../crypto/sessionVault';
import { zeroizeBuffer } from '../crypto/zeroizer';

export async function login(
  protocol: string,
  host: string,
  port: string,
  rawKey: string,
  uuid?: string
): Promise<AuthTokenResponse> {
  const cleanedKey = rawKey.trim().replace(/[\s\r\n]+/g, '');
  const enc = new TextEncoder();
  const keyBytes = enc.encode(cleanedKey);

  let keyHash: string;
  try {
    const hashBytes = sha256(keyBytes);
    keyHash = bytesToHex(hashBytes);
  } finally {
    // Zeroize keyBytes after hashing
    zeroizeBuffer(keyBytes);
  }

  const payload: AuthTokenRequest = { keyHash, uuid };

  const response = await apiClient<unknown>(protocol, host, port, '/api/auth/token', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  const parsedResponse = AuthTokenResponseSchema.parse(response);

  // Derive keys using WebCrypto
  // According to KNOWLEDGE, salt is user.uuid
  const saltUuid = parsedResponse.user.uuid;

  // Re-encode for HKDF base key import
  const rawKeyBytes = enc.encode(cleanedKey);
  try {
    const baseKey = await deriveMasterPRK(rawKeyBytes, saltUuid);
    const pearlsKey = await deriveDomainKey(baseKey, saltUuid, 'vault_pearls');

    // Store strictly non-extractable key
    await saveSessionKey('vault_pearls', pearlsKey);
  } finally {
    zeroizeBuffer(rawKeyBytes);
  }

  return parsedResponse;
}
