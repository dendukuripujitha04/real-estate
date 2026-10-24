import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ code: string }> | { code: string } }
) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  const resolvedParams = await context.params;
  const code = resolvedParams.code.toUpperCase();
  const index = (db.projectProgress || []).findIndex(
    (p) => p.code.toUpperCase() === code
  );

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: 'Project code not found' },
      { status: 404 }
    );
  }

  const body = await req.json();
  db.projectProgress[index] = {
    ...db.projectProgress[index],
    ...body,
    code,
    lastUpdated: new Date().toISOString().split('T')[0],
  };

  saveDb(db);
  return NextResponse.json({ success: true, project: db.projectProgress[index] });
}
