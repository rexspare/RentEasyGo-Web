import "./overview.css";

const Overview = () => {
  return (
    <div className="overview-container" id="overview">
      <div className="overview-wrapper">
        <div className="overview-content">
          <div className="overview-header">
            <h2 className="overview-title">About RentEasyGo</h2>
            <p className="overview-subtitle">
              RentEasyGo is a modern rental marketplace designed to simplify how people rent and list properties. 
              Our platform connects renters and landlords through a transparent bidding system, ensuring fairness, 
              speed, and genuine interest on both sides.
            </p>
          </div>
          
          <div className="overview-features">
            <div className="overview-feature">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h3>Fast & Efficient</h3>
                <p>Unlike traditional rental apps that rely on slow communication and unverified interest, RentEasyGo uses a secure, pay-to-bid model to ensure only serious renters participate.</p>
              </div>
            </div>
            
            <div className="overview-feature">
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h3>Fair Competition</h3>
                <p>Save time for landlords and provide equal opportunity for everyone through our transparent bidding system.</p>
              </div>
            </div>
            
            <div className="overview-feature">
              <div className="feature-icon">🔒</div>
              <div className="feature-content">
                <h3>Secure Platform</h3>
                <p>Build trust through verified users and secure transactions, making property renting safe and reliable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
