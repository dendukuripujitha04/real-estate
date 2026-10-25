'use client';

import React, { useState } from 'react';
import { GalleryItem } from '@/types';
import { useLanguage } from '@/context/language-context';
import { COMPANY_CONTACT } from '@/constants';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
  onOpenLightbox: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  galleryItems,
  onOpenLightbox,
}) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filterTabs = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'posters', label: t.gallery.filterPosters },
    { key: 'residential', label: t.gallery.filterResidential },
    { key: 'commercial', label: t.gallery.filterCommercial },
    { key: 'renovation', label: t.gallery.filterRenovation },
    { key: 'interiors', label: t.gallery.filterInteriors },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <i className="fa fa-images"></i> {t.gallery.tag}
          </div>
          <h2 className="section-title">{t.gallery.title}</h2>
          <p className="section-desc">{t.gallery.desc}</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="services-filter-bar gallery-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              className={`filter-tab-btn ${activeCategory === tab.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {tab.key === 'posters' && <i className="fa fa-certificate" style={{ color: 'var(--accent-gold)' }}></i>}
              {tab.key === 'residential' && <i className="fa fa-home"></i>}
              {tab.key === 'commercial' && <i className="fa fa-building"></i>}
              {tab.key === 'renovation' && <i className="fa fa-tools"></i>}
              {tab.key === 'interiors' && <i className="fa fa-couch"></i>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" id="gallery-grid">
          {filteredItems.map((item) => {
            const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
            const title = isTe && item.titleTe ? item.titleTe : item.title;
            const isOfficialPoster = item.category === 'posters';

            return (
              <div
                key={item.id}
                className={`gallery-card-item ${isOfficialPoster ? 'is-official-poster' : ''}`}
                onClick={() => onOpenLightbox(originalIndex >= 0 ? originalIndex : 0)}
              >
                {/* Image Wrap */}
                <div className="gallery-thumb-wrap">
                  <img
                    src={item.image}
                    alt={title}
                    loading="lazy"
                    className="gallery-thumb-img"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <span className={`gallery-badge ${isOfficialPoster ? 'gold-badge' : ''}`}>
                      {isOfficialPoster && <i className="fa fa-shield-alt"></i>}
                      {item.badge}
                    </span>
                  )}

                  {/* Hover Overlay */}
                  <div className="gallery-hover-overlay">
                    <div className="gallery-zoom-circle">
                      <i className="fa fa-search-plus"></i>
                    </div>
                    <span className="gallery-zoom-text">{t.gallery.clickToEnlarge}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="gallery-card-content">
                  <h4 className="gallery-card-title">{title}</h4>
                  <p className="gallery-card-caption">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conversion Callout Under Gallery */}
        <div className="gallery-cta-banner">
          <div className="cta-left">
            <div className="cta-icon">
              <i className="fa fa-phone-volume"></i>
            </div>
            <div>
              <h4>{isTe ? 'మా ప్రాజెక్ట్‌లు & సేవల గురించి మరింత తెలుసుకోవాలనుకుంటున్నారా?' : 'Want to Discuss Your Project with SS Global?'}</h4>
              <p>{isTe ? 'విజయవాడలో 20+ సంవత్సరాల అనుభవంతో నాణ్యమైన నిర్మాణం & ఇంటీరియర్ వర్క్స్.' : '20+ Years of Construction & Interior Excellence in Vijayawada & Amaravati.'}</p>
            </div>
          </div>
          <div className="cta-actions">
            <a
              href={`tel:${COMPANY_CONTACT.phoneRaw}`}
              className="btn btn-primary btn-sm"
            >
              <i className="fa fa-phone-alt"></i> {COMPANY_CONTACT.phoneFormatted}
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <i className="fab fa-whatsapp"></i> {isTe ? 'వాట్సాప్ మెసేజ్' : 'WHATSAPP'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
