'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const locations = [
  {
    name: 'Biserica Penticostală Nr. 1 Beclean',
    tag: 'Concurs',
    tagColor: 'bg-gold-100 text-gold-700',
    emoji: '⛪',
    desc: 'Locația principală a concursului. Aici se desfășoară toate probele.',
    address: 'Strada Ion Pop-Reteganu 10-12',
    imageSrc: '/biserica.png',
    imageAlt: 'Biserica Penticostală Nr. 1 Beclean',
    mapsLink:
      'https://maps.google.com/?q=Strada+Ion+Pop-Reteganu+10-12,+425100+Beclean',
    photos: [
      '/biserica_poarta.jpg',
      '/biserica_logo.jpg',
      '/biserica_interior2.jpg',
      '/biserica_interior1.jpg',
    ],
  },
  {
    name: 'Băile Figa',
    tag: 'Activități',
    tagColor: 'bg-emerald-100 text-emerald-700',
    emoji: '🌳',
    desc: 'Parc de agrement cu terenuri sportive pentru activitățile recreative din timpul pauzei de prânz.',
    address: 'Figa, Bistrița-Năsăud',
    imageSrc: '/figapark1.jpg',
    imageAlt: 'Băile Figa',
    mapsLink: 'https://maps.google.com/?q=Baile+Figa+Beclean',
    photos: [
      '/figapark1.jpg',
      '/figapark2.jpg',
      '/figapark3.jpg',
      '/figaterenuri.png',
    ],
  },
  {
    name: 'Terenuri Sportive',
    tag: 'Activități',
    tagColor: 'bg-emerald-100 text-emerald-700',
    emoji: '⚽',
    desc: 'Terenuri pentru activitățile sportive din cadrul programului de după-amiază.',
    address: 'Beclean, Bistrița-Năsăud',
    imageSrc: '/badoc.PNG',
    imageAlt: 'Terenuri Sportive Beclean',
    photos: [],
    subLocations: [
      {
        name: 'Sintetic Badoc',
        address: 'Strada Someșului 6, 425100 Beclean',
        mapsLink: 'https://maps.google.com/?q=Sintetic+Badoc+Beclean',
        photos: ['/badoc_drona.jpg', '/badoc_side.png'],
      },
      {
        name: 'Baza Sportivă Corabian',
        address: 'Strada Petru Maior 5',
        mapsLink: 'https://maps.app.goo.gl/h2oTK6yhdPVTYc8W6',
        photos: ['/corabian1.png', '/corabian2.png'],
      },
    ],
  },
];

export default function LocatiiPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Locații</h1>
        <p className="text-gray-500">
          Toate locațiile implicate în desfășurarea concursului și a
          activităților.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {locations.map((loc, i) => (
          <LocationCard key={i} location={loc} onClick={() => setOpenIndex(i)} />
        ))}
      </div>

      {openIndex !== null && (
        <LocationModal
          location={locations[openIndex]}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}

function LocationCard({ location, onClick }) {
  const { name, emoji, tag, tagColor, desc, address, imageSrc, imageAlt, mapsLink, subLocations } =
    location;
  const hasSubLocations = subLocations && subLocations.length > 0;

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
                 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 fade-up"
      onClick={onClick}
    >
      {imageSrc && (
        <div className="h-48 sm:h-56 relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <h3 className="font-display font-bold text-navy-900 text-lg sm:text-xl">
            {emoji} {name}
          </h3>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-semibold ${tagColor}`}
          >
            {tag}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-1">📍 {address}</p>
        <p className="text-gray-500 text-sm mb-4">{desc}</p>

        {!hasSubLocations && mapsLink && (
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            🧭 Deschide în Google Maps
          </a>
        )}
      </div>
    </div>
  );
}

function LocationModal({ location, onClose }) {
  const {
    name, emoji, tag, tagColor, desc, address,
    imageSrc, imageAlt, mapsLink, photos = [], subLocations,
  } = location;
  const hasSubLocations = subLocations && subLocations.length > 0;

  const handleClose = useCallback(() => onClose(), [onClose]);
  const panelRef = useRef(null);
  const dragState = useRef({ startY: 0, currentY: 0, dragging: false });
  const [dragOffset, setDragOffset] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [handleClose]);

  const handleTouchStart = useCallback((e) => {
    const panel = panelRef.current;
    if (!panel || panel.scrollTop > 0) return;
    dragState.current = { startY: e.touches[0].clientY, currentY: e.touches[0].clientY, dragging: false };
  }, []);

  const handleTouchMove = useCallback((e) => {
    const ds = dragState.current;
    const panel = panelRef.current;
    if (!panel) return;
    const y = e.touches[0].clientY;
    const delta = y - ds.startY;

    if (!ds.dragging && delta > 8 && panel.scrollTop <= 0) {
      ds.dragging = true;
    }

    if (ds.dragging) {
      e.preventDefault();
      ds.currentY = y;
      setDragOffset(Math.max(0, delta));
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    const ds = dragState.current;
    if (!ds.dragging) return;
    const delta = ds.currentY - ds.startY;
    if (delta > 120) {
      setIsDismissing(true);
      setDragOffset(window.innerHeight);
      setTimeout(handleClose, 200);
    } else {
      setDragOffset(0);
    }
    ds.dragging = false;
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        style={{ opacity: isDismissing ? 0 : Math.max(0, 1 - dragOffset / 300), transition: isDismissing ? 'opacity 0.2s' : undefined }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl
                   max-h-[92vh] overflow-y-auto shadow-2xl"
        style={{
          transform: `translateY(${dragOffset}px)`,
          transition: dragState.current.dragging ? 'none' : 'transform 0.25s ease-out',
          animation: dragOffset === 0 && !isDismissing ? 'slideUp 0.25s ease-out forwards' : 'none',
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Drag handle (mobile) */}
        <div className="sm:hidden flex justify-center pt-2 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center
                     rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        {imageSrc && (
          <div className="relative h-52 sm:h-64">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover sm:rounded-t-2xl"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:rounded-t-2xl"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Header info */}
          <div>
            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
              <h2 className="font-display font-bold text-navy-900 text-xl">
                {emoji} {name}
              </h2>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${tagColor}`}
              >
                {tag}
              </span>
            </div>
            <p className="text-gray-400 text-sm">📍 {address}</p>
            <p className="text-gray-500 text-sm mt-2">{desc}</p>
          </div>

          {/* Sub-locations: photos + location interleaved */}
          {hasSubLocations ? (
            <div className="flex flex-col gap-6">
              {subLocations.map((loc, i) => (
                <div key={i} className="flex flex-col gap-3">
                  {loc.photos && loc.photos.map((photo, j) => (
                    <img
                      key={j}
                      src={photo}
                      alt=""
                      className="rounded-xl object-cover w-full"
                    />
                  ))}
                  <div className="flex items-center justify-between gap-3 bg-gray-50 rounded-xl p-4">
                    <div className="min-w-0">
                      <p className="font-semibold text-navy-900 text-sm">{loc.name}</p>
                      {loc.address && (
                        <p className="text-gray-400 text-xs mt-0.5 truncate">
                          📍 {loc.address}
                        </p>
                      )}
                    </div>
                    <a
                      href={loc.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs flex-shrink-0 !px-3 !py-2"
                    >
                      🧭 Maps
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div>
                <p className="text-xs font-semibold text-navy-700 uppercase tracking-wide mb-3">
                  Fotografii
                </p>
                {photos.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    {photos.map((photo, i) => (
                      <img
                        key={i}
                        src={photo}
                        alt=""
                        className="rounded-xl object-cover w-full"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-2xl mb-1">📷</p>
                    <p className="text-gray-400 text-sm">Fotografii în curând...</p>
                  </div>
                )}
              </div>
              {mapsLink && (
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full justify-center"
                >
                  🧭 Deschide în Google Maps
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
