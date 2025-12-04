import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Info, Briefcase, Activity, Mail, X, Phone, MapPin, ChevronDown } from 'lucide-react'
import './Header.css'
import logoVideo from '../../assets/Logo-Clock-Wise.mp4'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuStructure = {
    home: { path: '/', label: 'Home' },
    about: {
      label: 'About',
      submenu: [
        { path: '/about-us', label: 'About Us' },
        { path: '/team-members', label: 'Team Members' },
        { path: '/activities', label: 'Activities' }
      ]
    },
    campus: {
      label: 'Campus',
      submenu: [
        { path: '/campus/sbt', label: 'SBT Campus' },
        { path: '/campus/nellore', label: 'Nellore' },
        { path: '/campus/vijayawada', label: 'Vijayawada' },
        { path: '/campus/hyderabad', label: 'Hyderabad' },
        { path: '/campus/csr', label: 'CSR' }
      ]
    },
    gallery: {
      label: 'Gallery',
      submenu: [
        { path: '/gallery/photos', label: 'Photo Gallery' },
        { path: '/gallery/videos', label: 'Video Gallery' }
      ]
    },
    activities: {
      label: 'Activities',
      submenu: [
        { path: '/news', label: 'News' },
        { path: '/posts', label: 'Posts' },
        { path: '/publishings', label: 'Publishings' }
      ]
    },
    contact: { path: '/contact', label: 'Contact Us', isCTA: true }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <div className="header-video-container">
                <video
                    className="logo-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={logoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              {/* Home */}
              <li className="nav-item">
                <Link
                  to={menuStructure.home.path}
                  className={`nav-link ${location.pathname === menuStructure.home.path ? 'active' : ''}`}
                >
                  {menuStructure.home.label}
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menuStructure.about.label}
                  <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu">
                  {menuStructure.about.submenu.map((item) => (
                    <li key={item.path}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Campus Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menuStructure.campus.label}
                  <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu">
                  {menuStructure.campus.submenu.map((item) => (
                    <li key={item.path}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Gallery Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menuStructure.gallery.label}
                  <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu">
                  {menuStructure.gallery.submenu.map((item) => (
                    <li key={item.path}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Activities Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menuStructure.activities.label}
                  <ChevronDown size={16} className="dropdown-icon" />
                </a>
                <ul className="dropdown-menu">
                  {menuStructure.activities.submenu.map((item) => (
                    <li key={item.path}>
                      <Link className="dropdown-item" to={item.path}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Contact CTA */}
              <li className="nav-item">
                <Link
                  to={menuStructure.contact.path}
                  className="nav-link nav-cta"
                >
                  {menuStructure.contact.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />
          )}

          {/* Hamburger Menu Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Menu Modal */}
          <div className={`mobile-menu-modal ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="menu-logo">
                {/* <div className="header-video-container-menu">
                  <video
                      className="logo-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                  >
                      <source src={logoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div> */}
                <h3>Swarna Bharat <span className="trust-text">Trust</span></h3>
              </div>
              <button 
                className="close-menu-btn" 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={2} />
              </button>
            </div>
            
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {/* Home */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.05s' }}>
                  <Link
                    to={menuStructure.home.path}
                    className={`mobile-nav-link ${location.pathname === menuStructure.home.path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menuStructure.home.label}
                  </Link>
                </li>

                {/* About Dropdown */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.1s' }}>
                  <div className="accordion accordion-flush" id="aboutAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutCollapse">
                          {menuStructure.about.label}
                        </button>
                      </h2>
                      <div id="aboutCollapse" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body">
                          {menuStructure.about.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="mobile-submenu-link"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Campus Dropdown */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.15s' }}>
                  <div className="accordion accordion-flush" id="campusAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#campusCollapse">
                          {menuStructure.campus.label}
                        </button>
                      </h2>
                      <div id="campusCollapse" className="accordion-collapse collapse" data-bs-parent="#campusAccordion">
                        <div className="accordion-body">
                          {menuStructure.campus.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="mobile-submenu-link"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Gallery Dropdown */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.2s' }}>
                  <div className="accordion accordion-flush" id="galleryAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#galleryCollapse">
                          {menuStructure.gallery.label}
                        </button>
                      </h2>
                      <div id="galleryCollapse" className="accordion-collapse collapse" data-bs-parent="#galleryAccordion">
                        <div className="accordion-body">
                          {menuStructure.gallery.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="mobile-submenu-link"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Activities Dropdown */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.25s' }}>
                  <div className="accordion accordion-flush" id="activitiesAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#activitiesCollapse">
                          {menuStructure.activities.label}
                        </button>
                      </h2>
                      <div id="activitiesCollapse" className="accordion-collapse collapse" data-bs-parent="#activitiesAccordion">
                        <div className="accordion-body">
                          {menuStructure.activities.submenu.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="mobile-submenu-link"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Contact CTA */}
                <li className="mobile-nav-item" style={{ animationDelay: '0.3s' }}>
                  <Link
                    to={menuStructure.contact.path}
                    className="mobile-nav-link mobile-nav-cta"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menuStructure.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="mobile-menu-footer">
              <p className="footer-tagline">Building Communities, Transforming Lives</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header