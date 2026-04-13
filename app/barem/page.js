// This is a SERVER component — the lock logic runs on the server.
// Unlock time: 18 April 2026, 13:00 Romanian time (EET = UTC+3)
const UNLOCK_TIME = new Date('2026-04-18T13:00:00+03:00');

export const metadata = {
  title: 'Barem – Talantul în Negoț 2026',
};

// ─────────────────────────────────────────────────────────
// TODO: Pune link-ul real al baremului când îl primești.
// Poate fi un link Google Drive, PDF, etc.
// ─────────────────────────────────────────────────────────
const BAREM_LINK = null; // ex: 'https://drive.google.com/file/d/...'

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

          {BAREM_LINK ? (
            <>
              <p className="text-gray-500 text-sm mb-5">
                Apasă butonul de mai jos pentru a accesa baremul oficial.
              </p>
              <a
                href={BAREM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                📄 Descarcă / Vezi baremul
              </a>
            </>
          ) : (
            <p className="text-amber-700 bg-amber-50 rounded-xl p-3 text-sm">
              ⚠️ Link-ul la barem nu a fost încă adăugat. Revino în curând.
            </p>
          )}
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
            <CountdownDisplay unlockTime={UNLOCK_TIME} />
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Pagina se va actualiza automat. Poți reveni după ora indicată.
          </p>
        </div>
      )}
    </div>
  );
}

// Simple static countdown (no JS - shows remaining time at render)
function CountdownDisplay({ unlockTime }) {
  const now = new Date();
  const diff = unlockTime - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="flex justify-center gap-3">
      {days > 0 && (
        <div className="bg-navy-50 rounded-xl px-4 py-3 min-w-[64px]">
          <p className="font-display font-bold text-3xl text-navy-900">{days}</p>
          <p className="text-xs text-gray-400">zile</p>
        </div>
      )}
      <div className="bg-navy-50 rounded-xl px-4 py-3 min-w-[64px]">
        <p className="font-display font-bold text-3xl text-navy-900">{hours}</p>
        <p className="text-xs text-gray-400">ore</p>
      </div>
      <div className="bg-navy-50 rounded-xl px-4 py-3 min-w-[64px]">
        <p className="font-display font-bold text-3xl text-navy-900">{minutes}</p>
        <p className="text-xs text-gray-400">minute</p>
      </div>
    </div>
  );
}
