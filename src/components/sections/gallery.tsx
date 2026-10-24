'use client';

import React from 'react';
import { GalleryItem } from '@/types';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  onOpenLightbox,
}) => {
  return (
    <section className="section-padding gallery-section" id="gallery">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-images"></i> VISUAL GALLERY
          </div>
          <h2 className="section-title">Construction &amp; Architectural Showcase</h2>
          <p className="section-desc">
            Click any image to view high-resolution details in full-screen view.
          </p>
        </div>

        <div className="gallery-grid" id="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id || idx}
              className="gallery-item"
              data-src={item.image}
              data-caption={item.caption}
              onClick={() => onOpenLightbox(idx)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h5>{item.title}</h5>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
