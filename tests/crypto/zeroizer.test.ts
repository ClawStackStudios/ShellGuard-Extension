import { describe, it, expect } from 'vitest';
import { zeroize } from '../../src/crypto/zeroizer';

describe('Zeroizer', () => {
  it('scrubs a buffer with zeros', () => {
    const buffer = new Uint8Array([1, 2, 3, 4, 255]);
    zeroize(buffer);

    for (let i = 0; i < buffer.length; i++) {
      expect(buffer[i]).toBe(0);
    }
  });
});
