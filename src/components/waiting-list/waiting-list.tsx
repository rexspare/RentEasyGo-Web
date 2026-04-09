import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Headphones, Gem, Lightbulb, Lock, Check } from "lucide-react";
import "./waiting-list.css";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  phone: string;
  comments: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  phone?: string;
  comments?: string;
}

const wlBenefits = [
  { icon: Zap, title: "Early Access", description: "Be the first to experience our revolutionary rental platform" },
  { icon: Headphones, title: "Priority Support", description: "Get dedicated support and exclusive features" },
  { icon: Gem, title: "Exclusive Benefits", description: "Special pricing and premium features for early adopters" },
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
  "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Other"
];

const WaitingList = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwsMCd7tVLMVaCAEFjADPxOw--6HDNAZQgI8LoXAmPYFMmmMPfsPKTkm8wcqEIkhpJ7/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          country: formData.country,
          phone: formData.phone || '',
          comments: formData.comments || '',
          timestamp: new Date().toISOString()
        })
      });
      setIsSubmitted(true);
      setTimeout(() => {
        const el = document.getElementById('waiting-list');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      console.error("Error submitting form:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="waiting-list-container" id="waiting-list">
        <div className="waiting-list-wrapper">
          <div className="wl-features-section">
            <header className="wl-section-head">
              <p className="wl-section-label">Join Waitlist</p>
              <h2 className="wl-section-heading">Get exclusive benefits and be part of the rental revolution</h2>
            </header>
            <div className="wl-features-grid">
              {wlBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="wl-feature-item">
                    <span className="wl-feature-icon-wrap" aria-hidden>
                      <Icon className="wl-feature-icon" size={22} strokeWidth={1.75} />
                    </span>
                    <h3 className="wl-feature-title">{item.title}</h3>
                    <p className="wl-feature-desc">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="wl-main-row">
            <motion.div
              className="wl-form-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wl-success">
                <div className="wl-success-icon" aria-hidden>
                  <Check size={32} strokeWidth={2.5} />
                </div>
                <h2>You're on the list!</h2>
                <p>Thank you for joining our waiting list. We'll notify you as soon as Solto is available in your area.</p>
                <button
                  type="button"
                  className="wl-success-cta"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: "", email: "", country: "", phone: "", comments: "" });
                  }}
                >
                  Add Another Person
                </button>
              </div>
            </motion.div>

            <div className="wl-sidebar">
              <div className="wl-stats">
                <div className="wl-stat">
                  <div className="wl-stat-number">500+</div>
                  <div className="wl-stat-label">Early Adopters</div>
                </div>
                <div className="wl-stat">
                  <div className="wl-stat-number">50+</div>
                  <div className="wl-stat-label">Countries</div>
                </div>
                <div className="wl-stat">
                  <div className="wl-stat-number">99%</div>
                  <div className="wl-stat-label">Satisfaction</div>
                </div>
              </div>
              <div className="wl-info-card">
                <span className="wl-sidebar-icon-wrap" aria-hidden>
                  <Lightbulb size={20} strokeWidth={1.75} />
                </span>
                <h3>What to Expect</h3>
                <ul className="wl-info-list">
                  <li>Exclusive early access to the platform</li>
                  <li>Priority customer support</li>
                  <li>Special launch pricing</li>
                  <li>Regular updates on development progress</li>
                  <li>Invitation to beta testing program</li>
                </ul>
              </div>
              <div className="wl-trust-card">
                <span className="wl-sidebar-icon-wrap" aria-hidden>
                  <Lock size={20} strokeWidth={1.75} />
                </span>
                <h3>Your Privacy Matters</h3>
                <p>We respect your privacy and will never share your information with third parties. You can unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="waiting-list-container" id="waiting-list">
      <div className="waiting-list-wrapper">
        <div className="wl-features-section">
          <motion.header
            className="wl-section-head"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p className="wl-section-label">Join Waitlist</p>
            <h2 className="wl-section-heading">Get exclusive benefits and be part of the rental revolution</h2>
          </motion.header>
          <div className="wl-features-grid">
            {wlBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="wl-feature-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className="wl-feature-icon-wrap" aria-hidden>
                    <Icon className="wl-feature-icon" size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="wl-feature-title">{item.title}</h3>
                  <p className="wl-feature-desc">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="wl-main-row">
          <motion.div
            className="wl-form-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wl-form-header">
              <p className="wl-form-label">Sign up</p>
              <h2 className="wl-form-heading">Join the Waitlist</h2>
              <p className="wl-form-desc">Be among the first to experience the future of rental management. Get exclusive early access and priority updates when Solto launches.</p>
            </div>

            <form className="wl-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="fullName">
                  <span className="label-text">Full Name</span>
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? "error" : ""}
                  placeholder="John Doe"
                />
                {errors.fullName && <span className="wl-error">{errors.fullName}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="email">
                  <span className="label-text">Email Address</span>
                  <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="wl-error">{errors.email}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="country">
                  <span className="label-text">Country</span>
                  <span className="required">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={errors.country ? "error" : ""}
                >
                  <option value="">Choose your country</option>
                  {countries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.country && <span className="wl-error">{errors.country}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="phone">
                  <span className="label-text">Phone Number</span>
                  <span className="optional">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "error" : ""}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <span className="wl-error">{errors.phone}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="comments">
                  <span className="label-text">Comments or Thoughts</span>
                  <span className="optional">(Optional)</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  className={errors.comments ? "error" : ""}
                  placeholder="Share your thoughts about Solto, what features you'd like to see, or any questions you have..."
                  rows={4}
                />
                {errors.comments && <span className="wl-error">{errors.comments}</span>}
              </div>

              <div className="wl-submit-wrap">
                <button type="submit" className="wl-submit-btn" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}</span>
                  <span>{isSubmitting ? "⏳" : "→"}</span>
                </button>
              </div>

              <div className="wl-privacy">
                <span className="wl-privacy-icon-wrap" aria-hidden>
                  <Lock size={18} strokeWidth={1.75} />
                </span>
                <p className="privacy-note">
                  By joining our waitlist, you agree to receive updates about Solto.
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </motion.div>

          <div className="wl-sidebar">
            <div className="wl-stats">
              <div className="wl-stat">
                <div className="wl-stat-number">500+</div>
                <div className="wl-stat-label">Early Adopters</div>
              </div>
              <div className="wl-stat">
                <div className="wl-stat-number">50+</div>
                <div className="wl-stat-label">Countries</div>
              </div>
              <div className="wl-stat">
                <div className="wl-stat-number">99%</div>
                <div className="wl-stat-label">Satisfaction</div>
              </div>
            </div>
            <div className="wl-info-card">
              <span className="wl-sidebar-icon-wrap" aria-hidden>
                <Lightbulb size={20} strokeWidth={1.75} />
              </span>
              <h3>What to Expect</h3>
              <ul className="wl-info-list">
                <li>Exclusive early access to the platform</li>
                <li>Priority customer support</li>
                <li>Special launch pricing</li>
                <li>Regular updates on development progress</li>
                <li>Invitation to beta testing program</li>
              </ul>
            </div>
            <div className="wl-trust-card">
              <span className="wl-sidebar-icon-wrap" aria-hidden>
                <Lock size={20} strokeWidth={1.75} />
              </span>
              <h3>Your Privacy Matters</h3>
              <p>We respect your privacy and will never share your information with third parties. You can unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingList;
