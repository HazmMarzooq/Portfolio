import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">[ SYSTEM ITEM // 07 ]</span>
          <h2 className="section-title">Resume & Curriculum Vitae</h2>
          <p className="section-subtitle">
            Get a comprehensive overview of my academic records, technical proficiencies, certified coursework, and project milestones.
          </p>
        </div>

        <div className="resume-card hud-panel hud-item-panel">
          {/* Corner HUD Brackets */}
          <div className="hud-corner-bracket top-left"></div>
          <div className="hud-corner-bracket top-right"></div>
          <div className="hud-corner-bracket bottom-left"></div>
          <div className="hud-corner-bracket bottom-right"></div>
          
          <div className="resume-content">
            <div className="resume-badge-group">
              <span className="resume-pill-hud">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                ITEM: PDF_DOCUMENT
              </span>
              <span className="resume-pill-hud">CSE_DISCIPLINE</span>
              <span className="resume-pill-hud">RECRUITER_READY</span>
            </div>

            <h3 className="resume-headline">
              Download Full Curriculum Vitae
            </h3>

            <p className="resume-description">
              My resume includes detailed information about my Computer Science and Engineering degree coursework at Arifa Institute of Technology, programming skills, practical project deliverables, technical certifications (including NPTEL Software Engineering), and contact information.
            </p>

            <div className="resume-features-grid">
              <div className="resume-feature-hud">
                <span className="feature-tick-hud">✓</span>
                <span>Complete Academic History</span>
              </div>
              <div className="resume-feature-hud">
                <span className="feature-tick-hud">✓</span>
                <span>Technical Skill Inventory</span>
              </div>
              <div className="resume-feature-hud">
                <span className="feature-tick-hud">✓</span>
                <span>Machine Learning & Web Projects</span>
              </div>
              <div className="resume-feature-hud">
                <span className="feature-tick-hud">✓</span>
                <span>Verified NPTEL Accreditation</span>
              </div>
            </div>

            <div className="resume-cta-group">
              <a 
                href={personalInfo.resumeUrl} 
                className="btn btn-hud-primary resume-download-btn"
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
                className="btn btn-hud-secondary resume-view-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview in Browser</span>
              </a>

              <Link 
                to="/certificates" 
                className="btn btn-hud-secondary resume-view-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                <span>View NPTEL Certificate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
