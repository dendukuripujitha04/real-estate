'use client';

import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  durationMs?: number; // default 4000ms
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  durationMs = 4000,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Engineering Engine...');
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Lock scroll during splash screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const intervalTime = 30; // ~33fps smooth progress

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPercent = Math.min(Math.round((elapsed / durationMs) * 100), 100);

      setProgress(currentPercent);

      if (currentPercent < 25) {
        setStatusText('Initializing Engineering Engine...');
      } else if (currentPercent < 55) {
        setStatusText('Loading Architectural Blueprints & Models...');
      } else if (currentPercent < 85) {
        setStatusText('Calibrating Structural Integrity & Standards...');
      } else if (currentPercent < 100) {
        setStatusText('Preparing Experience...');
      } else {
        setStatusText('Welcome to BuildSphere');
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
    }, 600); // 600ms matches exit CSS transition
  };

  if (isDismissed) return null;

  return (
    <div
      className={`splash-overlay ${isClosing ? 'splash-closing' : ''}`}
      aria-label="BuildSphere Loading Screen"
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
        {/* Emblem with Logo and Concentric Compass Rings */}
        <div className="splash-emblem-wrapper">
          <div className="splash-ring-outer" />
          <div className="splash-ring-inner" />
          <div className="splash-logo-card">
            <img
              src="/images/logo.png"
              alt="BuildSphere SS Engineering Logo"
              className="splash-logo-img"
            />
          </div>
        </div>

        {/* Brand Titles */}
        <h1 className="splash-brand-title">BuildSphere</h1>
        <div className="splash-brand-sub">Infra &amp; Engineering Works</div>
        <p className="splash-motto">&quot;Listen Better • Plan Better • Build Better&quot;</p>

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
