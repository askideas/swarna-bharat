import { useRef, useEffect } from 'react'
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Star, Handshake, Lightbulb, Target, ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Home = () => {
  const swiperRef = useRef(null)

  const slides = [
    {
      id: 1,
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/hero-1.jpg',
      title: 'Welcome to Swarna Bharat Trust',
      subtitle: 'Building a Brighter Future Through Excellence and Service',
      description: 'We are dedicated to serving our community with integrity, innovation, and an unwavering commitment to excellence.',
      primaryBtn: 'Learn More',
      secondaryBtn: 'Get in Touch'
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/hero-2.jpg',
      title: 'Empowering Communities Together',
      subtitle: 'Creating Lasting Impact Through Dedicated Service',
      description: 'Our mission is to create positive change and build lasting relationships based on trust and mutual respect.',
      primaryBtn: 'Our Services',
      secondaryBtn: 'Join Us'
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/hero-2.jpg',
      title: 'Excellence in Every Endeavor',
      subtitle: 'Trust, Innovation, and Community at Our Core',
      description: 'With years of experience and unwavering dedication, we continue to serve and make a meaningful difference.',
      primaryBtn: 'Our Story',
      secondaryBtn: 'Contact Us'
    }
  ]

  return (
    <div className="home">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
            bulletClass: 'pagination-dot',
            bulletActiveClass: 'active'
          }}
          navigation={{
            prevEl: '.slider-btn-prev',
            nextEl: '.slider-btn-next'
          }}
          effect="slide"
          speed={800}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide">
                <div className="slide-image">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                  <div className="slide-overlay"></div>
                </div>
                <div className="slide-content">
                  <div className="container">
                    <div className="slide-text">
                      <h1 className="slide-title">{slide.title}</h1>
                      <p className="slide-subtitle">{slide.subtitle}</p>
                      <p className="slide-description">{slide.description}</p>
                      <div className="slide-buttons">
                        <a href="/about" className="btn btn-primary">{slide.primaryBtn}</a>
                        <a href="/contact" className="btn btn-secondary">{slide.secondaryBtn}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="slider-btn slider-btn-prev">
          <ChevronLeft size={24} />
        </button>
        <button className="slider-btn slider-btn-next">
          <ChevronRight size={24} />
        </button>

        {/* Custom Pagination */}
        <div className="custom-pagination"></div>
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