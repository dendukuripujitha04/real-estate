'use client';

import React, { useEffect } from 'react';
import { GalleryItem } from '@/types';

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

  return (
    <div
      className="lightbox-modal open"
      id="lightbox-modal"
      onClick={onClose}
    >
      <button
        className="lightbox-close-btn"
        id="lightbox-close"
        aria-label="Close lightbox"
        onClick={onClose}
      >
        <i className="fa fa-times"></i>
      </button>

      <button
        className="lightbox-nav-btn prev"
        id="lightbox-prev"
        aria-label="Previous image"
        onClick={handlePrev}
      >
        <i className="fa fa-chevron-left"></i>
      </button>

      <div className="lightbox-img-wrapper" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentItem.image}
          id="lightbox-img"
          alt={currentItem.title || 'Enlarged Project View'}
        />
      </div>

      <button
        className="lightbox-nav-btn next"
        id="lightbox-next"
        aria-label="Next image"
        onClick={handleNext}
      >
        <i className="fa fa-chevron-right"></i>
      </button>

      <div className="lightbox-caption" id="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        {currentItem.caption || currentItem.title}
      </div>
    </div>
  );
};
