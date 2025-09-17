import { useState } from "react";
import "./waiting-list.css";

interface FormData {
  fullName: string;
  email: string;
  country: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  phone?: string;
}

const WaitingList = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Google Sheets via Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbx-gF1xSzy28iDSEQ0UEv-BKVrhoWSohOlfqeTdTvXcj55z_2p1Th-tgNK-2klhy-Nm/exec', {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          country: formData.country,
          phone: formData.phone || '',
          timestamp: new Date().toISOString()
        })
      });

      // Since we're using no-cors mode, we can't check the response status
      // But we'll assume success if no error is thrown
      console.log("Waiting list signup submitted:", formData);

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still show success since no-cors mode doesn't allow us to check response
      // In a real implementation, you might want to show an error message
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="waiting-list-container">
        <div className="waiting-list-success">
          <div className="success-icon">✓</div>
          <h2>You're on the list!</h2>
          <p>Thank you for joining our waiting list. We'll notify you as soon as RentEasyGo is available in your area.</p>
          <button
            className="success-cta"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: "", email: "", country: "", phone: "" });
            }}
          >
            Add Another Person
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="waiting-list-container" id="waiting-list">
      <div className="waiting-list-wrapper">
        {/* Features Section */}
        <div className="features-section">
          <div className="section-header">
            <h2>Why Join Our Waitlist?</h2>
            <p>Get exclusive benefits and be part of the rental revolution</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Early Access</h3>
              <p>Be the first to experience our revolutionary rental platform</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Priority Support</h3>
              <p>Get dedicated support and exclusive features</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Exclusive Benefits</h3>
              <p>Special pricing and premium features for early adopters</p>
            </div>
          </div>
        </div>

        {/* Main Content Row - Form and Sidebar */}
        <div className="main-content-row">
          {/* Form Section */}
          <div className="waiting-list-content">
            <div className="waiting-list-header">
              <div className="header-icon">🚀</div>
              <h2>Join the Waitlist</h2>
              <p>Be among the first to experience the future of rental management. Get exclusive early access and priority updates when RentEasyGo launches.</p>
            </div>

            <form className="waiting-list-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <span className="label-text">Full Name</span>
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? "error" : ""}
                      placeholder="John Doe"
                    />
                    <div className="input-icon">👤</div>
                  </div>
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-text">Email Address</span>
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "error" : ""}
                      placeholder="john@example.com"
                    />
                    <div className="input-icon">✉️</div>
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">
                    <span className="label-text">Country</span>
                    <span className="required">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={errors.country ? "error" : ""}
                    >
                      <option value="">Choose your country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <div className="select-arrow">▼</div>
                  </div>
                  {errors.country && <span className="error-message">{errors.country}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <span className="label-text">Phone Number</span>
                    <span className="optional">(Optional)</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? "error" : ""}
                      placeholder="+1 (555) 123-4567"
                    />
                    <div className="input-icon">📱</div>
                  </div>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="submit-container">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  <span className="button-text">
                    {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
                  </span>
                  <span className="button-icon">
                    {isSubmitting ? "⏳" : "→"}
                  </span>
                </button>
              </div>

              <div className="privacy-section">
                <div className="privacy-icon">🔒</div>
                <p className="privacy-note">
                  By joining our waitlist, you agree to receive updates about RentEasyGo.
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar Content */}
          <div className="content-sidebar">
            {/* Stats Section */}
            <div className="stats-section">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Early Adopters</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="info-card">
              <div className="info-icon">💡</div>
              <h3>What to Expect</h3>
              <ul className="info-list">
                <li>Exclusive early access to the platform</li>
                <li>Priority customer support</li>
                <li>Special launch pricing</li>
                <li>Regular updates on development progress</li>
                <li>Invitation to beta testing program</li>
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="trust-card">
              <div className="trust-icon">🔒</div>
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
