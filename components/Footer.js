import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://talantulinnegot.com/wp-content/uploads/2024/06/talant-transparent.png"
              alt="Logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <div>
              <p className="font-display font-bold text-white text-sm">Talantul în Negoț 2026</p>
              <p className="text-xs text-white/60">Faza Județeană Bistrița-Năsăud</p>
            </div>
          </div>

          <div className="text-center md:text-right text-sm">
            <p className="text-white/60">
              18 Aprilie 2026 • Beclean, Bistrița-Năsăud
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© 2026 Talantul în Negoț – Beclean</p>
          <a
            href="https://talantulinnegot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            talantulinnegot.com ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
