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
        {/* HUD Breadcrumb */}
        <div className="page-breadcrumb-hud">
          <Link to="/" className="breadcrumb-link-hud">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            [ RETURN TO SYSTEM HOME ]
          </Link>
          <span className="breadcrumb-separator-hud">//</span>
          <span className="breadcrumb-current-hud">VERIFIED_ACCREDITATIONS</span>
        </div>

        <div className="section-header" style={{ marginTop: '1.5rem' }}>
          <span className="section-eyebrow">[ ACADEMIC CREDENTIALS // CERT_ARCHIVE ]</span>
          <h1 className="section-title">Certifications & Accreditations</h1>
          <p className="section-subtitle">
            Formal national qualifications and certified competencies in Software Engineering, Python, Cybersecurity, and Java.
          </p>
        </div>

        {/* Featured NPTEL Certificate Card - Futuristic HUD Frame */}
        {nptelCert && (
          <div className="nptel-featured-card hud-panel">
            <div className="hud-corner-bracket top-left"></div>
            <div className="hud-corner-bracket top-right"></div>
            <div className="hud-corner-bracket bottom-left"></div>
            <div className="hud-corner-bracket bottom-right"></div>

            <div className="nptel-featured-badge-hud">
              <span className="badge-pulse-dot"></span>
              <span>[ NATIONAL ACCREDITATION: ELITE TIER ]</span>
            </div>

            <div className="nptel-grid">
              {/* Left Column: Visual Certificate Document Preview */}
              <div className="nptel-preview-wrapper">
                <div className="cert-preview-frame hud-frame">
                  <img
                    src={nptelCert.previewImage}
                    alt="NPTEL Certificate - Hazm Marzooq S - Introduction to Software Engineering"
                    className="cert-preview-img"
                  />
                  <div className="cert-preview-overlay-hud">
                    <a
                      href={nptelCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-hud-primary cert-overlay-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Open Full PDF in New Tab
                    </a>
                  </div>
                </div>
                <span className="cert-subtext-hud">// CLICK PREVIEW TO INSPECT OFFICIAL DOCUMENT</span>
              </div>

              {/* Right Column: Verified Details & Credentials */}
              <div className="nptel-details-column">
                <div className="nptel-score-tag-hud">
                  <span className="score-number-hud">{nptelCert.score}</span>
                  <span className="score-tag-label-hud">Verified Examination Score</span>
                </div>

                <h2 className="nptel-cert-title">{nptelCert.title}</h2>
                <h3 className="nptel-issuer">{nptelCert.issuer}</h3>

                <div className="nptel-meta-table-hud">
                  <div className="nptel-meta-row-hud">
                    <span className="nptel-meta-k">CANDIDATE:</span>
                    <span className="nptel-meta-v">{personalInfo.name}</span>
                  </div>
                  <div className="nptel-meta-row-hud">
                    <span className="nptel-meta-k">ROLL_NUMBER:</span>
                    <span className="nptel-meta-v nptel-mono">{nptelCert.rollNo}</span>
                  </div>
                  <div className="nptel-meta-row-hud">
                    <span className="nptel-meta-k">DURATION:</span>
                    <span className="nptel-meta-v">{nptelCert.period}</span>
                  </div>
                  <div className="nptel-meta-row-hud">
                    <span className="nptel-meta-k">ACADEMIC_CREDITS:</span>
                    <span className="nptel-meta-v">{nptelCert.credits}</span>
                  </div>
                </div>

                <p className="nptel-description">{nptelCert.description}</p>

                <div className="nptel-skills-covered">
                  <h4 className="skills-covered-title-hud">// KEY COMPETENCIES VERIFIED:</h4>
                  <div className="skills-covered-tags">
                    {nptelCert.skillsLearned.map((skill) => (
                      <span key={skill} className="skill-covered-tag-hud">
                        <span className="tag-diamond">◆</span>
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
                    className="btn btn-hud-primary"
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
                    className="btn btn-hud-secondary"
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
          <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.8rem' }}>
            Additional Technical Foundations
          </h2>

          <div className="additional-certs-grid">
            {otherCerts.map((cert) => (
              <div key={cert.id} className="additional-cert-card hud-panel">
                <div className="cert-card-header">
                  <span className="cert-period-badge">[ {cert.period} ]</span>
                  <span className="cert-status-pill-hud">{cert.score}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-description">{cert.description}</p>

                <div className="cert-skills-list">
                  {cert.skillsLearned.map((skill) => (
                    <span key={skill} className="tech-badge-hud">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="project-detail-bottom-nav" style={{ marginTop: '4rem' }}>
          <Link to="/" className="btn btn-hud-secondary">
            Return to Main System
          </Link>
          <a
            href={personalInfo.resumeUrl}
            download="S_Hazm_Marzooq_Resume.pdf"
            className="btn btn-hud-primary"
          >
            Download Complete Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
