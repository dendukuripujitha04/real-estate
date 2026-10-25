import { NextRequest, NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';
import { Enquiry } from '@/types';

export async function POST(req: NextRequest) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      projectType,
      location,
      approxArea,
      message,
      estimatedCost,
    } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please provide your full name.' },
        { status: 400 }
      );
    }
    if (!phone || !phone.trim() || phone.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    const newEnquiry: Enquiry = {
      id: 'enq-' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: (email || '').trim(),
      projectType: projectType || 'General Consultation',
      location: (location || 'Not Specified').trim(),
      approxArea: (approxArea || 'N/A').toString().trim(),
      message: (message || '').trim(),
      estimatedCost: estimatedCost || '',
      status: 'NEW',
      createdAt: new Date().toISOString(),
    };

    if (!Array.isArray(db.enquiries)) {
      db.enquiries = [];
    }

    db.enquiries.unshift(newEnquiry);
    saveDb(db);

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you! Your enquiry has been received. The SS Global engineering team will contact you soon.',
        enquiryId: newEnquiry.id,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: 'Invalid submission data' }, { status: 400 });
  }
}
