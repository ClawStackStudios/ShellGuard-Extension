export function isRFC1918(host: string): boolean {
  // Regexes for RFC 1918 IPs
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  return false;
}

export function isTailscale(host: string): boolean {
  // Regex for Tailscale 100.64.0.0/10
  if (/^100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  return false;
}

export function isLoopback(host: string): boolean {
  if (host === 'localhost') return true;
  if (/^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(host)) return true;
  if (host === '[::1]') return true;
  return false;
}

export function isPermittedCleartextHost(host: string): boolean {
  return isRFC1918(host) || isTailscale(host) || isLoopback(host);
}

export function validateTransport(protocol: string, host: string): void {
  if (protocol.toLowerCase() === 'http:') {
    if (!isPermittedCleartextHost(host)) {
      throw new Error(`WAN HTTP Blocked: Public WAN cleartext HTTP is strictly forbidden.`);
    }
  }
}
