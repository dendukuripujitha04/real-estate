import React from 'react';
import { COMPANY_CONTACT } from '@/constants';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="mobile-sticky-bar">
      <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="mobile-call-btn">
        <i className="fa fa-phone-alt"></i> CALL {COMPANY_CONTACT.phone}
      </a>
      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-wa-btn"
      >
        <i className="fab fa-whatsapp"></i> WHATSAPP
      </a>
      <a href="#contact" className="mobile-enquire-btn">
        <i className="fa fa-clipboard-list"></i> ENQUIRE
      </a>
    </div>
  );
};
