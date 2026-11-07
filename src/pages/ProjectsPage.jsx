import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Data Science', 'Machine Learning', 'Web Development'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.tag.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="multipage-wrapper">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="page-breadcrumb-hud">
          <Link to="/" className="breadcrumb-link-hud">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            [ RETURN TO SYSTEM HOME ]
          </Link>
          <span className="breadcrumb-separator-hud">//</span>
          <span className="breadcrumb-current-hud">PROJECTS_DIRECTORY</span>
        </div>

        <div className="section-header" style={{ marginTop: '1.5rem' }}>
          <span className="section-eyebrow">[ SYSTEM ARCHIVE // PROJECTS ]</span>
          <h1 className="section-title">Projects & Case Studies</h1>
          <p className="section-subtitle">
            Explore detailed architectures, exploratory analyses, and machine learning pipelines developed during my Computer Science studies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="category-filter-bar-hud">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn-hud ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              [ {cat.toUpperCase()} ]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ marginTop: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card hud-panel hud-quest-card">
              <div className="hud-corner-bracket top-left"></div>
              <div className="hud-corner-bracket top-right"></div>
              <div className="hud-corner-bracket bottom-left"></div>
              <div className="hud-corner-bracket bottom-right"></div>

              <div className="project-card-header">
                <span className="project-tag-hud">// {project.tag.toUpperCase()}</span>
                <div className="project-number-hud">PROJECT_0{project.id}</div>
              </div>

              <div className="project-card-body">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.summary}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge-hud">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <Link
                  to={`/projects/${project.id}`}
                  className="btn-project-action btn-project-demo"
                  style={{ flex: 1.2 }}
                >
                  <span>Read Case Study</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-action btn-project-code"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
