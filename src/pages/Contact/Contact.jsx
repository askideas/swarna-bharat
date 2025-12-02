import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    requestDetails: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitMessage('Thank you! Your request has been submitted successfully.')
      setFormData({
        name: '',
        mobile: '',
        address: '',
        requestDetails: ''
      })
      setIsSubmitting(false)
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  const locations = [
    {
      name: 'Venkatachalam Office',
      phone: '+91 9963284400',
      address: 'Sri.Vijay Mohan Suri'
    },
    {
      name: 'Vijayawada Office',
      phone: 'Executive Director',
      address: 'Sri Paradeshi'
    },
    {
      name: 'Hyderabad Office',
      phone: '+91 9963277544',
      address: 'Sri Gopichand'
    }
  ]

  const contactInfo = {
    email: 'info@swarnabharattrust.org',
    alternateEmail: 'support@swarnabharattrust.org',
    mainOffice: 'Swarna Bharat Trust, Venkatachalam, Nellore',
    workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
  }

  return (
    <div className="contact">
      {/* <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch and let's start a conversation.</p>
          </div>
        </div>
      </section> */}

      {/* Location Cards */}
      <section className="locations-section">
        <div className="container">
          <h2 className="section-title">Our Locations</h2>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <MapPin className="location-icon" />
                <h3>{location.name}</h3>
                <p className="location-phone">
                  <Phone size={16} />
                  {location.phone}
                </p>
                <p className="location-address">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-content">
            {/* Left Side - Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="Enter your mobile number"
                    pattern="[0-9+\s-]+"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requestDetails">Request Details *</label>
                  <textarea
                    id="requestDetails"
                    name="requestDetails"
                    value={formData.requestDetails}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your request or inquiry"
                    rows="5"
                  ></textarea>
                </div>

                {submitMessage && (
                  <div className="submit-message success">
                    {submitMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      <Send size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <p className="info-description">Reach out to us through any of the following channels:</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone />
                  </div>
                  <div className="info-content">
                    <h3>Phone Numbers</h3>
                    {locations.map((location, index) => (
                      <p key={index}>
                        <strong>{location.name}:</strong><br />
                        {location.phone}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail />
                  </div>
                  <div className="info-content">
                    <h3>Email Addresses</h3>
                    <p>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </p>
                    <p>
                      <a href={`mailto:${contactInfo.alternateEmail}`}>{contactInfo.alternateEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin />
                  </div>
                  <div className="info-content">
                    <h3>Main Office</h3>
                    <p>{contactInfo.mainOffice}</p>
                    <p className="working-hours">
                      <strong>Working Hours:</strong><br />
                      {contactInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us on the Map</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.7902726318366!2d79.9217407!3d14.3236116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf1df02b50ae1%3A0xb75f70e6f40fc087!2sSwarna%20Bharath%20Trust!5e0!3m2!1sen!2sin!4v1764678340639!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swarna Bharat Trust Location"
            ></iframe>
          </div>
          <p className="map-note">
            Visit our main office at Venkatachalam, Nellore. We welcome visitors during working hours.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact