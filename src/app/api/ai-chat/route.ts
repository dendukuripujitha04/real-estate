import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || !message.trim()) {
      return NextResponse.json(
        { reply: 'Please provide a question.' },
        { status: 400 }
      );
    }

    const query = message.toLowerCase();
    let reply = '';

    if (
      query.includes('experience') ||
      query.includes('about') ||
      query.includes('who are you') ||
      query.includes('history')
    ) {
      reply = `BuildSphere Infra & Engineering has been delivering excellence for over 20 years (Established 2004) in Vijayawada and Andhra Pradesh. We operate under our core philosophy: "Listen better – Plan better – Build better". We offer end-to-end residential, commercial, architectural, and structural engineering services.`;
    } else if (
      query.includes('cost') ||
      query.includes('price') ||
      query.includes('estimate') ||
      query.includes('rate') ||
      query.includes('budget') ||
      query.includes('sqft') ||
      query.includes('sq ft')
    ) {
      reply = `Our residential construction packages typically start from ₹1,650/sq.ft (Basic), ₹1,950/sq.ft (Standard with Grade 53 cement and Vizag steel), ₹2,400/sq.ft (Premium with Teak wood and Italian marble), and ₹2,900/sq.ft (Ultra Luxury). You can use our interactive Cost Estimator on this page to calculate an instant preliminary budget for your plot!`;
    } else if (
      query.includes('warranty') ||
      query.includes('guarantee') ||
      query.includes('leakage') ||
      query.includes('quality')
    ) {
      reply = `At BuildSphere, every structure is backed by a 15-Year Structural Warranty and a 5-Year Leakage / Waterproofing Guarantee. We adhere to strict IS building codes and quality audits at every milestone.`;
    } else if (
      query.includes('escrow') ||
      query.includes('payment') ||
      query.includes('milestone')
    ) {
      reply = `We follow a transparent Track & Transact escrow-style payment model. You pay only after each construction milestone (Foundation, Plinth, Slabs, Brickwork, Plastering, Finishing) is inspected and approved by you, ensuring 100% peace of mind and zero hidden surprises!`;
    } else if (
      query.includes('vasthu') ||
      query.includes('vastu') ||
      query.includes('direction')
    ) {
      reply = `Yes! All our architectural plans and 3D elevations are 100% Vasthu Sastra compliant, optimizing master bedroom placement, kitchen fire elements, main door entrance orientation, and cross-ventilation.`;
    } else if (
      query.includes('contact') ||
      query.includes('phone') ||
      query.includes('call') ||
      query.includes('number') ||
      query.includes('office') ||
      query.includes('address')
    ) {
      reply = `You can call our engineering desk directly at +91 81795 17373 or +91 96760 18666. Our office is located at Door No. 6-13, Kaveti Vari Street, Ring Road (Near M Convention), Ramavarapadu, Vijayawada, Andhra Pradesh 521108. We are open Mon - Sat, 9:00 AM - 7:30 PM.`;
    } else if (
      query.includes('track') ||
      query.includes('progress') ||
      query.includes('status') ||
      query.includes('update')
    ) {
      reply = `Clients can track their ongoing project live on our website using their Project ID (such as BSP-2024-01 or BSP-2024-02). You can view stage-by-stage completion percentages from Foundation up to Handover!`;
    } else if (
      query.includes('service') ||
      query.includes('what do you do') ||
      query.includes('renovation') ||
      query.includes('commercial')
    ) {
      reply = `We specialize in 6 core domains: 1) Residential Construction (Villas & Apartments), 2) Commercial Construction, 3) Architectural Design & 3D Elevations, 4) Structural Design, 5) Luxury Interiors, and 6) Building Renovation & Waterproofing.`;
    } else if (
      query.includes('structural') ||
      query.includes('load') ||
      query.includes('soil') ||
      query.includes('beam') ||
      query.includes('column') ||
      query.includes('crack') ||
      query.includes('reinforcement')
    ) {
      reply = `For structural calculations, soil bearing capacity checks, or site-specific engineering analysis, our Chief Structural Engineer conducts an in-person site inspection. Would you like to schedule a free site visit consultation? Please click "GET FREE CONSULTATION" or call +91 81795 17373.`;
    } else {
      reply = `Thank you for reaching out! BuildSphere provides premier construction, architectural design, structural engineering, and luxury interiors across Vijayawada, Amaravati, Guntur, and Godavari districts. Would you like to get a free consultation, calculate a project estimate, or speak with our engineers?`;
    }

    return NextResponse.json({
      reply,
      suggestedActions: [
        { text: 'Calculate Cost', action: 'scroll_estimate' },
        { text: 'Book Consultation', action: 'open_consultation' },
        { text: 'Call Engineer', action: 'call_phone' },
      ],
    });
  } catch (err) {
    return NextResponse.json({ error: 'Server error in AI chat' }, { status: 500 });
  }
}
