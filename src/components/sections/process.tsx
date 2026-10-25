'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';

export const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-stream"></i> {isTe ? 'నిర్మాణ ప్రక్రియ' : 'OUR WORKFLOW'}
          </div>
          <h2 className="section-title">
            {isTe
              ? 'పునాది నుండి ఫినిషింగ్ వరకు — 6 దశల నిర్మాణ ప్రయాణం'
              : 'From Foundation to Finishing: Our 6-Step Journey'}
          </h2>
          <p className="section-desc">
            {isTe
              ? 'ప్రారంభ ఆలోచన నుండి గృహప్రవేశం వరకు స్పష్టమైన, పారదర్శకమైన ప్రణాళికతో పనులను నిర్వహిస్తాము.'
              : 'A structured, transparent framework ensuring disciplined execution, branded materials, and on-time completion.'}
          </p>
        </div>

        <div className="process-timeline">
          {/* Step 1 */}
          <div className="process-step-card">
            <div className="step-num-badge">01</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '1. అవసరాల పరిశీలన (Choice Is Yours)' : '1. Consultation & Requirement Study'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'మీ కుటుంబ అవసరాలు, ప్లాట్ సైజు, బడ్జెట్ మరియు వాస్తు ఆకాంక్షలను సమగ్రంగా పరిశీలిస్తాము.'
                  : 'We listen to your lifestyle needs, plot dimensions, budget preferences, and Vasthu expectations.'}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step-card">
            <div className="step-num-badge">02</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '2. వాస్తు & ఆర్కిటెక్చరల్ ప్లానింగ్' : '2. Architectural & Vasthu Planning'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'సహజ వెలుతురు, గాలి ప్రసరణ మరియు వాస్తు సూత్రాలకు అనుగుణంగా 2D లేఅవుట్ & 3D ఎలివేషన్ రూపకల్పన.'
                  : 'Design functional 2D floor layouts and photorealistic 3D elevations aligned with natural ventilation and Vasthu.'}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step-card">
            <div className="step-num-badge">03</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '3. మెటీరియల్స్ & పనుల ఒప్పందం' : '3. Material Specifications & Work Scope'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'సిమెంట్, స్టీల్, టైల్స్, శానిటరీవేర్ మరియు ప్లైవుడ్ బ్రాండ్లను నిర్ణయించుకుని స్పష్టమైన పనుల షెడ్యూల్ ఖరారు.'
                  : 'Finalize brand selections (UltraTech, Tata Tiscon, Asian Paints, Kajaria, Hindware) and milestone timelines.'}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-step-card">
            <div className="step-num-badge">04</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '4. పటిష్టమైన సివిల్ నిర్మాణం' : '4. Foundation & Civil Execution'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'ఎర్త్‌వర్క్, పటిష్టమైన ఆర్‌సీసీ ఫుటింగ్, పిల్లర్లు, స్లాబ్ మరియు ఇటుకల గోడల నిర్మాణం నిపుణుల పర్యవేక్షణలో పూర్తి.'
                  : 'Excavation, deep footings, engineered RCC framing, roof slabs, and masonry with rigorous curing supervision.'}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="process-step-card">
            <div className="step-num-badge">05</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '5. ఫినిషింగ్ & ఇంటీరియర్ పనులు' : '5. Finishing & Interior Craftsmanship'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'వాటర్‌ప్రూఫింగ్, ప్లంబింగ్, వైరింగ్, టైలింగ్, మాడ్యులర్ కార్పెంట్రీ, ఫాల్స్ సీలింగ్ మరియు రాయల్ పెయింటింగ్ పనులు.'
                  : 'Waterproofing, concealed plumbing, tile laying, bespoke modular woodwork, false ceilings, and premium painting.'}
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="process-step-card">
            <div className="step-num-badge">06</div>
            <div className="step-content-card">
              <h4 className="step-title">
                {isTe ? '6. తుది పరిశీలన & హ్యాండోవర్' : '6. Quality Walkthrough & Handover'}
              </h4>
              <p className="step-desc">
                {isTe
                  ? 'ప్రతి ఫిట్టింగ్, ఫినిషింగ్‌ను పరిశీలించి, క్లీనింగ్ చేసి ఆనందంగా మీ ఇంటి తాళాలు మీకు అప్పగిస్తాము.'
                  : 'Detailed joint inspection, deep cleaning, client walkthrough, and smooth formal handover for a joyous move-in.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
