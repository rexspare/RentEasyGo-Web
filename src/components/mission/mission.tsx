import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Handshake, Search, Zap } from 'lucide-react';
import "./mission.css";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const values = [
  {
    icon: Handshake,
    title: "Trust",
    description: "Building confidence through verified users and secure transactions",
  },
  {
    icon: Search,
    title: "Transparency",
    description: "Clear, honest communication and fair bidding processes",
  },
  {
    icon: Zap,
    title: "Technology",
    description: "Innovative solutions that simplify the rental experience",
  },
];

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-inner">
        <div className="mission-content">
          <motion.header className="mission-head" {...fadeInUp}>
            <p className="mission-label">Our Mission</p>
            <h2 className="mission-heading">
              Revolutionize the rental experience by bridging trust, transparency, and technology—making renting easy, efficient, and equitable for everyone.
            </h2>
          </motion.header>

          <div className="mission-grid">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={index} className="mission-item" {...fadeInUp}>
                  <span className="mission-icon-wrap" aria-hidden>
                    <Icon className="mission-icon" size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mission-item-title">{item.title}</h3>
                  <p className="mission-item-desc">{item.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div className="mission-cta" {...fadeInUp}>
            <p className="mission-cta-text">Ready to transform how you rent?</p>
            <Link to="waiting-list" smooth={true} offset={-80} duration={800} className="mission-cta-btn">
              Join the Revolution
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
