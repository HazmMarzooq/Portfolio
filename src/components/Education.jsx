import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            Formal academic foundation in computer science and engineering.
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-card-top">
                <div className="education-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="education-header-info">
                  <span className="education-period-badge">{item.period}</span>
                  <h3 className="education-degree">{item.degree}</h3>
                  <h4 className="education-institution">{item.institution}</h4>
                </div>
              </div>

              <div className="education-card-body">
                <div className="education-status-tag">
                  <span className="status-indicator-dot"></span>
                  {item.status}
                </div>
                <p className="education-description">{item.description}</p>
              </div>

              <div className="education-relevant-courses">
                <span className="course-tag-title">Key Coursework:</span>
                <div className="course-tags">
                  <span className="course-tag">Data Structures & Algorithms</span>
                  <span className="course-tag">Database Management Systems</span>
                  <span className="course-tag">Operating Systems</span>
                  <span className="course-tag">Computer Networks</span>
                  <span className="course-tag">Object-Oriented Programming</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
