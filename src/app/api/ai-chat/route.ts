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
      reply = `SS Global Constructions and Interior Works has 20+ years of established practical experience in Vijayawada and Andhra Pradesh. We operate under our motto: "Trusted | Quality | Stability Through Experience" and "From Foundation to Finishing • Choice Is Yours..." We undertake complete house building, luxury villas, commercial spaces, and turnkey interiors.`;
    } else if (
      query.includes('cost') ||
      query.includes('price') ||
      query.includes('estimate') ||
      query.includes('rate') ||
      query.includes('budget') ||
      query.includes('sqft') ||
      query.includes('sq ft')
    ) {
      reply = `Every construction and interior project is customized based on your plot dimensions, soil conditions, structural design, and chosen finishes. As our philosophy says "Choice Is Yours...", we guide you through material selections to match your budget. To arrange a free site consultation in Vijayawada, please call 9494502777!`;
    } else if (
      query.includes('brand') ||
      query.includes('material') ||
      query.includes('cement') ||
      query.includes('steel')
    ) {
      reply = `We prioritize high-quality materials from trusted industry brands including UltraTech Cement, Tata Tiscon TMT Steel, Asian Paints, JSW Cement, Kajaria Vitrified Tiles, and Hindware sanitary fixtures for lasting structural stability.`;
    } else if (
      query.includes('renovation') ||
      query.includes('remodel') ||
      query.includes('old house') ||
      query.includes('kitchen') ||
      query.includes('bathroom')
    ) {
      reply = `Yes! "మీ పాత ఇంటిని కానీ, ఫ్లాట్‌ని కానీ మరింత అందంగా మార్చుకోవాలని చూస్తున్నారా..." — We specialize in complete home makeovers, modular kitchens, luxury bathroom renovations, and waterproofing works.`;
    } else if (
      query.includes('vasthu') ||
      query.includes('vastu') ||
      query.includes('direction')
    ) {
      reply = `Yes, all our independent house, villa, and apartment layouts are planned with 100% Vasthu Sastra compliance, optimizing master bedroom placement, kitchen fire elements, main door entrance orientation, and cross-ventilation.`;
    } else if (
      query.includes('contact') ||
      query.includes('phone') ||
      query.includes('call') ||
      query.includes('number') ||
      query.includes('office') ||
      query.includes('address') ||
      query.includes('location')
    ) {
      reply = `You can call or WhatsApp our desk directly at 9494502777. Our office is located at: Door No. 6-6, Srinivasa Nilayam, Currency Nagar Road, Kaveti Vari Street, Near Ramavarappadu Ring, Vijayawada – 521108. You can also visit our website www.ssglobalcsis.in.`;
    } else if (
      query.includes('service') ||
      query.includes('what do you do') ||
      query.includes('commercial')
    ) {
      reply = `SS Global provides 15 core services across 4 domains: 1) Civil Construction (Complete Houses, Independent Villas, Apartments, Commercial Buildings), 2) Turnkey Interiors (Residential & Commercial), 3) Renovation (Kitchen, Bathroom, Full Home Remodel), and 4) Specialized Works (Waterproofing, Cement & Masonry, Tile Laying, Plumbing).`;
    } else {
      reply = `Thank you for reaching out to SS Global Constructions and Interior Works! We bring 20+ years of construction and interior excellence to Vijayawada and surrounding regions. Would you like to schedule a free site consultation, explore our services, or speak directly with our team at 9494502777?`;
    }

    return NextResponse.json({
      reply,
      suggestedActions: [
        { text: 'View Projects', action: 'scroll_projects' },
        { text: 'Book Site Visit', action: 'open_consultation' },
        { text: 'Call 9494502777', action: 'call_phone' },
      ],
    });
  } catch (err) {
    return NextResponse.json({ error: 'Server error in AI chat' }, { status: 500 });
  }
}
