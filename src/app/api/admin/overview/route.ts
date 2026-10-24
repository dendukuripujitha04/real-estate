import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';

export async function GET(req: NextRequest) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  const totalEnquiries = (db.enquiries || []).length;
  const newEnquiries = (db.enquiries || []).filter((e) => e.status === 'NEW').length;
  const inProgressEnquiries = (db.enquiries || []).filter(
    (e) => e.status === 'IN PROGRESS'
  ).length;
  const totalProjects = (db.projects || []).length;
  const activeTrackedProjects = (db.projectProgress || []).length;

  return NextResponse.json({
    totalEnquiries,
    newEnquiries,
    inProgressEnquiries,
    totalProjects,
    activeTrackedProjects,
  });
}
