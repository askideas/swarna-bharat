import { Mail, Phone, MapPin, User } from 'lucide-react'
import './TeamMembers.css'

const TeamMembers = () => {
  // Managing Trustees
  const managingTrustees = [
    {
      id: 1,
      name: 'Sri M. Venkaiah Naidu',
      position: 'Founder Trustee',
      location: 'Hyderabad',
      bio: 'Former Vice President of India and visionary leader',
      email: 'venkaiah@swarnabharattrust.org',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      position: 'Managing Trustee',
      location: 'Hyderabad',
      bio: 'Leading the trust with dedication and commitment',
      email: 'rajesh@swarnabharattrust.org',
      phone: '+91 98765 43211'
    },
    {
      id: 3,
      name: 'Mrs. Lakshmi Devi',
      position: 'Managing Trustee',
      location: 'Hyderabad',
      bio: 'Championing women empowerment initiatives',
      email: 'lakshmi@swarnabharattrust.org',
      phone: '+91 98765 43212'
    },
    {
      id: 4,
      name: 'Mr. Suresh Reddy',
      position: 'Managing Trustee',
      location: 'Hyderabad',
      bio: 'Overseeing educational programs and development',
      email: 'suresh@swarnabharattrust.org',
      phone: '+91 98765 43213'
    }
  ]

  // Vijayawada Chapter
  const vijayawadaTeam = [
    {
      id: 1,
      name: 'Mr. Krishna Murthy',
      position: 'Chapter President',
      location: 'Vijayawada',
      bio: 'Leading community development initiatives',
      email: 'krishna@swarnabharattrust.org',
      phone: '+91 866 123 4567'
    },
    {
      id: 2,
      name: 'Mrs. Madhavi Sharma',
      position: 'Program Coordinator',
      location: 'Vijayawada',
      bio: 'Coordinating skill development programs',
      email: 'madhavi@swarnabharattrust.org',
      phone: '+91 866 123 4568'
    },
    {
      id: 3,
      name: 'Dr. Ramana Rao',
      position: 'Healthcare Head',
      location: 'Vijayawada',
      bio: 'Managing health and medical initiatives',
      email: 'ramana@swarnabharattrust.org',
      phone: '+91 866 123 4569'
    }
  ]

  // Hyderabad Chapter
  const hyderabadTeam = [
    {
      id: 1,
      name: 'Mr. Anil Kumar',
      position: 'Chapter President',
      location: 'Hyderabad',
      bio: 'Driving urban-rural development programs',
      email: 'anil@swarnabharattrust.org',
      phone: '+91 40 1234 5678'
    },
    {
      id: 2,
      name: 'Mrs. Savitri Devi',
      position: 'Education Coordinator',
      location: 'Hyderabad',
      bio: 'Leading educational outreach programs',
      email: 'savitri@swarnabharattrust.org',
      phone: '+91 40 1234 5679'
    },
    {
      id: 3,
      name: 'Mr. Venkat Reddy',
      position: 'Agricultural Advisor',
      location: 'Hyderabad',
      bio: 'Promoting modern farming techniques',
      email: 'venkat@swarnabharattrust.org',
      phone: '+91 40 1234 5680'
    }
  ]

  // Swarna Bharat Trust Team
  const trustTeam = [
    {
      id: 1,
      name: 'Mr. Prakash Rao',
      position: 'Executive Director',
      location: 'Nellore',
      bio: 'Overall operations and strategic planning',
      email: 'prakash@swarnabharattrust.org',
      phone: '+91 861 234 5678'
    },
    {
      id: 2,
      name: 'Mrs. Sunitha Reddy',
      position: 'Finance Manager',
      location: 'Nellore',
      bio: 'Managing financial operations and compliance',
      email: 'sunitha@swarnabharattrust.org',
      phone: '+91 861 234 5679'
    },
    {
      id: 3,
      name: 'Mr. Srikanth Varma',
      position: 'Training Coordinator',
      location: 'Nellore',
      bio: 'Coordinating vocational training programs',
      email: 'srikanth@swarnabharattrust.org',
      phone: '+91 861 234 5680'
    },
    {
      id: 4,
      name: 'Dr. Padma Latha',
      position: 'Medical Officer',
      location: 'Nellore',
      bio: 'Managing healthcare camps and services',
      email: 'padma@swarnabharattrust.org',
      phone: '+91 861 234 5681'
    }
  ]

  const renderTeamCard = (member) => (
    <div key={member.id} className="team-card">
      <div className="team-card-image">
        <div className="avatar-placeholder">
          <User size={80} />
        </div>
        <div className="team-card-overlay">
          <p>{member.bio}</p>
        </div>
      </div>
      <div className="team-card-content">
        <h3>{member.name}</h3>
        <div className="team-card-position">{member.position}</div>
        <div className="team-card-location">
          <MapPin size={16} />
          {member.location}
        </div>
        <div className="team-card-contact">
          <div className="contact-icon" title={member.email}>
            <Mail size={18} />
          </div>
          <div className="contact-icon" title={member.phone}>
            <Phone size={18} />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="team-members-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p>Meet the dedicated individuals behind Swarna Bharat Trust who work tirelessly to serve our community and transform lives</p>
        </div>
      </section>

      {/* Managing Trustees Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Managing Trustees</h2>
            <div className="section-line"></div>
            <p>Our visionary leaders guiding the trust's mission and strategic direction</p>
          </div>
          <div className="team-grid">
            {managingTrustees.map(renderTeamCard)}
          </div>
        </div>
      </section>

      {/* Vijayawada Chapter Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Vijayawada Chapter</h2>
            <div className="section-line"></div>
            <p>Dedicated team members serving the Vijayawada region</p>
          </div>
          <div className="team-grid">
            {vijayawadaTeam.map(renderTeamCard)}
          </div>
        </div>
      </section>

      {/* Hyderabad Chapter Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Hyderabad Chapter</h2>
            <div className="section-line"></div>
            <p>Committed professionals driving change in the Hyderabad region</p>
          </div>
          <div className="team-grid">
            {hyderabadTeam.map(renderTeamCard)}
          </div>
        </div>
      </section>

      {/* Swarna Bharat Trust Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Swarna Bharat Trust</h2>
            <div className="section-line"></div>
            <p>Core team members managing day-to-day operations and programs</p>
          </div>
          <div className="team-grid">
            {trustTeam.map(renderTeamCard)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamMembers
