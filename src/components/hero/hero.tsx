import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./hero.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-wrapper" id="Hero-ID">
      {/* Background Image */}
      <div className="hero-background" />

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Foreground Content */}
      <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-text-container">
          <h1 className="hero-title">
            RentEasyGo
          </h1>
          <p className="hero-subtitle">
            Smarter, Faster, Fairer<br />Property Renting
          </p>
          <p className="hero-description">
          The modern rental marketplace connecting renters and landlords through transparent bidding — fair, verified, and fast.
          </p>

          <div className="hero-cta-container">
            <Link to="waiting-list" smooth={true} offset={-100} duration={1000}>
              <button className="hero-cta-primary">
                Get Early Access
              </button>
            </Link>

            <button className="hero-cta-secondary"
              onClick={() => window.open("https://calendly.com/renteasygo/new-meeting", "_blank", "noopener,noreferrer")}
            >
              Become an Investor
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        {/* <div className="hero-floating-elements">
          <div className="floating-card floating-card-1">
            <div className="card-icon">🎯</div>
            <span>Smart Bidding</span>
          </div>
          <div className="floating-card floating-card-2">
            <div className="card-icon">✅</div>
            <span>Verified Users</span>
          </div>
          <div className="floating-card floating-card-3">
            <div className="card-icon">💬</div>
            <span>In-App Chat</span>
          </div>
        </div> */}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Discover More</span>
      </div>
    </div>
  );
};

export default Hero;
