'use client';

import React, { useState, useEffect } from 'react';
import { NAV_LINKS, COMPANY_CONTACT } from '@/constants';
import { useLanguage } from '@/context/language-context';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Highlight
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id') || '';

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="main-navbar">
      <div className="container nav-container">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="brand-logo"
          id="nav-brand-logo"
          onClick={(e) => handleNavLinkClick(e, '#home')}
        >
          <div className="brand-logo-img-box">
            <img
              src="/logo.png"
              alt="SS Global Constructions and Interior Works Logo"
              className="brand-logo-img"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">SS GLOBAL</span>
            <span className="brand-subtitle">Constructions &amp; Interior Works</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="nav-links">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const label =
                (t.nav as Record<string, string>)[link.labelKey] || link.labelKey;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={link.id}
                    className={isActive ? 'active' : ''}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}

            {/* Mobile-Only Language Switcher & Call Button */}
            <li className="mobile-menu-actions">
              <button
                className="btn btn-outline-gold btn-block btn-sm"
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="fa fa-language"></i> {language === 'en' ? 'తెలుగులోకి మారండి' : 'Switch to English'}
              </button>
              <a
                href={`tel:${COMPANY_CONTACT.phoneRaw}`}
                className="btn btn-primary btn-block btn-sm"
                style={{ marginTop: '8px' }}
              >
                <i className="fa fa-phone-alt"></i> CALL {COMPANY_CONTACT.phone}
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Buttons: Language Switcher, Consultation CTA, Mobile Menu Toggle */}
        <div className="nav-actions">
          {/* Language Switcher Button */}
          <button
            className="lang-toggle-btn"
            id="lang-toggle-btn"
            onClick={toggleLanguage}
            title={language === 'en' ? 'తెలుగులోకి మార్చండి' : 'Switch to English'}
            aria-label="Language Switcher"
          >
            <i className="fa fa-language"></i>
            <span className="lang-text">{language === 'en' ? 'తెలుగు' : 'English'}</span>
          </button>

          {/* Direct Call Button */}
          <a
            href={`tel:${COMPANY_CONTACT.phoneRaw}`}
            className="btn btn-outline-gold nav-phone-btn hide-on-mobile"
            id="nav-phone-btn"
            title="Call SS Global Directly"
          >
            <i className="fa fa-phone-alt"></i> {COMPANY_CONTACT.phone}
          </a>

          {/* Free Consultation CTA */}
          <button
            className="btn btn-primary nav-cta open-consultation-btn"
            id="nav-cta-btn"
            onClick={() => onOpenConsultation('General Consultation')}
          >
            <i className="fa fa-calendar-check"></i> {t.hero.ctaConsultation}
          </button>

          {/* Hamburger Mobile Toggle */}
          <button
            className="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};
