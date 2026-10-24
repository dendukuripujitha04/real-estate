'use client';

import React from 'react';

interface WhyUsProps {
  onOpenConsultation: (service: string) => void;
}

export const WhyUsSection: React.FC<WhyUsProps> = ({ onOpenConsultation }) => {
  return (
    <section className="section-padding why-section" id="why-buildsphere">
      <div className="container">
        <div className="text-center">
          <div className="section-tag light">
            <i className="fa fa-check-circle"></i> WHY CHOOSE BUILDSPHERE?
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Engineering Excellence You Can Rely On
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            Here is why homeowners and commercial developers across Andhra Pradesh trust BuildSphere Infra &amp; Engineering.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-user-shield"></i>
            </div>
            <h4>20+ Years Track Record</h4>
            <p>
              Over two decades of proven construction and structural engineering experience in Vijayawada, Krishna, and Godavari districts since 2004.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-cubes"></i>
            </div>
            <h4>In-House Structural Engineering</h4>
            <p>
              Direct in-house structural engineers ensuring IS-code compliant seismic design, foundation soil testing, and zero structural compromises.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-handshake"></i>
            </div>
            <h4>Milestone Escrow Model</h4>
            <p>
              Track &amp; Transact payment system where you release payments only after each stage is inspected and certified on-site.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-certificate"></i>
            </div>
            <h4>15-Year Structural Warranty</h4>
            <p>
              Our RCC structures come with a written 15-year structural warranty and a 5-year leakage / waterproofing guarantee.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-compass"></i>
            </div>
            <h4>100% Vasthu Compliance</h4>
            <p>
              Scientifically balanced architectural layouts that respect traditional Indian Vasthu principles without compromising modern aesthetics.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-clock"></i>
            </div>
            <h4>On-Time Project Delivery</h4>
            <p>
              Strict project management and material supply-chain coordination ensuring your project is handed over strictly as scheduled.
            </p>
          </div>
        </div>

        {/* Large CTA Banner */}
        <div className="cta-banner">
          <h3>READY TO BUILD YOUR DREAM PROJECT?</h3>
          <p>
            Let&apos;s collaborate to bring your architectural vision into a solid, lasting reality with unmatched engineering quality.
          </p>
          <div className="cta-banner-buttons">
            <button
              className="btn btn-primary open-consultation-btn"
              onClick={() => onOpenConsultation('Dream Project Call')}
            >
              <i className="fa fa-calendar-check"></i> GET FREE CONSULTATION
            </button>
            <a href="tel:+918179517373" className="btn btn-secondary">
              <i className="fa fa-phone-alt"></i> CALL +91 81795 17373
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
