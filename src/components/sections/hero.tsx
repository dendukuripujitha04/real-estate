'use client';

import React, { useState } from 'react';
import { submitEnquiryApi } from '@/services/api';
import { COMPANY_CONTACT, ALL_SERVICES } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface HeroProps {
  onOpenConsultation: (service?: string) => void;
}

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
        text: isTe ? 'దయచేసి మీ పేరు మరియు ఫోన్ నంబర్ నమోదు చేయండి.' : 'Please provide your name and phone number.',
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

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        {/* Left Column: Brand Hero Text & Credentials */}
        <div className="hero-content">
          {/* Experience Badge Pill */}
          <div className="hero-badge-pill">
            <span className="dot"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            {t.hero.headline}{' '}
            <span className="highlight">{t.hero.headlineHighlight}</span>
          </h1>

          {/* Tagline Strip */}
          <div className="hero-brand-tagline-bar">
            <span className="tagline-core">
              <i className="fa fa-gem"></i> {COMPANY_CONTACT.tagline}
            </span>
            <span className="tagline-support hide-on-mobile">
              • {COMPANY_CONTACT.supportingTagline}
            </span>
          </div>

          {/* Supporting Pitch */}
          <p className="hero-supporting">{t.hero.subheadline}</p>

          {/* Highlight Telugu Quote Box */}
          <div className="hero-quote-callout">
            <i className="fa fa-quote-left quote-icon"></i>
            <div>
              <p className="quote-text-primary">
                &ldquo;{COMPANY_CONTACT.teluguPromo1}&rdquo;
              </p>
              <p className="quote-text-secondary">
                {COMPANY_CONTACT.teluguPromo4}
              </p>
            </div>
          </div>

          {/* CTAs Group */}
          <div className="hero-cta-group">
            <button
              className="btn btn-primary open-consultation-btn"
              id="hero-btn-consultation"
              onClick={() => onOpenConsultation('Full Project Consultation')}
            >
              <i className="fa fa-clipboard-list"></i> {t.hero.ctaConsultation}
            </button>
            <a
              href="#projects"
              className="btn btn-secondary"
              id="hero-btn-projects"
              onClick={scrollToProjects}
            >
              <i className="fa fa-building"></i> {t.hero.ctaProjects}
            </a>
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="btn btn-outline-gold hero-call-direct-btn"
              id="hero-btn-call"
            >
              <i className="fa fa-phone-alt"></i> {COMPANY_CONTACT.phone}
            </a>
          </div>

          {/* Trust Highlights Badges */}
          <div className="hero-trust-badges">
            <div className="trust-item">
              <i className="fa fa-award"></i>
              <span>{t.hero.trustYears}</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-hammer"></i>
              <span>{t.hero.trustFinishing}</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-hand-holding-heart"></i>
              <span>{t.hero.trustChoice}</span>
            </div>
            <div className="trust-item">
              <i className="fa fa-layer-group"></i>
              <span>{t.hero.trustMaterials}</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Converting Quick Consultation Form Card */}
        <div className="hero-card">
          <div className="hero-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="hero-card-logo-mini">
                <img src="/logo.png" alt="SS Logo" />
              </div>
              <div>
                <h3 className="hero-card-title">
                  <i className="fa fa-calendar-check"></i> {t.hero.cardTitle}
                </h3>
                <p className="hero-card-subtitle">{t.hero.cardSubtitle}</p>
              </div>
            </div>
          </div>

          <form className="quick-calc-form" onSubmit={handleQuickSubmit}>
            <div className="form-group">
              <label htmlFor="hero-name">{t.hero.nameLabel}</label>
              <input
                type="text"
                id="hero-name"
                required
                placeholder={isTe ? 'శ్రీ కె. వి. శర్మ' : 'Sri K. V. Sharma'}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hero-phone">{t.hero.phoneLabel}</label>
              <input
                type="tel"
                id="hero-phone"
                required
                placeholder="+91 94945 02777"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hero-project-type">{t.hero.serviceLabel}</label>
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

            <div className="form-group">
              <label htmlFor="hero-location">{t.hero.locationLabel}</label>
              <input
                type="text"
                id="hero-location"
                placeholder={isTe ? 'ఉదా: కరెన్సీ నగర్, రామవరప్పాడు, పోరంకి' : 'e.g. Currency Nagar, Ramavarappadu, Poranki'}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block btn-sm"
              id="hero-btn-submit-quick"
              disabled={loading}
              style={{ marginTop: '16px' }}
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i> Submitting...
                </>
              ) : (
                <>
                  <i className="fa fa-paper-plane"></i> {t.hero.submitBtn}
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
                  borderRadius: '6px',
                  background:
                    statusMsg.type === 'success'
                      ? 'rgba(16, 185, 129, 0.18)'
                      : 'rgba(239, 68, 68, 0.18)',
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

          {/* Direct WhatsApp Prompt in Hero Card */}
          <div className="hero-card-footer-direct">
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
              Prefer instant chat?
            </span>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-card-wa-link"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp (9494502777)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
