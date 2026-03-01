import { motion } from 'framer-motion';
import "./mockups.css";
import homeImage from "../../assets/images/mockups/home.png";
import bidImage from "../../assets/images/mockups/bid.png";
import chatImage from "../../assets/images/mockups/chat.png";
import profileImage from "../../assets/images/mockups/profile.png";

const mockups = [
  { title: "Home Screen", description: "Discover properties with smart filters and location-based search", image: homeImage },
  { title: "Bidding Screen", description: "Place competitive bids on your favorite properties", image: bidImage },
  { title: "Chat Screen", description: "Communicate securely with landlords and renters", image: chatImage },
  { title: "Profile Screen", description: "Switch between renter and landlord modes seamlessly", image: profileImage },
];

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-24px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const Mockups = () => {
  return (
    <section className="mockups-section" id="mockups">
      <div className="mockups-inner">
        <motion.header
          className="mockups-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="mockups-label">Preview</p>
          <h2 className="mockups-heading">See RentEasyGo in action</h2>
          <p className="mockups-subtitle">
            Experience the future of rental management through our intuitive mobile interface
          </p>
        </motion.header>

        <div className="mockups-grid">
          {mockups.map((mockup, index) => (
            <motion.article key={index} className="mockup-card" {...cardMotion}>
              <div className="mockup-phone">
                <div className="mockup-screen-wrap">
                  <div className="mockup-content">
                    <img src={mockup.image} alt={`${mockup.title} Screenshot`} />
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <h3 className="mockup-title">{mockup.title}</h3>
                <p className="mockup-desc">{mockup.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mockups;
