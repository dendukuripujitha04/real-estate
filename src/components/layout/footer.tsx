'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenConsultation?: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenConsultation }) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Col */}
          <div className="footer-about">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="brand-logo-img-box footer-logo-box">
                <img
                  src="/logo.png"
                  alt="SS Global Constructions and Interior Works Logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="brand-text">
                <span className="brand-title" style={{ fontSize: '1.15rem' }}>
                  SS GLOBAL
                </span>
                <span className="brand-subtitle">Constructions &amp; Interior Works</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8' }}>
              {t.footer.aboutText}
            </p>

            <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700, marginTop: '12px' }}>
              <i className="fa fa-award"></i> 20+ Years Experience &bull; {COMPANY_CONTACT.slogan1}
            </div>

            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px', fontStyle: 'italic' }}>
              &ldquo;{COMPANY_CONTACT.teluguPromo3}&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#video-tour" onClick={(e) => { e.preventDefault(); scrollTo('video-tour'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.videoTour}
                </a>
              </li>
              <li>
                <a href="#materials" onClick={(e) => { e.preventDefault(); scrollTo('materials'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.materials}
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.whyUs}
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
                  <i className="fa fa-angle-right"></i> {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="footer-col">
            <h4>{t.footer.servicesTitle}</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Complete House Construction
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Independent Luxury Villas
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Commercial Complexes
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Turnkey Interior Works
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Modular Kitchen Renovation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Bathroom Modernization
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Structural Waterproofing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>
                  <i className="fa fa-angle-right"></i> Vitrified Tile Laying
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Desk */}
          <div className="footer-col">
            <h4>{t.footer.contactDesk}</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fa fa-map-marker-alt"></i>
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <span>
                  <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>
                    {COMPANY_CONTACT.phone}
                  </a>
                </span>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <span>
                  <a href={COMPANY_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                    +91 {COMPANY_CONTACT.phone} (WhatsApp)
                  </a>
                </span>
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <span>
                  <a href={COMPANY_CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {COMPANY_CONTACT.website}
                  </a>
                </span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>
                  <a href={`mailto:${COMPANY_CONTACT.email}`}>{COMPANY_CONTACT.email}</a>
                </span>
              </li>
              <li>
                <i className="fa fa-clock"></i>
                <span>{isTe ? COMPANY_CONTACT.hoursTe : COMPANY_CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; 2026 <strong>{COMPANY_CONTACT.name}</strong>. {t.footer.rights}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>{COMPANY_CONTACT.tagline}</span>
            <span
              className="admin-badge-trigger"
              id="admin-portal-trigger"
              title="Staff Portal Management"
              onClick={onOpenAdmin}
              style={{ cursor: 'pointer' }}
            >
              <i className="fa fa-lock"></i> Staff Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
