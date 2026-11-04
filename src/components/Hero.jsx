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
            <span>Open to Internship Opportunities</span>
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
              View My Projects
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
              Download Resume
            </a>
          </div>

          <div className="hero-quick-meta">
            <div className="quick-meta-item">
              <span className="meta-label">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="meta-value">{personalInfo.email}</a>
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
              <div className="profile-placeholder" aria-label="Profile placeholder">
                <span className="placeholder-initials">HM</span>
                <span className="placeholder-subtext">Add profile.jpg in src/assets/images/</span>
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
