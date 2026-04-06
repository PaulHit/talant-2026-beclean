export const metadata = {
  title: 'Locații – Talantul în Negoț 2026',
};

const locations = [
  {
    name: 'Biserica Penticostală Beclean',
    desc: 'Locația principală a concursului. Aici se desfășoară probele.',
    address: 'Strada Ion Pop-Reteganu 10-12, 425100 Beclean',
    emoji: '⛪',
    // Google Maps embed URL for this address
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.1!2d24.1833!3d47.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749cefed9e7b2c5%3A0x1!2sStrada+Ion+Pop-Reteganu+10-12%2C+Beclean!5e0!3m2!1sro!2sro!4v1700000000000',
    mapsLink:
      'https://maps.google.com/?q=Strada+Ion+Pop-Reteganu+10-12,+425100+Beclean',
    tag: 'Concurs',
    tagColor: 'bg-gold-100 text-gold-700',
  },
  {
    name: 'Băile Figa',
    desc: 'Parc de agrement și terenuri sportive pentru activitățile recreative.',
    address: 'Băile Figa, Beclean, Bistrița-Năsăud',
    emoji: '🌳',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5440.2!2d24.188!3d47.192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749cf!2sBaile+Figa!5e0!3m2!1sro!2sro!4v1700000000001',
    mapsLink: 'https://maps.google.com/?q=Baile+Figa+Beclean',
    tag: 'Activități',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
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
];

function LocationCard({ loc }) {
  return (
    <div className="card overflow-hidden p-0">
      {/* Map */}
      <div className="relative w-full h-52 bg-gray-100">
        {loc.todo ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400">
            <p className="text-4xl mb-2">🗺️</p>
            <p className="text-sm">Adresă exactă în curând</p>
          </div>
        ) : (
          <iframe
            src={loc.mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Hartă ${loc.name}`}
          />
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">
            {loc.emoji} {loc.name}
          </h3>
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${loc.tagColor}`}>
            {loc.tag}
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-1">{loc.address}</p>
        <p className="text-gray-400 text-sm mb-4">{loc.desc}</p>
        <a
          href={loc.mapsLink}
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

export default function LocatiiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Locații</h1>
        <p className="text-gray-500">
          Harta tuturor locațiilor implicate în desfășurarea concursului și a activităților.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 fade-up fade-up-delay-1">
        {locations.map((loc, i) => (
          <LocationCard key={i} loc={loc} />
        ))}
      </div>

      {/* <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        ⚠️ Adresa terenurilor sportive va fi actualizată. Dacă știi adresa exactă, transmite-o
        organizatorilor.
      </div> */}
    </div>
  );
}
