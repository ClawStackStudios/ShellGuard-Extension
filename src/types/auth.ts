import { z } from 'zod';

export const AuthTokenRequestSchema = z.object({
  uuid: z.string().optional(),
  keyHash: z.string().length(64).regex(/^[0-9a-f]{64}$/),
});

export type AuthTokenRequest = z.infer<typeof AuthTokenRequestSchema>;

export const AuthTokenResponseSchema = z.object({
  success: z.literal(true),
  data: z.object({
    token: z.string(),
    type: z.enum(['human', 'agent']),
    expiresAt: z.string().datetime().optional().or(z.string()),
  }),
  user: z.object({
    uuid: z.string(),
    username: z.string(),
    displayName: z.string(),
  }),
});

export type AuthTokenResponse = z.infer<typeof AuthTokenResponseSchema>;

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
});

export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
