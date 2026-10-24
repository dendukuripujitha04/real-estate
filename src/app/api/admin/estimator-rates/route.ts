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
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, message: 'Invalid rates payload' },
        { status: 400 }
      );
    }

    db.estimatorRates = {
      ...db.estimatorRates,
      ...body,
      residential: {
        ...db.estimatorRates.residential,
        ...(body.residential || {}),
      },
      commercial: {
        ...db.estimatorRates.commercial,
        ...(body.commercial || {}),
      },
      renovation: {
        ...db.estimatorRates.renovation,
        ...(body.renovation || {}),
      },
    };

    saveDb(db);
    return NextResponse.json({ success: true, estimatorRates: db.estimatorRates });
  } catch {
    return NextResponse.json({ error: 'Failed to update rates' }, { status: 400 });
  }
}
