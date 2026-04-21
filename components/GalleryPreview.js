'use client';

import { useState, useEffect, useCallback } from 'react';

const PREVIEW_IMAGES = [
  { src: '/galerie/IMG_0013.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0113.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0134.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0160.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0167.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0237.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0269.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0350.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0384.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0402.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0449.jpg', alt: 'Talantul în Negoț 2026' },
  { src: '/galerie/IMG_0485.jpg', alt: 'Talantul în Negoț 2026' },
];

export default function GalleryPreview({ albumLink, totalPhotos = 539 }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loaded = [];
    let remaining = PREVIEW_IMAGES.length;

    PREVIEW_IMAGES.forEach((img, i) => {
      const image = new Image();
      image.onload = () => {
        loaded[i] = true;
        remaining--;
        if (remaining === 0) setLoadedImages([...loaded]);
      };
      image.onerror = () => {
        loaded[i] = false;
        remaining--;
        if (remaining === 0) setLoadedImages([...loaded]);
      };
      image.src = img.src;
    });
  }, []);

  const availableImages = PREVIEW_IMAGES.filter((_, i) => loadedImages[i]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % availableImages.length : null
    );
  }, [availableImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + availableImages.length) % availableImages.length
        : null
    );
  }, [availableImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  if (availableImages.length === 0) return null;

  return (
    <>
      {/* Preview grid */}
      <div className="gallery-grid mt-8">
        {availableImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="gallery-item group relative overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* "See all" CTA */}
      {albumLink && (
        <div className="text-center mt-8 fade-up">
          <a
            href={albumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            📸 Vezi toate pozele
          </a>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white text-4xl leading-none p-2 transition-colors"
            aria-label="Închide"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-semibold">
            {lightboxIndex + 1} / {availableImages.length}
          </div>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 md:left-6 z-10 text-white/70 hover:text-white text-5xl leading-none p-2 transition-colors select-none"
            aria-label="Poza anterioară"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={availableImages[lightboxIndex].src}
            alt={availableImages[lightboxIndex].alt}
            className="relative z-10 max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 md:right-6 z-10 text-white/70 hover:text-white text-5xl leading-none p-2 transition-colors select-none"
            aria-label="Poza următoare"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
