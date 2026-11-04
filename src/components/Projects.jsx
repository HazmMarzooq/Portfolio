import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Projects</span>
          <h2 className="section-title">Featured Academic & Personal Work</h2>
          <p className="section-subtitle">
            Hands-on projects covering Machine Learning, Data Analytics, and Web Application development.
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
                <p className="project-description">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="project-card-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-code"
                  aria-label={`View source code for ${project.title}`}
                  onClick={(e) => {
                    if (project.githubUrl === '#') {
                      e.preventDefault();
                      alert('GitHub link placeholder: You can update the repository URL in src/data/portfolioData.js');
                    }
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>Code</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-demo"
                  aria-label={`View live demo for ${project.title}`}
                  onClick={(e) => {
                    if (project.liveUrl === '#') {
                      e.preventDefault();
                      alert('Live demo link placeholder: You can update the live URL in src/data/portfolioData.js');
                    }
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Demo</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer-note">
          <p>
            * Note: Code repository and live demo links can be configured in <code>src/data/portfolioData.js</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
