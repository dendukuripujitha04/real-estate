'use client';

import React from 'react';

interface AboutProps {
  onOpenConsultation: (service: string) => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const scrollToWhyUs = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('why-buildsphere');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image-main">
            <img src="/images/residential.jpg" alt="BuildSphere Projects in Vijayawada" />
          </div>
          <div className="about-floating-card">
            <h4>20+ YEARS</h4>
            <p>Of engineering trust, architectural innovation, and turnkey execution in Andhra Pradesh.</p>
          </div>
        </div>

        <div className="about-content">
          <div className="section-tag">
            <i className="fa fa-info-circle"></i> WHO WE ARE
          </div>
          <h2 className="section-title">Building With Passion, Engineering With Precision</h2>
          <p>
            Founded in 2004, <strong>BuildSphere Infra &amp; Engineering</strong> is a leading one-stop construction, architecture, and engineering firm headquartered in Vijayawada, Andhra Pradesh. We serve key locations across Krishna, N.T.R., Guntur, Amaravati, and Godavari districts.
          </p>
          <p>
            Unlike conventional builders who outsource critical engineering, our in-house structural engineering council ensures that every column, beam, and foundation is mathematically calculated for seismic resistance, durability, and maximum load capacity.
          </p>
          <div className="philosophy-quote">
            <i className="fa fa-quote-left" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i>
            Our Philosophy: <em>&quot;Listen Better — Plan Better — Build Better&quot;</em>
          </div>

          <h4 style={{ marginTop: '24px', marginBottom: '12px', color: 'var(--primary-navy)' }}>
            Our Core Values
          </h4>
          <div className="about-values-grid">
            <div className="value-card">
              <i className="fa fa-medal"></i>
              <h5>Quality</h5>
            </div>
            <div className="value-card">
              <i className="fa fa-handshake"></i>
              <h5>Trust</h5>
            </div>
            <div className="value-card">
              <i className="fa fa-search-dollar"></i>
              <h5>Transparency</h5>
            </div>
            <div className="value-card">
              <i className="fa fa-hard-hat"></i>
              <h5>Safety</h5>
            </div>
            <div className="value-card">
              <i className="fa fa-lightbulb"></i>
              <h5>Innovation</h5>
            </div>
            <div className="value-card">
              <i className="fa fa-smile"></i>
              <h5>Satisfaction</h5>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary open-consultation-btn"
              onClick={() => onOpenConsultation('About Us Inquiry')}
            >
              <i className="fa fa-phone-alt"></i> SPEAK WITH AN ENGINEER
            </button>
            <a
              href="#why-buildsphere"
              className="btn btn-outline-gold"
              onClick={scrollToWhyUs}
            >
              LEARN WHY CHOOSE BUILDSPHERE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
