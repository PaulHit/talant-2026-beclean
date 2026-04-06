'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Acasă' },
  { href: '/program', label: 'Program' },
  { href: '/locatii', label: 'Locații' },
  { href: '/cautare', label: 'Locul meu' },
  { href: '/live', label: 'Live' },
  { href: '/barem', label: 'Barem' },
  { href: '/galerie', label: 'Galerie' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://talantulinnegot.com/wp-content/uploads/2024/06/talant-transparent.png"
              alt="Talantul în Negoț"
              className="h-9 w-auto"
            />
            <span className="font-display font-bold text-navy-900 text-sm leading-tight hidden sm:block">
              Talantul<br />în Negoț
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === l.href
                    ? 'bg-navy-900 text-white'
                    : 'text-navy-700 hover:bg-navy-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Meniu"
          >
            <span
              className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy-900 transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy-900 transition-transform duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-white shadow-xl transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="p-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                  pathname === l.href
                    ? 'bg-navy-900 text-white'
                    : 'text-navy-700 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
