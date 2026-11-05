import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id, 10));

  // Interactive simulation state for each project
  const [activeDigit, setActiveDigit] = useState(7);
  const [juiceFilter, setJuiceFilter] = useState('Orange');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="multipage-wrapper">
        <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <h2>Project Not Found</h2>
          <p style={{ margin: '1rem 0 2rem 0', color: 'var(--text-secondary)' }}>
            The project you are looking for does not exist or has been moved.
          </p>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="multipage-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/projects" className="breadcrumb-link">Projects</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>

        {/* Project Header */}
        <div className="project-detail-hero">
          <span className="section-eyebrow">{project.tag}</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>

          <div className="project-detail-meta-bar">
            <div className="tech-badge-group">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-detail-actions">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>View on GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"></path>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Problem Statement Card */}
        <div className="case-study-section">
          <h2 className="case-study-heading">1. Problem Statement and Motivation</h2>
          <div className="case-study-card">
            <p className="case-study-text">
              {project.fullExplanation.problem}
            </p>
          </div>
        </div>

        {/* Methodology Pipeline */}
        <div className="case-study-section">
          <h2 className="case-study-heading">2. Methodology and Implementation Pipeline</h2>
          <div className="pipeline-steps-grid">
            {project.fullExplanation.methodology.map((step, idx) => {
              const [title, desc] = step.split(': ');
              return (
                <div key={idx} className="pipeline-step-card">
                  <div className="pipeline-step-number">Phase 0{idx + 1}</div>
                  <h3 className="pipeline-step-title">{title}</h3>
                  <p className="pipeline-step-desc">{desc || title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulation / Live Demonstration Box */}
        <div className="case-study-section">
          <h2 className="case-study-heading">3. Interactive Demonstration and Analysis</h2>
          <div className="interactive-demo-card">
            {project.id === 1 && (
              <div className="demo-juice-container">
                <div className="demo-controls">
                  <span className="demo-label">Select Juice Product Variety:</span>
                  <div className="demo-buttons">
                    {['Orange', 'Apple', 'Mango', 'Berry Mix'].map((flavor) => (
                      <button
                        key={flavor}
                        className={`filter-btn ${juiceFilter === flavor ? 'active' : ''}`}
                        onClick={() => setJuiceFilter(flavor)}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="demo-stats-preview">
                  <div className="demo-stat-box">
                    <span className="demo-stat-metric">
                      {juiceFilter === 'Orange' ? '$3.40' : juiceFilter === 'Apple' ? '$2.95' : juiceFilter === 'Mango' ? '$4.10' : '$4.50'}
                    </span>
                    <span className="demo-stat-label">Optimal Price Point</span>
                  </div>
                  <div className="demo-stat-box">
                    <span className="demo-stat-metric">
                      {juiceFilter === 'Orange' ? '88.4%' : juiceFilter === 'Apple' ? '92.1%' : juiceFilter === 'Mango' ? '84.6%' : '81.9%'}
                    </span>
                    <span className="demo-stat-label">Model Demand Confidence</span>
                  </div>
                  <div className="demo-stat-box">
                    <span className="demo-stat-metric">
                      {juiceFilter === 'Orange' ? 'Summer Peak' : juiceFilter === 'Apple' ? 'Year-Round' : juiceFilter === 'Mango' ? 'Spring/Summer' : 'Winter'}
                    </span>
                    <span className="demo-stat-label">Observed Demand Pattern</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 2 && (
              <div className="demo-digit-container">
                <p className="demo-description">
                  Select a sample handwritten digit below to simulate model feature extraction and classification:
                </p>
                <div className="digit-selector-row">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <button
                      key={digit}
                      className={`digit-btn ${activeDigit === digit ? 'active' : ''}`}
                      onClick={() => setActiveDigit(digit)}
                    >
                      {digit}
                    </button>
                  ))}
                </div>

                <div className="digit-classification-result">
                  <div className="digit-display-box">
                    <span className="drawn-digit">{activeDigit}</span>
                    <span className="digit-source-tag">Sample Matrix</span>
                  </div>
                  <div className="digit-details">
                    <h4 className="digit-result-title">Model Classification: <strong>Digit {activeDigit}</strong></h4>
                    <p className="digit-prob-text">Softmax Probability Score: <strong>{(94.2 + (activeDigit % 4)).toFixed(1)}%</strong></p>
                    <p className="digit-prob-subtext">Algorithm: Multiclass Logistic Regression with L2 Regularization.</p>
                  </div>
                </div>
              </div>
            )}

            {project.id === 3 && (
              <div className="demo-portfolio-container">
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem' }}>Architecture Overview</h4>
                <div className="portfolio-arch-grid">
                  <div className="arch-item">
                    <div className="arch-icon-svg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <strong>Vite Bundler</strong>
                    <p>Instant Hot Module Replacement and optimized asset distribution.</p>
                  </div>
                  <div className="arch-item">
                    <div className="arch-icon-svg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <strong>React 18</strong>
                    <p>Component-based modular architecture and responsive state management.</p>
                  </div>
                  <div className="arch-item">
                    <div className="arch-icon-svg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </div>
                    <strong>React Router</strong>
                    <p>Client-side routing supporting dedicated URLs for projects and certificates.</p>
                  </div>
                  <div className="arch-item">
                    <div className="arch-icon-svg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    </div>
                    <strong>Responsive Design</strong>
                    <p>CSS Grid and Flexbox with zero heavy UI library dependencies.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Findings Card */}
        <div className="case-study-section">
          <h2 className="case-study-heading">4. Key Results and Academic Insights</h2>
          <div className="case-study-card">
            <ul className="findings-list">
              {project.fullExplanation.keyFindings.map((finding, idx) => (
                <li key={idx} className="finding-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="project-detail-bottom-nav">
          <Link to="/projects" className="btn btn-secondary">
            Back to All Projects
          </Link>
          <Link to="/certificates" className="btn btn-primary">
            View Verified NPTEL Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
