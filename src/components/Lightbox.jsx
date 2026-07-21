import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onNavigate])

  const img = images[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((index - 1 + images.length) % images.length)
          }}
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 text-white/70 hover:text-white transition-colors p-2"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        {img.alt && (
          <figcaption className="text-center text-sm text-white/60 mt-3">{img.alt}</figcaption>
        )}
      </figure>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((index + 1) % images.length)
          }}
          aria-label="Next image"
          className="absolute right-2 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  )
}
