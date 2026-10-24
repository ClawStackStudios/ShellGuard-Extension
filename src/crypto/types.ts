import { z } from 'zod';

export const CiphertextEnvelopeSchema = z.object({
  v: z.literal(1),
  alg: z.literal('AES-GCM-256'),
  iv: z.string().base64(),
  ct: z.string().base64(),
  aad: z.string(),
});

export type CiphertextEnvelope = z.infer<typeof CiphertextEnvelopeSchema>;

export const KeyNamespaceSchema = z.enum([
  'vault_pearls',
  'vault_secure_notes',
  'vault_credit_cards',
  'vault_identities',
  'vault_ssh_keys',
  'vault_attachments',
  'vault_pearls_history',
  'pods',
  'settings',
  'export',
]);

export type KeyNamespace = z.infer<typeof KeyNamespaceSchema>;

export const AadBindingSchema = z.string().regex(
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}:(?:vault_pearls|vault_secure_notes|vault_credit_cards|vault_identities|vault_ssh_keys|vault_attachments|vault_pearls_history|pods|settings|export)(?::[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?$/i
);

export type AadBinding = z.infer<typeof AadBindingSchema>;

export function createAadBinding(recordUuid: string, namespace: KeyNamespace, podId?: string): AadBinding {
  const base = `${recordUuid}:${namespace}`;
  return podId ? `${base}:${podId}` : base;
}
