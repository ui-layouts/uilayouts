'use client';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TypeWritterProps {
  text: string;
  charDelay?: number;
  onComplete: () => void;
}

export function TypeWritter({
  text,
  charDelay = 55,
  onComplete,
}: TypeWritterProps) {
  const [displayed, setDisplayed] = useState('');
  const doneRef = useRef(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    function typeNext() {
      if (cancelled) return;
      if (i >= text.length) {
        if (!doneRef.current) {
          doneRef.current = true;
          onComplete();
        }
        return;
      }
      setDisplayed(text.slice(0, i + 1));
      i++;
      setTimeout(typeNext, charDelay);
    }

    typeNext();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-purple-500'>
        <Play className='w-3 h-3 fill-purple-500' />
      </span>
      <span className='text-sm font-bold tracking-[0.2px] text-purple-200'>
        {displayed}
        <span className='ml-0.5 inline-block h-[1em] w-0.5 align-text-bottom bg-purple-200/70 animate-[blink_1s_step-end_infinite]' />
      </span>
    </div>
  );
}
