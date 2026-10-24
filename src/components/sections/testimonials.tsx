'use client';

import React, { useState, useEffect } from 'react';
import { TestimonialItem } from '@/types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex] || testimonials[0];

  return (
    <section className="section-padding testimonials-section" id="testimonials">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-comment-dots"></i> CLIENT FEEDBACK
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">
            Honest feedback from homeowners and commercial partners who trusted BuildSphere Infra &amp; Engineering.
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          {current && (
            <div className="testimonial-card" style={{ display: 'block' }}>
              <div className="stars-row">
                {Array.from({ length: current.rating || 5 }).map((_, i) => (
                  <i key={i} className="fa fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">&quot;{current.text}&quot;</p>
              <div className="testimonial-author-name">{current.name}</div>
              <div className="testimonial-author-meta">
                {current.role} • {current.location}
              </div>
            </div>
          )}

          <div className="carousel-controls">
            <button
              className="carousel-btn"
              id="prev-testimonial"
              aria-label="Previous testimonial"
              onClick={handlePrev}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              className="carousel-btn"
              id="next-testimonial"
              aria-label="Next testimonial"
              onClick={handleNext}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
