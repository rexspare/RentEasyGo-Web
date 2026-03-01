import { motion } from 'framer-motion';
import {
  Target,
  ShieldCheck,
  Wallet,
  MessageCircle,
  RefreshCw,
  Sparkles,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import "./features.css";

const features = [
  {
    icon: Target,
    title: "Smart Bidding System",
    description: "Renters place bids on listings; landlords choose the best offer with full transparency.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Users (KYC)",
    description: "Identity verification and badges build trust and keep transactions secure.",
  },
  {
    icon: Wallet,
    title: "No Commission Fees",
    description: "Zero commission for renters and landlords—you keep more of what matters.",
  },
  {
    icon: MessageCircle,
    title: "In-App Chat",
    description: "Communicate safely within the platform with contact details kept private.",
  },
  {
    icon: RefreshCw,
    title: "Dual Mode Access",
    description: "Switch between Renter and Landlord modes from your profile in one tap.",
  },
  {
    icon: Sparkles,
    title: "Subscription Options",
    description: "Premium benefits including reduced bid fees and featured listings.",
  },
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find or list properties with Google Maps and advanced filters.",
  },
  {
    icon: ArrowRight,
    title: "More Coming Soon",
    description: "New tools and updates are on the way in future releases.",
  },
];

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-24px" },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-inner">
        <motion.header
          className="features-head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="features-label">Key Features</p>
          <h2 className="features-heading">Everything you need for a modern rental experience</h2>
        </motion.header>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={index}
                className="feature-item"
                {...cardMotion}
              >
                <span className="feature-icon-wrap" aria-hidden>
                  <Icon className="feature-icon" size={22} strokeWidth={1.75} />
                </span>
                <h3 className="feature-name">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
