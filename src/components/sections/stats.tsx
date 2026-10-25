'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';

export const StatsSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">
              {isTe ? 'సంవత్సరాల అనుభవం' : 'YEARS EXPERIENCE'}
            </div>
            <div className="stat-subtext">
              {isTe ? 'విజయవాడ & పరిసర ప్రాంతాలలో' : 'Practical Knowledge & Stability'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">
              {isTe ? 'పునాది నుండి ఫినిషింగ్ వరకు' : 'FOUNDATION TO FINISHING'}
            </div>
            <div className="stat-subtext">
              {isTe ? 'సివిల్, టైలింగ్ & ఇంటీరియర్ పూర్తి బాధ్యత' : 'End-to-End Single Window Control'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">
              {isTe ? 'ప్రత్యేక నిర్మాణాలు & సేవలు' : 'SPECIALIZED SERVICES'}
            </div>
            <div className="stat-subtext">
              {isTe ? 'ఇళ్లు, విల్లాలు, కిచెన్ & రినోవేషన్స్' : 'Villas, Interiors, Remodeling & Civil'}
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">
              {isTe ? 'వాస్తు అనుకూల ప్రణాళిక' : 'VASTHU COMPLIANT DESIGNS'}
            </div>
            <div className="stat-subtext">
              {isTe ? 'సహజ వెలుతురు & గాలి ప్రసరణ' : 'Harmonious Spaces & Airflow'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
