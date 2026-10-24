import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="top-bar-left">
          <span className="top-item">
            <i className="fa fa-phone-alt"></i>
            <a href="tel:+918179517373">+91 81795 17373</a> /{' '}
            <a href="tel:+919676018666">+91 96760 18666</a>
          </span>
          <span className="top-item">
            <i className="fa fa-envelope"></i>
            <a href="mailto:contact@buildsphere.in">contact@buildsphere.in</a>
          </span>
          <span className="top-item">
            <i className="fa fa-map-marker-alt"></i>
            <span>Ramavarapadu Ring Road, Vijayawada</span>
          </span>
        </div>
        <div className="top-bar-right">
          <span className="top-item">
            <i className="fa fa-clock"></i>
            <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
          </span>
          <span className="top-item">
            <i className="fa fa-award" style={{ color: 'var(--accent-gold)' }}></i>
            <span>Est. 2004 • 20+ Yrs Experience</span>
          </span>
        </div>
      </div>
    </div>
  );
};
