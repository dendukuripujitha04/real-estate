'use client';

import React, { useState } from 'react';
import { ALL_SERVICES, ServiceDetail, COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface ServicesProps {
  onOpenConsultation: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const filteredServices = ALL_SERVICES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <i className="fa fa-tools"></i> {t.services.tag}
          </div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-desc">{t.services.desc}</p>
        </div>

        {/* Category Filter Pills */}
        <div className="services-filter-tabs">
          <button
            className={`filter-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.services.tabAll}
          </button>
          <button
            className={`filter-tab-btn ${activeCategory === 'construction' ? 'active' : ''}`}
            onClick={() => setActiveCategory('construction')}
          >
            <i className="fa fa-building"></i> {t.services.tabConstruction}
          </button>
          <button
            className={`filter-tab-btn ${activeCategory === 'interiors' ? 'active' : ''}`}
            onClick={() => setActiveCategory('interiors')}
          >
            <i className="fa fa-couch"></i> {t.services.tabInteriors}
          </button>
          <button
            className={`filter-tab-btn ${activeCategory === 'renovation' ? 'active' : ''}`}
            onClick={() => setActiveCategory('renovation')}
          >
            <i className="fa fa-paint-roller"></i> {t.services.tabRenovation}
          </button>
          <button
            className={`filter-tab-btn ${activeCategory === 'specialized' ? 'active' : ''}`}
            onClick={() => setActiveCategory('specialized')}
          >
            <i className="fa fa-water"></i> {t.services.tabSpecialized}
          </button>
        </div>

        {/* Services Grid (All 15 Services) */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            const title = isTe ? service.titleTe : service.titleEn;
            const shortDesc = isTe ? service.shortDescTe : service.shortDescEn;
            const fullDesc = isTe ? service.fullDescTe : service.fullDescEn;
            const workList = isTe ? service.workIncludedTe : service.workIncludedEn;
            const benefitsList = isTe ? service.benefitsTe : service.benefitsEn;

            return (
              <div
                key={service.id}
                className={`service-card ${isExpanded ? 'is-expanded' : ''}`}
                id={`service-${service.id}`}
              >
                {/* Service Image with Category Badge */}
                <div className="service-img-box">
                  <img src={service.image} alt={title} loading="lazy" />
                  <span className="service-badge-pill">
                    {service.category === 'construction'
                      ? 'Civil Construction'
                      : service.category === 'interiors'
                      ? 'Interior Work'
                      : service.category === 'renovation'
                      ? 'Renovation'
                      : 'Specialized Work'}
                  </span>
                </div>

                {/* Service Card Content */}
                <div className="service-content">
                  <h3 className="service-title">{title}</h3>
                  <p className="service-short-desc">{shortDesc}</p>

                  {/* Expandable Deep Content */}
                  {isExpanded && (
                    <div className="service-expanded-body">
                      <p className="service-full-desc">{fullDesc}</p>

                      <div className="service-detail-section">
                        <h4 className="detail-heading">
                          <i className="fa fa-check-circle" style={{ color: 'var(--accent-gold)' }}></i>{' '}
                          {t.services.includedHeading}
                        </h4>
                        <ul className="service-checklist">
                          {workList.map((item, idx) => (
                            <li key={idx}>
                              <i className="fa fa-arrow-right"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="service-detail-section">
                        <h4 className="detail-heading">
                          <i className="fa fa-star" style={{ color: 'var(--accent-gold)' }}></i>{' '}
                          {t.services.benefitsHeading}
                        </h4>
                        <ul className="service-checklist benefits">
                          {benefitsList.map((item, idx) => (
                            <li key={idx}>
                              <i className="fa fa-shield-alt"></i>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Card Actions */}
                  <div className="service-card-actions">
                    <button
                      className="btn btn-outline-gold btn-sm toggle-details-btn"
                      onClick={() => toggleExpand(service.id)}
                    >
                      {isExpanded ? (
                        <>
                          <i className="fa fa-chevron-up"></i> {isTe ? 'వివరాలు తగ్గించండి' : 'Show Less'}
                        </>
                      ) : (
                        <>
                          <i className="fa fa-chevron-down"></i> {isTe ? 'పూర్తి వివరాలు చూడండి' : 'View Full Details'}
                        </>
                      )}
                    </button>

                    <button
                      className="btn btn-primary btn-sm service-enquire-btn"
                      onClick={() => onOpenConsultation(service.titleEn)}
                    >
                      <i className="fa fa-envelope"></i> {t.services.enquireBtn}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="services-bottom-callout">
          <div className="services-callout-text">
            <h4>
              <i className="fa fa-hand-holding-heart" style={{ color: 'var(--accent-gold)' }}></i>{' '}
              {COMPANY_CONTACT.slogan2} ({COMPANY_CONTACT.slogan2Te})
            </h4>
            <p>
              {isTe
                ? 'మీరు సివిల్ నిర్మాణం లేదా కేవలం ఇంటీరియర్ లేదా పాత ఇంటి రినోవేషన్ ఏదైనా ఎంచుకోవచ్చు. మీ అవసరాలకు తగినట్లుగా పనులను ప్లాన్ చేస్తాము.'
                : 'Need custom modifications or combining construction with bespoke interiors? We tailor the scope precisely to your vision and budget.'}
            </p>
          </div>
          <div className="services-callout-actions">
            <button
              className="btn btn-primary"
              onClick={() => onOpenConsultation('Custom Scope Consultation')}
            >
              <i className="fa fa-calendar-check"></i> {t.hero.ctaConsultation}
            </button>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappRaw}?text=Hi%20SS%20Global%2C%20I%20want%20to%20discuss%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
