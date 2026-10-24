'use client';

import React, { useState, useEffect } from 'react';
import { formatINR } from '@/utils/format-currency';
import { DEFAULT_ESTIMATOR_RATES } from '@/constants';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [calcType, setCalcType] = useState<'residential' | 'commercial' | 'renovation'>('residential');
  const [calcArea, setCalcArea] = useState<number>(1800);
  const [calcQuality, setCalcQuality] = useState<string>('standard');
  const [estimatedVal, setEstimatedVal] = useState<string>('₹65.00 – ₹73.90 Lakhs');

  useEffect(() => {
    const ratesConfig = DEFAULT_ESTIMATOR_RATES;
    const typeRates = ratesConfig[calcType] || ratesConfig.residential;
    const tier = (typeRates as Record<string, { rate: number }>)[calcQuality] || { rate: 1950 };
    const multiplier = 1.95;
    const totalBuiltup = Math.round(calcArea * multiplier);
    const baseCost = tier.rate * totalBuiltup;
    const minCost = Math.round(baseCost * 0.95);
    const maxCost = Math.round(baseCost * 1.08);

    setEstimatedVal(`${formatINR(minCost)} – ${formatINR(maxCost)}`);
  }, [calcType, calcArea, calcQuality]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimate = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('estimate');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="dot"></span>
            <span>ESTABLISHED 2004 • 20+ YEARS OF ENGINEERING TRUST</span>
          </div>
          <h1 className="hero-headline">
            BUILDING YOUR DREAMS WITH <span className="highlight">QUALITY &amp; TRUST</span>
          </h1>
          <p className="hero-supporting">
            Professional construction, architecture, structural engineering, interiors, and renovation solutions delivered with engineering precision across Vijayawada, Amaravati, Guntur, and Godavari districts.
          </p>
          <div className="hero-cta-group">
            <button
              className="btn btn-primary open-consultation-btn"
              id="hero-btn-consultation"
              onClick={() => onOpenConsultation('Full Project Enquiry')}
            >
              <i className="fa fa-clipboard-list"></i> GET FREE CONSULTATION
            </button>
            <a
              href="#projects"
              className="btn btn-secondary"
              id="hero-btn-projects"
              onClick={scrollToProjects}
            >
              <i className="fa fa-building"></i> VIEW OUR PROJECTS
            </a>
          </div>
          <div className="hero-trust-badges">
            <div className="trust-item">
              <i className="fa fa-shield-alt"></i>
              <span>15-Year Structural Warranty</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-tint-slash"></i>
              <span>5-Year Leakage Guarantee</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-compass"></i>
              <span>100% Vasthu Compliant</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-handshake"></i>
              <span>Escrow Milestone Payments</span>
            </div>
          </div>
        </div>

        {/* Quick Interactive Estimator Preview Widget in Hero */}
        <div className="hero-card">
          <div className="hero-card-header">
            <h3 className="hero-card-title">
              <i className="fa fa-calculator"></i> Quick Cost Estimator
            </h3>
            <p className="hero-card-subtitle">
              Get an instant preliminary estimate for your plot in Vijayawada region
            </p>
          </div>
          <form className="quick-calc-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="hero-calc-type">Project Type</label>
              <select
                id="hero-calc-type"
                value={calcType}
                onChange={(e) => setCalcType(e.target.value as 'residential' | 'commercial' | 'renovation')}
              >
                <option value="residential">Residential House / Villa</option>
                <option value="commercial">Commercial Complex / Office</option>
                <option value="renovation">Building Renovation &amp; Remodel</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="hero-calc-area">Plot / Built-up Area (Sq.Ft)</label>
              <input
                type="number"
                id="hero-calc-area"
                value={calcArea}
                min={500}
                max={25000}
                step={100}
                onChange={(e) => setCalcArea(parseFloat(e.target.value) || 1500)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hero-calc-quality">Construction Quality</label>
              <select
                id="hero-calc-quality"
                value={calcQuality}
                onChange={(e) => setCalcQuality(e.target.value)}
              >
                <option value="basic">Basic Package (₹1,650/sq.ft)</option>
                <option value="standard">Standard Package (₹1,950/sq.ft)</option>
                <option value="premium">Premium Package (₹2,400/sq.ft)</option>
                <option value="luxury">Ultra Luxury (₹2,900/sq.ft)</option>
              </select>
            </div>
            <div className="quick-result">
              <span className="quick-result-label">Approximate Budget:</span>
              <span className="quick-result-val" id="hero-calc-val">
                {estimatedVal}
              </span>
            </div>
            <a
              href="#estimate"
              className="btn btn-outline-gold btn-block btn-sm"
              onClick={scrollToEstimate}
            >
              <i className="fa fa-sliders-h"></i> OPEN DETAILED CALCULATOR
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};
