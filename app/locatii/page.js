'use client';

import { useState } from 'react';

export default function LocatiiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Locații</h1>
        <p className="text-gray-500">
          Toate locațiile implicate în desfășurarea concursului și a activităților.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <LocationCard
          name="Biserica Penticostală Beclean"
          tag="Concurs"
          tagColor="bg-gold-100 text-gold-700"
          emoji="⛪"
          desc="Locația principală a concursului. Aici se desfășoară toate probele."
          address="Strada Ion Pop-Reteganu 10-12, 425100 Beclean"
          imageSrc="/biserica.png"
          imageAlt="Biserica Penticostală Beclean"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.1!2d24.1833!3d47.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749cefed9e7b2c5%3A0x1!2sStrada+Ion+Pop-Reteganu+10-12%2C+Beclean!5e0!3m2!1sro!2sro!4v1700000000000"
          mapsLink="https://maps.google.com/?q=Strada+Ion+Pop-Reteganu+10-12,+425100+Beclean"
        />

        <LocationCard
          name="Băile Figa"
          tag="Activități"
          tagColor="bg-emerald-100 text-emerald-700"
          emoji="🌳"
          desc="Parc de agrement cu terenuri sportive pentru activitățile recreative din timpul pauzei de prânz."
          address="Băile Figa, Beclean, Bistrița-Năsăud"
          imageSrc="/figa.png"
          imageAlt="Băile Figa"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.3590382208145!2d24.206308483904518!3d47.164026268152874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749edcf1d714d67%3A0x1ea4309122dbc09a!2sBaile%20Figa%20(Beclean)!5e0!3m2!1sro!2sro!4v1775553563891!5m2!1sro!2sro"
          mapsLink="https://maps.google.com/?q=Baile+Figa+Beclean"
        />

        <LocationCard
          name="Terenuri Sportive"
          tag="Activități"
          tagColor="bg-emerald-100 text-emerald-700"
          emoji="⚽"
          desc="Terenuri pentru activitățile sportive din cadrul programului de după-amiază."
          address="Strada Someșului 6, 425100 Beclean"
          imageSrc="/badoc.PNG"
          imageAlt="Terenuri Sportive Beclean"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.8814535450579!2d24.17029160804171!3d47.18207846000868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749e9007cc6953f%3A0x37b80d4ac5057daa!2sSintetic%20Badoc!5e0!3m2!1sro!2sro!4v1775485132248!5m2!1sro!2sro"
          mapsLink="https://maps.google.com/?q=Sintetic+Badoc+Beclean"
        />
      </div>
    </div>
  );
}
/*
{
    name: 'Terenuri Sportive',
    desc: 'Terenuri pentru activitățile sportive din cadrul programului de după-amiază.',
    address: 'Beclean, Bistrița-Năsăud',
    emoji: '⚽',

    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.8814535450579!2d24.17029160804171!3d47.18207846000868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749e9007cc6953f%3A0x37b80d4ac5057daa!2sSintetic%20Badoc!5e0!3m2!1sro!2sro!4v1775485132248!5m2!1sro!2sro',
    mapsLink: 'https://maps.google.com/?q=Sintetic+Badoc+Beclean',
    tag: 'Activități',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
*/
function LocationCard({ name, tag, tagColor, emoji, desc, address, imageSrc, imageAlt, mapSrc, mapsLink }) {
  const [activeTab, setActiveTab] = useState('foto');
  const hasImage = !!imageSrc;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

      {/* Desktop: side by side | Mobile: tabbed */}
      <div className="md:flex md:h-72">

        {/* Mobile tab switcher — hidden on desktop */}
        {hasImage && (
          <div className="flex md:hidden border-b border-gray-100">
            <button
              onClick={() => setActiveTab('foto')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'foto'
                  ? 'text-navy-900 border-b-2 border-navy-900'
                  : 'text-gray-400'
              }`}
            >
              📷 Fotografie
            </button>
            <button
              onClick={() => setActiveTab('harta')}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === 'harta'
                  ? 'text-navy-900 border-b-2 border-navy-900'
                  : 'text-gray-400'
              }`}
            >
              🗺️ Hartă
            </button>
          </div>
        )}

        {/* Image panel */}
        {hasImage && (
          <div className={`relative md:w-1/2 h-56 md:h-full flex-shrink-0 ${
            activeTab === 'harta' ? 'hidden md:block' : 'block'
          }`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay on desktop so it blends into the card */}
            <div className="hidden md:block absolute inset-y-0 right-0 w-8"
              style={{ background: 'linear-gradient(to right, transparent, white)' }}
            />
          </div>
        )}

        {/* Map panel */}
        <div className={`relative flex-1 h-56 md:h-full ${
          hasImage && activeTab === 'foto' ? 'hidden md:block' : 'block'
        }`}>
          {mapSrc ? (
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Hartă ${name}`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full bg-gray-50 text-gray-400">
              <p className="text-4xl mb-2">🗺️</p>
              <p className="text-sm">Hartă în curând</p>
            </div>
          )}
        </div>
      </div>

      {/* Info section */}
      <div className="p-5 border-t border-gray-100">
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <h3 className="font-display font-bold text-navy-900 text-xl">
            {emoji} {name}
          </h3>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${tagColor}`}>
            {tag}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-1">📍 {address}</p>
        <p className="text-gray-500 text-sm mb-4">{desc}</p>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          🧭 Deschide în Google Maps
        </a>
      </div>
    </div>
  );
}