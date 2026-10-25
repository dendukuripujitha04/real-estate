'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface AboutProps {
  onOpenConsultation: (service: string) => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  const scrollToWhyUs = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('why-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding about-section" id="about">
      <div className="container about-grid">
        {/* Left Column: Visual with SS Logo Overlay */}
        <div className="about-visual">
          <div className="about-image-main">
            <img
              src="/images/residential.jpg"
              alt="SS Global Constructions Projects in Vijayawada"
            />
            <div className="about-logo-overlay-badge">
              <img src="/logo.png" alt="SS Global Logo" />
            </div>
          </div>
          <div className="about-floating-card">
            <h4>20+ YEARS</h4>
            <p>
              {isTe
                ? 'విజయవాడ మరియు పరిసర ప్రాంతాలలో 20+ సంవత్సరాల అనుభవం, నాణ్యమైన నిర్మాణాలు మరియు ఇంటీరియర్ పనులు.'
                : 'Of practical knowledge, quality construction, and interior craftsmanship in Vijayawada & Amaravati.'}
            </p>
          </div>
        </div>

        {/* Right Column: Company Story & Philosophy */}
        <div className="about-content">
          <div className="section-tag">
            <i className="fa fa-info-circle"></i> {t.about.tag}
          </div>
          <h2 className="section-title">{t.about.title}</h2>

          <p className="about-lead-text">{t.about.lead}</p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          {/* Slogan Quote Strip */}
          <div className="philosophy-quote">
            <i
              className="fa fa-quote-left"
              style={{ color: 'var(--accent-gold)', marginRight: '10px' }}
            ></i>
            <span>
              <strong>&ldquo;{COMPANY_CONTACT.slogan1}&rdquo;</strong> &bull;{' '}
              <em>&ldquo;{COMPANY_CONTACT.slogan2}&rdquo;</em>
            </span>
            <div
              style={{
                fontSize: '0.86rem',
                color: 'var(--accent-gold)',
                marginTop: '6px',
                fontWeight: 600,
              }}
            >
              {COMPANY_CONTACT.teluguPromo2}
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="about-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">
                <i className="fa fa-history"></i>
              </div>
              <div>
                <h5>{t.about.pillar1Title}</h5>
                <p>{t.about.pillar1Desc}</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <i className="fa fa-hammer"></i>
              </div>
              <div>
                <h5>{t.about.pillar2Title}</h5>
                <p>{t.about.pillar2Desc}</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <i className="fa fa-check-double"></i>
              </div>
              <div>
                <h5>{t.about.pillar3Title}</h5>
                <p>{t.about.pillar3Desc}</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <i className="fa fa-handshake"></i>
              </div>
              <div>
                <h5>{t.about.pillar4Title}</h5>
                <p>{t.about.pillar4Desc}</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="btn btn-primary open-consultation-btn"
              onClick={() => onOpenConsultation('About Us Inquiry')}
            >
              <i className="fa fa-phone-alt"></i> {t.about.cta}
            </button>
            <a href="#why-us" className="btn btn-outline-gold" onClick={scrollToWhyUs}>
              <i className="fa fa-star"></i> {t.nav.whyUs}
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="btn btn-secondary"
            >
              <i className="fa fa-phone"></i> {COMPANY_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
