import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Activities from './pages/Activities'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState(Date.now())

  useEffect(() => {
    // Ensure loader shows for at least 4 seconds
    const minLoadTime = 2500 // 4 seconds
    
    const handleLoad = () => {
      const elapsedTime = Date.now() - loadingStartTime
      const remainingTime = Math.max(0, minLoadTime - elapsedTime)
      
      setTimeout(() => {
        setLoading(false)
      }, remainingTime)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [loadingStartTime])

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
