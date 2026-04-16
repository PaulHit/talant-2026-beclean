'use client';

import { useState, useEffect } from 'react';

export default function CountdownDisplay({ unlockTime }) {
  const [diff, setDiff] = useState(() => new Date(unlockTime) - new Date());

  useEffect(() => {
    const tick = () => setDiff(new Date(unlockTime) - new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [unlockTime]);

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

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
      <div className="bg-navy-50 rounded-xl px-4 py-3 min-w-[64px]">
        <p className="font-display font-bold text-3xl text-navy-900">{seconds}</p>
        <p className="text-xs text-gray-400">secunde</p>
      </div>
    </div>
  );
}
