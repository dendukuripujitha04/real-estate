'use client';

import React, { useState } from 'react';
import { FAQS, COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isTe = language === 'te';

  // First 2 items open by default
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-4']);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <i className="fa fa-question-circle"></i> {t.faq.tag}
          </div>
          <h2 className="section-title">{t.faq.title}</h2>
          <p className="section-desc">{t.faq.desc}</p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-container">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIds.includes(faq.id);
            const question = isTe ? faq.questionTe : faq.questionEn;
            const answer = isTe ? faq.answerTe : faq.answerEn;

            return (
              <div
                key={faq.id}
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                id={`faq-item-${index + 1}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-number">0{index + 1}</span>
                  <span className="faq-q-title">{question}</span>
                  <span className="faq-toggle-icon">
                    <i className={`fa ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="faq-help-card">
          <div className="faq-help-left">
            <div className="faq-help-icon">
              <i className="fa fa-headset"></i>
            </div>
            <div>
              <h4>{isTe ? 'ఇంకా ఏమైనా సందేహాలు ఉన్నాయా?' : 'Have More Specific Questions?'}</h4>
              <p>
                {isTe
                  ? 'మా నిపుణులను నేరుగా 9494502777 లో సంప్రదించండి లేదా వాట్సాప్‌లో సందేశం పంపండి.'
                  : 'Call our engineering desk directly at 9494502777 or send us a WhatsApp message.'}
              </p>
            </div>
          </div>
          <div className="faq-help-actions">
            <a href={`tel:${COMPANY_CONTACT.phoneRaw}`} className="btn btn-primary btn-sm">
              <i className="fa fa-phone-alt"></i> Call {COMPANY_CONTACT.phone}
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-gold btn-sm"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
