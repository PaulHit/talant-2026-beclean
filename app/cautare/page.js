import CautarePage from './cautare_page';
import ChurchMap from '@/components/ChurchMap';

export default function Page() {
  return (
    <>
      <CautarePage />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="mb-6">
          <div className="gold-line" />
          <h2 className="section-title">Harta Bisericii</h2>
          <p className="text-gray-500 text-sm">
            Orientează-te în biserică folosind harta de mai jos
          </p>
        </div>
        <ChurchMap />
      </div>
    </>
  );
}
