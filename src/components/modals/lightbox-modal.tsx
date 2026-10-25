'use client';

import React, { useEffect } from 'react';
import { GalleryItem } from '@/types';
import { COMPANY_CONTACT } from '@/constants';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || currentIndex === null) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=${encodeURIComponent(
    `Hello SS Global Constructions, I am viewing "${currentItem.title}" in your visual gallery and would like to get more information.`
  )}`;

  return (
    <div
      className="lightbox-modal open"
      id="lightbox-modal"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close */}
      <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-counter">
          <span className="counter-current">0{currentIndex + 1}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">0{items.length}</span>
          {currentItem.badge && (
            <span className="lightbox-badge-pill">{currentItem.badge}</span>
          )}
        </div>

        <button
          className="lightbox-close-btn"
          id="lightbox-close"
          aria-label="Close lightbox"
          onClick={onClose}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>

      {/* Prev Button */}
      <button
        className="lightbox-nav-btn prev"
        id="lightbox-prev"
        aria-label="Previous image"
        onClick={handlePrev}
      >
        <i className="fa fa-chevron-left"></i>
      </button>

      {/* Main Image View */}
      <div className="lightbox-img-wrapper" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentItem.image}
          id="lightbox-img"
          alt={currentItem.title || 'Enlarged Project View'}
        />
      </div>

      {/* Next Button */}
      <button
        className="lightbox-nav-btn next"
        id="lightbox-next"
        aria-label="Next image"
        onClick={handleNext}
      >
        <i className="fa fa-chevron-right"></i>
      </button>

      {/* Bottom Information & CTA Drawer */}
      <div className="lightbox-caption" id="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-caption-text">
          <h4 className="lightbox-title">{currentItem.title}</h4>
          {currentItem.titleTe && (
            <p className="lightbox-title-te">{currentItem.titleTe}</p>
          )}
          <p className="lightbox-desc">{currentItem.caption}</p>
        </div>

        <div className="lightbox-caption-actions">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <i className="fab fa-whatsapp"></i> ENQUIRE ON WHATSAPP
          </a>
          <a
            href={`tel:${COMPANY_CONTACT.phoneRaw}`}
            className="btn btn-primary btn-sm"
          >
            <i className="fa fa-phone-alt"></i> CALL 9494502777
          </a>
        </div>
      </div>
    </div>
  );
};
