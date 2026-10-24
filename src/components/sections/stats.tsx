import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">YEARS EXPERIENCE</div>
            <div className="stat-subtext">Delivering Excellence Since 2004</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">350+</div>
            <div className="stat-label">PROJECTS DELIVERED</div>
            <div className="stat-subtext">Residential &amp; Commercial Complexes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15 YRS</div>
            <div className="stat-label">STRUCTURAL WARRANTY</div>
            <div className="stat-subtext">BuildSphere Engineering Assurance</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">TRANSPARENT PRICING</div>
            <div className="stat-subtext">Zero Hidden Costs • Milestone Escrow</div>
          </div>
        </div>
      </div>
    </section>
  );
};
