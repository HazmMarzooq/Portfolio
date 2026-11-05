import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Projects</span>
          <h2 className="section-title">Featured Academic & Personal Work</h2>
          <p className="section-subtitle">
            Hands-on projects covering Machine Learning, Data Analytics, and Web Application development. Click any project to inspect full case studies and technical explanations.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project Top Bar / Category Tag */}
              <div className="project-card-header">
                <span className="project-tag">{project.tag}</span>
                <div className="project-number">0{project.id}</div>
              </div>

              {/* Project Content */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.summary}</p>

                {/* Tech Stack Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Case Study Deep-Dive & Code */}
              <div className="project-card-footer">
                <Link
                  to={`/projects/${project.id}`}
                  className="project-btn project-btn-demo"
                  aria-label={`Read technical case study for ${project.title}`}
                  style={{ flex: 1.2 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                  <span>Case Study & Demo</span>
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-code"
                  aria-label={`View source code for ${project.title}`}
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

        <div className="projects-explore-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="btn btn-secondary">
            <span>Explore All Project Deep-Dives in Directory</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
