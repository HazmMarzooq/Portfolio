import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Curriculum Vitae</span>
          <h2 className="section-title">Resume & Summary</h2>
          <p className="section-subtitle">
            Get a comprehensive overview of my academic records, technical proficiencies, and project milestones.
          </p>
        </div>

        <div className="resume-card">
          <div className="resume-card-glow"></div>
          
          <div className="resume-content">
            <div className="resume-badge-group">
              <span className="resume-pill">📄 PDF Format</span>
              <span className="resume-pill">Updated for 2026</span>
              <span className="resume-pill">Recruiter Ready</span>
            </div>

            <h3 className="resume-headline">
              Download Full Curriculum Vitae
            </h3>

            <p className="resume-description">
              My resume includes detailed information about my Computer Science degree coursework at Arifa Institute of Technology, programming skills, practical project deliverables, technical certifications, and contact information.
            </p>

            <div className="resume-features-grid">
              <div className="resume-feature">
                <span className="feature-check">✓</span>
                <span>Complete Academic History</span>
              </div>
              <div className="resume-feature">
                <span className="feature-check">✓</span>
                <span>Technical Skill Inventory</span>
              </div>
              <div className="resume-feature">
                <span className="feature-check">✓</span>
                <span>Machine Learning & Web Projects</span>
              </div>
              <div className="resume-feature">
                <span className="feature-check">✓</span>
                <span>Verified Certifications</span>
              </div>
            </div>

            <div className="resume-cta-group">
              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-primary resume-download-btn"
                download="S_Hazm_Marzooq_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download Resume (PDF)</span>
              </a>

              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-secondary resume-view-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview Resume in Browser</span>
              </a>
            </div>

            <p className="resume-hint">
              * To replace this resume with an updated version, simply overwrite <code>public/resume.pdf</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
