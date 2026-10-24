'use client';

import React from 'react';
import { ContactForm } from '@/components/forms/contact-form';
import { COMPANY_CONTACT } from '@/constants';

export const ContactSection: React.FC = () => {
  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-envelope"></i> GET IN TOUCH
          </div>
          <h2 className="section-title">Contact Our Engineering Desk</h2>
          <p className="section-desc">
            Schedule a direct site inspection or discuss your architectural requirements with our senior engineers.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h3>BuildSphere Infra &amp; Engineering</h3>
            <p>Serving Vijayawada, Amaravati, Krishna, N.T.R., Guntur, and Godavari Districts.</p>

            <div className="contact-items-list">
              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5>Registered Office</h5>
                  <p>{COMPANY_CONTACT.address}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <div>
                  <h5>Direct Phone Numbers</h5>
                  <p>
                    <a href={`tel:${COMPANY_CONTACT.phone1Raw}`}>{COMPANY_CONTACT.phone1}</a>
                    <br />
                    <a href={`tel:${COMPANY_CONTACT.phone2Raw}`}>{COMPANY_CONTACT.phone2}</a>
                    <br />
                    <a href={`tel:${COMPANY_CONTACT.phone3}`}>{COMPANY_CONTACT.phone3}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-envelope"></i>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>
                    <a href={`mailto:${COMPANY_CONTACT.email}`}>{COMPANY_CONTACT.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-circle">
                  <i className="fa fa-clock"></i>
                </div>
                <div>
                  <h5>Working Hours</h5>
                  <p>
                    Monday – Saturday: 9:00 AM – 7:30 PM
                    <br />
                    Sunday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="direct-action-buttons">
              <a href={`tel:${COMPANY_CONTACT.phone1Raw}`} className="btn btn-primary btn-sm">
                <i className="fa fa-phone-alt"></i> CALL NOW
              </a>
              <a
                href="https://wa.me/918179517373?text=Hi%20BuildSphere,%20I%20would%20like%20to%20discuss%20my%20construction%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ background: '#25d366', borderColor: '#25d366' }}
              >
                <i className="fab fa-whatsapp"></i> WHATSAPP
              </a>
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="btn btn-secondary btn-sm">
                <i className="fa fa-envelope"></i> EMAIL US
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-navy)' }}>
              Send Project Enquiry
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill out this form and our senior project consultant will call you back within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Google Maps Embed for Ramavarapadu Ring Road Vijayawada */}
        <div className="map-container">
          <iframe
            title="BuildSphere Location Map"
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
