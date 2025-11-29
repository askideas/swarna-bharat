import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Activities from './pages/Activities'
import AboutUs from './pages/AboutUs/AboutUs'
import TeamMembers from './pages/TeamMembers/TeamMembers'
import SBTCampus from './pages/Campus/SBTCampus'
import Nellore from './pages/Campus/Nellore'
import Vijayawada from './pages/Campus/Vijayawada'
import Hyderabad from './pages/Campus/Hyderabad'
import CSR from './pages/Campus/CSR'
import PhotoGallery from './pages/Gallery/PhotoGallery'
import VideoGallery from './pages/Gallery/VideoGallery'
import News from './pages/News/News'
import Posts from './pages/Posts/Posts'
import Publishings from './pages/Publishings/Publishings'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simple timeout approach - show loader for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* About submenu */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team-members" element={<TeamMembers />} />
            
            {/* Campus submenu */}
            <Route path="/campus/sbt" element={<SBTCampus />} />
            <Route path="/campus/nellore" element={<Nellore />} />
            <Route path="/campus/vijayawada" element={<Vijayawada />} />
            <Route path="/campus/hyderabad" element={<Hyderabad />} />
            <Route path="/campus/csr" element={<CSR />} />
            
            {/* Gallery submenu */}
            <Route path="/gallery/photos" element={<PhotoGallery />} />
            <Route path="/gallery/videos" element={<VideoGallery />} />
            
            {/* Activities submenu */}
            <Route path="/news" element={<News />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/publishings" element={<Publishings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
