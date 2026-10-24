'use client';

import React from 'react';
import { Modal } from '@/components/ui/modal';
import { ProjectItem } from '@/types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussSimilar,
}) => {
  if (!project) return null;

  const services = project.servicesProvided || project.services || [
    'Architectural Planning',
    'Structural Engineering',
    'Civil Construction',
    'Turnkey Interiors',
  ];

  const highlights = project.highlights || [
    '15-Year Structural Warranty',
    '100% Vasthu Compliant',
    'Quality Assured Materials',
  ];

  return (
    <Modal isOpen={!!project} onClose={onClose} title="Project Specifications" maxWidth="750px">
      <div style={{ marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', maxHeight: '360px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '320px', objectFit: 'cover' }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <span
            style={{
              color: 'var(--accent-gold)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            {project.categoryLabel || project.category}
          </span>
          <h3
            style={{
              fontSize: '1.6rem',
              color: 'var(--primary-navy)',
              marginTop: '4px',
            }}
          >
            {project.title}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <i className="fa fa-map-marker-alt" style={{ color: '#ef4444' }}></i> {project.location}
          </p>
        </div>
        <span
          style={{
            background: 'rgba(16,185,129,0.15)',
            color: '#065f46',
            fontWeight: 700,
            fontSize: '0.8rem',
            padding: '6px 14px',
            borderRadius: '99px',
          }}
        >
          {project.status}
        </span>
      </div>

      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
        {project.description}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            background: '#f8fafc',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h5 style={{ marginBottom: '8px', color: 'var(--primary-navy)', fontSize: '0.9rem' }}>
            Services Provided
          </h5>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#475569' }}>
            {services.map((s, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>
                <i className="fa fa-check" style={{ color: '#10b981', marginRight: '6px' }}></i>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: '#f8fafc',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <h5 style={{ marginBottom: '8px', color: 'var(--primary-navy)', fontSize: '0.9rem' }}>
            Key Engineering Highlights
          </h5>
          <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#475569' }}>
            {highlights.map((h, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>
                <i
                  className="fa fa-star"
                  style={{ color: 'var(--accent-gold)', marginRight: '6px' }}
                ></i>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            onClose();
            onDiscussSimilar(project.title);
          }}
        >
          <i className="fa fa-calendar-check"></i> DISCUSS A SIMILAR PROJECT
        </button>
      </div>
    </Modal>
  );
};
