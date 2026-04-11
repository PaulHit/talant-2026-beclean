import { Playfair_Display, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  title: 'Talantul în Negoț 2026',
  description:
    'Site oficial al fazei județene Bistrița-Năsăud a concursului biblic Talantul în Negoț 2026, organizat la Biserica Penticostală Nr. 1 Beclean, 18 Aprilie 2026.',
  openGraph: {
    title: 'Talantul în Negoț 2026 – Faza Județeană',
    description: 'Concurs biblic | 18 Aprilie 2026 | Beclean',
    images: ['https://talantulinnegot.com/wp-content/uploads/2024/06/talant-transparent.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
