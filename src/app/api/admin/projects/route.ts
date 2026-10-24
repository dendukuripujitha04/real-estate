import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { verifyAdminToken } from '@/lib/auth';
import { ProjectItem } from '@/types';

export async function POST(req: NextRequest) {
  if (!verifyAdminToken(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  try {
    const {
      title,
      category,
      location,
      area,
      year,
      status,
      image,
      description,
      highlights,
    } = await req.json();

    if (!title || !category) {
      return NextResponse.json(
        { success: false, message: 'Title and category are required' },
        { status: 400 }
      );
    }

    const newProj: ProjectItem = {
      id: 'proj-' + Date.now(),
      title: title.trim(),
      category: category.toLowerCase().trim(),
      categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
      location: (location || 'Vijayawada').trim(),
      area: (area || 'N/A').trim(),
      year: (year || new Date().getFullYear()).toString(),
      status: status || 'Completed',
      image: image || '/images/residential.jpg',
      description: (description || '').trim(),
      highlights: Array.isArray(highlights)
        ? highlights
        : ['Quality Assured', '15-Year Warranty'],
    };

    if (!Array.isArray(db.projects)) {
      db.projects = [];
    }

    db.projects.unshift(newProj);
    saveDb(db);

    return NextResponse.json({ success: true, project: newProj }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid project payload' }, { status: 400 });
  }
}
