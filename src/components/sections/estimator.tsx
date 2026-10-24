'use client';

import React, { useState, useEffect } from 'react';
import { formatINR, formatNumberWithCommas } from '@/utils/format-currency';
import { DEFAULT_ESTIMATOR_RATES } from '@/constants';
import { EstimatorRates } from '@/types';

interface EstimatorProps {
  onGetQuotation: (details: {
    type: string;
    quality: string;
    area: number;
    costRange: string;
  }) => void;
}

export const EstimatorSection: React.FC<EstimatorProps> = ({ onGetQuotation }) => {
  const [rates, setRates] = useState<EstimatorRates>(DEFAULT_ESTIMATOR_RATES);
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'renovation'>('residential');
  const [area, setArea] = useState<number>(1500);
  const [floors, setFloors] = useState<string>('g1');
  const [quality, setQuality] = useState<string>('standard');

  useEffect(() => {
    fetch('/api/estimator-rates')
      .then((r) => r.json())
      .then((data) => {
        if (data && data.residential) {
          setRates(data);
        }
      })
      .catch(() => {
        // Fallback already in initial state
      });
  }, []);

  const floorLabels: Record<string, string> = {
    g: 'Ground Floor Only (G)',
    g1: 'Ground + 1 Floor (G+1 Duplex / Triplex)',
    g2: 'Ground + 2 Floors (G+2)',
    g3: 'Ground + 3 Floors (G+3)',
    g4: 'Ground + 4 Floors (G+4 Commercial / Apt)',
  };

  const floorMultiplier =
    (rates.floorMultipliers && rates.floorMultipliers[floors]) || 1.95;
  const totalBuiltup = Math.round(area * floorMultiplier);

  const typeRates = rates[projectType] || rates.residential;
  const tier = (typeRates as Record<string, { rate: number; label: string; spec: string }>)[quality] ||
    (typeRates as Record<string, { rate: number; label: string; spec: string }>).standard || {
      rate: 1950,
      label: 'Standard Package',
      spec: 'Grade 53 Cement, Vizag/Tata TMT Steel, Wire-cut Bricks',
    };

  const baseCost = tier.rate * totalBuiltup;
  const minCost = Math.round(baseCost * 0.95);
  const maxCost = Math.round(baseCost * 1.08);

  const costRangeString = `${formatINR(minCost)} – ${formatINR(maxCost)}`;
  const rateRangeString = `Approx ₹${Math.round(tier.rate * 0.95)} – ₹${Math.round(tier.rate * 1.08)} / sq.ft`;
  const tierDisplayString = `${projectType.toUpperCase()} • ${tier.label.toUpperCase()}`;

  const handleQuotationClick = () => {
    onGetQuotation({
      type: projectType,
      quality,
      area,
      costRange: costRangeString,
    });
  };

  return (
    <section className="section-padding estimator-section" id="estimate">
      <div className="container">
        <div className="text-center">
          <div className="section-tag light">
            <i className="fa fa-calculator"></i> BUDGET ESTIMATOR
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Interactive Construction Cost Estimator
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            Select your project type, plot footprint, quality specifications, and floor levels to calculate an instant preliminary reference cost for your project.
          </p>
        </div>

        <div className="estimator-box">
          <div className="estimator-grid">
            {/* Inputs Column */}
            <div className="estimator-inputs">
              {/* 1. Project Type */}
              <div>
                <span className="input-block-label">1. Select Project Type</span>
                <div className="radio-pill-group">
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="type-res"
                      name="est-type"
                      value="residential"
                      checked={projectType === 'residential'}
                      onChange={() => setProjectType('residential')}
                    />
                    <label htmlFor="type-res">
                      <i className="fa fa-home"></i>
                      <span>Residential</span>
                    </label>
                  </div>
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="type-com"
                      name="est-type"
                      value="commercial"
                      checked={projectType === 'commercial'}
                      onChange={() => setProjectType('commercial')}
                    />
                    <label htmlFor="type-com">
                      <i className="fa fa-building"></i>
                      <span>Commercial</span>
                    </label>
                  </div>
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="type-ren"
                      name="est-type"
                      value="renovation"
                      checked={projectType === 'renovation'}
                      onChange={() => setProjectType('renovation')}
                    />
                    <label htmlFor="type-ren">
                      <i className="fa fa-tools"></i>
                      <span>Renovation</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* 2. Area Slider */}
              <div className="slider-container">
                <div className="slider-header">
                  <span className="input-block-label" style={{ marginBottom: 0 }}>
                    2. Plot Footprint / Ground Area
                  </span>
                  <span className="slider-val-display" id="est-area-input">
                    {area} Sq.Ft Plot
                  </span>
                </div>
                <input
                  type="range"
                  className="area-slider"
                  id="est-area-slider"
                  min="600"
                  max="10000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(parseFloat(e.target.value) || 1500)}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    marginTop: '8px',
                  }}
                >
                  <span>600 Sq.Ft</span>
                  <span>2,500 Sq.Ft</span>
                  <span>5,000 Sq.Ft</span>
                  <span>10,000 Sq.Ft</span>
                </div>
              </div>

              {/* 3. Floors */}
              <div>
                <span className="input-block-label">3. Number of Floors / Structure</span>
                <select
                  className="estimator-select"
                  id="est-floors-select"
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                >
                  <option value="g">Ground Floor Only (G)</option>
                  <option value="g1">Ground + 1 Floor (G+1 Duplex / Triplex)</option>
                  <option value="g2">Ground + 2 Floors (G+2)</option>
                  <option value="g3">Ground + 3 Floors (G+3)</option>
                  <option value="g4">Ground + 4 Floors (G+4 Commercial / Apt)</option>
                </select>
              </div>

              {/* 4. Quality Package */}
              <div>
                <span className="input-block-label">4. Construction Quality Package</span>
                <div className="radio-pill-group">
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="qual-basic"
                      name="est-quality"
                      value="basic"
                      checked={quality === 'basic'}
                      onChange={() => setQuality('basic')}
                    />
                    <label htmlFor="qual-basic">
                      <i className="fa fa-shield-alt"></i>
                      <span>Basic Tier</span>
                    </label>
                  </div>
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="qual-std"
                      name="est-quality"
                      value="standard"
                      checked={quality === 'standard'}
                      onChange={() => setQuality('standard')}
                    />
                    <label htmlFor="qual-std">
                      <i className="fa fa-star"></i>
                      <span>Standard</span>
                    </label>
                  </div>
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="qual-prem"
                      name="est-quality"
                      value="premium"
                      checked={quality === 'premium'}
                      onChange={() => setQuality('premium')}
                    />
                    <label htmlFor="qual-prem">
                      <i className="fa fa-gem"></i>
                      <span>Premium</span>
                    </label>
                  </div>
                  <div className="radio-pill">
                    <input
                      type="radio"
                      id="qual-lux"
                      name="est-quality"
                      value="luxury"
                      checked={quality === 'luxury'}
                      onChange={() => setQuality('luxury')}
                    />
                    <label htmlFor="qual-lux">
                      <i className="fa fa-crown"></i>
                      <span>Ultra Luxury</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Display Card Column */}
            <div className="estimator-output-card">
              <div className="output-header">
                <span className="output-badge" id="est-display-tier">
                  {tierDisplayString}
                </span>
                <div className="output-cost-range" id="est-display-cost">
                  {costRangeString}
                </div>
                <div className="output-sqft-rate" id="est-display-rate">
                  {rateRangeString}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '12px',
                }}
              >
                <span>Total Estimated Built-up Area:</span>
                <strong id="est-display-area" style={{ color: '#ffffff' }}>
                  {formatNumberWithCommas(totalBuiltup)} Sq.Ft ({floorLabels[floors] ? floors.toUpperCase() : 'G+1'})
                </strong>
              </div>

              <div className="output-specs-box">
                <div className="output-specs-title">
                  <i className="fa fa-check-double"></i> Material Specifications Included
                </div>
                <div className="output-specs-content" id="est-display-spec">
                  {tier.spec}
                </div>
              </div>

              <button
                className="btn btn-primary btn-block"
                id="btn-get-quotation"
                onClick={handleQuotationClick}
              >
                <i className="fa fa-file-invoice-dollar"></i> GET DETAILED QUOTATION
              </button>

              <p className="estimator-disclaimer">
                <i className="fa fa-info-circle"></i> Estimated cost is for preliminary reference only. Final project cost may vary based on structural design, exact material selection, site soil conditions, specifications and project requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
