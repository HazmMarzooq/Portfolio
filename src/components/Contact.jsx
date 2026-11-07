import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot field for bot protection
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [rateLimitError, setRateLimitError] = useState(false);

  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    } else if (trimmedName.length > 80) {
      errs.name = 'Name must not exceed 80 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email address.';
    } else if (trimmedEmail.length > 100) {
      errs.email = 'Email address must not exceed 100 characters.';
    }

    if (formData.subject.trim().length > 120) {
      errs.subject = 'Subject must not exceed 120 characters.';
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    } else if (trimmedMessage.length > 2000) {
      errs.message = 'Message must not exceed 2000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Security Check 1: Honeypot trap for automated bots
    if (formData.botField) {
      setSubmitted(true);
      return;
    }

    // Security Check 2: Client Rate Limiting (1 submission per 20 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 20000) {
      setRateLimitError(true);
      setTimeout(() => setRateLimitError(false), 5000);
      return;
    }

    // Security Check 3: Strict Field Validation
    if (!validate()) {
      return;
    }

    setLoading(true);
    setRateLimitError(false);

    // Simulated secure dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setLastSubmitTime(Date.now());
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botField: ''
      });

      // Clear success notification after 7 seconds
      setTimeout(() => setSubmitted(false), 7000);
    }, 500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project idea, or just want to connect, feel free to reach out directly through this form.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            <div className="hud-panel contact-telemetry-panel">
              <div className="hud-panel-header">
                <span className="hud-terminal-tag">Contact Information</span>
              </div>

              <div className="contact-cards-list">
                {/* Email Card */}
                <a href={`mailto:${personalInfo.email}`} className="contact-method-card hud-comm-card">
                  <div className="contact-icon-wrapper-hud">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-method-info">
                    <span className="contact-method-label-hud">Direct Email</span>
                    <span className="contact-method-value">{personalInfo.email}</span>
                  </div>
                </a>

                {/* Phone Card */}
                <a href={`tel:${personalInfo.phone}`} className="contact-method-card hud-comm-card">
                  <div className="contact-icon-wrapper-hud">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-method-info">
                    <span className="contact-method-label-hud">Phone</span>
                    <span className="contact-method-value">+91 {personalInfo.phone}</span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="contact-method-card hud-comm-card">
                  <div className="contact-icon-wrapper-hud">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-method-info">
                    <span className="contact-method-label-hud">Location</span>
                    <span className="contact-method-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Box */}
              <div className="contact-social-box-hud">
                <span className="social-box-title-hud">Connect on Social Platforms:</span>
                <div className="social-links-list">
                  <a 
                    href={personalInfo.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-hud-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"></path>
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href={personalInfo.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-hud-btn"
                    aria-label="GitHub Profile"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Terminal */}
          <div className="contact-form-column">
            <div className="contact-form-card hud-panel hud-terminal-panel">
              <div className="hud-corner-bracket top-left"></div>
              <div className="hud-corner-bracket top-right"></div>
              <div className="hud-corner-bracket bottom-left"></div>
              <div className="hud-corner-bracket bottom-right"></div>

              <div className="hud-panel-header">
                <span className="hud-terminal-tag">Send a Message</span>
              </div>

              {submitted && (
                <div className="form-alert-success-hud" role="status">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Message sent successfully! A prompt response will be delivered.</span>
                </div>
              )}

              {rateLimitError && (
                <div className="form-alert-error-hud" role="alert">
                  <span>Please wait 20 seconds before sending another message.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Honeypot field for bot spam prevention */}
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                />

                <div className="form-group">
                  <label htmlFor="name" className="form-label-hud">
                    TRANSMITTER_ID (YOUR NAME) <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={80}
                    placeholder="Enter full name or recruiter identity..."
                    className={`form-input-hud ${errors.name ? 'input-error' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="field-error-text-hud">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label-hud">
                    RETURN_ROUTE (EMAIL ADDRESS) <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="e.g. recruiter@company.com"
                    className={`form-input-hud ${errors.email ? 'input-error' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="field-error-text-hud">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label-hud">TRANSMISSION_SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={120}
                    placeholder="e.g. Internship Opportunity / Software Engineering Role"
                    className={`form-input-hud ${errors.subject ? 'input-error' : ''}`}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <span id="subject-error" className="field-error-text-hud">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label-hud">
                    PAYLOAD_MESSAGE <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={2000}
                    placeholder="Transmit your message or inquiry..."
                    className={`form-textarea-hud ${errors.message ? 'input-error' : ''}`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && <span id="message-error" className="field-error-text-hud">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-hud-primary form-submit-btn-hud"
                  aria-busy={loading}
                >
                  {loading ? (
                    <span>DISPATCHING PACKETS...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
