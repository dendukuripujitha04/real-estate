import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  return NextResponse.json({
    company: db.company,
    stats: db.stats,
    guarantees: db.company.guarantees,
  });
}
