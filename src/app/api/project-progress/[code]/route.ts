import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ code: string }> | { code: string } }
) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  const resolvedParams = await context.params;
  const code = (resolvedParams.code || '').trim().toUpperCase();

  const found = (db.projectProgress || []).find(
    (p) => p.code.toUpperCase() === code
  );

  if (!found) {
    return NextResponse.json(
      {
        success: false,
        message: `Project tracking code '${code}' not found. Please verify your Project ID or contact BuildSphere customer desk.`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, project: found });
}
