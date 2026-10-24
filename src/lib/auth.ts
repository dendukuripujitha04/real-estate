import { NextRequest } from 'next/server';

// In-memory or environment-based active admin tokens
const activeAdminTokens = new Set<string>([
  process.env.ADMIN_SECRET_TOKEN || 'buildsphere-admin-secret-token-2024',
]);

export function verifyAdminToken(req: NextRequest): boolean {
  const authHeader = req.headers.get('authorization');
  if (!authHeader) return false;

  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  return activeAdminTokens.has(token);
}

export function registerAdminSessionToken(token: string): void {
  activeAdminTokens.add(token);
}

export function removeAdminSessionToken(token: string): void {
  activeAdminTokens.delete(token);
}
