export const metadata = {
  title: 'Galerie – Talantul în Negoț 2026',
};

// ─────────────────────────────────────────────────────────
// TODO: Pune link-ul real Google Drive după concurs
// ─────────────────────────────────────────────────────────
const DRIVE_LINK = null; // ex: 'https://drive.google.com/drive/folders/...'

// Unlock după concurs (seara zilei de 18 Aprilie)
const UNLOCK_TIME = new Date('2026-04-18T20:00:00+03:00');

export default function GaleriePage() {
  const now = new Date();
  const isUnlocked = now >= UNLOCK_TIME;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Galerie Foto</h1>
        <p className="text-gray-500">
          Pozele de la concursul Talantul în Negoț 2026 – Faza Județeană Bistrița-Năsăud
        </p>
      </div>

      <div className="card text-center py-14 fade-up fade-up-delay-1">
        {isUnlocked ? (
          <>
            <span className="text-5xl mb-5 block">📸</span>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
              Pozele sunt disponibile
            </h2>
            {DRIVE_LINK ? (
              <>
                <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                  Apasă butonul de mai jos pentru a accesa albumul foto pe Google Drive.
                </p>
                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  📂 Deschide albumul foto
                </a>
              </>
            ) : (
              <p className="text-amber-700 bg-amber-50 rounded-xl p-3 text-sm max-w-xs mx-auto">
                ⚠️ Link-ul la galerie va fi adăugat în curând după finalizarea evenimentului.
              </p>
            )}
          </>
        ) : (
          <>
            <span className="text-5xl mb-5 block">🕐</span>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
              Galeria va fi disponibilă după concurs
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              Pozele vor fi încărcate seara zilei de{' '}
              <strong className="text-navy-700">18 Aprilie 2026</strong>.
              Revino pentru a vedea momentele frumoase din zi.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
