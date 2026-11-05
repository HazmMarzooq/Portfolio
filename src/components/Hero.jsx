import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>Open to Internship & Engineering Roles</span>
          </div>

          <h1 className="hero-greeting">
            Hello, I'm <span className="hero-name-highlight">{personalInfo.name}</span>
          </h1>

          <p className="hero-headline">
            {personalInfo.headline}
          </p>

          <p className="hero-intro">
            {personalInfo.shortIntro}
          </p>

          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={handleScrollToProjects}
            >
              <span>View My Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              className="btn btn-secondary"
              download="S_Hazm_Marzooq_Resume.pdf"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-linkedin-btn"
              aria-label="Connect with Hazm Marzooq on LinkedIn"
              title="Connect on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="hero-quick-meta">
            <div className="quick-meta-item">
              <span className="meta-label">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="meta-value">{personalInfo.email}</a>
            </div>
            <div className="quick-meta-item">
              <span className="meta-label">Phone:</span>
              <a href={`tel:${personalInfo.phone}`} className="meta-value">+91 {personalInfo.phone}</a>
            </div>
            <div className="quick-meta-item">
              <span className="meta-label">Location:</span>
              <span className="meta-value">{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Circular Profile Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <div className="hero-glow-ring"></div>
            {imageError ? (
              <div className="profile-placeholder" aria-label="Hazm Marzooq profile">
                <span className="placeholder-initials">HM</span>
              </div>
            ) : (
              <img 
                src={personalInfo.profileImage} 
                alt={`${personalInfo.name} - Software Developer Profile`} 
                className="hero-profile-img"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
