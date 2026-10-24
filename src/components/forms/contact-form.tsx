'use client';

import React, { useState } from 'react';
import { submitEnquiryApi } from '@/services/api';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Residential Construction');
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
          text: res.message || 'Thank you! Your enquiry has been received. Our team will contact you soon.',
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
          text: res.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        text: 'Server temporarily unavailable. Please call us directly at +91 81795 17373.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="main-contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Full Name *</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="Sri K. V. Sharma"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">Phone Number *</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="+91 98765 43210"
            pattern="[0-9+\s-]{10,15}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-email">Email Address</label>
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
          <label htmlFor="contact-type">Project Type</label>
          <select
            id="contact-type"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="Residential Construction">Residential Construction</option>
            <option value="Commercial Construction">Commercial Construction</option>
            <option value="Architectural Design">Architectural Design</option>
            <option value="Structural Design">Structural Design</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Building Renovation">Building Renovation</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-location">Project Location</label>
          <input
            type="text"
            id="contact-location"
            name="location"
            placeholder="e.g. Vijayawada, Poranki, Tadepalli"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-area">Approximate Area (Sq.Ft)</label>
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
        <label htmlFor="contact-message">Message / Specific Requirements</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us about your plot size, floors planned, or timeline..."
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
            <i className="fa fa-paper-plane"></i> SEND ENQUIRY
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
