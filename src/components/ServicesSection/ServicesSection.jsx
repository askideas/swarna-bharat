import { useState } from 'react'
import { 
  Building2, GraduationCap, Code, Users, Settings, Eye, 
  Stethoscope, Heart, Home as HomeIcon, X, ChevronRight
} from 'lucide-react'
import './ServicesSection.css'

const ServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

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
    <>
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
    </>
  )
}

export default ServicesSection
