import { describe, it, expect } from 'vitest';
import { validateTransport, isRFC1918, isTailscale, isLoopback } from '../../src/utils/transport';

describe('Transport Sovereignty Rules', () => {
  it('correctly identifies RFC 1918 addresses', () => {
    expect(isRFC1918('10.0.0.1')).toBe(true);
    expect(isRFC1918('192.168.1.1')).toBe(true);
    expect(isRFC1918('172.16.0.0')).toBe(true);
    expect(isRFC1918('172.31.255.255')).toBe(true);

    expect(isRFC1918('11.0.0.1')).toBe(false);
    expect(isRFC1918('192.169.1.1')).toBe(false);
    expect(isRFC1918('172.32.0.0')).toBe(false);
  });

  it('correctly identifies Tailscale addresses', () => {
    expect(isTailscale('100.64.0.1')).toBe(true);
    expect(isTailscale('100.127.255.255')).toBe(true);

    expect(isTailscale('100.63.255.255')).toBe(false);
    expect(isTailscale('100.128.0.0')).toBe(false);
  });

  it('correctly identifies loopback addresses', () => {
    expect(isLoopback('localhost')).toBe(true);
    expect(isLoopback('127.0.0.1')).toBe(true);
    expect(isLoopback('[::1]')).toBe(true);

    expect(isLoopback('128.0.0.1')).toBe(false);
  });

  it('allows http on permitted cleartext hosts', () => {
    expect(() => validateTransport('http:', '10.0.0.1')).not.toThrow();
    expect(() => validateTransport('http:', 'localhost')).not.toThrow();
    expect(() => validateTransport('http:', '100.100.100.100')).not.toThrow();
    expect(() => validateTransport('http:', '192.168.1.100/vault')).not.toThrow();
  });

  it('blocks http on public WAN hosts', () => {
    expect(() => validateTransport('http:', 'vault.example.com')).toThrowError(/WAN HTTP Blocked/);
    expect(() => validateTransport('http:', '8.8.8.8')).toThrowError(/WAN HTTP Blocked/);
  });

  it('allows https on any host', () => {
    expect(() => validateTransport('https:', 'vault.example.com')).not.toThrow();
    expect(() => validateTransport('https:', '8.8.8.8')).not.toThrow();
    expect(() => validateTransport('https:', '10.0.0.1')).not.toThrow();
  });
});
