import CountdownDisplay from '@/components/CountdownDisplay';

const UNLOCK_TIME = new Date('2026-04-18T00:00:00+03:00');
const UNLOCK_TIME_ISO = '2026-04-18T00:00:00+03:00';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Barem – Talantul în Negoț 2026',
};

const BAREM_FILES = [
  { label: 'Barem V1', href: '/barem-v1.pdf' },
  { label: 'Barem V2', href: '/barem-v2.pdf' },
  { label: 'Barem V3', href: '/barem-v3.pdf' },
];

export default function BaremPage() {
  const now = new Date();
  const isUnlocked = now >= UNLOCK_TIME;

  const unlockFormatted = '18.04.2026 ora 13:00';

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Barem</h1>
        <p className="text-gray-500">
          Baremul de corectare al probelor Talantul în Negoț 2026
        </p>
      </div>

      {isUnlocked ? (
        /* ── UNLOCKED ── */
        <div className="card fade-up fade-up-delay-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <div>
              <p className="font-display font-bold text-navy-900 text-xl">
                Baremul este disponibil
              </p>
              <p className="text-gray-400 text-sm">Concursul s-a încheiat</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-5">
            Alege varianta de barem corespunzătoare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {BAREM_FILES.map((file) => (
              <a
                key={file.href}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-center"
              >
                📄 {file.label}
              </a>
            ))}
          </div>
        </div>
      ) : (
        /* ── LOCKED ── */
        <div className="fade-up fade-up-delay-1">
          <div className="card text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-50 mb-5">
              <span className="text-4xl">🔒</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
              Barem blocat
            </h2>
            <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
              Baremul va fi disponibil după finalizarea examenului, pe{' '}
              <strong className="text-navy-700">{unlockFormatted}</strong>.
            </p>

            {/* Countdown display */}
            <CountdownDisplay unlockTime={UNLOCK_TIME_ISO} />
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Pagina se va actualiza automat. Poți reveni după ora indicată.
          </p>
        </div>
      )}
    </div>
  );
}

