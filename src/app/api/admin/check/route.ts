import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json(
      { success: false, authenticated: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.json({ success: true, authenticated: true });
}
