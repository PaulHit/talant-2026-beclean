export const metadata = {
  title: 'Program – Talantul în Negoț 2026',
};

const PROGRAM = [
  {
    ora: '10:00',
    titlu: 'Înregistrare și gustare',
    detalii: 'Primirea participanților și servirea unei gustări',
    color: 'green',
  },
  {
    ora: '11:00',
    titlu: 'Instruire',
    detalii: 'Ocuparea locurilor în biserică și prezentarea instrucțiunilor de desfășurare.',
    color: 'gold',
  },
  {
    ora: '11:20',
    titlu: 'Salutări, Rugăciune și Cântare',
    detalii: 'Primirea unui mesaj din partea pastorului bisericii locale',
    color: 'gold',
  },
  {
    ora: '12:00',
    titlu: 'Concurs - varianta Clasic',
    detalii: '',
    color: 'gold',
  },
  {
    ora: '13:00',
    titlu: 'Poză de grup',
    detalii: '',
    color: 'gold',
  },
  {
    ora: '13:15',
    titlu: 'Prânz',
    detalii: 'Servirea prânzului în curtea bisericii',
    color: 'green',
  },
  {
    ora: '14:15',
    titlu: 'Deplasare la jocuri',
    detalii: 'Ne deplasăm către locațiile unde se vor desfășura activitățile recreative',
    color: 'green',
  },
  {
    ora: '16:00',
    titlu: 'Premierea participanților',
    detalii: '',
    color: 'gold',
  },
  {
    ora: '17:00',
    titlu: 'Întoarcerea acasă',
    detalii: 'Ne despărțim cu amintiri frumoase și zâmbete',
    color: 'gold',
  },
];

const dotColor = {
  gold: 'bg-gold-500',
  green: 'bg-emerald-400',
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

      {/* Timeline */}
      <div className="relative fade-up fade-up-delay-1">
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
                  className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${dotColor[item.color]}`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <p className="font-semibold text-navy-900">{item.titlu}</p>
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
