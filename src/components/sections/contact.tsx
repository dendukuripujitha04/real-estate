'use client';

import React from 'react';
import { ContactForm } from '@/components/forms/contact-form';
import { COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-envelope"></i> {t.contact.tag}
          </div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-desc">{t.contact.desc}</p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Card */}
          <div className="contact-info-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div className="contact-logo-box">
                <img src="/logo.png" alt="SS Global Logo" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#ffffff' }}>
                  {COMPANY_CONTACT.name}
                </h3>
                <small style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>
                  {COMPANY_CONTACT.tagline}
                </small>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {isTe
                ? 'విజయవాడ, అమరావతి, గుంటూరు మరియు కృష్ణా జిల్లా వ్యాప్తంగా రెసిడెన్షియల్ & కమర్షియల్ నిర్మాణ మరియు ఇంటీరియర్ సేవలందిస్తున్నాము.'
                : 'Serving Vijayawada, Amaravati, Guntur, and Krishna District with premier civil construction and interior execution.'}
            </p>

            <div className="contact-items-list">
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5>{t.contact.addressHeading}</h5>
                  <p>{COMPANY_CONTACT.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <div>
                  <h5>{t.contact.phoneHeading}</h5>
                  <p>
                    <a
                      href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                      style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-gold)' }}
                    >
                      {COMPANY_CONTACT.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-globe"></i>
                </div>
                <div>
                  <h5>Official Website &amp; Email</h5>
                  <p>
                    <a href={COMPANY_CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">
                      {COMPANY_CONTACT.website}
                    </a>
                    <br />
                    <a href={`mailto:${COMPANY_CONTACT.email}`}>{COMPANY_CONTACT.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-clock"></i>
                </div>
                <div>
                  <h5>{t.contact.hoursHeading}</h5>
                  <p>{isTe ? COMPANY_CONTACT.hoursTe : COMPANY_CONTACT.hours}</p>
                </div>
              </div>
            </div>

            <div className="direct-action-buttons">
              <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="btn btn-primary btn-sm">
                <i className="fa fa-phone-alt"></i> CALL NOW ({COMPANY_CONTACT.phone})
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ background: '#25d366', borderColor: '#25d366', color: '#fff' }}
              >
                <i className="fab fa-whatsapp"></i> WHATSAPP
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-navy)' }}>
              {t.contact.formTitle}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              {t.contact.formSubtitle}
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Verified Google Maps Embed for Ramavarappadu Ring Road Vijayawada */}
        <div className="map-container">
          <iframe
            title="SS Global Constructions Location Map - Ramavarappadu Ring, Vijayawada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.216391485987!2d80.6628867!3d16.5160912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e4d25c43d9bf%3A0xe989c47e0996841!2sRamavarapadu%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
