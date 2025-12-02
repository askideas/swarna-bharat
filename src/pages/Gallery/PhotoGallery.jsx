import { useState } from 'react'
import { X, Image as ImageIcon } from 'lucide-react'
import './Gallery.css'

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Default sample images with various aspect ratios for Pinterest-style layout
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800',
      title: 'Community Education Program',
      description: 'Empowering rural youth through quality education',
      height: 'tall'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      title: 'Healthcare Camp',
      description: 'Free medical checkups for rural communities',
      height: 'medium'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800',
      title: 'Skill Development Training',
      description: 'Vocational training for women empowerment',
      height: 'short'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      title: 'Agricultural Workshop',
      description: 'Modern farming techniques demonstration',
      height: 'medium'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
      title: 'Computer Lab',
      description: 'Digital literacy programs for students',
      height: 'tall'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
      title: 'Eye Care Camp',
      description: 'Free eye examinations and treatments',
      height: 'short'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800',
      title: 'Cultural Event',
      description: 'Preserving Indian traditions and culture',
      height: 'medium'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
      title: 'Youth Gathering',
      description: 'Inspiring the next generation of leaders',
      height: 'tall'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      title: 'Team Meeting',
      description: 'Planning community development initiatives',
      height: 'medium'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800',
      title: 'Farming Innovation',
      description: 'Organic farming practices workshop',
      height: 'short'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800',
      title: 'Women Empowerment',
      description: 'Self-employment skills training program',
      height: 'tall'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      title: 'Community Support',
      description: 'Together for a better tomorrow',
      height: 'medium'
    }
  ]

  const openModal = (photo) => {
    setSelectedImage(photo)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Photo Gallery</h1>
          <p>Browse through our collection of images showcasing our events, programs, and community impact</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          <div className="masonry-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="masonry-item">
                <div className="photo-card" onClick={() => openModal(photo)}>
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    loading="lazy"
                  />
                  <div className="photo-overlay">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
