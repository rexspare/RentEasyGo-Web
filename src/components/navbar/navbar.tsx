import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo-text-white.png';
import { CALENDLY_NEW_MEETING_URL } from '../../constants/links';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-index nav-inner">
          <Link to="Hero-ID" smooth={true} offset={0} duration={800} className="nav-logo">
            <img src={logo} alt="Solto" />
          </Link>

          <ul className="nav-menu">
            <li>
              <Link to="Hero-ID" smooth={true} offset={-80} duration={800} className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="overview" smooth={true} offset={-80} duration={800} className="nav-link">About</Link>
            </li>
            <li>
              <Link to="features" smooth={true} offset={-80} duration={800} className="nav-link">Features</Link>
            </li>
            <li>
              <Link to="mockups" smooth={true} offset={-80} duration={800} className="nav-link">Preview</Link>
            </li>
            <li>
              <Link to="mission" smooth={true} offset={-80} duration={800} className="nav-link">Mission</Link>
            </li>
            <li>
              <Link to="waiting-list" smooth={true} offset={-80} duration={800} className="nav-link">Join Waitlist</Link>
            </li>
          </ul>

          <div className="nav-cta">
            <a
              href={CALENDLY_NEW_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Are you an Investor?
            </a>
          </div>

          <button
            type="button"
            className={`nav-hamburger ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div className={`nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-drawer-header">
          <Link to="Hero-ID" smooth={true} offset={0} duration={800} onClick={closeMobile}>
            <img src={logo} alt="Solto" />
          </Link>
          <button type="button" className="nav-drawer-close" onClick={closeMobile} aria-label="Close menu">
            ×
          </button>
        </div>
        <ul className="nav-drawer-menu">
          <li>
            <Link to="Hero-ID" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>Home</Link>
          </li>
          <li>
            <Link to="overview" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>About</Link>
          </li>
          <li>
            <Link to="features" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>Features</Link>
          </li>
          <li>
            <Link to="mockups" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>Preview</Link>
          </li>
          <li>
            <Link to="mission" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>Mission</Link>
          </li>
          <li>
            <Link to="waiting-list" smooth={true} offset={-80} duration={800} className="nav-link" onClick={closeMobile}>Join Waitlist</Link>
          </li>
          <li className="nav-drawer-cta">
            <a
              href={CALENDLY_NEW_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
            >
              Are you an Investor?
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
