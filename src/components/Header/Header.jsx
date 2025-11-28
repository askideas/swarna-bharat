import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Info, Briefcase, Activity, Mail, X, Phone, MapPin } from 'lucide-react'
import './Header.css'
import logoVideo from '../../assets/logo.mp4'

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

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/activities', label: 'Activities', icon: Activity },
    { path: '/contact', label: 'Contact', icon: Mail }
  ]

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
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)} />
          )}

          {/* Mobile Menu Modal */}
          <div className={`mobile-menu-modal ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="menu-logo">
                <div className="header-video-container-menu">
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
                {navItems.map((item, index) => (
                  <li 
                    key={item.path} 
                    className="mobile-nav-item"
                    style={{ animationDelay: `${0.05 + index * 0.05}s` }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mobile-menu-footer">
              <p className="footer-tagline">Building Communities, Transforming Lives</p>
            </div>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header