import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> | { id: string } }
) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  const resolvedParams = await context.params;
  const id = resolvedParams.id;
  const { status } = await req.json();

  const validStatuses = ['NEW', 'CONTACTED', 'IN PROGRESS', 'COMPLETED'];
  if (!validStatuses.includes(status)) {
    return NextResponse.json(
      { success: false, message: 'Invalid status' },
      { status: 400 }
    );
  }

  const enq = (db.enquiries || []).find((e) => e.id === id);
  if (!enq) {
    return NextResponse.json(
      { success: false, message: 'Enquiry not found' },
      { status: 404 }
    );
  }

  enq.status = status as 'NEW' | 'CONTACTED' | 'IN PROGRESS' | 'COMPLETED';
  enq.updatedAt = new Date().toISOString();
  saveDb(db);

  return NextResponse.json({ success: true, enquiry: enq });
}
