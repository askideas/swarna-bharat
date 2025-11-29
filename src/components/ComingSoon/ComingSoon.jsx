import { Construction } from 'lucide-react'
import './ComingSoon.css'

const ComingSoon = ({ title, description }) => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <Construction size={80} strokeWidth={1.5} />
        </div>
        <h1>{title || 'Coming Soon'}</h1>
        <p>{description || 'This page is under construction. We\'re working hard to bring you something amazing!'}</p>
        <div className="coming-soon-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
