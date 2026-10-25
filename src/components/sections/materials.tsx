'use client';

import React from 'react';
import { TRUSTED_BRANDS } from '@/constants';
import { useLanguage } from '@/context/language-context';

export const MaterialsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  return (
    <section className="section-padding materials-section" id="materials">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-tag light">
            <i className="fa fa-cubes"></i> {t.materials.tag}
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            {t.materials.title}
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            {t.materials.desc}
          </p>
        </div>

        {/* Educational Brand Cards Grid */}
        <div className="materials-grid">
          {TRUSTED_BRANDS.map((brand) => {
            const role = isTe ? brand.roleTe : brand.role;
            const category = isTe ? brand.categoryTe : brand.category;
            const note = isTe ? brand.educationalNoteTe : brand.educationalNoteEn;

            return (
              <div key={brand.id} className="material-card">
                <div className="material-card-header">
                  <div className="brand-logo-badge" style={{ borderColor: brand.color }}>
                    <span style={{ color: brand.color }}>{brand.logoText}</span>
                  </div>
                  <span className="material-category-pill">{category}</span>
                </div>

                <h3 className="material-brand-name">{brand.name}</h3>
                <h4 className="material-role">{role}</h4>

                <div className="material-divider"></div>

                <p className="material-note">{note}</p>

                <div className="material-card-footer">
                  <i className="fa fa-shield-alt" style={{ color: brand.color }}></i>
                  <span>Quality Assurance Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Impact Bar */}
        <div className="material-education-bar">
          <div className="edu-col">
            <div className="edu-icon">
              <i className="fa fa-layer-group"></i>
            </div>
            <div>
              <h4>Structural Durability</h4>
              <p>Certified steel &amp; cement prevent internal micro-cracks and withstand high soil moisture.</p>
            </div>
          </div>

          <div className="edu-col">
            <div className="edu-icon">
              <i className="fa fa-tint-slash"></i>
            </div>
            <div>
              <h4>Weather Protection</h4>
              <p>Advanced elastomeric coatings and high-grade sealants prevent dampness across coastal seasons.</p>
            </div>
          </div>

          <div className="edu-col">
            <div className="edu-icon">
              <i className="fa fa-gem"></i>
            </div>
            <div>
              <h4>Long-Term Value</h4>
              <p>Vitrified tiles and brass sanitaryware retain beauty with minimal maintenance expenses for decades.</p>
            </div>
          </div>
        </div>

        {/* Legal & Technical Transparency Disclaimer */}
        <p className="materials-disclaimer">
          <i className="fa fa-info-circle"></i> {t.materials.disclaimer}
        </p>
      </div>
    </section>
  );
};
