'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '@/constants';

interface SplashScreenProps {
  durationMs?: number; // default 3000ms
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  durationMs = 2800,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing SS Global Showcase...');
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Lock scroll during splash screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const intervalTime = 30;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPercent = Math.min(Math.round((elapsed / durationMs) * 100), 100);

      setProgress(currentPercent);

      if (currentPercent < 30) {
        setStatusText('Loading SS Global Architectural Showcase...');
      } else if (currentPercent < 60) {
        setStatusText('Preparing Construction & Interior Engineering...');
      } else if (currentPercent < 90) {
        setStatusText('From Foundation to Finishing • Choice Is Yours...');
      } else {
        setStatusText('Welcome to SS Global Constructions');
      }

      if (elapsed >= durationMs) {
        clearInterval(timer);
        triggerExit();
      }
    }, intervalTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        triggerExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [durationMs]);

  const triggerExit = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDismissed(true);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 500);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`splash-overlay ${isClosing ? 'splash-closing' : ''}`}
      aria-label="SS Global Constructions Loading Screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Skip Button */}
      <button
        type="button"
        className="splash-skip-btn"
        onClick={triggerExit}
        aria-label="Skip splash screen"
      >
        Skip <i className="fa fa-chevron-right" style={{ fontSize: '0.7rem', marginLeft: '4px' }}></i>
      </button>

      {/* Rotating Background Grid & Radial Aura */}
      <div className="splash-bg-grid" />
      <div className="splash-aura" />

      {/* Main Content */}
      <div className="splash-content">
        {/* Emblem with SS Logo */}
        <div className="splash-emblem-wrapper">
          <div className="splash-ring-outer" />
          <div className="splash-ring-inner" />
          <div className="splash-logo-card">
            <img
              src="/logo.png"
              alt="SS Global Constructions and Interior Works Logo"
              className="splash-logo-img"
            />
          </div>
        </div>

        {/* Brand Titles */}
        <h1 className="splash-brand-title">SS GLOBAL</h1>
        <div className="splash-brand-sub">CONSTRUCTIONS AND INTERIOR WORKS</div>
        <p className="splash-motto">&quot;{COMPANY_CONTACT.tagline}&quot;</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '4px', letterSpacing: '1px' }}>
          20+ YEARS EXPERIENCE • VIJAYAWADA
        </p>

        {/* Dynamic Progress Laser Bar */}
        <div className="splash-progress-wrapper">
          <div className="splash-progress-bar-bg">
            <div
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="splash-progress-meta">
            <span className="splash-status-text">
              <span className="splash-status-dot" />
              {statusText}
            </span>
            <span className="splash-percent-num">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
