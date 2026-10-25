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
  const normalizedPort = port.startsWith(':') ? port : port ? `:${port}` : '';
  const url = `${normalizedProtocol}//${host}${normalizedPort}${path}`;

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
