import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import RadialMenu from './RadialMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = useCallback(() => {
    document.body.style.overflow = '';
    setIsMenuOpen(false);
  }, []);

  const handleToggleMenu = useCallback((e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Global ESC key listener to ensure Escape always closes the radial menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        event.preventDefault();
        event.stopPropagation();
        handleCloseMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, handleCloseMenu]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Futuristic System Identity Brand */}
          <Link to="/#home" className="navbar-brand">
            <div className="brand-hud-box">
              <span className="brand-logo-text">HM</span>
            </div>
            <div className="brand-text-group">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-status-indicator">
                <span className="status-blink-dot"></span>
                <span className="brand-role-code">Available for Roles</span>
              </span>
            </div>
          </Link>

          {/* Right Header Controls: Circular SYSTEM Dial Button */}
          <div className="navbar-actions">
            <Link to="/certificates" className="nav-hud-sublink">
              <span>NPTEL Certificate</span>
            </Link>

            {/* The One Circular SYSTEM Button */}
            <button
              type="button"
              className="system-radial-trigger-btn"
              onClick={handleToggleMenu}
              aria-label={isMenuOpen ? "Close Radial Navigation Menu" : "Open Futuristic System Radial Menu"}
              title={isMenuOpen ? "Close Menu" : "Open System Radial Interface"}
              aria-expanded={isMenuOpen}
            >
              <div className="trigger-ring-outer"></div>
              <div className="trigger-ring-inner"></div>
              <div className="trigger-core">
                <span className="trigger-icon">⬡</span>
                <span className="trigger-text">SYSTEM</span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Floating System Quick-Access HUD Orb (Visible on scroll for instant accessibility on mobile/desktop) */}
      <button
        type="button"
        className={`floating-system-orb ${scrolled ? 'visible' : ''}`}
        onClick={handleToggleMenu}
        aria-label={isMenuOpen ? "Close System Menu" : "Open System Menu"}
        title={isMenuOpen ? "Close System Menu" : "Open System Menu"}
        aria-expanded={isMenuOpen}
      >
        <div className="orb-scanner"></div>
        <div className="orb-ring"></div>
        <span className="orb-label">SYS</span>
      </button>

      {/* Radial System Menu Modal */}
      <RadialMenu 
        isOpen={isMenuOpen} 
        onClose={handleCloseMenu} 
      />
    </>
  );
}
