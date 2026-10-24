import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(req: NextRequest) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  let list = db.gallery;
  if (category && category !== 'all') {
    list = list.filter((g) => g.category.toLowerCase() === category.toLowerCase());
  }

  return NextResponse.json(list);
}
