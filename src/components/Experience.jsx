import React from 'react';
import { Link } from 'react-router-dom';
import { experienceData, certificatesData } from '../data/portfolioData';

export default function Experience() {
  const nptelCert = certificatesData.find((c) => c.id === 'nptel-se');

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">[ SYSTEM CREDENTIALS // 06 ]</span>
          <h2 className="section-title">Experience & Accreditations</h2>
          <p className="section-subtitle">
            Hands-on technical development through academic coursework, national certifications, and technical training.
          </p>
        </div>

        {/* NPTEL Special Highlight Card - Futuristic Accreditation Frame */}
        {nptelCert && (
          <div className="experience-featured-cert hud-panel">
            <div className="hud-corner-bracket top-left"></div>
            <div className="hud-corner-bracket top-right"></div>
            <div className="hud-corner-bracket bottom-left"></div>
            <div className="hud-corner-bracket bottom-right"></div>

            <div className="cert-ribbon-hud">[ NATIONAL ACCREDITATION // IIT KHARAGPUR ]</div>

            <div className="cert-featured-body">
              <div className="cert-featured-info">
                <div className="cert-status-row">
                  <span className="cert-featured-tag">NPTEL ELITE CERTIFICATION</span>
                  <span className="cert-roll-tag">ROLL: {nptelCert.rollNo}</span>
                </div>

                <h3 className="cert-featured-title">{nptelCert.title}</h3>
                <h4 className="cert-featured-issuer">
                  {nptelCert.issuer}
                  <span className="experience-separator">•</span>
                  <span>{nptelCert.period}</span>
                </h4>
                
                <p className="cert-featured-desc">{nptelCert.description}</p>
                
                <div className="cert-featured-actions">
                  <a
                    href={nptelCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-hud-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>View Official PDF</span>
                  </a>

                  <Link to="/certificates" className="btn btn-hud-secondary">
                    <span>Inspect Full Accreditation Page</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="cert-featured-badge-box">
                <div className="score-circle-hud">
                  <div className="score-ring"></div>
                  <span className="score-val">76%</span>
                  <span className="score-lbl">ELITE SCORE</span>
                </div>
                <span className="credits-lbl-hud">4 ACADEMIC CREDITS</span>
              </div>
            </div>
          </div>
        )}

        {/* Experience List Cards */}
        <div className="experience-list">
          {experienceData.map((item, index) => (
            <div key={index} className="experience-card hud-panel">
              <div className="hud-panel-header">
                <span className="hud-terminal-tag">// EXP_LOG: {item.title.toUpperCase()}</span>
                <span className="experience-period-hud">[ {item.period} ]</span>
              </div>

              <div className="experience-header">
                <div className="experience-titles">
                  <h3 className="experience-role">{item.role}</h3>
                  <h4 className="experience-org">
                    {item.organization}
                  </h4>
                </div>
              </div>

              <p className="experience-summary">{item.summary}</p>

              {item.points && item.points.length > 0 && (
                <ul className="experience-bullets">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex}>
                      <span className="bullet-indicator">◆</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
