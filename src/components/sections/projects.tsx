'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/types';
import { useLanguage } from '@/context/language-context';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const { language } = useLanguage();
  const isTe = language === 'te';

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
        {/* Header */}
        <div className="text-center">
          <div className="section-tag">
            <i className="fa fa-city"></i> {isTe ? 'ప్రాజెక్ట్ గ్యాలరీ' : 'PORTFOLIO & PROJECTS'}
          </div>
          <h2 className="section-title">
            {isTe
              ? 'మా నిర్మాణ & ఇంటీరియర్ ప్రాజెక్ట్‌ల దృశ్యరూపం'
              : 'Our Construction & Interior Showcase'}
          </h2>
          <p className="section-desc">
            {isTe
              ? 'స్వతంత్ర గృహాలు, లగ్జరీ విల్లాలు, కమర్షియల్ భవనాలు మరియు మోడరన్ ఇంటీరియర్స్ రూపకల్పన వివరాలు చూడండి.'
              : 'Explore a showcase of independent houses, luxury villas, commercial spaces, and turnkey interior designs executed across Vijayawada & Amaravati.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {isTe ? 'అన్ని ప్రాజెక్ట్‌లు' : 'ALL PROJECTS'}
          </button>
          <button
            className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residential')}
          >
            {isTe ? 'రెసిడెన్షియల్ & విల్లాలు' : 'VILLAS & HOMES'}
          </button>
          <button
            className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('commercial')}
          >
            {isTe ? 'కమర్షియల్ కాంప్లెక్స్' : 'COMMERCIAL'}
          </button>
          <button
            className={`filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
            onClick={() => setActiveFilter('interior')}
          >
            {isTe ? 'ఇంటీరియర్ డిజైన్స్' : 'INTERIORS'}
          </button>
          <button
            className={`filter-btn ${activeFilter === 'structural' ? 'active' : ''}`}
            onClick={() => setActiveFilter('structural')}
          >
            {isTe ? 'సివిల్ & స్ట్రక్చరల్' : 'STRUCTURAL'}
          </button>
          <button
            className={`filter-btn ${activeFilter === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveFilter('architecture')}
          >
            {isTe ? 'ఆర్కిటెక్చర్ 3D' : 'ARCHITECTURE'}
          </button>
        </div>

        {/* Projects Grid */}
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
                  <img src={p.image} alt={p.title} loading="lazy" />
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
                      {isTe ? 'వివరాలు చూడండి' : 'VIEW PROJECT'}
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
