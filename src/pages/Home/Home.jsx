import './Home.css'
import { Star, Handshake, Lightbulb, Target } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text slide-in-left">
              <h1>Welcome to Swarna Bharat Trust</h1>
              <p className="hero-subtitle">
                Building a Brighter Future Through Excellence and Service
              </p>
              <p className="hero-description">
                We are dedicated to serving our community with integrity, innovation, and an unwavering 
                commitment to excellence. Our mission is to create positive change and build lasting 
                relationships based on trust and mutual respect.
              </p>
              <div className="hero-buttons">
                <a href="/about" className="btn btn-primary">Learn More</a>
                <a href="/contact" className="btn btn-secondary">Get in Touch</a>
              </div>
            </div>
            <div className="hero-image slide-in-right">
              <div className="hero-visual">
                <div className="floating-card">
                  <h3>Our Mission</h3>
                  <p>Excellence in Service</p>
                </div>
                <div className="floating-card">
                  <h3>Our Vision</h3>
                  <p>Trust in Action</p>
                </div>
                <div className="floating-card">
                  <h3>Our Values</h3>
                  <p>Community First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Why Choose Swarna Bharat Trust</h2>
            <p>Discover what makes us the trusted choice for excellence and service</p>
          </div>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><Star size={48} /></div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in everything we do, ensuring quality and reliability in all our services.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><Handshake size={48} /></div>
              <h3>Trust</h3>
              <p>Built on a foundation of trust and transparency, we foster long-lasting relationships with our community.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><Lightbulb size={48} /></div>
              <h3>Innovation</h3>
              <p>We embrace innovative solutions and modern approaches to address contemporary challenges effectively.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><Target size={48} /></div>
              <h3>Impact</h3>
              <p>Our initiatives create meaningful, lasting impact in the communities we serve across various sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Community Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in our mission to create positive change and build a better tomorrow for our community.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Start Your Journey</a>
              <a href="/services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home