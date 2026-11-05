import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { certificatesData, personalInfo } from '../data/portfolioData';

export default function CertificatesPage() {
  const nptelCert = certificatesData.find((c) => c.id === 'nptel-se');
  const otherCerts = certificatesData.filter((c) => c.id !== 'nptel-se');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="multipage-wrapper">
      <div className="container">
        {/* Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Portfolio Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Verified Certifications</span>
        </div>

        <div className="section-header" style={{ marginTop: '1rem' }}>
          <span className="section-eyebrow">Academic Credentials</span>
          <h1 className="section-title">Certifications and Accreditations</h1>
          <p className="section-subtitle">
            Formal national qualifications and certified competencies in Software Engineering, Python, Cybersecurity, and Java.
          </p>
        </div>

        {/* Featured NPTEL Certificate Card */}
        {nptelCert && (
          <div className="nptel-featured-card">
            <div className="nptel-featured-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Featured National Accreditation</span>
            </div>

            <div className="nptel-grid">
              {/* Left Column: Visual Certificate Document Preview */}
              <div className="nptel-preview-wrapper">
                <div className="cert-preview-frame">
                  <img
                    src={nptelCert.previewImage}
                    alt="NPTEL Certificate - Hazm Marzooq S - Introduction to Software Engineering"
                    className="cert-preview-img"
                  />
                  <div className="cert-preview-overlay">
                    <a
                      href={nptelCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary cert-overlay-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Open Full PDF in New Tab
                    </a>
                  </div>
                </div>
                <span className="cert-subtext">Click preview to view official PDF</span>
              </div>

              {/* Right Column: Verified Details & Credentials */}
              <div className="nptel-details-column">
                <div className="nptel-score-tag">
                  <span className="score-number">{nptelCert.score}</span>
                  <span className="score-tag-label">Consolidated Score</span>
                </div>

                <h2 className="nptel-cert-title">{nptelCert.title}</h2>
                <h3 className="nptel-issuer">{nptelCert.issuer}</h3>

                <div className="nptel-meta-table">
                  <div className="nptel-meta-row">
                    <span className="nptel-meta-k">Candidate Name:</span>
                    <span className="nptel-meta-v">{personalInfo.name}</span>
                  </div>
                  <div className="nptel-meta-row">
                    <span className="nptel-meta-k">Roll Number:</span>
                    <span className="nptel-meta-v nptel-mono">{nptelCert.rollNo}</span>
                  </div>
                  <div className="nptel-meta-row">
                    <span className="nptel-meta-k">Course Duration:</span>
                    <span className="nptel-meta-v">{nptelCert.period}</span>
                  </div>
                  <div className="nptel-meta-row">
                    <span className="nptel-meta-k">Academic Credits:</span>
                    <span className="nptel-meta-v">{nptelCert.credits}</span>
                  </div>
                </div>

                <p className="nptel-description">{nptelCert.description}</p>

                <div className="nptel-skills-covered">
                  <h4 className="skills-covered-title">Key Competencies Tested:</h4>
                  <div className="skills-covered-tags">
                    {nptelCert.skillsLearned.map((skill) => (
                      <span key={skill} className="skill-covered-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '5px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="nptel-actions">
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

                  <a
                    href={nptelCert.pdfUrl}
                    download="Hazm_Marzooq_NPTEL_Certificate.pdf"
                    className="btn btn-secondary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Certifications List */}
        <div className="additional-certs-section" style={{ marginTop: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.7rem', marginBottom: '1.8rem' }}>
            Additional Training and Foundations
          </h2>

          <div className="additional-certs-grid">
            {otherCerts.map((cert) => (
              <div key={cert.id} className="additional-cert-card">
                <div className="cert-card-header">
                  <span className="cert-period-badge">{cert.period}</span>
                  <span className="cert-status-pill">{cert.score}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills-list">
                  {cert.skillsLearned.map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="project-detail-bottom-nav" style={{ marginTop: '4rem' }}>
          <Link to="/" className="btn btn-secondary">
            Return to Main Portfolio
          </Link>
          <a
            href={personalInfo.resumeUrl}
            download="S_Hazm_Marzooq_Resume.pdf"
            className="btn btn-primary"
          >
            Download Complete Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
