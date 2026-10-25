'use client';

import React, { useState, useEffect } from 'react';
import { submitEnquiryApi } from '@/services/api';
import { ALL_SERVICES, COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface ConsultationFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = 'Complete House Construction',
  onSuccess,
}) => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialService);
  const [location, setLocation] = useState('');
  const [approxArea, setApproxArea] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
      setMessage(`I would like to discuss requirements regarding: ${initialService}`);
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await submitEnquiryApi({
        name,
        phone,
        email,
        projectType,
        location,
        approxArea,
        message,
      });

      if (res.success) {
        setFeedback({
          type: 'success',
          text:
            res.message ||
            (isTe
              ? 'ధన్యవాదాలు! మీ సంప్రదింపు వినతి అందింది. మా SS గ్లోబల్ బృందం త్వరలో కాల్ చేస్తుంది.'
              : 'Thank you! Your consultation request has been received. Our team will contact you soon.'),
        });
        setName('');
        setPhone('');
        setEmail('');
        setLocation('');
        setApproxArea('');
        setMessage('');
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        setFeedback({
          type: 'error',
          text: res.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        text: `Server temporarily unavailable. Please call us directly at ${COMPANY_CONTACT.phone}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="consultation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="consult-name">{isTe ? 'మీ పూర్తి పేరు *' : 'Your Full Name *'}</label>
          <input
            type="text"
            id="consult-name"
            name="name"
            required
            placeholder={isTe ? 'శ్రీ కె. వి. శర్మ' : 'Sri K. V. Sharma'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consult-phone">{isTe ? 'మొబైల్ నంబర్ *' : 'Mobile Number *'}</label>
          <input
            type="tel"
            id="consult-phone"
            name="phone"
            required
            placeholder="+91 94945 02777"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="consult-email">{isTe ? 'ఇమెయిల్ అడ్రస్' : 'Email Address'}</label>
          <input
            type="email"
            id="consult-email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consult-project-type">{isTe ? 'కావలసిన సేవ' : 'Service Type'}</label>
          <select
            id="consult-project-type"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            {ALL_SERVICES.map((s) => (
              <option key={s.id} value={s.titleEn}>
                {isTe ? s.titleTe : s.titleEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="consult-location">{isTe ? 'ప్రాజెక్ట్ లొకేషన్ / ప్రాంతం' : 'Project Location / City'}</label>
          <input
            type="text"
            id="consult-location"
            name="location"
            placeholder={isTe ? 'ఉదా: కరెన్సీ నగర్, రామవరప్పాడు, అమరావతి' : 'e.g. Currency Nagar, Vijayawada, Guntur'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consult-area">{isTe ? 'అంచనా వైశాల్యం (Sq.Ft)' : 'Approximate Built-up Area'}</label>
          <input
            type="text"
            id="consult-area"
            name="approxArea"
            placeholder="e.g. 2,500 sq.ft"
            value={approxArea}
            onChange={(e) => setApproxArea(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="consult-message">{isTe ? 'ప్రాజెక్ట్ అవసరాలు / సందేశం' : 'Project Notes / Queries'}</label>
        <textarea
          id="consult-message"
          name="message"
          rows={3}
          placeholder={isTe ? 'ప్లాట్ కొలతలు, అంతస్తులు లేదా ప్రత్యేక అవసరాలు...' : 'Describe your plot dimensions, budget preferences, or timeline...'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
        {loading ? (
          <>
            <i className="fa fa-spinner fa-spin"></i> Submitting...
          </>
        ) : (
          <>
            <i className="fa fa-paper-plane"></i> {isTe ? 'కన్సల్టేషన్ అభ్యర్థన పంపండి' : 'SUBMIT CONSULTATION REQUEST'}
          </>
        )}
      </button>

      {feedback && (
        <div
          className={`form-feedback ${feedback.type}`}
          style={{ display: 'block', marginTop: '14px' }}
        >
          {feedback.text}
        </div>
      )}
    </form>
  );
};
