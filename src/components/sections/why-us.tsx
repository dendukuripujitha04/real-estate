'use client';

import React from 'react';
import { COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface WhyUsProps {
  onOpenConsultation: (service: string) => void;
}

export const WhyUsSection: React.FC<WhyUsProps> = ({ onOpenConsultation }) => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  return (
    <section className="section-padding why-section" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag light">
            <i className="fa fa-check-circle"></i> {t.whyUs.tag}
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            {t.whyUs.title}
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            {t.whyUs.desc}
          </p>
        </div>

        {/* 6 Value Proposition Cards */}
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-history"></i>
            </div>
            <h4>{isTe ? '20+ సంవత్సరాల అనుభవం' : '20+ Years Practical Experience'}</h4>
            <p>
              {isTe
                ? 'విజయవాడ, కృష్ణా మరియు పరిసర ప్రాంతాలలో 20 సంవత్సరాలకు పైగా సివిల్ మరియు ఇంటీరియర్ పనులను విజయవంతంగా నిర్వహించిన అనుభవం.'
                : 'Over two decades of hands-on civil construction, structural supervision, and turnkey interior craftsmanship in the Vijayawada & Amaravati region.'}
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-hammer"></i>
            </div>
            <h4>{isTe ? 'పునాది నుండి ఫినిషింగ్ వరకు' : 'From Foundation to Finishing'}</h4>
            <p>
              {isTe
                ? 'ఎర్త్‌వర్క్ మరియు ఆర్‌సీసీ పునాదుల నుండి మొదలుకొని టైలింగ్, పెయింటింగ్ మరియు లగ్జరీ ఇంటీరియర్స్ వరకు మొత్తం పనులను ఒకే గొడుగు కింద పూర్తి చేస్తాము.'
                : 'Complete single-window accountability. We manage every phase from site excavation, foundation, and RCC frame to electrical, tiles, modular woodwork, and final paint.'}
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-layer-group"></i>
            </div>
            <h4>{isTe ? 'నాణ్యమైన బ్రాండెడ్ మెటీరియల్స్' : 'Quality Branded Materials'}</h4>
            <p>
              {isTe
                ? 'అల్ట్రాటెక్, టాటా టిస్కాన్, ఏషియన్ పెయింట్స్, కజారియా, హిండ్‌వేర్ వంటి ప్రముఖ బ్రాండ్ల మెటీరియల్స్ వినియోగంతో శాశ్వత మన్నిక.'
                : 'We prioritize tested, industry-leading materials including UltraTech, Tata Tiscon, Asian Paints, Kajaria, and Hindware for maximum structural longevity.'}
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-hand-holding-heart"></i>
            </div>
            <h4>{isTe ? 'ఛాయిస్ ఈజ్ యువర్స్... (Choice Is Yours)' : 'Customer-Focused Planning'}</h4>
            <p>
              {isTe
                ? 'మీ కుటుంబ అభిరుచి, జీవనశైలి మరియు బడ్జెట్‌కు తగినట్లుగా మెటీరియల్స్ మరియు డిజైన్లను ఎంచుకునే పూర్తి వెసులుబాటు.'
                : '“Choice Is Yours...” We listen attentively to your lifestyle needs, aesthetic taste, and budget, providing honest guidance so you make informed decisions.'}
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-compass"></i>
            </div>
            <h4>{isTe ? 'వాస్తు & సహజ గాలి వెలుతురు' : 'Vasthu & Natural Cross-Ventilation'}</h4>
            <p>
              {isTe
                ? 'శాస్త్రీయ వాస్తు నియమాలను పాటిస్తూనే, మోడరన్ ఆర్కిటెక్చరల్ లుక్ మరియు పుష్కలంగా సహజ వెలుతురు, గాలి వచ్చేలా డిజైన్.'
                : 'Scientifically balanced floor plans that respect traditional Vasthu Sastra principles while maximizing natural sunlight and natural air circulation.'}
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <i className="fa fa-comments"></i>
            </div>
            <h4>{isTe ? 'స్పష్టమైన కమ్యూనికేషన్ & పారదర్శకత' : 'Transparent Communication'}</h4>
            <p>
              {isTe
                ? 'పనుల పురోగతిపై ఎప్పటికప్పుడు స్పష్టమైన సమాచారం. దాపరికం లేని కొలతలు, నాణ్యమైన పర్యవేక్షణ మరియు నిర్ణీత సమయపాలన.'
                : 'Clear project scopes, structured milestone milestones, and honest coordination. You stay informed at every stage of execution.'}
            </p>
          </div>
        </div>

        {/* Large Conversion CTA Banner */}
        <div className="cta-banner">
          <h3>
            {isTe
              ? 'మీ కలల ఇంటిని నాణ్యతతో నిర్మించుకోవడానికి సిద్ధంగా ఉన్నారా?'
              : 'READY TO BUILD OR RENOVATE WITH SS GLOBAL?'}
          </h3>
          <p>
            {isTe
              ? 'విజయవాడలో 20+ సంవత్సరాల అనుభవం కలిగిన మా ఇంజనీరింగ్ బృందంతో నేరుగా మాట్లాడండి.'
              : 'Collaborate with our experienced civil engineering and interior specialists to bring your dream space to life with guaranteed stability.'}
          </p>
          <div className="cta-banner-buttons">
            <button
              className="btn btn-primary open-consultation-btn"
              onClick={() => onOpenConsultation('Dream Project Consultation')}
            >
              <i className="fa fa-calendar-check"></i> {t.hero.ctaConsultation}
            </button>
            <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="btn btn-secondary">
              <i className="fa fa-phone-alt"></i> CALL {COMPANY_CONTACT.phone}
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold"
            >
              <i className="fab fa-whatsapp"></i> WHATSAPP CHAT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
