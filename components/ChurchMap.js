'use client';

const B = 'rounded-[2px] bg-[#c8c8c8]';
const H = 'h-[6px] sm:h-[8px]';
const GAP = 'gap-[4px] sm:gap-[6px]';
const COL_GAP = 'gap-[5px] sm:gap-[8px]';

function Bar({ className = '' }) {
  return <div className={`${B} ${H} ${className}`} />;
}

function Bars({ count, className = '' }) {
  return Array.from({ length: count }, (_, i) => (
    <Bar key={i} className={className} />
  ));
}

const FULL = 'w-[52px] sm:w-[82px] md:w-[110px]';
const MED = 'w-[38px] sm:w-[60px] md:w-[80px]';
const SHORT = 'w-[28px] sm:w-[44px] md:w-[58px]';

export default function ChurchMap() {
  return (
    <div className="bg-[#333] rounded-2xl p-4 sm:p-6 md:p-10 overflow-hidden">
      <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-14">

        {/* ── COR (top-left, rotated -30°) ── */}
        <div className="min-h-[180px] sm:min-h-[260px] md:min-h-[310px] flex flex-col">
          <span className="text-[#777] text-xs sm:text-sm">cor</span>
          <div className="flex-1 flex justify-center items-center">
            <div style={{ transform: 'rotate(-30deg)' }}>
              <div className={`flex ${COL_GAP}`}>
                <div className={`flex flex-col ${GAP}`}>
                  <Bar className={MED} />
                  <Bars count={5} className={FULL} />
                  <Bar className={SHORT} />
                </div>
                <div className={`flex flex-col ${GAP} mt-3 sm:mt-5`}>
                  <Bars count={5} className={FULL} />
                  <Bar className={SHORT} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ORCHESTRA (top-right, rotated +30°) ── */}
        <div className="min-h-[180px] sm:min-h-[260px] md:min-h-[310px] flex flex-col">
          <span className="text-[#777] text-xs sm:text-sm">orchestra</span>
          <div className="flex-1 flex justify-center items-center">
            <div style={{ transform: 'rotate(30deg)' }}>
              <div className={`flex ${COL_GAP}`}>
                <div className={`flex flex-col ${GAP} mt-3 sm:mt-5`}>
                  <Bars count={5} className={FULL} />
                  <Bar className={SHORT} />
                </div>
                <div className={`flex flex-col ${GAP}`}>
                  <Bar className={`${MED} ml-auto`} />
                  <Bars count={5} className={FULL} />
                  <Bar className={`${SHORT} ml-auto`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BARBATI (bottom-left, columns A & B) ── */}
        <div>
          <span className="text-[#777] text-xs sm:text-sm">barbati</span>
          <div className={`flex ${COL_GAP} mt-2 sm:mt-3`}>
            <div className={`flex flex-col ${GAP} flex-1`}>
              <Bars count={10} />
            </div>
            <div className={`flex flex-col ${GAP} flex-1`}>
              {Array.from({ length: 10 }, (_, i) => (
                <Bar key={i} className={i === 8 ? 'w-[88%]' : ''} />
              ))}
            </div>
          </div>
          <Bar className="mt-[4px] sm:mt-[6px]" />
          <div className="flex mt-2 sm:mt-3">
            <span className="text-[#c44] text-xs sm:text-sm flex-1 text-center font-bold">A</span>
            <span className="text-[#c44] text-xs sm:text-sm flex-1 text-center font-bold">B</span>
          </div>
        </div>

        {/* ── FEMEI (bottom-right, columns C & D) ── */}
        <div>
          <div className="flex justify-between items-start">
            <span className="text-[#777] text-xs sm:text-sm">femei</span>
            <Bar className="w-[28%]" />
          </div>
          <div className={`flex ${COL_GAP} mt-2 sm:mt-3`}>
            <div className={`flex flex-col ${GAP} flex-1`}>
              <Bars count={9} />
            </div>
            <div className={`flex flex-col ${GAP} flex-1`}>
              <Bars count={9} />
            </div>
          </div>
          <Bar className="mt-[4px] sm:mt-[6px]" />
          <div className="flex mt-2 sm:mt-3">
            <span className="text-[#c44] text-xs sm:text-sm flex-1 text-center font-bold">C</span>
            <span className="text-[#c44] text-xs sm:text-sm flex-1 text-center font-bold">D</span>
          </div>
        </div>
      </div>
    </div>
  );
}
