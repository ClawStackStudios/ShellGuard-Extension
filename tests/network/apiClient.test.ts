import { describe, it, expect, vi } from 'vitest';
import { apiClient } from '../../src/services/apiClient';

describe('apiClient', () => {
  it('correctly formats URL with subpath in host', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true })
    });
    global.fetch = fetchMock;

    await apiClient('http', '192.168.1.100/shellguard', '8080', '/api/auth/token', {});

    expect(fetchMock).toHaveBeenCalledWith('http://192.168.1.100:8080/shellguard/api/auth/token', expect.anything());
  });

  it('correctly formats URL without subpath', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true })
    });
    global.fetch = fetchMock;

    await apiClient('https', 'vault.example.com', '443', '/api/auth/token', {});

    expect(fetchMock).toHaveBeenCalledWith('https://vault.example.com:443/api/auth/token', expect.anything());
  });
});
