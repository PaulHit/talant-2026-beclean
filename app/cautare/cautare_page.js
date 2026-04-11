'use client';

import { useState, useRef, useCallback } from 'react';

function ResultCard({ participant }) {
  return (
    <div className="card border-l-4 border-l-gold-500 fade-up">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-display font-bold text-navy-900 text-lg sm:text-xl truncate">
            {participant.nume}
          </p>
          <p className="text-gray-500 text-sm mt-1 truncate">
            {participant.categorie} · Biserica {participant.biserica}
          </p>
        </div>
        <div className="flex-shrink-0 bg-navy-900 text-white rounded-xl px-3 py-2 text-center min-w-[56px]">
          <p className="text-[10px] text-white/50 uppercase tracking-wider">Secțiunea</p>
          <p className="font-display font-bold text-2xl text-gold-400 leading-tight">
            {participant.sectiunea}
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        <div className="bg-gray-50 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
          <span className="text-gray-400 text-xs">Rând</span>
          <span className="font-bold text-navy-900 text-sm">{participant.rand}</span>
        </div>
        <div className="bg-gray-50 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
          <span className="text-gray-400 text-xs">Loc</span>
          <span className="font-bold text-navy-900 text-sm">{participant.loc}</span>
        </div>
      </div>
    </div>
  );
}

export default function CautarePage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const debounceRef = useRef(null);

  const search = useCallback(async (value) => {
    if (value.trim().length < 2) {
      setResults(null);
      setError('');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(value.trim())}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Eroare necunoscută.');
        setResults(null);
      } else {
        setResults(data.results);
      }
    } catch {
      setError('Nu s-a putut conecta la server. Verifică conexiunea.');
      setResults(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(value), 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearTimeout(debounceRef.current);
    search(query);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8 fade-up">
          <div className="gold-line" />
          <h1 className="section-title">Găsește-ți locul</h1>
          <p className="text-gray-500">
            Introdu numele tău pentru a vedea în ce secțiune, rând și loc ești
            distribuit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8 fade-up fade-up-delay-1">
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Nume și prenume..."
              maxLength={100}
              autoComplete="off"
              autoFocus
              className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-navy-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent
                         text-base shadow-sm"
            />
            <button
              type="submit"
              disabled={loading || query.trim().length < 2}
              className="btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                '🔍'
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 ml-1">
            Minim 2 caractere · Căutarea e automată
          </p>
        </form>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm">
            ⚠️ {error}
          </div>
        )}

        {results !== null && (
          <div className="mb-8">
            {results.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-4xl mb-3">🔎</p>
                <p className="text-navy-700 font-semibold">
                  Niciun participant găsit
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Verifică dacă ai scris corect numele. Poți căuta și doar după
                  prenume sau doar după nume.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-gray-400 mb-1">
                  {results.length === 1
                    ? '1 participant găsit'
                    : `${results.length} participanți găsiți`}
                </p>
                {results.map((p, i) => (
                  <ResultCard key={i} participant={p} />
                ))}
              </div>
            )}
          </div>
        )}

        {results === null && !error && !loading && (
          <div className="text-center py-16 text-gray-300">
            <p className="text-6xl mb-4">📖</p>
            <p className="text-gray-400">
              Introdu un nume pentru a începe căutarea
            </p>
          </div>
        )}

        <div className="mt-10 fade-up">
          <p className="text-xs font-semibold text-navy-700 uppercase tracking-wide mb-3">
            Harta sălii
          </p>
          <img
            src="/harta.jpg"
            alt="Harta sălii – secțiunile de locuri"
            className="w-full rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow duration-200"
            onClick={() => setMapOpen(true)}
          />
          <p className="text-xs text-gray-400 mt-2 text-center">Apasă pe hartă pentru a mări</p>
        </div>

        {mapOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setMapOpen(false)}
          >
            <button
              onClick={() => setMapOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center
                         rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/harta.jpg"
              alt="Harta sălii – secțiunile de locuri"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
    </div>
  );
}
