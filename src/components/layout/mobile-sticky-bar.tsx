import React from 'react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="mobile-sticky-bar">
      <a href="tel:+918179517373" className="mobile-call-btn">
        <i className="fa fa-phone-alt"></i> CALL NOW
      </a>
      <a
        href="https://wa.me/918179517373?text=Hi%20BuildSphere,%20I%20would%20like%20to%20discuss%20my%20construction%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-wa-btn"
      >
        <i className="fab fa-whatsapp"></i> WHATSAPP
      </a>
    </div>
  );
};
