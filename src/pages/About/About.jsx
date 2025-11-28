import './About.css'
import { TrendingUp, Target, Eye, Star, Handshake, Lightbulb, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>About Swarna Bharat Trust</h1>
            <p>Discover our story, mission, and commitment to excellence in service</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="text-content slide-in-left">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to create meaningful change in our community, Swarna Bharat Trust 
                has been a beacon of hope and excellence for over a decade. Our journey began with a 
                simple yet powerful belief: that through dedicated service and unwavering commitment, 
                we can build a better tomorrow for all.
              </p>
              <p>
                From humble beginnings, we have grown into a trusted organization that touches countless 
                lives through our various initiatives and programs. Our success is measured not in 
                numbers alone, but in the positive impact we create and the trust we build within 
                our community.
              </p>
            </div>
            <div className="image-content slide-in-right">
              <div className="about-image">
                <div className="image-placeholder"><TrendingUp size={80} /></div>
                <p>Growing Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card fade-in">
              <div className="mv-icon"><Target size={64} /></div>
              <h3>Our Mission</h3>
              <p>
                To serve our community with excellence, integrity, and innovation while building 
                lasting relationships based on trust and mutual respect. We strive to create 
                positive change through dedicated service and meaningful initiatives.
              </p>
            </div>
            <div className="mv-card fade-in">
              <div className="mv-icon"><Eye size={64} /></div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and respected organization in our community, known for 
                our unwavering commitment to excellence, innovation, and positive impact. We 
                envision a future where our services contribute to a thriving, connected society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card fade-in">
              <div className="value-icon"><Star size={40} /></div>
              <h4>Excellence</h4>
              <p>We strive for the highest standards in all our endeavors</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon"><Handshake size={40} /></div>
              <h4>Integrity</h4>
              <p>Honesty and transparency guide our actions and decisions</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon"><Lightbulb size={40} /></div>
              <h4>Innovation</h4>
              <p>We embrace creativity and forward-thinking solutions</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon"><Heart size={40} /></div>
              <h4>Compassion</h4>
              <p>Empathy and care are at the heart of our service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About