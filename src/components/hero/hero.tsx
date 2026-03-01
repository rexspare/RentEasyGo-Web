import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./hero.css";

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
        <h1 className="hero-title">RentEasyGo</h1>
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
            onClick={() => window.open("https://calendly.com/renteasygo/new-meeting", "_blank", "noopener,noreferrer")}
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
