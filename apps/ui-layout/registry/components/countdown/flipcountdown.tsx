'use client';
import React, { useState, useEffect } from 'react';

// --- Configuration ---
// Target Date: December 31, 2026
const targetDate = new Date('2026-12-31T23:59:59').getTime();

// --- Main Component ---
const FlipCountdownTailwind = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate - new Date().getTime()
  );

  // useEffect for the time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      const difference = targetDate - new Date().getTime();
      setTimeRemaining(difference);
      // Clear interval when countdown finishes
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
      <div className='bg-black p-10 text-center font-sans text-white'>
        <h1 className='text-5xl font-extrabold text-red-600'>🥳 Time's Up!</h1>
      </div>
    );
  }

  return (
    <>
      <div className='flex justify-center items-center space-x-2 mt-4 font-librecaslon'>
        {/* Days segment (Red highlight) */}
        <TimeSegment
          value={time.days}
          label='DAYS'
          isHighlighted={true}
          isFlipping={true}
        />
        <Separator />
        {/* Hours segment */}
        <TimeSegment value={time.hours} label='HRS' isFlipping={true} />
        <Separator />
        {/* Minutes segment */}
        <TimeSegment value={time.minutes} label='MINS' isFlipping={true} />
        <Separator />
        {/* Seconds segment (Added for real-time tracking) */}
        <TimeSegment value={time.seconds} label='SECS' isFlipping={true} />
      </div>
    </>
  );
};

// --- Time Segment Component ---
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
        : 'bg-linear-to-b from-slate-800 to-slate-900 border-2 border-blue-500/50 shadow-[0_0_15px_rgba(31, 64, 253, 0.3)]'
    }
  `;

  const digitClasses = `
    text-3xl 2xl:text-5xl xl:text-3xl  font-bold leading-none font-mono
    ${
      isHighlighted
        ? 'text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]'
        : 'text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]'
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
      <div className='mt-2 text-xs md:text-sm font-semibold text-blue-400/80 tracking-widest uppercase drop-shadow-[0_0_4px_rgba(22,38,247,0.4)]'>
        {label}
      </div>
    </div>
  );
};

// --- Separator Component (the colons) ---
const Separator = () => (
  <div className='md:text-6xl text-4xl -translate-y-2 font-extrabold text-gray-600 leading-[90px] mx-1'>
    :
  </div>
);

export default FlipCountdownTailwind;
