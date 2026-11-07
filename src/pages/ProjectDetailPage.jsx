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
          <h2>[ RECORD_NOT_FOUND ]</h2>
          <p style={{ margin: '1rem 0 2rem 0', color: 'var(--text-secondary)' }}>
            The requested project mission log does not exist on this system.
          </p>
          <Link to="/projects" className="btn btn-hud-primary">
            Back to Projects Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="multipage-wrapper">
      <div className="container">
        {/* HUD Breadcrumb */}
        <div className="page-breadcrumb-hud">
          <Link to="/" className="breadcrumb-link-hud">HOME</Link>
          <span className="breadcrumb-separator-hud">//</span>
          <Link to="/projects" className="breadcrumb-link-hud">PROJECTS</Link>
          <span className="breadcrumb-separator-hud">//</span>
          <span className="breadcrumb-current-hud">{project.title.toUpperCase()}</span>
        </div>

        {/* Project Header */}
        <div className="project-detail-hero hud-panel">
          <div className="hud-corner-bracket top-left"></div>
          <div className="hud-corner-bracket top-right"></div>
          <div className="hud-corner-bracket bottom-left"></div>
          <div className="hud-corner-bracket bottom-right"></div>

          <span className="section-eyebrow">// {project.tag.toUpperCase()}</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>

          <div className="project-detail-meta-bar">
            <div className="tech-badge-group">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge-hud">{tech}</span>
              ))}
            </div>

            <div className="project-detail-actions">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hud-primary"
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
                className="btn btn-hud-secondary"
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
          <h2 className="case-study-heading">// 01. PROBLEM STATEMENT & MOTIVATION</h2>
          <div className="case-study-card hud-panel">
            <p className="case-study-text">
              {project.fullExplanation.problem}
            </p>
          </div>
        </div>

        {/* Methodology Pipeline */}
        <div className="case-study-section">
          <h2 className="case-study-heading">// 02. METHODOLOGY & PIPELINE</h2>
          <div className="pipeline-steps-grid">
            {project.fullExplanation.methodology.map((step, idx) => {
              const [title, desc] = step.split(': ');
              return (
                <div key={idx} className="pipeline-step-card hud-panel">
                  <div className="pipeline-step-number">PHASE 0{idx + 1}</div>
                  <h3 className="pipeline-step-title">{title}</h3>
                  <p className="pipeline-step-desc">{desc || title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulation / Live Demonstration Box */}
        <div className="case-study-section">
          <h2 className="case-study-heading">// 03. INTERACTIVE ANALYSIS CONSOLE</h2>
          <div className="interactive-demo-card hud-panel">
            {project.id === 1 && (
              <div className="demo-juice-container">
                <div className="demo-controls">
                  <span className="demo-label-hud">SELECT PRODUCT VARIETY:</span>
                  <div className="demo-buttons">
                    {['Orange', 'Apple', 'Mango', 'Berry Mix'].map((flavor) => (
                      <button
                        key={flavor}
                        className={`filter-btn-hud ${juiceFilter === flavor ? 'active' : ''}`}
                        onClick={() => setJuiceFilter(flavor)}
                      >
                        [ {flavor} ]
                      </button>
                    ))}
                  </div>
                </div>

                <div className="demo-stats-preview">
                  <div className="demo-stat-box-hud">
                    <span className="demo-stat-metric-hud">
                      {juiceFilter === 'Orange' ? '$3.40' : juiceFilter === 'Apple' ? '$2.95' : juiceFilter === 'Mango' ? '$4.10' : '$4.50'}
                    </span>
                    <span className="demo-stat-label-hud">OPTIMAL PRICE POINT</span>
                  </div>
                  <div className="demo-stat-box-hud">
                    <span className="demo-stat-metric-hud">
                      {juiceFilter === 'Orange' ? '88.4%' : juiceFilter === 'Apple' ? '92.1%' : juiceFilter === 'Mango' ? '84.6%' : '81.9%'}
                    </span>
                    <span className="demo-stat-label-hud">MODEL CONFIDENCE</span>
                  </div>
                  <div className="demo-stat-box-hud">
                    <span className="demo-stat-metric-hud">
                      {juiceFilter === 'Orange' ? 'Summer Peak' : juiceFilter === 'Apple' ? 'Year-Round' : juiceFilter === 'Mango' ? 'Spring/Summer' : 'Winter'}
                    </span>
                    <span className="demo-stat-label-hud">OBSERVED DEMAND</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 2 && (
              <div className="demo-digit-container">
                <p className="demo-description-hud">
                  Select a sample handwritten digit below to simulate model feature extraction and classification:
                </p>
                <div className="digit-selector-row">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <button
                      key={digit}
                      className={`digit-btn-hud ${activeDigit === digit ? 'active' : ''}`}
                      onClick={() => setActiveDigit(digit)}
                    >
                      {digit}
                    </button>
                  ))}
                </div>

                <div className="digit-classification-result-hud">
                  <div className="digit-display-box-hud">
                    <span className="drawn-digit-hud">{activeDigit}</span>
                    <span className="digit-source-tag-hud">SAMPLE MATRIX</span>
                  </div>
                  <div className="digit-details">
                    <h4 className="digit-result-title-hud">CLASSIFICATION: <strong>DIGIT {activeDigit}</strong></h4>
                    <p className="digit-prob-text-hud">Softmax Probability Score: <strong>{(94.2 + (activeDigit % 4)).toFixed(1)}%</strong></p>
                    <p className="digit-prob-subtext-hud">Algorithm: Multiclass Logistic Regression with L2 Regularization.</p>
                  </div>
                </div>
              </div>
            )}

            {project.id === 3 && (
              <div className="demo-portfolio-container">
                <h4 style={{ color: 'var(--sys-cyan-bright)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>// ARCHITECTURE TELEMETRY</h4>
                <div className="portfolio-arch-grid">
                  <div className="arch-item hud-panel">
                    <strong style={{ color: 'var(--sys-cyan-bright)' }}>Vite Bundler</strong>
                    <p>Instant Hot Module Replacement and optimized asset distribution.</p>
                  </div>
                  <div className="arch-item hud-panel">
                    <strong style={{ color: 'var(--sys-cyan-bright)' }}>React 18</strong>
                    <p>Component-based modular architecture and responsive state management.</p>
                  </div>
                  <div className="arch-item hud-panel">
                    <strong style={{ color: 'var(--sys-cyan-bright)' }}>React Router</strong>
                    <p>Client-side routing supporting dedicated URLs for projects and certificates.</p>
                  </div>
                  <div className="arch-item hud-panel">
                    <strong style={{ color: 'var(--sys-cyan-bright)' }}>Responsive Design</strong>
                    <p>CSS Grid and Flexbox with zero heavy UI library dependencies.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Findings Card */}
        <div className="case-study-section">
          <h2 className="case-study-heading">// 04. KEY RESULTS & INSIGHTS</h2>
          <div className="case-study-card hud-panel">
            <ul className="findings-list">
              {project.fullExplanation.keyFindings.map((finding, idx) => (
                <li key={idx} className="finding-item">
                  <span className="bullet-indicator" style={{ color: 'var(--sys-cyan-bright)' }}>◆</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="project-detail-bottom-nav">
          <Link to="/projects" className="btn btn-hud-secondary">
            Back to All Projects
          </Link>
          <Link to="/certificates" className="btn btn-hud-primary">
            View Verified NPTEL Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
