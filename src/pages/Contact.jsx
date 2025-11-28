const Contact = () => {
  return (
    <div className="contact" style={{ paddingTop: '80px', minHeight: '80vh' }}>
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
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>📧 info@swaranbharattrust.org</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>📞 +1 (555) 123-4567</p>
            <p style={{ color: 'var(--text-secondary)' }}>📍 123 Trust Avenue, City, State 12345</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact