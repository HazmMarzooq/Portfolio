import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Technical Skills</span>
          <h2 className="section-title">Technologies & Core Competencies</h2>
          <p className="section-subtitle">
            Languages, libraries, and tools I have actively worked with through academic coursework and practical projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.category} className="skill-category-card">
              <div className="skill-category-header">
                <div className="category-indicator"></div>
                <div>
                  <h3 className="category-title">{category.category}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="skills-pill-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-badge">{skill.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p>
            💡 <em>Continuous Learner: Always expanding my skillset and eager to adopt new frameworks, architectures, and tools.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
