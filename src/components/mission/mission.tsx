import "./mission.css";

const Mission = () => {
  return (
    <div className="mission-container" id="mission">
      <div className="mission-wrapper">
        <div className="mission-content">
          <div className="mission-header">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              Our mission is to revolutionize the rental experience by bridging trust, 
              transparency, and technology — making renting easy, efficient, and equitable for everyone.
            </p>
          </div>
          
          <div className="mission-values">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Building confidence through verified users and secure transactions</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparency</h3>
              <p>Clear, honest communication and fair bidding processes</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Technology</h3>
              <p>Innovative solutions that simplify the rental experience</p>
            </div>
          </div>
          
          <div className="mission-cta">
            <p className="cta-text">Ready to transform how you rent?</p>
            <a href="#waiting-list" className="cta-button">
              Join the Revolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
