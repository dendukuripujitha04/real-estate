import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function PUT(req: NextRequest) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  try {
    const body = await req.json();
    db.company = { ...db.company, ...body };
    saveDb(db);
    return NextResponse.json({ success: true, company: db.company });
  } catch {
    return NextResponse.json({ error: 'Failed to update company info' }, { status: 400 });
  }
}
