import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-stream"></i> OUR PROCESS
          </div>
          <h2 className="section-title">Streamlined 6-Step Construction Journey</h2>
          <p className="section-desc">
            We ensure complete peace of mind through a structured, milestone-based execution framework from first concept to warranty handover.
          </p>
        </div>

        <div className="process-timeline">
          {/* Step 1 */}
          <div className="process-step-card">
            <div className="step-num-badge">01</div>
            <div className="step-content-card">
              <h4 className="step-title">Project Discussion</h4>
              <p className="step-desc">
                Understand customer requirements, budget, location, plot orientation, Vasthu needs, and project expectations.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step-card">
            <div className="step-num-badge">02</div>
            <div className="step-content-card">
              <h4 className="step-title">Planning &amp; Design</h4>
              <p className="step-desc">
                Develop 2D floor plans, 3D elevations, and engineering drawings with structural calculations by BuildSphere engineers.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step-card">
            <div className="step-num-badge">03</div>
            <div className="step-content-card">
              <h4 className="step-title">Agreement &amp; Plan</h4>
              <p className="step-desc">
                Finalize project scope, material specifications, timeline, and mutually agreed milestone-based escrow payment plan.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-step-card">
            <div className="step-num-badge">04</div>
            <div className="step-content-card">
              <h4 className="step-title">Construction</h4>
              <p className="step-desc">
                Execute foundation, RCC structure, brickwork, and plastering with continuous supervision and certified materials.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="process-step-card">
            <div className="step-num-badge">05</div>
            <div className="step-content-card">
              <h4 className="step-title">Progress Monitoring</h4>
              <p className="step-desc">
                Track project progress online with customer dashboard updates, milestone approvals, and quality inspection audits.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="process-step-card">
            <div className="step-num-badge">06</div>
            <div className="step-content-card">
              <h4 className="step-title">Project Completion</h4>
              <p className="step-desc">
                Complete final finishes, deep cleaning, client walkthrough, and official handover with 15-Year Structural Warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
