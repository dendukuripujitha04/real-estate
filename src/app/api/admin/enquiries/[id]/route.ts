import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function DELETE(
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
  const initialLen = db.enquiries.length;
  db.enquiries = db.enquiries.filter((e) => e.id !== id);

  if (db.enquiries.length === initialLen) {
    return NextResponse.json(
      { success: false, message: 'Enquiry not found' },
      { status: 404 }
    );
  }

  saveDb(db);
  return NextResponse.json({ success: true, message: 'Enquiry deleted successfully' });
}
