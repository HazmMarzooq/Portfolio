import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">[ SYSTEM DOSSIER // 02 ]</span>
          <h2 className="section-title">Background & Career Objective</h2>
          <p className="section-subtitle">
            A glimpse into my academic journey, current technical focus, and professional aspirations.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Text - System Intelligence Panel */}
          <div className="about-bio-card hud-panel">
            <div className="hud-panel-header">
              <span className="hud-terminal-tag">// SYSTEM LOG: CANDIDATE PROFILE</span>
              <span className="hud-panel-code">AUTH_2027</span>
            </div>

            <div className="about-paragraphs">
              {aboutData.paragraphs.map((para, index) => (
                <p key={index} className="about-text">{para}</p>
              ))}
            </div>

            {/* Career Objective Directive Block */}
            <div className="objective-box hud-directive-box">
              <div className="objective-header-bar">
                <span className="directive-tag">[ DIRECTIVE // OBJECTIVE ]</span>
              </div>
              <div className="objective-content">
                <blockquote className="objective-quote">
                  "{personalInfo.careerObjective}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Quick Info & Highlights Sidebar */}
          <div className="about-highlights-card hud-panel">
            <div className="hud-panel-header">
              <span className="hud-terminal-tag">// SYSTEM TELEMETRY</span>
              <span className="hud-panel-code">SPECS</span>
            </div>
            
            <div className="highlights-list">
              {aboutData.highlights.map((item, index) => (
                <div key={index} className="highlight-item hud-spec-row">
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-focus-areas">
              <h4 className="focus-areas-title">[ CORE FOCUS DOMAINS ]</h4>
              <ul className="focus-list">
                <li>
                  <span className="focus-bullet-hud">⬡</span>
                  <span>Data Science & Practical Machine Learning</span>
                </li>
                <li>
                  <span className="focus-bullet-hud">⬡</span>
                  <span>Modern Responsive Web Development</span>
                </li>
                <li>
                  <span className="focus-bullet-hud">⬡</span>
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
