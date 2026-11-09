import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const radialSections = [
  { id: 'home', label: 'HOME', hash: '#home', angle: -90, icon: '01' },
  { id: 'about', label: 'ABOUT', hash: '#about', angle: -45, icon: '02' },
  { id: 'skills', label: 'SKILLS', hash: '#skills', angle: 0, icon: '03' },
  { id: 'education', label: 'EDUCATION', hash: '#education', angle: 45, icon: '04' },
  { id: 'projects', label: 'PROJECTS', hash: '#projects', angle: 90, icon: '05' },
  { id: 'experience', label: 'EXPERIENCE', hash: '#experience', angle: 135, icon: '06' },
  { id: 'resume', label: 'RESUME', hash: '#resume', angle: 180, icon: '07' },
  { id: 'contact', label: 'CONTACT', hash: '#contact', angle: 225, icon: '08' },
];

export default function RadialMenu({ isOpen, onClose }) {
  const [radius, setRadius] = useState(180);
  const location = useLocation();
  const navigate = useNavigate();

  // Responsive radius adjustment
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const minDimension = Math.min(width, height);

      if (minDimension < 420) {
        setRadius(115);
      } else if (minDimension < 640) {
        setRadius(135);
      } else if (minDimension < 900) {
        setRadius(165);
      } else {
        setRadius(195);
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleMenuItemClick = (e, targetId) => {
    // 1. Prevent event bubbling into parent toggles or overlay handlers
    e.stopPropagation();

    // 2. Clear overflow lock immediately so smooth scrolling is not blocked
    document.body.style.overflow = '';

    // 3. FIRST: Close the radial menu
    onClose();

    // 4. THEN: Navigate / scroll to target
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
      return;
    }

    // Keep URL hash updated
    window.history.replaceState(null, '', '#' + targetId);

    // Smoothly scroll to the target section
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  };

  const handleOverlayClick = (e) => {
    // Only close if clicked outside the radial menu dial
    if (e.target.closest && e.target.closest('.radial-menu-dial')) {
      return;
    }
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="radial-menu-overlay"
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          e.stopPropagation();
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="System Radial Navigation"
      tabIndex={-1}
    >
      {/* Background HUD Grid lines */}
      <div className="radial-backdrop-grid"></div>

      {/* Main Radial Dial Container */}
      <div 
        className="radial-menu-dial"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: radius * 2 + 140,
          height: radius * 2 + 140,
        }}
      >
        {/* Orbital Background Rings */}
        <div className="radial-ring radial-ring-outer"></div>
        <div 
          className="radial-ring radial-ring-orbit" 
          style={{ width: radius * 2, height: radius * 2 }}
        ></div>
        <div className="radial-ring radial-ring-inner"></div>

        {/* Center Glowing SYSTEM Core Button */}
        <button
          type="button"
          className="radial-center-core"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close Radial Menu"
          title="Close Menu"
        >
          <div className="core-inner-glow"></div>
          <div className="core-content">
            <span className="core-tag">NAV</span>
            <span className="core-close-hint">CLOSE</span>
          </div>
        </button>

        {/* 8 Radial Section Nodes */}
        {radialSections.map((sec) => {
          const rad = (sec.angle * Math.PI) / 180;
          const x = Math.round(radius * Math.cos(rad));
          const y = Math.round(radius * Math.sin(rad));

          return (
            <button
              key={sec.id}
              type="button"
              className="radial-node-btn"
              onClick={(e) => handleMenuItemClick(e, sec.id)}
              style={{
                '--node-x': `${x}px`,
                '--node-y': `${y}px`,
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              title={`Scroll to ${sec.label}`}
            >
              <span className="node-num">{sec.icon}</span>
              <span className="node-label">{sec.label}</span>
              <div className="node-glow-point"></div>
            </button>
          );
        })}
      </div>

      <div className="radial-footer-hint">
        Click any section to navigate • ESC to close
      </div>
    </div>
  );
}
