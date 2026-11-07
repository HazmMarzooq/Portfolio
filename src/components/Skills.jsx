import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">[ SYSTEM SKILLS MATRIX // 03 ]</span>
          <h2 className="section-title">Technical Skills & Competencies</h2>
          <p className="section-subtitle">
            Languages, libraries, and tools actively applied through academic coursework, national certifications, and practical software projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={category.category} className="skill-category-card hud-panel">
              <div className="hud-panel-header">
                <div className="category-header-info">
                  <span className="hud-terminal-tag">// MODULE 0{idx + 1}: {category.category.toUpperCase()}</span>
                  <p className="category-description">{category.description}</p>
                </div>
                <span className="hud-panel-code">ACTIVE</span>
              </div>

              <div className="skills-pill-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-hud-pill">
                    <span className="skill-indicator-tick">◆</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-badge-hud">{skill.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
