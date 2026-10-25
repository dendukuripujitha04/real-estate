import React from 'react';
import { COMPANY_CONTACT } from '@/constants';

interface MobileStickyBarProps {
  onOpenConsultation?: (service?: string) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <nav className="mobile-sticky-bar" id="mobile-sticky-bar" aria-label="Mobile quick action bar">
      <a
        href={`tel:${COMPANY_CONTACT.phoneRaw}`}
        className="mobile-call-btn"
        id="mobile-sticky-call"
        aria-label="Call SS Global"
      >
        <i className="fa fa-phone-alt"></i> CALL
      </a>
      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-wa-btn"
        id="mobile-sticky-wa"
        aria-label="Chat with SS Global on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i> WHATSAPP
      </a>
      {onOpenConsultation ? (
        <button
          type="button"
          onClick={() => onOpenConsultation('Quick Sticky Bar Enquiry')}
          className="mobile-enquire-btn"
          id="mobile-sticky-enquire"
          aria-label="Open project enquiry modal"
        >
          <i className="fa fa-clipboard-list"></i> ENQUIRE
        </button>
      ) : (
        <a
          href="#contact"
          className="mobile-enquire-btn"
          id="mobile-sticky-enquire"
          aria-label="Scroll to contact form"
        >
          <i className="fa fa-clipboard-list"></i> ENQUIRE
        </a>
      )}
    </nav>
  );
};
