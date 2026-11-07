import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import RadialMenu from './RadialMenu';

export default function Navbar() {
  const [isRadialOpen, setIsRadialOpen] = useState(false);
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

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Futuristic System Identity Brand */}
          <Link to="/#home" className="navbar-brand">
            <div className="brand-hud-box">
              <span className="brand-logo-bracket">[</span>
              <span className="brand-logo-text">DEV_SYS</span>
              <span className="brand-logo-bracket">]</span>
            </div>
            <div className="brand-text-group">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-status-indicator">
                <span className="status-blink-dot"></span>
                <span className="brand-role-code">SYSTEM_ONLINE</span>
              </span>
            </div>
          </Link>

          {/* Right Header Controls: Circular SYSTEM Dial Button */}
          <div className="navbar-actions">
            <Link to="/certificates" className="nav-hud-sublink">
              <span className="sublink-bracket">[</span>
              <span>NPTEL CERT</span>
              <span className="sublink-bracket">]</span>
            </Link>

            {/* The One Circular SYSTEM Button */}
            <button
              className="system-radial-trigger-btn"
              onClick={() => setIsRadialOpen(true)}
              aria-label="Open Futuristic System Radial Menu"
              title="Open System Radial Interface"
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
        className={`floating-system-orb ${scrolled ? 'visible' : ''}`}
        onClick={() => setIsRadialOpen(true)}
        aria-label="Open System Menu"
        title="Open System Menu"
      >
        <div className="orb-scanner"></div>
        <div className="orb-ring"></div>
        <span className="orb-label">SYS</span>
      </button>

      {/* Radial System Menu Modal */}
      <RadialMenu 
        isOpen={isRadialOpen} 
        onClose={() => setIsRadialOpen(false)} 
      />
    </>
  );
}
