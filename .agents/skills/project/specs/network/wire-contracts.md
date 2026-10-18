# 🌐 Network Oracle: Wire Contracts & Cleartext LAN Carve-Out

> REST API envelope schemas, delta synchronization protocols, and homelab network policies.

---

## §1. Zod Message Envelope Contract

All runtime message exchange across extension ports (content script <-> background <-> popup) must parse through this schema:

```typescript
import { z } from 'zod';

export const MessageEnvelopeSchema = z.object({
  id: z.string(),
  type: z.enum([
    'QUERY_MATCHES',
    'REQUEST_JIT_FILL',
    'VAULT_LOCK',
    'VAULT_UNLOCK',
    'SYNC_DELTA'
  ]),
  payload: z.unknown(),
  timestamp: z.number()
});
```

---

## §2. Cleartext LAN Carve-Out Policy

- **Allowed Subnets:** RFC 1918 (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), `localhost`, and Tailscale CGNAT (`100.64.0.0/10`).
- **Amber Warning Pill:** When connected to an HTTP LAN server, the UI must display:
  `⚠️ HTTP LAN (Unencrypted Transport — Homelab Only)`
- **WAN Prohibition:** Cleartext HTTP over public WAN domains is blocked unconditionally.
