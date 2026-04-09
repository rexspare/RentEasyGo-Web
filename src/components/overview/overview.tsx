import { motion } from 'framer-motion';
import { Zap, Target, Lock } from 'lucide-react';
import "./overview.css";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

const overviewItems = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "A secure, pay-to-bid model ensures only serious renters participate—no slow back-and-forth or unverified interest.",
  },
  {
    icon: Target,
    title: "Fair Competition",
    description: "Save time for landlords and give everyone equal opportunity through our transparent bidding system.",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description: "Verified users and secure transactions build trust and make property renting safe and reliable.",
  },
];

const Overview = () => {
  return (
    <section className="overview-section" id="overview">
      <div className="overview-inner">
        <motion.header className="overview-head" {...fadeInUp}>
          <p className="overview-label">About</p>
          <h2 className="overview-heading">
            Solto is a modern rental marketplace that connects renters and landlords through transparent bidding—fair, fast, and built on genuine interest.
          </h2>
        </motion.header>

        <div className="overview-grid">
          {overviewItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={index} className="overview-item" {...fadeInUp}>
                <span className="overview-icon-wrap" aria-hidden>
                  <Icon className="overview-icon" size={22} strokeWidth={1.75} />
                </span>
                <h3 className="overview-item-title">{item.title}</h3>
                <p className="overview-item-desc">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
