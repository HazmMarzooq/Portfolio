import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Background & Career Objective</h2>
          <p className="section-subtitle">
            A glimpse into my academic journey, current technical focus, and professional aspirations.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Text */}
          <div className="about-bio-card">
            <h3 className="about-card-heading">Who I Am</h3>
            <div className="about-paragraphs">
              {aboutData.paragraphs.map((para, index) => (
                <p key={index} className="about-text">{para}</p>
              ))}
            </div>

            {/* Career Objective Block */}
            <div className="objective-box">
              <div className="objective-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="objective-content">
                <h4 className="objective-title">Career Objective</h4>
                <blockquote className="objective-quote">
                  "{personalInfo.careerObjective}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Quick Info & Highlights Sidebar */}
          <div className="about-highlights-card">
            <h3 className="about-card-heading">Quick Facts</h3>
            
            <div className="highlights-list">
              {aboutData.highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-focus-areas">
              <h4 className="focus-areas-title">Core Focus Areas</h4>
              <ul className="focus-list">
                <li>
                  <span className="focus-bullet"></span>
                  <span>Data Science & Practical Machine Learning</span>
                </li>
                <li>
                  <span className="focus-bullet"></span>
                  <span>Modern Responsive Web Development</span>
                </li>
                <li>
                  <span className="focus-bullet"></span>
                  <span>Cybersecurity Concepts & Systems Programming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
