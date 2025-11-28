import { Mail, Phone, MapPin } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch and let's start a conversation.</p>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Contact Form Coming Soon</h2>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', maxWidth: '500px', margin: '2rem auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Get in Touch</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><Mail size={18} /> info@swaranbharattrust.org</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><Phone size={18} /> +1 (555) 123-4567</p>
            <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}><MapPin size={18} /> 123 Trust Avenue, City, State 12345</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact