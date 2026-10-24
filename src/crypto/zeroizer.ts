/**
 * Securely overwrites a byte buffer with zeros to remove sensitive data from memory.
 * @param buffer The Uint8Array to zeroize.
 */
export function zeroize(buffer: Uint8Array): void {
  if (buffer) {
    // Fill the buffer with 0x00
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = 0;
    }
  }
}

// Convenient aliases for upcoming session cleanup routines
export const zeroizeBytes = zeroize;
export const zeroizeBuffer = zeroize;
