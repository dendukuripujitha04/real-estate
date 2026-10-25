'use client';

import React, { useState } from 'react';
import { submitEnquiryApi } from '@/services/api';
import { COMPANY_CONTACT, ALL_SERVICES } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

const POPULAR_LOCATIONS = [
  'Currency Nagar',
  'Ramavarappadu',
  'Poranki',
  'Benz Circle',
  'Tadepalli',
  'Gannavaram',
];

export const HeroSection: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Complete House Construction');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatusMsg({
        type: 'error',
        text: isTe
          ? 'దయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి.'
          : 'Please provide your name and phone number.',
      });
      return;
    }

    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await submitEnquiryApi({
        name,
        phone,
        projectType,
        location: location || 'Vijayawada / Amaravati',
        message: `Quick enquiry from SS Global Hero Card for ${projectType}`,
      });

      if (res.success) {
        setStatusMsg({
          type: 'success',
          text: isTe
            ? 'ధన్యవాదాలు! మీ వినతి అందింది. మా ఇంజనీరింగ్ బృందం త్వరలో సంప్రదిస్తుంది.'
            : 'Thank you! Your request has been received. Our team will contact you shortly.',
        });
        setName('');
        setPhone('');
        setLocation('');
      } else {
        setStatusMsg({
          type: 'error',
          text: res.message || 'Submission failed. Please call 9494502777 directly.',
        });
      }
    } catch {
      setStatusMsg({
        type: 'error',
        text: 'Unable to submit right now. Please call +91 94945 02777 directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('video-tour');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero hero-advanced" id="home">
      {/* Ambient Animated Background Mesh & Grid */}
      <div className="hero-ambient-aura hero-aura-1" aria-hidden="true" />
      <div className="hero-ambient-aura hero-aura-2" aria-hidden="true" />
      <div className="hero-blueprint-grid" aria-hidden="true" />

      <div className="container hero-grid">
        {/* Left Column: Premium Architectural Brand Presentation */}
        <div className="hero-content">
          {/* Top Status & Verification Pill */}
          <div className="hero-live-pill-group">
            <div className="hero-badge-pill hero-badge-glow">
              <span className="dot pulse-emerald" />
              <span>
                {isTe
                  ? 'విజయవాడ & అమరావతిలో కొత్త ప్రాజెక్ట్‌లు స్వీకరించబడుతున్నాయి'
                  : 'Booking Open for Villas, Homes & Turnkey Interiors'}
              </span>
            </div>
            <div className="hero-badge-pill hero-badge-gold-subtle hide-on-mobile">
              <i className="fa fa-award" style={{ color: 'var(--accent-gold)' }} />
              <span>{t.hero.trustYears}</span>
            </div>
          </div>

          {/* Official Brand Identity Monogram Banner */}
          <div className="hero-brand-monogram-box">
            <div className="hero-brand-crest">
              <img src="/logo.png" alt="SS Global Monogram" className="hero-crest-img" />
            </div>
            <div className="hero-brand-text-block">
              <span className="hero-brand-title-lead">SS GLOBAL</span>
              <span className="hero-brand-subtitle-lead">CONSTRUCTIONS AND INTERIOR WORKS</span>
              <span className="hero-brand-slogan-lead">
                From Foundation to Finishing • Choice Is Yours...
              </span>
            </div>
          </div>

          {/* Master Architectural Headline */}
          <h1 className="hero-headline hero-headline-advanced">
            {isTe ? (
              <>
                మీ కలల ఇంటి నిర్మాణం &amp; ఇంటీరియర్స్{' '}
                <span className="highlight-shimmer">నాణ్యత మరియు విశ్వసనీయతతో</span>
              </>
            ) : (
              <>
                Building Architectural Legacies with{' '}
                <span className="highlight-shimmer">Uncompromising Quality &amp; Trust</span>
              </>
            )}
          </h1>

          {/* Subtitle / Core Value Proposition */}
          <p className="hero-supporting hero-supporting-advanced">
            {isTe
              ? 'పునాది తవ్వకం నుండి తాళం చెవుల అప్పగింత వరకు, 20+ సంవత్సరాల ఆన్-గ్రౌండ్ ఇంజనీరింగ్ అనుభవంతో మీ ఇంటిని పటిష్టంగా మరియు అద్భుతంగా నిర్మిస్తాం.'
              : 'From earthwork foundation to luxury turnkey interiors. Delivering 20+ years of steadfast craftsmanship, 100% Vasthu harmony, and single-window accountability across Vijayawada & Andhra Pradesh.'}
          </p>

          {/* Telugu Heritage Emotional Quote Card */}
          <div className="hero-quote-card-modern">
            <div className="hero-quote-icon-bubble">
              <i className="fa fa-quote-left" />
            </div>
            <div className="hero-quote-text-wrap">
              <p className="quote-telugu-primary">
                &ldquo;{COMPANY_CONTACT.teluguPromo1}&rdquo;
              </p>
              <div className="quote-telugu-footer">
                <span className="quote-telugu-accent">{COMPANY_CONTACT.teluguPromo4}</span>
                <span className="quote-tag-badge">విజయవాడ స్పెషలిస్ట్స్</span>
              </div>
            </div>
          </div>

          {/* Interactive Feature Pills */}
          <div className="hero-feature-chips">
            <div className="feature-chip" onClick={() => onOpenConsultation('Complete House Construction')}>
              <i className="fa fa-home" />
              <span>Complete House Construction</span>
            </div>
            <div className="feature-chip" onClick={() => onOpenConsultation('Villa Construction')}>
              <i className="fa fa-crown" />
              <span>Luxury Duplex Villas</span>
            </div>
            <div className="feature-chip" onClick={() => onOpenConsultation('Interior Design and Execution')}>
              <i className="fa fa-couch" />
              <span>Turnkey Modular Interiors</span>
            </div>
            <div className="feature-chip" onClick={() => onOpenConsultation('Kitchen Renovation')}>
              <i className="fa fa-compass" />
              <span>100% Vasthu Compliant</span>
            </div>
          </div>

          {/* High-Converting CTA Action Group */}
          <div className="hero-cta-group hero-cta-group-advanced">
            <button
              className="btn btn-primary hero-btn-main btn-glow"
              id="hero-btn-consultation"
              onClick={() => onOpenConsultation('Full Project Consultation')}
            >
              <i className="fa fa-clipboard-check" />
              <span>{t.hero.ctaConsultation}</span>
              <i className="fa fa-arrow-right hero-btn-arrow" />
            </button>

            <a
              href="#video-tour"
              className="btn btn-secondary hero-btn-video"
              id="hero-btn-video-tour"
              onClick={scrollToVideo}
            >
              <span className="video-play-pulse">
                <i className="fa fa-play" />
              </span>
              <span>Watch Video Tour</span>
            </a>

            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="btn btn-outline-gold hero-call-direct-btn"
              id="hero-btn-call"
              title="Call Director Directly"
            >
              <i className="fa fa-phone-alt" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>
          </div>

          {/* Verified Trust Stats Ribbon */}
          <div className="hero-trust-ribbon">
            <div className="trust-ribbon-item">
              <span className="trust-ribbon-num">20+</span>
              <span className="trust-ribbon-label">Years Field Experience</span>
            </div>
            <div className="trust-ribbon-divider" />
            <div className="trust-ribbon-item">
              <span className="trust-ribbon-num">350+</span>
              <span className="trust-ribbon-label">Happy Homeowners</span>
            </div>
            <div className="trust-ribbon-divider" />
            <div className="trust-ribbon-item">
              <span className="trust-ribbon-num">15</span>
              <span className="trust-ribbon-label">In-House Services</span>
            </div>
            <div className="trust-ribbon-divider" />
            <div className="trust-ribbon-item">
              <span className="trust-ribbon-num">100%</span>
              <span className="trust-ribbon-label">Foundation to Finishing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Ultra-Modern Glassmorphic Engineering Hub Card */}
        <div className="hero-card hero-card-advanced">
          {/* Card Ambient Header */}
          <div className="hero-card-header hero-card-header-advanced">
            <div className="hero-card-header-left">
              <div className="hero-card-avatar-wrap">
                <img src="/logo.png" alt="SS Logo" className="hero-card-avatar-img" />
                <span className="avatar-online-dot" />
              </div>
              <div>
                <div className="hero-card-top-tag">
                  <i className="fa fa-bolt" /> {isTe ? 'ఉచిత సైట్ విజిట్' : 'DIRECT DESK'}
                </div>
                <h3 className="hero-card-title">{t.hero.cardTitle}</h3>
                <p className="hero-card-subtitle">
                  {isTe
                    ? 'విజయవాడ & అమరావతిలో మా సీనియర్ ఇంజనీరింగ్ బృందంతో నేరుగా మాట్లాడండి'
                    : 'Get detailed itemized estimate & site inspection within 24 hours'}
                </p>
              </div>
            </div>
          </div>

          {/* Quick-Pick Location Pills */}
          <div className="hero-location-pills-bar">
            <span className="pills-label">
              <i className="fa fa-map-marker-alt" /> {isTe ? 'ప్రాంతం ఎంచుకోండి:' : 'Quick Select Area:'}
            </span>
            <div className="pills-scroll-wrap">
              {POPULAR_LOCATIONS.map((loc) => (
                <button
                  type="button"
                  key={loc}
                  className={`quick-loc-pill ${location === loc ? 'active' : ''}`}
                  onClick={() => setLocation(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* High-Converting Form */}
          <form className="quick-calc-form hero-form-advanced" onSubmit={handleQuickSubmit}>
            <div className="form-group-floating">
              <label htmlFor="hero-name">
                <i className="fa fa-user" /> {t.hero.nameLabel}
              </label>
              <input
                type="text"
                id="hero-name"
                required
                placeholder={isTe ? 'శ్రీ కె. వి. శర్మ' : 'Sri K. V. Sharma'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group-floating">
              <label htmlFor="hero-phone">
                <i className="fa fa-phone" /> {t.hero.phoneLabel}
              </label>
              <input
                type="tel"
                id="hero-phone"
                required
                placeholder="+91 94945 02777"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-row-2col">
              <div className="form-group-floating">
                <label htmlFor="hero-project-type">
                  <i className="fa fa-hard-hat" /> {t.hero.serviceLabel}
                </label>
                <select
                  id="hero-project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  {ALL_SERVICES.map((s) => (
                    <option key={s.id} value={s.titleEn}>
                      {isTe ? s.titleTe : s.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-floating">
                <label htmlFor="hero-location">
                  <i className="fa fa-map-pin" /> {t.hero.locationLabel}
                </label>
                <input
                  type="text"
                  id="hero-location"
                  placeholder={
                    isTe ? 'ఉదా: కరెన్సీ నగర్, పోరంకి' : 'e.g. Currency Nagar, Poranki'
                  }
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* Inclusions Guarantee Strip */}
            <div className="hero-form-inclusions">
              <div className="inclusion-item">
                <i className="fa fa-check-circle" />
                <span>Zero Hidden Costs</span>
              </div>
              <div className="inclusion-item">
                <i className="fa fa-check-circle" />
                <span>Free Vasthu Audit</span>
              </div>
              <div className="inclusion-item">
                <i className="fa fa-check-circle" />
                <span>Transparent Materials</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block hero-submit-btn"
              id="hero-btn-submit-quick"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin" /> Submitting Request...
                </>
              ) : (
                <>
                  <i className="fa fa-paper-plane" />
                  <span>{t.hero.submitBtn}</span>
                </>
              )}
            </button>

            {statusMsg && (
              <div
                className={`form-feedback ${statusMsg.type}`}
                style={{
                  display: 'block',
                  marginTop: '12px',
                  fontSize: '0.85rem',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  background:
                    statusMsg.type === 'success'
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'rgba(239, 68, 68, 0.2)',
                  border: `1px solid ${
                    statusMsg.type === 'success' ? '#10b981' : '#ef4444'
                  }`,
                  color: statusMsg.type === 'success' ? '#6ee7b7' : '#fca5a5',
                  lineHeight: 1.4,
                }}
              >
                {statusMsg.text}
              </div>
            )}
          </form>

          {/* Direct Instant WhatsApp Strip */}
          <div className="hero-card-footer-advanced">
            <span className="hero-footer-divider-text">
              <span>OR CONNECT INSTANTLY</span>
            </span>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-direct-btn"
            >
              <i className="fab fa-whatsapp" />
              <span>Chat with Chief Engineer on WhatsApp (9494502777)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
