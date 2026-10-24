'use client';

import React, { useState, useEffect } from 'react';
import { submitEnquiryApi } from '@/services/api';

interface ConsultationFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = 'Residential Construction',
  onSuccess,
}) => {
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
          text: res.message || 'Thank you! Your consultation request has been received. Our team will contact you soon.',
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
        text: 'Server temporarily unavailable. Please call us directly at +91 81795 17373.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="consultation-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="consult-name">Your Full Name *</label>
          <input
            type="text"
            id="consult-name"
            name="name"
            required
            placeholder="Sri K. V. Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consult-phone">Mobile Number *</label>
          <input
            type="tel"
            id="consult-phone"
            name="phone"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="consult-email">Email Address</label>
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
          <label htmlFor="consult-project-type">Project Type</label>
          <select
            id="consult-project-type"
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
          <label htmlFor="consult-location">Project Location / City</label>
          <input
            type="text"
            id="consult-location"
            name="location"
            placeholder="e.g. Vijayawada, Guntur"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="consult-area">Approximate Built-up Area</label>
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
        <label htmlFor="consult-message">Project Notes / Queries</label>
        <textarea
          id="consult-message"
          name="message"
          rows={3}
          placeholder="Describe your plot dimensions, budget preferences, or timeline..."
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
            <i className="fa fa-paper-plane"></i> SUBMIT CONSULTATION REQUEST
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
