import './Activities.css'

const Activities = () => {
  return (
    <div className="activities">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>Our Activities</h1>
            <p>Discover the various initiatives and programs that make a difference in our community</p>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2>Activities Coming Soon</h2>
          <p>We're preparing to showcase all our exciting community activities and events. Stay tuned!</p>
        </div>
      </section>
    </div>
  )
}

export default Activities