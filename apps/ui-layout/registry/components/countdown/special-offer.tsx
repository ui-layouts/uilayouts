'use client';

import { useState, useEffect } from 'react';

// Target Date: December 31, 2026
const targetDate = new Date('2026-12-31T23:59:59').getTime();

const SpecialOffer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  // useEffect for the time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      const difference = targetDate - new Date().getTime();
      setTimeRemaining(difference);
      if (difference < 1000) clearInterval(intervalId);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format the time
  const formatTime = (ms: number) => {
    const absMs = Math.abs(ms);
    const isNegative = ms < 0;

    if (absMs < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(absMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { days, hours, minutes, seconds, isNegative };
  };

  const time = formatTime(timeRemaining);

  // Stop if complete
  if (timeRemaining <= 0) {
    return (
      <div className='w-full bg-linear-to-r from-gray-900 to-black p-8 text-center'>
        <h1 className='text-4xl font-extrabold text-pink-500'>
          🥳 Sale Ended!
        </h1>
      </div>
    );
  }

  return (
    <div className='w-full relative bg-linear-to-r from-slate-950 via-orange-950 to-slate-950 border-t border-b border-blue-500/40 shadow-2xl shadow-blue-500/20'>
      <div className='max-w-7xl mx-auto px-4 py-8 md:py-12'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Left Content Section */}
          <div className='flex-1 text-center md:text-left'>
            <p className='text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 drop-shadow-[0_0_8px_rgba(34, 99, 238, 0.5)]'>
              Limited Time Offer
            </p>
            <h2 className='text-white text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]'>
              Cyber Sale Offer
            </h2>
            <p className='text-gray-300 text-lg mb-6'>
              Get{' '}
              <span className='text-orange-400 font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]'>
                30% OFF
              </span>{' '}
              when you use promo code{' '}
              <span className='text-blue-300 font-mono font-semibold drop-shadow-[0_0_8px_rgba(34, 116, 238, 0.5)]'>
                CBRLAYOUT
              </span>{' '}
              - limited time only!
            </p>
          </div>

          {/* Countdown Timer Section */}
          <div className='flex justify-center items-center gap-2 md:gap-4'>
            <TimeSegment
              value={time.days}
              label='Days'
              isHighlighted={true}
              isFlipping={true}
            />
            <Separator />
            <TimeSegment value={time.hours} label='Hrs' isFlipping={true} />
            <Separator />
            <TimeSegment value={time.minutes} label='Mins' isFlipping={true} />
            <Separator />
            <TimeSegment value={time.seconds} label='Secs' isFlipping={true} />
          </div>

          {/* Promo Code Box */}
          <div className='flex flex-col items-center gap-3 bg-black/70 border-2 border-blue-500/60 rounded-lg p-6 backdrop-blur-xs shadow-lg shadow-blue-500/30'>
            <p className='text-blue-400 text-xs font-semibold tracking-widest uppercase drop-shadow-[0_0_6px_rgba(31, 121, 255, 0.4)]'>
              Promo Code
            </p>
            <p className='text-orange-400 font-mono text-2xl md:text-3xl font-extrabold tracking-wider drop-shadow-[0_0_8px_rgba(255,113,31,0.5)]'>
              CBRLAYOUT
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute h-80 w-full overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-size-[70px_80px] "></div>
        <Sparkles
          density={400}
          color="fd660e"
          size={1.4}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full mask-[radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div> */}
    </div>
  );
};

// Time Segment Component
const TimeSegment = ({
  value,
  label,
  isHighlighted = false,
  isFlipping = false,
}: {
  value: number;
  label: string;
  isHighlighted?: boolean;
  isFlipping?: boolean;
}) => {
  const displayValue = value.toString().padStart(2, '0');

  const boxClasses = `
    w-16 h-16 2xl:w-24 2xl:h-24 xl:w-20 sm:h-20 h-16 rounded-md flex justify-center items-center relative
    shadow-lg transition-all duration-300 font-mono
    ${isFlipping ? 'flip-animate' : ''}
    ${
      isHighlighted
        ? 'bg-linear-to-b from-orange-600 to-orange-700 border-2 border-orange-400/70 shadow-[0_0_15px_rgba(255, 113, 31, 0.6)]'
        : 'bg-linear-to-b from-slate-800 to-slate-900 border-2 border-blue-500/50 shadow-[0_0_15px_rgba(25, 105, 255, 0.3)]'
    }
  `;

  const digitClasses = `
    text-3xl 2xl:text-5xl xl:text-3xl  font-bold leading-none font-mono
    ${
      isHighlighted
        ? 'text-white drop-shadow-[0_0_10px_rgba(255,113,31,0.8)]'
        : 'text-blue-200 drop-shadow-[0_0_10px_rgba(25,105,255,0.6)]'
    }
  `;

  return (
    <div className='flex flex-col items-center'>
      <div className={boxClasses}>
        <span className={digitClasses}>{displayValue}</span>
        <div
          className={`absolute top-1/2 left-0 right-0 h-[2px] transform -translate-y-1/2 ${isHighlighted ? 'bg-orange-400/50' : 'bg-blue-400/30'}`}
        ></div>
      </div>
      <div className='mt-2 text-xs md:text-sm font-semibold text-blue-400/80 tracking-widest uppercase drop-shadow-[0_0_4px_rgba(22, 131, 255, 0.4)]'>
        {label}
      </div>
    </div>
  );
};

// Separator Component (the colons)
const Separator = () => (
  <div className='text-3xl md:text-5xl font-extrabold text-blue-500/60 leading-none mx-1 md:mx-2 drop-shadow-[0_0_8px_rgba(25,105,255,0.4)] animate-pulse'>
    :
  </div>
);

export default SpecialOffer;
