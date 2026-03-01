import { Link } from 'react-scroll';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>RentEasyGo</h3>
          <p>Revolutionizing the rental experience with smart technology and seamless processes.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="waiting-list" smooth={true} offset={-80} duration={800}>
                Join Waiting List
              </Link>
            </li>
            <li>
              <a href="https://calendly.com/renteasygo/new-meeting" target="_blank" rel="noopener noreferrer">
                Invest
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/rent-easy-go" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Ready to transform rentals?</p>
          <p>Get in touch with our team.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 RentEasyGo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
