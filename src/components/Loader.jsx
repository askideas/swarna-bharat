import { useEffect, useRef } from 'react'
import './Loader.css'
import logoVideo from '../assets/logo.mp4'

const Loader = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [])

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="video-container">
          <video
            ref={videoRef}
            className="logo-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={logoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="loading-text">
          <h2>Swarna Bharat Trust</h2>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Loading Excellence...</p>
        </div>
      </div>
    </div>
  )
}

export default Loader