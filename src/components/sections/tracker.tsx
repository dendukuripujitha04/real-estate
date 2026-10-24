'use client';

import React, { useState, useEffect } from 'react';
import { TrackedProject } from '@/types';
import { trackProjectApi } from '@/services/api';

export const TrackerSection: React.FC = () => {
  const [code, setCode] = useState('BSP-2024-01');
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<TrackedProject | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchProject = async (searchCode: string) => {
    if (!searchCode || !searchCode.trim()) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const data = await trackProjectApi(searchCode);
      if (data.success && data.project) {
        setProject(data.project);
      } else {
        setProject(null);
        setErrorMessage(
          data.message ||
            `Project tracking code '${searchCode}' not found. Please verify your Project ID or contact BuildSphere customer desk.`
        );
      }
    } catch {
      setProject(null);
      setErrorMessage('Unable to connect to the project tracking system. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject('BSP-2024-01');
  }, []);

  const handleSearch = () => {
    fetchProject(code);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectSample = (sampleCode: string) => {
    setCode(sampleCode);
    fetchProject(sampleCode);
  };

  return (
    <section className="section-padding tracker-section" id="tracker">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-tasks"></i> LIVE TRACKING
          </div>
          <h2 className="section-title">Customer Project Progress Tracker</h2>
          <p className="section-desc">
            Enter your unique BuildSphere Project ID to view milestone completion percentages, audited inspection notes, and real-time site status.
          </p>
        </div>

        <div className="tracker-wrapper">
          <div className="tracker-search-bar">
            <input
              type="text"
              id="tracker-input"
              className="tracker-input"
              placeholder="Enter Project Code (e.g. BSP-2024-01)"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="btn btn-primary"
              id="btn-track-project"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fa fa-spinner fa-spin"></i> Tracking...
                </>
              ) : (
                <>
                  <i className="fa fa-search"></i> Track Status
                </>
              )}
            </button>
          </div>

          <div className="sample-pills">
            <span>Try Demo Project IDs:</span>
            <button
              type="button"
              className="sample-pill-btn"
              onClick={() => handleSelectSample('BSP-2024-01')}
            >
              BSP-2024-01 (Poranki Villa)
            </button>
            <button
              type="button"
              className="sample-pill-btn"
              onClick={() => handleSelectSample('BSP-2024-02')}
            >
              BSP-2024-02 (Vertex Commercial)
            </button>
            <button
              type="button"
              className="sample-pill-btn"
              onClick={() => handleSelectSample('BSP-2024-03')}
            >
              BSP-2024-03 (Amaravati Duplex)
            </button>
          </div>

          <div className="project-tracker-box" id="tracker-result-box" style={{ display: 'block' }}>
            {errorMessage ? (
              <div style={{ textAlign: 'center', padding: '30px', color: '#ef4444' }}>
                <i className="fa fa-exclamation-circle" style={{ fontSize: '2rem', marginBottom: '10px' }}></i>
                <h4>{errorMessage}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                  Try demo tracking codes: BSP-2024-01, BSP-2024-02, or BSP-2024-03
                </p>
              </div>
            ) : project ? (
              <>
                <div className="tracker-header-info">
                  <div>
                    <span
                      style={{
                        background: 'rgba(245,158,11,0.15)',
                        color: 'var(--accent-gold-hover)',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      PROJECT CODE: {project.code}
                    </span>
                    <h3
                      style={{
                        marginTop: '8px',
                        fontSize: '1.6rem',
                        color: 'var(--primary-navy)',
                      }}
                    >
                      {project.projectTitle}
                    </h3>
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginTop: '4px',
                      }}
                    >
                      <i className="fa fa-map-marker-alt" style={{ color: '#ef4444' }}></i>{' '}
                      {project.location} &nbsp;|&nbsp;{' '}
                      <i className="fa fa-home" style={{ color: 'var(--primary-blue)' }}></i>{' '}
                      {project.type} ({project.totalSqFt})
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CLIENT RECORD</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                      {project.clientName}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                      Audited: {project.lastUpdated || 'Recent'}
                    </div>
                  </div>
                </div>

                <div className="overall-progress-bar-wrapper">
                  <div className="progress-label-row">
                    <span>Overall Construction Milestone Completion</span>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '1.3rem' }}>
                      {project.overallProgress}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${project.overallProgress}%` }}
                    ></div>
                  </div>
                </div>

                <h4 style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--primary-navy)' }}>
                  Milestone Execution Breakdown
                </h4>
                <div className="tracker-stages-grid">
                  {(project.stages || []).map((stage, idx) => {
                    let badgeClass = 'badge-pending';
                    let cardClass = 'pending';
                    if (stage.percent === 100) {
                      badgeClass = 'badge-completed';
                      cardClass = 'completed';
                    } else if (stage.percent > 0) {
                      badgeClass = 'badge-inprogress';
                      cardClass = 'inprogress';
                    }

                    return (
                      <div key={idx} className={`stage-card ${cardClass}`}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px',
                          }}
                        >
                          <span className={`stage-status-badge ${badgeClass}`}>
                            {stage.status ||
                              (stage.percent === 100
                                ? 'Completed'
                                : stage.percent > 0
                                ? `${stage.percent}% Active`
                                : 'Pending')}
                          </span>
                          <strong style={{ color: 'var(--primary-navy)', fontSize: '0.85rem' }}>
                            {stage.percent}%
                          </strong>
                        </div>
                        <div className="stage-name">{stage.name}</div>
                        <div className="progress-track" style={{ height: '6px', marginTop: '8px' }}>
                          <div
                            className="progress-fill"
                            style={{ width: `${stage.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    padding: '14px',
                    background: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <i className="fa fa-shield-alt" style={{ color: '#10b981' }}></i> 15-Year Structural Warranty &amp; 5-Year Leakage Guarantee Active
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-gold"
                    onClick={() =>
                      alert(
                        `Progress audit report for '${project.code}' is officially verified by BuildSphere Engineering.`
                      )
                    }
                  >
                    <i className="fa fa-file-pdf"></i> View Inspection Certificate
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
