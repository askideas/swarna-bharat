import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Swarna Bharat Trust</h3>
              <p className="footer-tagline">Excellence in Service, Trust in Action</p>
            </div>
            <p className="footer-description">
              Dedicated to serving our community with integrity, innovation, and commitment to excellence. 
              Building a brighter future through dedicated service and unwavering trust.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services">Community Development</a></li>
              <li><a href="/services">Educational Programs</a></li>
              <li><a href="/services">Healthcare Initiatives</a></li>
              <li><a href="/services">Social Welfare</a></li>
              <li><a href="/services">Environmental Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="icon">📍</i> 123 Trust Avenue, City, State 12345</p>
              <p><i className="icon">📞</i> +1 (555) 123-4567</p>
              <p><i className="icon">✉️</i> info@swaranbharattrust.org</p>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Swarna Bharat Trust. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer