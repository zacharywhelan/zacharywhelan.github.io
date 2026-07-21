import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, images.length, onClose, onNavigate])

  const img = images[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center p-4 sm:p-8">
        <img
          src={img.src}
          alt={img.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>

      {img.alt && (
        <figcaption
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-none absolute bottom-4 inset-x-0 text-center text-sm text-white/60"
        >
          {img.alt}
        </figcaption>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full p-2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index - 1 + images.length) % images.length)
            }}
            aria-label="Previous image"
            className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full p-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index + 1) % images.length)
            }}
            aria-label="Next image"
            className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/40 rounded-full p-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
