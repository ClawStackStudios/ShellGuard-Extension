import { validateTransport } from '../utils/transport';

export async function apiClient<T>(
  protocol: string,
  host: string,
  port: string,
  path: string,
  options: RequestInit
): Promise<T> {
  const strippedProtocol = protocol.replace(/:\/\/$/, '').replace(/:$/, '');
  const normalizedProtocol = `${strippedProtocol}:`;

  // Cleanly join host, port, and path ensuring no double slashes except after protocol
  const baseHost = host.replace(/\/+$/, '');
  const normalizedPort = port.startsWith(':') ? port : port ? `:${port}` : '';
  const basePath = path.startsWith('/') ? path : `/${path}`;

  // Since host could contain paths (e.g. homelab.local/shellguard), we append port to host part before path
  let domainPart = baseHost;
  let pathPart = '';

  const slashIndex = baseHost.indexOf('/');
  if (slashIndex !== -1) {
      domainPart = baseHost.substring(0, slashIndex);
      pathPart = baseHost.substring(slashIndex);
  }

  const url = `${normalizedProtocol}//${domainPart}${normalizedPort}${pathPart}${basePath}`;

  validateTransport(normalizedProtocol, host);

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API Error ${response.status}: ${errorBody}`);
  }

  const json = await response.json();
  return json as T;
}
