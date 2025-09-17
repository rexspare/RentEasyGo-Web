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
           Innovation rarely makes noise<br />until it launches.
          </p>
          <p className="hero-description">
            Seeking visionary investors to help bring this to life.
          </p>

          <div className="hero-cta-container">
            <Link to="waiting-list" smooth={true} offset={-100} duration={1000}>
              <button className="hero-cta-primary">
                Join Waiting List
              </button>
            </Link>

            <button className="hero-cta-secondary"
              onClick={() => window.open("https://calendly.com/renteasygo/new-meeting", "_blank", "noopener,noreferrer")}
            >
              Invest
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="hero-floating-elements">
          <div className="floating-card floating-card-1">
            <div className="card-icon">🏠</div>
            <span>Smart Rentals</span>
          </div>
          <div className="floating-card floating-card-2">
            <div className="card-icon">⚡</div>
            <span>Fast Process</span>
          </div>
          <div className="floating-card floating-card-3">
            <div className="card-icon">🔒</div>
            <span>Secure</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Join Waiting List</span>
      </div>
    </div>
  );
};

export default Hero;
