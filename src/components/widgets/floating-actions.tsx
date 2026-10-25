'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';

interface FloatingActionsProps {
  onToggleAi: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onToggleAi }) => {
  return (
    <div className="floating-actions-container">
      <button
        type="button"
        className="floating-btn btn-ai-float"
        id="ai-assistant-toggle"
        title="SS Global AI Assistant"
        aria-label="Open AI Assistant"
        onClick={onToggleAi}
      >
        <i className="fa fa-robot"></i>
      </button>
      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp-float"
        title="Chat with SS Global on WhatsApp (9494502777)"
        aria-label="WhatsApp Chat"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};
