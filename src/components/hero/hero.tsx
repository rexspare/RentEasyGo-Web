import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { CALENDLY_NEW_MEETING_URL } from "../../constants/links";
import "./hero.css";
import logoText from "../../assets/images/logo-text-white.png";

const Hero = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="hero-wrapper" id="Hero-ID">
      <div className="hero-bg" aria-hidden="true" />
      <div className={`hero-content ${entered ? 'hero-enter hero-enter-active' : 'hero-enter'}`}>
        <img src={logoText} alt="Solto" className="hero-logo" />
        <p className="hero-subtitle">
          Smarter, Faster, Fairer<br />Property Renting
        </p>
        <p className="hero-description">
          The modern rental marketplace connecting renters and landlords through transparent bidding — fair, verified, and fast.
        </p>
        <div className="hero-cta-wrap">
          <Link to="waiting-list" smooth={true} offset={-80} duration={800}>
            <button type="button" className="hero-cta-primary">
              Get Early Access
            </button>
          </Link>
          <button
            type="button"
            className="hero-cta-secondary"
            onClick={() => window.open(CALENDLY_NEW_MEETING_URL, "_blank", "noopener,noreferrer")}
          >
            Become an Investor
          </button>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        <span>Discover More</span>
      </div>
    </div>
  );
};

export default Hero;
