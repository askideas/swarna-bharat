import { GraduationCap, Heart, Sprout, Users, Globe, TrendingUp } from 'lucide-react'
import './AboutUs.css'

const AboutUs = () => {
  const objectives = [
    {
      icon: <GraduationCap />,
      title: "Education & Skill Development",
      description: "Provide vocational, computer, and technical training to unemployed rural youth, including courses in stitching, embroidery, and other self-employment skills for women with free food and accommodation."
    },
    {
      icon: <Heart />,
      title: "Health & Medical Care",
      description: "Run health centers and organize free medical camps, including general health checkups, eye exams, and dental care in collaboration with partner hospitals like LV Prasad Eye Institute and Kamineni Hospitals."
    },
    {
      icon: <Sprout />,
      title: "Agricultural Training",
      description: "Educate farmers on modern farming techniques, organic farming, and alternate crops using on-site demonstration farms to improve agricultural productivity."
    },
    {
      icon: <Users />,
      title: "Youth & Child Development",
      description: "Provide free access to science and computer labs for students from nearby government schools to offer practical training and exposure to technology."
    },
    {
      icon: <Globe />,
      title: "Culture & Tradition",
      description: "Actively encourage and support the preservation of Indian culture, traditions, and civilizational values while maintaining a global outlook."
    }
  ]

  const activities = [
    {
      title: "Bridge the Rural-Urban Divide",
      description: "Make rural masses confident and self-reliant contributors to the nation's economy by providing equitable access to education and healthcare services."
    },
    {
      title: "Technological Advancement",
      description: "Bring technological advances and innovations in science and technology to rural doorsteps to make their lives better and more productive."
    },
    {
      title: "Vocational & Computer Training",
      description: "Impart comprehensive vocational and computer training to rural youth, enabling them to become skilled professionals and entrepreneurs."
    },
    {
      title: "Empower Rural Women",
      description: "Equip rural women with necessary skills for self-employment, enabling them to become part of a strong rural economy and contribute to family income."
    },
    {
      title: "Farmer Education",
      description: "Educate farmers about new techniques in farming and alternate crops, and train artisans to become self-employed and financially independent."
    }
  ]

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Transforming Rural India Through Education, Healthcare, and Empowerment</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p className="intro-text">
              The Swarna Bharat Trust is an Indian non-governmental organization (NGO) dedicated to the holistic 
              development and empowerment of rural communities. Founded by the family and friends of former Vice 
              President of India, M. Venkaiah Naidu, the trust focuses on bridging the urban-rural gap through 
              initiatives in education, healthcare, skill development, and agriculture.
            </p>
            
            <div className="intro-highlight">
              <p className="intro-text">
                <strong>Our Mission:</strong> The trust aims to make rural masses confident and self-reliant contributors 
                to the nation's economy, ensuring that every citizen in our country becomes an active partner in India's 
                growth story.
              </p>
            </div>

            <p className="intro-text">
              Swarna Bharat Trust, a service-oriented Non-Governmental Organization, was established in the year 2001 
              with the noble intentions of eight well-meaning, like-minded, and service-oriented individuals—all friends 
              of Sri Muppavarapu Venkaiah Naidu garu, Hon'ble Vice President of India—giving shape to their thoughts and 
              taking up selfless activities in the service of the motherland, with an intention of giving back to society.
            </p>

            <p className="intro-text">
              Driven by a singular passion to transform the lives of farmers, women, youth, and children and bring about 
              a positive and lasting change in their lives in rural areas, the Swarna Bharat Trust was launched in 2001 
              at Venkatachalam in Nellore district of Andhra Pradesh. The Trust added the second chapter at Atkur near 
              Vijayawada in 2016 and in Shamshabad near Hyderabad in 2017.
            </p>
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <div className="objectives-header">
            <h2>Key Objectives & Activities</h2>
            <p>Our comprehensive approach to rural development encompasses multiple dimensions of community empowerment</p>
          </div>
          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <div key={index} className="objective-card">
                <div className="objective-icon">
                  {objective.icon}
                </div>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Objectives */}
      <section className="activities-section">
        <div className="container">
          <div className="activities-header">
            <h2>Principal Objectives</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Guided by Mahatma Gandhi ji's dictum 'Back to Villages', we work towards comprehensive rural development
            </p>
          </div>
          <div className="activities-list">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <h3>
                  <TrendingUp size={24} />
                  {activity.title}
                </h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Vision */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <h2>Our Journey & Vision</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <span className="timeline-year">2001</span>
                <div className="timeline-content">
                  <p>
                    Swarna Bharat Trust was established at Venkatachalam in Nellore district of Andhra Pradesh, 
                    marking the beginning of our mission to transform rural India through education and healthcare.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2016</span>
                <div className="timeline-content">
                  <p>
                    Expanded operations with the establishment of our second chapter at Atkur near Vijayawada, 
                    extending our reach to serve more rural communities in Andhra Pradesh.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <span className="timeline-year">2017</span>
                <div className="timeline-content">
                  <p>
                    Opened our third chapter in Shamshabad near Hyderabad, further strengthening our presence 
                    and ability to impact lives across multiple regions.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-content">
                  <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vision</h3>
                  <p>
                    Swarna Bharat Trust desires to be a catalyst, in its own modest way, to help India move on its 
                    development journey by enriching human resources through good quality education and higher order 
                    skill levels. We envision a healthy India where preventive and curative healthcare becomes accessible, 
                    affordable, and acceptable to large rural populations.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    We believe that we must have a global outlook but with our feet firmly rooted in our Indian ethos 
                    and civilizational values. To this end, our education systems must be appropriately oriented, 
                    inculcating in everyone, especially the youth of this country, a sense of pride and dignity in being Indian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Independence */}
      <section className="about-intro" style={{ background: 'white' }}>
        <div className="container">
          <div className="intro-content">
            <h2>Independent & Sustainable</h2>
            <div className="intro-highlight">
              <p className="intro-text">
                The Swarna Bharat Trust prides itself on operating independently, without accepting funds or grants 
                from the Central or State Governments. We primarily rely on partnerships with various corporate entities, 
                foundations, and philanthropists for support in managing our programs. This independence allows us to 
                maintain our vision and deliver impactful services to rural communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Footer */}
      <section className="locations-footer">
        <div className="container">
          <h2>We Are Present At</h2>
          <div className="location-badges">
            <div className="location-badge">Hyderabad</div>
            <div className="location-badge">Vijayawada</div>
            <div className="location-badge">Nellore</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
