import { useRef, useEffect, useState } from 'react'
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { 
  Star, Handshake, Lightbulb, Target, ChevronLeft, ChevronRight,
  Building2, GraduationCap, Code, Users, Settings, Eye, 
  Stethoscope, Heart, Home as HomeIcon, X
} from 'lucide-react'
import Img1 from '../../assets/Hero Slider/img1.jpg'
import Img2 from '../../assets/Hero Slider/img2.jpg'
import Img3 from '../../assets/Hero Slider/img3.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const Home = () => {
  const swiperRef = useRef(null)
  const [animatedElements, setAnimatedElements] = useState(new Set())
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

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
      image: Img1,
      title: 'Welcome to Swarna Bharat Trust',
      subtitle: 'Building a Brighter Future Through Excellence and Service',
      description: 'We are dedicated to serving our community with integrity, innovation, and an unwavering commitment to excellence.',
      primaryBtn: 'Learn More',
      secondaryBtn: 'Get in Touch'
    },
    {
      id: 2,
      image: Img2,
      title: 'Empowering Communities Together',
      subtitle: 'Creating Lasting Impact Through Dedicated Service',
      description: 'Our mission is to create positive change and build lasting relationships based on trust and mutual respect.',
      primaryBtn: 'Our Services',
      secondaryBtn: 'Join Us'
    },
    {
      id: 3,
      image: Img3,
      title: 'Excellence in Every Endeavor',
      subtitle: 'Trust, Innovation, and Community at Our Core',
      description: 'With years of experience and unwavering dedication, we continue to serve and make a meaningful difference.',
      primaryBtn: 'Our Story',
      secondaryBtn: 'Contact Us'
    }
  ]

  const servicesData = [
    {
      id: 1,
      title: 'Swarna Bharathi Vidyamandir',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-education.jpg',
      icon: <Building2 size={40} strokeWidth={1.5} />,
      shortDescription: 'Providing quality education and nurturing young minds for a brighter future.',
      fullDescription: 'Swarna Bharathi Vidyamandir is committed to providing exceptional education that nurtures young minds and prepares them for a successful future. Our innovative learning approaches combine traditional values with modern teaching methodologies.',
      features: [
        'State-of-the-art facilities',
        'Experienced and dedicated faculty',
        'Holistic development programs',
        'Extra-curricular activities',
        'Student-centered learning environment'
      ],
      contact: 'education@swarnabharat.org'
    },
    {
      id: 2,
      title: 'Residential Bridge School',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-bridge-school.jpg',
      icon: <GraduationCap size={40} strokeWidth={1.5} />,
      shortDescription: 'Bridging educational gaps through comprehensive residential programs.',
      fullDescription: 'Our Residential Bridge School provides comprehensive learning support for students who need extra assistance. We offer a nurturing residential environment where students can focus on their studies while receiving personalized attention and care.',
      features: [
        'Residential facilities with modern amenities',
        'Personalized learning plans',
        '24/7 mentoring and support',
        'Nutritious meals and healthcare',
        'Life skills development'
      ],
      contact: 'bridgeschool@swarnabharat.org'
    },
    {
      id: 3,
      title: 'SIRED - Rural Entrepreneurship',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-entrepreneurship.jpg',
      icon: <Code size={40} strokeWidth={1.5} />,
      shortDescription: 'Empowering rural communities through entrepreneurship development.',
      fullDescription: 'Swarna Bharat Institute of Rural Entrepreneurship Development (SIRED) focuses on empowering rural communities by fostering entrepreneurship and providing innovative business solutions. We help transform ideas into sustainable businesses.',
      features: [
        'Business planning and development',
        'Financial literacy training',
        'Marketing and sales support',
        'Access to funding opportunities',
        'Mentorship from industry experts'
      ],
      contact: 'sired@swarnabharat.org'
    },
    {
      id: 4,
      title: 'SOMA - Skill Development',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-skill.jpg',
      icon: <Users size={40} strokeWidth={1.5} />,
      shortDescription: 'Building technical expertise and professional skills for career growth.',
      fullDescription: 'SOMA - Skill Development & Technical Training Institute is dedicated to building technical expertise and professional skills that enhance employment opportunities and career growth. Our programs are designed to meet industry demands.',
      features: [
        'Industry-relevant courses',
        'Hands-on training',
        'Placement assistance',
        'Certification programs',
        'Continuous skill upgradation'
      ],
      contact: 'soma@swarnabharat.org'
    },
    {
      id: 5,
      title: 'Elders Home',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-elders.jpg',
      icon: <HomeIcon size={40} strokeWidth={1.5} />,
      shortDescription: 'Providing compassionate care and comfortable living for elderly members.',
      fullDescription: 'Our Elders Home provides compassionate care and a comfortable living environment for elderly community members. We ensure dignity, respect, and quality of life through comprehensive care services.',
      features: [
        'Comfortable accommodation',
        '24/7 medical care',
        'Nutritious meals',
        'Recreational activities',
        'Family visitation facilities'
      ],
      contact: 'eldershome@swarnabharat.org'
    },
    {
      id: 6,
      title: 'Farmers Training Center',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-farming.jpg',
      icon: <Settings size={40} strokeWidth={1.5} />,
      shortDescription: 'Supporting agricultural development through modern farming techniques.',
      fullDescription: 'Our Farmers Training Center supports agricultural development by providing training in modern farming techniques and sustainable practices. We help farmers increase productivity while maintaining environmental sustainability.',
      features: [
        'Modern farming techniques',
        'Sustainable agriculture practices',
        'Organic farming guidance',
        'Water conservation methods',
        'Market linkage support'
      ],
      contact: 'farmers@swarnabharat.org'
    },
    {
      id: 7,
      title: 'LV Prasad Eye Institute',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-eye.jpg',
      icon: <Eye size={40} strokeWidth={1.5} />,
      shortDescription: 'Delivering world-class eye care services and promoting vision health.',
      fullDescription: 'In partnership with LV Prasad Eye Institute, we deliver world-class eye care services and promote vision health in our community. Our facility is equipped with modern diagnostic and treatment equipment.',
      features: [
        'Comprehensive eye examinations',
        'Advanced cataract surgery',
        'Pediatric ophthalmology',
        'Free eye camps',
        'Vision rehabilitation services'
      ],
      contact: 'eyecare@swarnabharat.org'
    },
    {
      id: 8,
      title: 'Veterinary Hospital',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-vet.jpg',
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
      shortDescription: 'Comprehensive veterinary care for animal health and wellbeing.',
      fullDescription: 'Our Veterinary Hospital provides comprehensive veterinary care services ensuring the health and wellbeing of animals in our community. We offer preventive care, treatment, and emergency services.',
      features: [
        'Preventive healthcare',
        'Emergency services',
        'Surgical procedures',
        'Vaccination programs',
        'Mobile veterinary units'
      ],
      contact: 'vetcare@swarnabharat.org'
    },
    {
      id: 9,
      title: 'Rural Health & Dental Care',
      image: 'https://ik.imagekit.io/dlekfhyrb/SB%20Images/service-health.jpg',
      icon: <Heart size={40} strokeWidth={1.5} />,
      shortDescription: 'Accessible healthcare and dental services for rural communities.',
      fullDescription: 'Our Rural Health Center & Dental Hospital provides accessible healthcare and dental services to rural communities with modern medical facilities. We are committed to improving community health through quality care.',
      features: [
        'Primary healthcare services',
        'Dental treatments',
        'Health awareness programs',
        'Mother and child care',
        'Emergency medical services'
      ],
      contact: 'healthcare@swarnabharat.org'
    }
  ]

  const openModal = (service) => {
    setSelectedService(service)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="home">
      {/* Hero Slider Section */}
      <section className="hero-slider-container">
        <div className="hero-slider-wrapper">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
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
            speed={800}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide">
                  <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image-only" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="slider-btn slider-btn-prev" aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-btn slider-btn-next" aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          {/* Custom Pagination */}
          <div className="custom-pagination"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="services-label">OUR SERVICES</span>
            <h2>Comprehensive Solutions for Community Development</h2>
            <p>From education to healthcare, we offer a full range of services and initiatives tailored to help our community thrive and prosper.</p>
          </div>
          
          <div className="services-grid-new">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className="service-tile"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-overlay">
                    <div className="service-icon-overlay">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <button 
                    className="explore-more-btn"
                    onClick={() => openModal(service)}
                  >
                    Explore More
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {modalOpen && selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-image-container">
              <img src={selectedService.image} alt={selectedService.title} />
              <div className="modal-icon-badge">
                {selectedService.icon}
              </div>
            </div>
            
            <div className="modal-content">
              <h2>{selectedService.title}</h2>
              <p className="modal-description">{selectedService.fullDescription}</p>
              
              <div className="modal-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-contact">
                <h3>Get in Touch</h3>
                <p>For more information, contact us at: <strong>{selectedService.contact}</strong></p>
              </div>
              
              <button className="modal-cta-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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