import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { formatINR } from '@/utils/format-currency';

export async function POST(req: NextRequest) {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const {
      projectType = 'residential',
      quality = 'standard',
      area = 1500,
      floors = 'g1',
    } = body;

    const numArea = parseFloat(area) || 1500;
    const ratesKey: 'residential' | 'commercial' | 'renovation' =
      projectType === 'commercial' || projectType === 'renovation'
        ? projectType
        : 'residential';
    const ratesConfig =
      db.estimatorRates[ratesKey] || db.estimatorRates.residential;
    const selectedTier =
      ratesConfig[quality] ||
      ratesConfig.standard || {
        rate: 2000,
        label: 'Standard',
        spec: 'Standard Quality',
      };

    const floorMultiplier =
      (db.estimatorRates.floorMultipliers &&
        db.estimatorRates.floorMultipliers[floors]) ||
      1.0;
    const totalArea = Math.round(numArea * floorMultiplier);

    const baseRate = selectedTier.rate;
    const baseCost = baseRate * totalArea;
    const minCost = Math.round(baseCost * 0.95);
    const maxCost = Math.round(baseCost * 1.08);

    return NextResponse.json({
      success: true,
      inputs: { projectType, quality, area: numArea, floors },
      totalBuiltupArea: totalArea,
      ratePerSqFt: baseRate,
      tierLabel: selectedTier.label,
      specifications: selectedTier.spec,
      estimatedMinCost: minCost,
      estimatedMaxCost: maxCost,
      formattedRange: `${formatINR(minCost)} – ${formatINR(maxCost)}`,
      approxPerSqFtRange: `₹${Math.round(baseRate * 0.95)} – ₹${Math.round(baseRate * 1.08)} / sq.ft`,
      disclaimer:
        'Estimated cost is for preliminary reference only. Final project cost may vary based on design, materials, site conditions, specifications and project requirements.',
    });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
