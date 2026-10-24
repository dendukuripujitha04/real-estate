'use client';

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/constants';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
        <a
          href="#home"
          className="brand-logo"
          id="nav-brand-logo"
          onClick={(e) => handleNavLinkClick(e, '#home')}
        >
          <div className="brand-icon">
            <i className="fa fa-cubes"></i>
          </div>
          <div className="brand-text">
            <span className="brand-title">BUILDSPHERE</span>
            <span className="brand-subtitle">Infra &amp; Engineering Works</span>
          </div>
        </a>

        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="nav-links">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={link.id}
                    className={isActive ? 'active' : ''}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="btn btn-primary nav-cta open-consultation-btn"
            id="nav-cta-btn"
            onClick={() => onOpenConsultation('General Consultation')}
          >
            <i className="fa fa-calendar-check"></i> GET FREE CONSULTATION
          </button>
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
