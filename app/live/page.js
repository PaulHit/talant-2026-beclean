export const metadata = {
  title: 'Live – Talantul în Negoț 2026',
};

// ─────────────────────────────────────────────────────────
// TODO: Înlocuiește YOUTUBE_CHANNEL_URL cu link-ul real
// Dacă faci un scheduled stream, poți pune direct link-ul
// la video, altfel pune link-ul la canal.
//
// Opțiune 1 – Link canal:
//   const YOUTUBE_URL = 'https://www.youtube.com/@NumeleCanal';
//   const EMBED_URL = null; // fara embed
//
// Opțiune 2 – Scheduled stream (embed):
//   const YOUTUBE_URL = 'https://youtu.be/ID_VIDEO';
//   const EMBED_URL = 'https://www.youtube.com/embed/ID_VIDEO';
// ─────────────────────────────────────────────────────────
const YOUTUBE_URL = 'https://www.youtube.com/live/_-iA8NsI3N4';
const EMBED_URL = 'https://www.youtube.com/embed/_-iA8NsI3N4';

export default function LivePage() {
  const concursDate = new Date('2026-04-18T09:00:00+03:00');
  const now = new Date();
  const beforeEvent = now < concursDate;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Transmisiune Live</h1>
        <p className="text-gray-500">
          18 Aprilie 2026 · Urmărește concursul în timp real
        </p>
      </div>

      {/* Embed or placeholder */}
      <div className="card p-0 overflow-hidden mb-6 fade-up fade-up-delay-1">
        {EMBED_URL ? (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={EMBED_URL}
              title="Talantul în Negoț 2026 – Live"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-navy-950 text-white text-center px-6">
            <span className="text-6xl mb-4">📺</span>
            <p className="font-display text-2xl font-bold mb-2">
              {beforeEvent ? 'Transmisiunea va fi disponibilă în curând' : 'Link în curând'}
            </p>
            <p className="text-white/60 text-sm max-w-sm">
              {beforeEvent
                ? 'Link-ul va fi activat pe 18 Aprilie 2026. Revino în ziua concursului.'
                : 'Link-ul la transmisiune va fi adăugat în curând.'}
            </p>
          </div>
        )}
      </div>

      {/* Channel link */}
      <div className="card fade-up fade-up-delay-2">
        <h2 className="font-display text-xl font-bold text-navy-900 mb-2">
          🔗 Link transmisiune
        </h2>
        {YOUTUBE_URL ? (
          <>
            <p className="text-gray-500 text-sm mb-4">
              Apasă butonul de mai jos pentru a deschide transmisiunea live pe YouTube.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              ▶ Deschide pe YouTube
            </a>
          </>
        ) : (
          <p className="text-gray-400 text-sm">
            Link-ul va fi adăugat înainte de data concursului. Verifică această pagină pe{' '}
            <strong className="text-navy-700">18 Aprilie 2026</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
