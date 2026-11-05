import React from 'react';
import { Link } from 'react-router-dom';
import { experienceData, certificatesData } from '../data/portfolioData';

export default function Experience() {
  const nptelCert = certificatesData.find((c) => c.id === 'nptel-se');

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Practical Learning and Credentials</span>
          <h2 className="section-title">Experience and Certifications</h2>
          <p className="section-subtitle">
            Hands-on technical development through academic coursework, national certifications, and technical training.
          </p>
        </div>

        {/* NPTEL Special Highlight Card */}
        {nptelCert && (
          <div className="experience-featured-cert">
            <div className="cert-ribbon">National Accreditation</div>
            <div className="cert-featured-body">
              <div className="cert-featured-info">
                <span className="cert-featured-tag">NPTEL Elite Certification • 76%</span>
                <h3 className="cert-featured-title">{nptelCert.title}</h3>
                <h4 className="cert-featured-issuer">
                  {nptelCert.issuer}
                  <span className="experience-separator">•</span>
                  <span>Roll No: {nptelCert.rollNo}</span>
                </h4>
                <p className="cert-featured-desc">{nptelCert.description}</p>
                
                <div className="cert-featured-actions">
                  <a
                    href={nptelCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>View Official PDF</span>
                  </a>

                  <Link to="/certificates" className="btn btn-secondary">
                    <span>Inspect Full Accreditation Page</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="cert-featured-badge-box">
                <div className="score-circle">
                  <span className="score-val">76%</span>
                  <span className="score-lbl">Elite Score</span>
                </div>
                <span className="credits-lbl">4 Academic Credits</span>
              </div>
            </div>
          </div>
        )}

        <div className="experience-list" style={{ marginTop: '2.5rem' }}>
          {experienceData.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-titles">
                  <h3 className="experience-role">{item.role}</h3>
                  <h4 className="experience-org">
                    {item.organization}
                    <span className="experience-separator">•</span>
                    <span className="experience-badge-title">{item.title}</span>
                  </h4>
                </div>
                <div className="experience-period">
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="experience-summary">{item.summary}</p>

              {item.points && item.points.length > 0 && (
                <ul className="experience-bullets">
                  {item.points.map((point, pIndex) => (
                    <li key={pIndex}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
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
