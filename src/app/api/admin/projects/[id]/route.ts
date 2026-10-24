import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function PUT(
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
  const index = db.projects.findIndex((p) => p.id === id);
  if (index === -1) {
    return NextResponse.json(
      { success: false, message: 'Project not found' },
      { status: 404 }
    );
  }

  const body = await req.json();
  db.projects[index] = { ...db.projects[index], ...body, id };
  saveDb(db);

  return NextResponse.json({ success: true, project: db.projects[index] });
}

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
  db.projects = db.projects.filter((p) => p.id !== id);
  saveDb(db);

  return NextResponse.json({ success: true, message: 'Project removed' });
}
