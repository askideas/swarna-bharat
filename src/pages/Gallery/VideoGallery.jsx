import { useState } from 'react'
import { X, Play } from 'lucide-react'
import './Gallery.css'

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Default sample videos with YouTube/Vimeo embeds or video URLs
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800',
      title: 'Annual Educational Program 2024',
      description: 'Highlights from our annual education initiative',
      duration: '5:32',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      title: 'Healthcare Camp Success Story',
      description: 'How we are transforming rural healthcare',
      duration: '3:45',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800',
      title: 'Women Empowerment Workshop',
      description: 'Skill development training highlights',
      duration: '7:18',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800',
      title: 'Organic Farming Techniques',
      description: 'Modern agricultural practices demonstration',
      duration: '6:22',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
      title: 'Digital Literacy Program',
      description: 'Computer training for rural youth',
      duration: '4:50',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      title: 'Community Impact Stories',
      description: 'Testimonials from beneficiaries',
      duration: '8:15',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 7,
      thumbnail: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800',
      title: 'Cultural Heritage Program',
      description: 'Preserving Indian traditions',
      duration: '5:40',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 8,
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      title: 'Youth Leadership Summit',
      description: 'Inspiring the next generation',
      duration: '6:55',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 9,
      thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
      title: 'Free Eye Care Initiative',
      description: 'Eye examination camp coverage',
      duration: '4:28',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 10,
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      title: 'Farmer Training Workshop',
      description: 'Agricultural innovation and techniques',
      duration: '7:03',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 11,
      thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      title: 'Trust Foundation Day Celebration',
      description: 'Celebrating our journey and achievements',
      duration: '9:12',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 12,
      thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800',
      title: 'Vocational Training Success',
      description: 'Stories of self-employment and growth',
      duration: '5:18',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]

  const openModal = (video) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Video Gallery</h1>
          <p>Watch videos highlighting our journey, success stories, and the lives we've touched</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          <div className="masonry-grid">
            {videos.map((video) => (
              <div key={video.id} className="masonry-item">
                <div className="video-card" onClick={() => openModal(video)}>
                  <div className="video-thumbnail-container">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="video-thumbnail"
                      loading="lazy"
                    />
                    <div className="video-play-overlay">
                      <Play />
                    </div>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for video player */}
      {selectedVideo && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X />
            </button>
            <iframe
              width="100%"
              height="500"
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: '8px', maxWidth: '900px' }}
            ></iframe>
            <div className="modal-caption">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoGallery
