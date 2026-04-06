import Link from 'next/link';

const quickLinks = [
  {
    href: '/cautare',
    icon: '🔍',
    title: 'Locul meu',
    desc: 'Caută locul tău alocat în sală',
    color: 'from-blue-50 to-blue-100 border-blue-200',
    textColor: 'text-blue-900',
  },
  {
    href: '/program',
    icon: '📋',
    title: 'Program',
    desc: 'Vezi programul zilei de concurs',
    color: 'from-amber-50 to-amber-100 border-amber-200',
    textColor: 'text-amber-900',
  },
  {
    href: '/locatii',
    icon: '📍',
    title: 'Locații',
    desc: 'Harta și adresele importante',
    color: 'from-emerald-50 to-emerald-100 border-emerald-200',
    textColor: 'text-emerald-900',
  },
  {
    href: '/live',
    icon: '📺',
    title: 'Live',
    desc: 'Urmărește transmisiunea live',
    color: 'from-red-50 to-red-100 border-red-200',
    textColor: 'text-red-900',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-950 text-white overflow-hidden">

        {/* Background gradient texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #C9A44C 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #3a5f8a 0%, transparent 40%)`,
          }}
        />

        {/* Church image — right side, blended */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%] pointer-events-none select-none">
          <div
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to right, #071224 0%, #071224 8%, rgba(7,18,36,0.5) 40%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to left, #071224 0%, transparent 20%)' }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to top, #071224 0%, transparent 40%)' }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to bottom, #071224 0%, transparent 20%)' }}
          />
          <img
            src="/biserica.png"
            alt="Biserica Penticostală Beclean"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.35, mixBlendMode: 'luminosity' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 fade-up">
              <img
                src="https://talantulinnegot.com/wp-content/uploads/2024/06/talant-transparent.png"
                alt="Logo Talantul în Negoț"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4 fade-up fade-up-delay-1">
              Talantul<br />
              <span className="text-gold-400">în Negoț</span>
              <span className="text-white/60 text-2xl md:text-3xl block mt-1">2026</span>
            </h1>

            <p className="text-white/70 text-lg mb-2 fade-up fade-up-delay-2">
              Un proiect biblic al Departamentului Copii CCP
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 fade-up fade-up-delay-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <span>📅</span>
                <span className="font-semibold text-sm">18 Aprilie 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <span>📍</span>
                <span className="font-semibold text-sm">Beclean, BN</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <span>🏛️</span>
                <span className="font-semibold text-sm">Faza Județeană</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 fade-up fade-up-delay-3">
              <Link href="/cautare" className="btn-gold text-sm">
                🔍 Caută locul tău
              </Link>
              <Link href="/program" className="btn-primary bg-white/15 hover:bg-white/25 text-sm">
                📋 Vezi programul
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title text-center mb-2">Informații rapide</h2>
        <p className="section-subtitle text-center">Tot ce ai nevoie într-un singur loc</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`card bg-gradient-to-br ${item.color} border p-4 md:p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group`}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className={`font-display font-bold text-base md:text-lg ${item.textColor} mb-1`}>
                {item.title}
              </h3>
              <p className={`text-xs md:text-sm ${item.textColor} opacity-70`}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Verse */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <div className="gold-line mx-auto" />
          <blockquote className="font-display text-xl md:text-2xl text-navy-900 italic leading-relaxed">
            „Strâng Cuvântul Tău în inima mea, ca să nu păcătuiesc împotriva Ta."
          </blockquote>
          <p className="text-gold-600 font-semibold mt-4">Psalmul 119:11</p>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="gold-line" />
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              📄 Barem
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Baremul de corectare va fi disponibil după finalizarea
              examenului, pe <strong className="text-navy-700">18 Aprilie, ora 14:00</strong>.
            </p>
            <Link href="/barem" className="btn-primary text-sm">
              📄 Vezi baremul
            </Link>
          </div>

          <div className="card">
            <div className="gold-line" />
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              📸 Galerie Foto
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Pozele de la concurs vor fi disponibile{' '}
              <strong className="text-navy-700">în curând</strong>.
            </p>
            <Link href="/galerie" className="btn-gold text-sm">
              📸 Vezi galeria
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
