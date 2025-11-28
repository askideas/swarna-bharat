import { useRef, useEffect, useState } from 'react'
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { 
  Star, Handshake, Lightbulb, Target, ChevronLeft, ChevronRight,
  Building2, GraduationCap, Code, Users, Settings, Eye, 
  Stethoscope, Heart, Home as HomeIcon
} from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Home = () => {
  const swiperRef = useRef(null)
  const [animatedElements, setAnimatedElements] = useState(new Set())

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            setAnimatedElements(prev => new Set([...prev, entry.target]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const animatedSelectors = [
      '.services-section .section-header',
      '.service-card',
      '.about-section .about-text',
      '.about-section .about-video',
      '.features .section-header',
      '.feature-card',
      '.stats .stat-card',
      '.cta .cta-content'
    ]

    const observeElements = () => {
      animatedSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.classList.add('animate-on-scroll')
          observer.observe(el)
        })
      })
    }

    // Delay observation to ensure DOM is ready
    const timer = setTimeout(observeElements, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // Counter animation for statistics
  useEffect(() => {
    const animateCounter = (element, target, suffix = '') => {
      const duration = 2000
      const start = 0
      const increment = target / (duration / 16)
      let current = start

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        let displayValue = Math.floor(current)
        if (target >= 1000) {
          displayValue = displayValue >= 1000 ? Math.floor(displayValue / 1000) + 'K' : displayValue
        }
        element.textContent = displayValue + suffix
      }, 16)
    }

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter')
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'))
            const suffix = target >= 15 && target < 100 ? '+' : target >= 100 ? '+' : ''
            animateCounter(counter, target, suffix)
          })
          statsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const statsSection = document.querySelector('.stats')
    if (statsSection) {
      statsObserver.observe(statsSection)
    }

    return () => statsObserver.disconnect()
  }, [])

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
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/hero-3.jpg',
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

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Services</h2>
            <p>Comprehensive solutions designed to create positive impact and drive meaningful change</p>
          </div>
          <div className="services-grid">
            <div className="service-card" style={{animationDelay: '0.1s'}}>
              <div className="service-icon">
                <Building2 size={48} />
              </div>
              <h3>Swarna Bharathi Vidyamandir</h3>
              <p>Providing quality education and nurturing young minds for a brighter future through innovative learning approaches.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.2s'}}>
              <div className="service-icon">
                <GraduationCap size={48} />
              </div>
              <h3>Residential Bridge School</h3>
              <p>Bridging educational gaps through residential programs that provide comprehensive learning support and development.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.3s'}}>
              <div className="service-icon">
                <Code size={48} />
              </div>
              <h3>Swarna Bharat Institute of Rural Entrepreneurship Development (SIRED)</h3>
              <p>Empowering rural communities through entrepreneurship development and innovative business solutions.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.4s'}}>
              <div className="service-icon">
                <Users size={48} />
              </div>
              <h3>SOMA - Skill Development & Technical Training Institute</h3>
              <p>Building technical expertise and professional skills to enhance employment opportunities and career growth.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.5s'}}>
              <div className="service-icon">
                <HomeIcon size={48} />
              </div>
              <h3>Elders Home</h3>
              <p>Providing compassionate care and a comfortable living environment for elderly community members.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.6s'}}>
              <div className="service-icon">
                <Settings size={48} />
              </div>
              <h3>Farmers Training Center</h3>
              <p>Supporting agricultural development through modern farming techniques and sustainable practices training.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.7s'}}>
              <div className="service-icon">
                <Eye size={48} />
              </div>
              <h3>LV Prasad Eye Institute</h3>
              <p>Delivering world-class eye care services and promoting vision health in our community.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.8s'}}>
              <div className="service-icon">
                <Stethoscope size={48} />
              </div>
              <h3>Veterinary Hospital</h3>
              <p>Comprehensive veterinary care services ensuring the health and wellbeing of animals in our community.</p>
              <button className="service-btn">Read More</button>
            </div>
            
            <div className="service-card" style={{animationDelay: '0.9s'}}>
              <div className="service-icon">
                <Heart size={48} />
              </div>
              <h3>Rural Health Center & Dental Hospital</h3>
              <p>Providing accessible healthcare and dental services to rural communities with modern medical facilities.</p>
              <button className="service-btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text slide-in-left">
              <div className="section-header-left">
                <h2>About Swarna Bharat Trust</h2>
                <p className="section-subtitle">Building Communities, Transforming Lives</p>
              </div>
              <div className="about-description">
                <p>
                  Founded with a vision to create meaningful change in our community, Swarna Bharat Trust 
                  has been a beacon of hope and excellence for over a decade. Our journey began with a 
                  simple yet powerful belief: that through dedicated service and unwavering commitment, 
                  we can build a better tomorrow for all.
                </p>
                <p>
                  From humble beginnings, we have grown into a trusted organization that touches countless 
                  lives through our various initiatives and programs. We focus on education, healthcare, 
                  skill development, and community welfare, creating comprehensive solutions that address 
                  the real needs of our society.
                </p>
                <p>
                  Our success is measured not in numbers alone, but in the positive impact we create, 
                  the trust we build within our community, and the sustainable change we bring to people's lives. 
                  Every project we undertake is driven by our core values of excellence, integrity, and compassion.
                </p>
              </div>
              {/* <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-text">Years of Service</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-text">Lives Impacted</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">9</span>
                  <span className="stat-text">Major Initiatives</span>
                </div>
              </div> */}
              <a href="/about" className="btn btn-primary">Know More</a>
            </div>
            
            <div className="about-video slide-in-left">
              <div className="video-player">
                <video 
                  controls 
                  poster="/api/placeholder/600/400"
                  className="trust-video"
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)"/>
                      <path d="M25 20L40 30L25 40V20Z" fill="var(--primary-color)"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="video-caption">
                <h4>Our Journey of Impact</h4>
                <p>Discover how Swarna Bharat Trust has been transforming communities through dedicated service and innovative solutions.</p>
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
            <div className="feature-card" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon"><Star size={48} /></div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards in everything we do, ensuring quality and reliability in all our services.</p>
            </div>
            <div className="feature-card" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon"><Handshake size={48} /></div>
              <h3>Trust</h3>
              <p>Built on a foundation of trust and transparency, we foster long-lasting relationships with our community.</p>
            </div>
            <div className="feature-card" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon"><Lightbulb size={48} /></div>
              <h3>Innovation</h3>
              <p>We embrace innovative solutions and modern approaches to address contemporary challenges effectively.</p>
            </div>
            <div className="feature-card" style={{animationDelay: '0.4s'}}>
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
            <div className="stat-card" style={{animationDelay: '0.1s'}}>
              <div className="stat-number counter" data-target="500">0</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.2s'}}>
              <div className="stat-number counter" data-target="10000">0</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.3s'}}>
              <div className="stat-number counter" data-target="50">0</div>
              <div className="stat-label">Community Partners</div>
            </div>
            <div className="stat-card" style={{animationDelay: '0.4s'}}>
              <div className="stat-number counter" data-target="15">0</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content zoom-in">
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