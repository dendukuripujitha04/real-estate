'use client';

import React, { useState } from 'react';
import { submitEnquiryApi } from '@/services/api';
import { ALL_SERVICES, COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Complete House Construction');
  const [location, setLocation] = useState('');
  const [approxArea, setApproxArea] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
              ? 'ధన్యవాదాలు! మీ వినతి అందింది. మా బృందం త్వరలో సంప్రదిస్తుంది.'
              : 'Thank you! Your enquiry has been received. Our team will contact you soon.'),
        });
        setName('');
        setPhone('');
        setEmail('');
        setLocation('');
        setApproxArea('');
        setMessage('');
        setTimeout(() => setFeedback(null), 8000);
      } else {
        setFeedback({
          type: 'error',
          text:
            res.message ||
            (isTe
              ? 'దయచేసి వివరాలను సరిచూసి మళ్లీ ప్రయత్నించండి.'
              : 'Please check your inputs and try again.'),
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
    <form id="main-contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">{isTe ? 'మీ పూర్తి పేరు *' : 'Full Name *'}</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder={isTe ? 'శ్రీ కె. వి. శర్మ' : 'Sri K. V. Sharma'}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">{isTe ? 'మొబైల్ నంబర్ *' : 'Phone Number *'}</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="+91 94945 02777"
            pattern="[0-9+\s-]{10,15}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-email">{isTe ? 'ఇమెయిల్ అడ్రస్' : 'Email Address'}</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-type">{isTe ? 'కావలసిన సేవ' : 'Service Required'}</label>
          <select
            id="contact-type"
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
          <label htmlFor="contact-location">{isTe ? 'ప్రాజెక్ట్ లొకేషన్ / ప్రాంతం' : 'Project Location'}</label>
          <input
            type="text"
            id="contact-location"
            name="location"
            placeholder={isTe ? 'ఉదా: కరెన్సీ నగర్, రామవరప్పాడు, అమరావతి' : 'e.g. Currency Nagar, Ramavarappadu, Amaravati'}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-area">{isTe ? 'అంచనా వైశాల్యం (Sq.Ft)' : 'Approximate Area (Sq.Ft)'}</label>
          <input
            type="text"
            id="contact-area"
            name="approxArea"
            placeholder="e.g. 2,000 sq.ft"
            value={approxArea}
            onChange={(e) => setApproxArea(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">{isTe ? 'ప్రాజెక్ట్ వివరాలు / సందేశం' : 'Message / Specific Requirements'}</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder={isTe ? 'మీ ప్లాట్ సైజు, ఎన్ని అంతస్తులు కట్టాలనుకుంటున్నారు లేదా ప్రత్యేక అవసరాలు...' : 'Tell us about your plot size, floors planned, or specific interior needs...'}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        id="btn-submit-enquiry"
        disabled={loading}
      >
        {loading ? (
          <>
            <i className="fa fa-spinner fa-spin"></i> Submitting...
          </>
        ) : (
          <>
            <i className="fa fa-paper-plane"></i> {isTe ? 'SS గ్లోబల్‌కు ఎంక్వైరీ పంపండి' : 'SUBMIT ENQUIRY TO SS GLOBAL'}
          </>
        )}
      </button>

      {feedback && (
        <div
          className={`form-feedback ${feedback.type}`}
          id="contact-form-feedback"
          style={{ display: 'block', marginTop: '14px' }}
        >
          {feedback.text}
        </div>
      )}
    </form>
  );
};
