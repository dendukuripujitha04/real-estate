'use client';

import React from 'react';

interface ServicesProps {
  onOpenConsultation: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-tools"></i> WHAT WE DO
          </div>
          <h2 className="section-title">Comprehensive Construction &amp; Engineering Solutions</h2>
          <p className="section-desc">
            From architectural blueprints and structural calculations to turnkey civil construction and luxury interiors, BuildSphere provides end-to-end expertise under one roof.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: Residential Construction */}
          <div className="service-card" id="card-service-residential">
            <div className="service-img-wrapper">
              <img src="/images/residential.jpg" alt="Residential Construction by BuildSphere" />
              <span className="service-tag-badge">Villas &amp; Homes</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-home"></i>
              </div>
              <h3 className="service-title">Residential Construction</h3>
              <p className="service-desc">
                Custom independent luxury houses, duplex villas, and multi-family residential buildings built with reinforced structural strength and Vasthu compliance.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Independent Luxury Villas &amp; Duplexes</li>
                <li><i className="fa fa-check-circle"></i> 100% Vasthu-Compliant Layout Planning</li>
                <li><i className="fa fa-check-circle"></i> High-Grade TMT Steel &amp; Certified Concrete</li>
                <li><i className="fa fa-check-circle"></i> 15-Year Structural Warranty Included</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Residential Construction')}
                >
                  DISCUSS YOUR PROJECT <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Service 2: Commercial Construction */}
          <div className="service-card" id="card-service-commercial">
            <div className="service-img-wrapper">
              <img src="/images/commercial.jpg" alt="Commercial Construction by BuildSphere" />
              <span className="service-tag-badge">Offices &amp; Retail</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-building"></i>
              </div>
              <h3 className="service-title">Commercial Construction</h3>
              <p className="service-desc">
                Engineered commercial complexes, retail shopping spaces, corporate office buildings, and showrooms crafted for maximum utility and business longevity.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Commercial Complexes &amp; Shopping Arcades</li>
                <li><i className="fa fa-check-circle"></i> High-Load Bearing Column Layouts</li>
                <li><i className="fa fa-check-circle"></i> Modern Glass &amp; Composite Panel Facades</li>
                <li><i className="fa fa-check-circle"></i> Fast-Track Execution with Milestone Tracking</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Commercial Construction')}
                >
                  DISCUSS YOUR PROJECT <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Service 3: Architectural Design */}
          <div className="service-card" id="card-service-architecture">
            <div className="service-img-wrapper">
              <img src="/images/architecture.jpg" alt="Architectural Design by BuildSphere" />
              <span className="service-tag-badge">Planning &amp; 3D</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-drafting-compass"></i>
              </div>
              <h3 className="service-title">Architectural Design</h3>
              <p className="service-desc">
                Scientific space planning, contemporary 2D floor plans, realistic 3D exterior elevations, daylight optimization, and municipal sanction documentation.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Detailed 2D &amp; 3D Floor Layout Plans</li>
                <li><i className="fa fa-check-circle"></i> Photorealistic 3D Exterior Facade Elevations</li>
                <li><i className="fa fa-check-circle"></i> Municipal Approval &amp; Sanction Drawings</li>
                <li><i className="fa fa-check-circle"></i> Bank Loan Project Estimations</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Architectural Design')}
                >
                  REQUEST CONSULTATION <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Service 4: Structural Design */}
          <div className="service-card" id="card-service-structural">
            <div className="service-img-wrapper">
              <img src="/images/structural.jpg" alt="Structural Design by BuildSphere Engineering" />
              <span className="service-tag-badge">BuildSphere Engineering</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-cubes"></i>
              </div>
              <h3 className="service-title">Structural Design</h3>
              <p className="service-desc">
                Earthquake-resilient structural engineering, soil-bearing capacity analysis, footing designs, and beam-column detailing powered by BuildSphere engineers.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Seismic &amp; Wind Load Engineering (IS Codes)</li>
                <li><i className="fa fa-check-circle"></i> Soil Specific Deep/Shallow Foundation Design</li>
                <li><i className="fa fa-check-circle"></i> RCC Beam &amp; Column Rebar Schedules</li>
                <li><i className="fa fa-check-circle"></i> Structural Safety &amp; Stability Certification</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Structural Design')}
                >
                  REQUEST CONSULTATION <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Service 5: Interior Design */}
          <div className="service-card" id="card-service-interior">
            <div className="service-img-wrapper">
              <img src="/images/interior.jpg" alt="Interior Design by BuildSphere" />
              <span className="service-tag-badge">Luxury Spaces</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-couch"></i>
              </div>
              <h3 className="service-title">Interior Design</h3>
              <p className="service-desc">
                Custom modular kitchens, designer false ceilings with ambient cove lighting, premium wardrobes, Italian marble finishes, and turnkey office interiors.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Custom Modular Kitchens &amp; Acrylic Finishes</li>
                <li><i className="fa fa-check-circle"></i> Ambient False Ceilings with LED Profile Lights</li>
                <li><i className="fa fa-check-circle"></i> Italian Marble &amp; Vitrified Tile Flooring</li>
                <li><i className="fa fa-check-circle"></i> Turnkey Corporate Office &amp; Retail Fit-Outs</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Interior Design')}
                >
                  DISCUSS YOUR INTERIOR <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Service 6: Renovation */}
          <div className="service-card" id="card-service-renovation">
            <div className="service-img-wrapper">
              <img src="/images/hero-bg.jpg" alt="Building Renovation by BuildSphere" />
              <span className="service-tag-badge">Remodeling</span>
            </div>
            <div className="service-body">
              <div className="service-icon-box">
                <i className="fa fa-paint-roller"></i>
              </div>
              <h3 className="service-title">Building Renovation</h3>
              <p className="service-desc">
                Complete home transformation, structural retrofitting, modern facade facelifts, floor additions, and 5-year guaranteed waterproofing leak rectification.
              </p>
              <ul className="service-features-list">
                <li><i className="fa fa-check-circle"></i> Complete Home &amp; Commercial Remodeling</li>
                <li><i className="fa fa-check-circle"></i> Structural Retrofitting &amp; Column Jacketing</li>
                <li><i className="fa fa-check-circle"></i> Modern Exterior Elevation Facelift</li>
                <li><i className="fa fa-check-circle"></i> 5-Year Guaranteed Waterproofing Treatment</li>
              </ul>
              <div className="service-footer">
                <span
                  className="service-link open-consultation-btn"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onOpenConsultation('Building Renovation')}
                >
                  START RENOVATION <i className="fa fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
