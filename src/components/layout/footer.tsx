'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenConsultation?: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenConsultation }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-icon">
                <i className="fa fa-cubes"></i>
              </div>
              <div className="brand-text">
                <span className="brand-title" style={{ fontSize: '1.05rem' }}>
                  BUILDSPHERE
                </span>
                <span className="brand-subtitle">Infra &amp; Engineering Works</span>
              </div>
            </div>
            <p>
              Established in 2004, BuildSphere Infra &amp; Engineering is Andhra Pradesh&apos;s premier turnkey construction, architectural design, and structural engineering platform. Built with trust, certified with excellence.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
              <i className="fa fa-award"></i> 20+ Years Experience • 15-Yr Structural Warranty
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}><i className="fa fa-angle-right"></i> Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}><i className="fa fa-angle-right"></i> About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Our Services</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}><i className="fa fa-angle-right"></i> Projects Portfolio</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery'); }}><i className="fa fa-angle-right"></i> Photo Gallery</a></li>
              <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process'); }}><i className="fa fa-angle-right"></i> How It Works</a></li>
              <li><a href="#estimate" onClick={(e) => { e.preventDefault(); scrollTo('estimate'); }}><i className="fa fa-angle-right"></i> Cost Estimator</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}><i className="fa fa-angle-right"></i> Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Residential Construction</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Commercial Complexes</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Architectural 2D/3D Design</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Structural Engineering</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Turnkey Luxury Interiors</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Building Renovation</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}><i className="fa fa-angle-right"></i> Waterproofing &amp; Repairs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Desk</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fa fa-map-marker-alt"></i>
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <span>{COMPANY_CONTACT.phone1} / {COMPANY_CONTACT.phone2}</span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>{COMPANY_CONTACT.email}</span>
              </li>
              <li>
                <i className="fa fa-clock"></i>
                <span>{COMPANY_CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 <strong>BuildSphere Infra &amp; Engineering</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Designed with Engineering Precision</span>
            <span
              className="admin-badge-trigger"
              id="admin-portal-trigger"
              title="Admin Portal Management"
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
