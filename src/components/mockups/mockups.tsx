import "./mockups.css";
import homeImage from "../../assets/images/mockups/home.png";
import bidImage from "../../assets/images/mockups/bid.png";
import chatImage from "../../assets/images/mockups/chat.png";
import profileImage from "../../assets/images/mockups/profile.png";

const Mockups = () => {
  const mockups = [
    {
      title: "Home Screen",
      description: "Discover properties with smart filters and location-based search",
      screen: "home",
      image: homeImage
    },
    {
      title: "Bidding Screen",
      description: "Place competitive bids on your favorite properties",
      screen: "bidding",
      image: bidImage
    },
    {
      title: "Chat Screen",
      description: "Communicate securely with landlords and renters",
      screen: "chat",
      image: chatImage
    },
    {
      title: "Profile Screen",
      description: "Switch between renter and landlord modes seamlessly",
      screen: "profile",
      image: profileImage
    }
  ];

  return (
    <div className="mockups-container" id="mockups">
      <div className="mockups-wrapper">
        <div className="mockups-header">
          <h2 className="mockups-title">See RentEasyGo in Action</h2>
          <p className="mockups-subtitle">
            Experience the future of rental management through our intuitive mobile interface
          </p>
        </div>
        
        <div className="mockups-grid">
          {mockups.map((mockup, index) => (
            <div key={index} className="mockup-card">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className={`mockup-screen mockup-${mockup.screen}`}>
                    <div className="mockup-content">
                      <div className="mobile-app-screenshot">
                        {/* Replace this with your actual mobile app image */}
                        <img 
                          src={mockup.image} 
                          alt={`${mockup.title} Screenshot`}
                          className="screenshot-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <h3 className="mockup-title">{mockup.title}</h3>
                <p className="mockup-description">{mockup.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mockups;
