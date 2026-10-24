'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-city"></i> PORTFOLIO
          </div>
          <h2 className="section-title">Our Recent Projects</h2>
          <p className="section-desc">
            Explore a showcase of our residential villas, commercial landmarks, structural frameworks, and luxury interior executions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            ALL PROJECTS
          </button>
          <button
            className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residential')}
          >
            RESIDENTIAL
          </button>
          <button
            className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('commercial')}
          >
            COMMERCIAL
          </button>
          <button
            className={`filter-btn ${activeFilter === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveFilter('architecture')}
          >
            ARCHITECTURE
          </button>
          <button
            className={`filter-btn ${activeFilter === 'structural' ? 'active' : ''}`}
            onClick={() => setActiveFilter('structural')}
          >
            STRUCTURAL
          </button>
          <button
            className={`filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            INTERIOR
          </button>
        </div>

        <div className="projects-grid" id="projects-grid-container">
          {filteredProjects.map((p) => {
            const isOngoing = p.status.toLowerCase().includes('ongoing');
            return (
              <div
                key={p.id}
                className="project-card"
                data-category={p.category}
                id={`card-${p.id}`}
              >
                <div className="project-thumb">
                  <img src={p.image} alt={p.title} />
                  <span className={`project-status-tag ${isOngoing ? 'ongoing' : ''}`}>
                    {p.status}
                  </span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="category">{p.categoryLabel || p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-location">
                    <i className="fa fa-map-marker-alt"></i> {p.location}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-footer">
                    <span className="project-area-badge">
                      <i className="fa fa-ruler-combined"></i> {p.area}
                    </span>
                    <button
                      className="btn btn-sm btn-outline-gold btn-view-project"
                      onClick={() => onSelectProject(p)}
                    >
                      VIEW PROJECT
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
