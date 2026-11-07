import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-hud">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <span className="footer-brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Computer Science and Engineering Student, Software Developer • Data Science • Web Development • Cybersecurity
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-links">
              <Link to="/#home">HOME</Link>
              <Link to="/#about">ABOUT</Link>
              <Link to="/#skills">SKILLS</Link>
              <Link to="/#education">EDUCATION</Link>
              <Link to="/projects">PROJECTS</Link>
              <Link to="/certificates">CERTIFICATES</Link>
              <Link to="/#experience">EXPERIENCE</Link>
              <Link to="/#resume">RESUME</Link>
              <Link to="/#contact">CONTACT</Link>
            </div>

            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn-hud"
              aria-label="Scroll back to top"
              title="Return to Top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name} • Built with React & Vite
          </p>
          <div className="footer-social-icons">
            <a 
              href={personalInfo.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="footer-social-icon-hud"
              title="LinkedIn Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"></path>
              </svg>
            </a>
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="footer-social-icon-hud"
              title="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              aria-label="Send an Email"
              className="footer-social-icon-hud"
              title="Send an Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
