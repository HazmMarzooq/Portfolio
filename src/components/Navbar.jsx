import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', path: '/', hash: '#home' },
  { name: 'About', path: '/', hash: '#about' },
  { name: 'Skills', path: '/', hash: '#skills' },
  { name: 'Education', path: '/', hash: '#education' },
  { name: 'Projects', path: '/projects', hash: '#projects' },
  { name: 'Certificates', path: '/certificates', hash: '' },
  { name: 'Experience', path: '/', hash: '#experience' },
  { name: 'Resume', path: '/', hash: '#resume' },
  { name: 'Contact', path: '/', hash: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section if on homepage
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'resume', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    setIsOpen(false);

    // If it's a dedicated page (like /certificates or /projects)
    if (link.path !== '/') {
      return; // Link component handles route transition
    }

    // If on home page, smooth scroll to hash
    if (location.pathname === '/') {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(link.hash.substring(1));
      }
    } else {
      // If currently on a subpage, navigate to /#hash
      e.preventDefault();
      navigate('/' + link.hash);
    }
  };

  const isLinkActive = (link) => {
    if (link.path !== '/' && location.pathname.startsWith(link.path)) {
      return true;
    }
    if (location.pathname === '/' && link.hash && activeSection === link.hash.substring(1)) {
      return true;
    }
    return false;
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link 
          to="/#home" 
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, { path: '/', hash: '#home' })}
        >
          <span className="brand-logo-text">&lt;HM /&gt;</span>
          <span className="brand-name">{personalInfo.name}</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="navbar-nav desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path !== '/' ? link.path : '/' + link.hash}
              className={`nav-link ${isLinkActive(link) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path !== '/' ? link.path : '/' + link.hash}
                className={`mobile-nav-link ${isLinkActive(link) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={personalInfo.resumeUrl} 
              className="btn btn-primary mobile-resume-btn"
              download="S_Hazm_Marzooq_Resume.pdf"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
