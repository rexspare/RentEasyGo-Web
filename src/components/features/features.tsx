import "./features.css";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Smart Bidding System",
      description: "Renters can place bids on available listings, giving landlords the flexibility to choose the best offer."
    },
    {
      icon: "✅",
      title: "Verified Users (KYC)",
      description: "Build trust through identity verification badges ensuring secure and reliable transactions."
    },
    {
      icon: "💰",
      title: "No Commission Fees",
      description: "Zero commission charges from either side - renters and landlords keep more of their money."
    },
    {
      icon: "💬",
      title: "In-App Chat",
      description: "Communicate directly within the platform while keeping contact details private for safety."
    },
    {
      icon: "🔄",
      title: "Dual Mode Access",
      description: "Easily switch between Renter and Landlord modes from your profile for seamless experience."
    },
    {
      icon: "⭐",
      title: "Subscription Options",
      description: "Unlock premium benefits such as reduced bid fees and featured listings."
    },
    {
      icon: "📍",
      title: "Location-Based Search",
      description: "Find or list properties effortlessly using Google Maps and advanced filters."
    },
    {
      icon: "🚀",
      title: "More Features Coming Soon",
      description: "We’re just getting started! Exciting new tools and updates are on the way in future releases."
    }
  ];

  return (
    <div className="features-container" id="features">
      <div className="features-wrapper">
        <div className="features-header">
          <h2 className="features-title">Key Features</h2>
          <p className="features-subtitle">
            Everything you need for a modern rental experience
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
