'use client';

import React from 'react';

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
        title="BuildSphere AI Construction Assistant"
        aria-label="Open AI Assistant"
        onClick={onToggleAi}
      >
        <i className="fa fa-robot"></i>
      </button>
      <a
        href="https://wa.me/918179517373?text=Hi%20BuildSphere,%20I%20would%20like%20to%20discuss%20my%20construction%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn btn-whatsapp-float"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};
