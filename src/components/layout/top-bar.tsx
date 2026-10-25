'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

export const TopBar: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-left">
          <span className="top-item">
            <i className="fa fa-phone-alt"></i>
            <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} style={{ fontWeight: 700 }}>
              {COMPANY_CONTACT.phone}
            </a>
          </span>
          <span className="top-item">
            <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
            <a href={COMPANY_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp: {COMPANY_CONTACT.phone}
            </a>
          </span>
          <span className="top-item hide-on-mobile">
            <i className="fa fa-map-marker-alt"></i>
            <span>Currency Nagar Road, Near Ramavarappadu Ring, Vijayawada</span>
          </span>
        </div>
        <div className="top-bar-right">
          <span className="top-item">
            <i className="fa fa-globe"></i>
            <a href={COMPANY_CONTACT.websiteUrl} target="_blank" rel="noopener noreferrer">
              {COMPANY_CONTACT.website}
            </a>
          </span>
          <span className="top-item">
            <i className="fa fa-award" style={{ color: 'var(--accent-gold)' }}></i>
            <span>{isTe ? '20+ ఏళ్ల అనుభవం • పునాది నుండి ఫినిషింగ్ వరకు' : '20+ Yrs Experience • Foundation to Finishing'}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
