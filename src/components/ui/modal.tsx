'use client';

import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  maxWidth?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  maxWidth,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay open`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-content"
        style={maxWidth ? { maxWidth } : undefined}
      >
        <div className="modal-header">
          {typeof title === 'string' ? <h3>{title}</h3> : title}
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
