import GalleryPreview from '@/components/GalleryPreview';

export const metadata = {
  title: 'Galerie – Talantul în Negoț 2026',
};

// TODO: Pune link-ul real Google Photos
const ALBUM_LINK = 'https://photos.app.goo.gl/nnyM5vtSTv3zpLTb9';
const TOTAL_PHOTOS = 539;

export default function GaleriePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-6 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Galerie Foto</h1>
        <p className="text-gray-500">
          Pozele de la concursul Talantul în Negoț 2026 – Faza Județeană
          Bistrița-Năsăud
        </p>
      </div>

      {/* Album link card */}
      <div className="card fade-up fade-up-delay-1">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-4xl">📸</span>
            <div>
              <p className="font-display font-bold text-navy-900 text-lg">
                Vezi toate pozele din album
              </p>
              <p className="text-gray-400 text-sm">
                Albumul este în curs de completare - pozele se încarcă treptat
              </p>
            </div>
          </div>
          <a
            href={ALBUM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm whitespace-nowrap"
          >
            📂 Deschide albumul
          </a>
        </div>
      </div>

      {/* Preview section */}
      <div className="mt-10 fade-up fade-up-delay-2">
        <h2 className="font-display text-xl font-bold text-navy-900 mb-1">
          Previzualizare
        </h2>
        <p className="text-gray-400 text-sm mb-2">
          O selecție din momentele concursului
        </p>

        <GalleryPreview />
      </div>
    </div>
  );
}
