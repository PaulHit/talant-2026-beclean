export const metadata = {
  title: 'Program – Talantul în Negoț 2026',
};

// ─────────────────────────────────────────────────────────
// TODO: Înlocuiește array-ul de mai jos cu programul real
// când îl primești. Fiecare obiect are:
//   ora: string   (ex: "09:00")
//   titlu: string (ex: "Deschidere oficială")
//   detalii: string (opțional, poate fi '')
//   tip: 'normal' | 'important' | 'pauza'
// ─────────────────────────────────────────────────────────
const PROGRAM = [
  {
    ora: '10:30',
    titlu: 'Înregistrare și Gustare',
    detalii: 'Primirea participanților și servirea unei gustări',
    tip: 'normal',
  },
  {
    ora: '11:30',
    titlu: 'Instruire',
    detalii: 'Ocuparea locurilor în biserică și prezentarea instrucțiunilor de desfășurare.',
    tip: 'important',
  },
  {
    ora: '11:40',
    titlu: 'Salutări și Rugăciune',
    detalii: 'Primirea unui mesaj din partea lucrătorului bisericii locale, urmată de o rugăciune.',
    tip: 'important',
  },
  {
    ora: '12:00',
    titlu: 'Concurs - varianta Clasic',
    detalii: '',
    tip: 'important',
  },
  {
    ora: '13:00',
    titlu: 'Poză de grup',
    detalii: '',
    tip: 'normal',
  },
  {
    ora: '13:15',
    titlu: 'Prânz',
    detalii: 'Servirea prânzului în curtea bisericii.',
    tip: 'pauza',
  },
  {
    ora: '14:15',
    titlu: 'Deplasare la jocuri',
    detalii: 'Ne deplasăm către locațiile unde se vor desfășura activitățile recreative.',
    tip: 'important',
  },
  {
    ora: '16:00',
    titlu: 'Premiere și încheiere',
    detalii: 'Recunoașterea participanților și împărtășirea momentelor finale.',
    tip: 'important',
  },
  {
    ora: '17:00',
    titlu: 'Întoarcerea acasa',
    detalii: 'Ne despărțim cu amintiri frumoase și zâmbete.',
    tip: 'important',
  },
];

const tipStyle = {
  important: 'bg-gold-500 text-white',
  pauza: 'bg-emerald-100 text-emerald-800',
  normal: 'bg-navy-100 text-navy-700',
};

const tipDot = {
  important: 'bg-gold-500',
  pauza: 'bg-emerald-400',
  normal: 'bg-navy-400',
};

export default function ProgramPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8 fade-up">
        <div className="gold-line" />
        <h1 className="section-title">Program</h1>
        <p className="text-gray-500">
          18 Aprilie 2026 · Beclean, Bistrița-Năsăud
        </p>
      </div>

      {/* Notice - remove when program is confirmed */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800 fade-up fade-up-delay-1">
        ⚠️ <strong>Program preliminar</strong> — Va fi actualizat când primim versiunea finală.
      </div>

      {/* Timeline */}
      <div className="relative fade-up fade-up-delay-2">
        {/* Vertical line */}
        <div className="absolute left-[52px] top-4 bottom-4 w-0.5 bg-gray-100" />

        <div className="flex flex-col gap-6">
          {PROGRAM.map((item, i) => (
            <div key={i} className="flex gap-4 items-start relative">
              {/* Time */}
              <div className="w-[52px] flex-shrink-0 text-right">
                <span className="font-display font-bold text-navy-900 text-sm leading-none">
                  {item.ora}
                </span>
              </div>

              {/* Dot */}
              <div className="flex-shrink-0 mt-0.5 relative z-10">
                <div
                  className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${tipDot[item.tip]}`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-semibold text-navy-900">{item.titlu}</p>
                  {item.tip === 'important' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gold-100 text-gold-700 font-semibold flex-shrink-0">
                      Principal
                    </span>
                  )}
                  {item.tip === 'pauza' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold flex-shrink-0">
                      Pauză
                    </span>
                  )}
                </div>
                {item.detalii && (
                  <p className="text-gray-500 text-sm mt-1">{item.detalii}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
