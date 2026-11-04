import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Practical Learning</span>
          <h2 className="section-title">Experience & Training</h2>
          <p className="section-subtitle">
            Hands-on technical development through academic coursework, internships, and certifications.
          </p>
        </div>

        <div className="experience-list">
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
                      <span className="bullet-icon">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="experience-note">
          <p>
            ℹ️ <em>Looking for Summer / Fall Internships to contribute meaningfully to software development and data engineering teams.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
