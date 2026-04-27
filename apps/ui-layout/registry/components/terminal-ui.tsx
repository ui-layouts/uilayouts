'use client';
import { ShimmerLoader } from '@/components/ui/shimmer-loader';
import { TypeWritter } from '@/components/ui/typing-writter';
import { useEffect, useRef, useState, useCallback } from 'react';

type Phase =
  | { type: 'divider' }
  | {
      type: 'bar';
      labels: string[];
      icons: string[];
      duration: number;
      tokenTarget?: number; // omit -> no token counter
      showPercent?: boolean; // default true
    }
  | { type: 'lines'; lines: string[] }
  | { type: 'message'; text: string };

export interface IntroSequenceProps {
  onComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface RenderedItem {
  id: string;
  phase: Phase;
  lineIndex?: number;
}
// ── divider ──────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      style={{
        color: 'rgba(210,190,255,0.2)',
        fontSize: 13,
        letterSpacing: '1px',
        fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
      }}
    >
      {'─'.repeat(44)}
    </div>
  );
}

// ── sequence runner ──────────────────────────────────────────────────────────

const SEQUENCE: Phase[] = [
  { type: 'divider' },
  {
    type: 'bar',
    labels: ['Scanning…', 'Analysing…', 'Detecting…', 'Profiling…'],
    icons: ['✦', '◆', '✶', '❋', '✸'],
    duration: 3000,
    tokenTarget: 0.6, // shows "0.6k" counter
    showPercent: true,
  },
  {
    type: 'lines',
    lines: ['New Role Detected', 'New Team Detected', 'New Challenges'],
  },
  { type: 'divider' },
  {
    type: 'bar',
    labels: ['Booting…', 'Loading…', 'Preparing…', 'Initializing…'],
    icons: ['✦', '◆', '✶', '❋', '✸'],
    duration: 3000,
    showPercent: false, // no percent, no tokens — clean spinner
  },
  { type: 'message', text: "Let's build something great 🚀" },
  { type: 'divider' },
  {
    type: 'bar',
    labels: ['Syncing…', 'Configuring…', 'Setting up…', 'Onboarding…'],
    icons: ['◈', '◉', '⬡', '⬢', '◍'],
    duration: 3000,
    tokenTarget: 0.8, // tokens but no percent
    showPercent: false,
  },
];

export function NewIntroSequence({
  onComplete,
  className,
  style,
}: IntroSequenceProps) {
  const [items, setItems] = useState<RenderedItem[]>([]);
  const phaseRef = useRef(0);
  const lineRef = useRef(0);
  const completedRef = useRef(false);

  const advance = useCallback(() => {
    const phase = SEQUENCE[phaseRef.current];
    if (!phase) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    if (phase.type === 'divider') {
      setItems((prev) => [
        ...prev,
        { id: `divider-${phaseRef.current}`, phase },
      ]);
      phaseRef.current++;
      setTimeout(advance, 80);
      return;
    }

    if (phase.type === 'bar') {
      setItems((prev) => [...prev, { id: `bar-${phaseRef.current}`, phase }]);
      phaseRef.current++;
      return;
    }

    if (phase.type === 'lines') {
      lineRef.current = 0;
      phaseRef.current++;
      typeNextLine(phase.lines);
      return;
    }

    if (phase.type === 'message') {
      setItems((prev) => [...prev, { id: `msg-${phaseRef.current}`, phase }]);
      phaseRef.current++;
      setTimeout(advance, 400);
      return;
    }
  }, [onComplete]);

  function typeNextLine(lines: string[]) {
    const idx = lineRef.current;
    if (idx >= lines.length) {
      setTimeout(advance, 200);
      return;
    }
    setItems((prev) => [
      ...prev,
      {
        id: `line-${phaseRef.current - 1}-${idx}`,
        phase: { type: 'lines', lines },
        lineIndex: idx,
      },
    ]);
    lineRef.current++;
  }

  useEffect(() => {
    setTimeout(advance, 300);
  }, []);

  return (
    <>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      <div
        className={className}
        style={{
          background: '#0f0e17',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
          minWidth: 520,
          ...style,
        }}
      >
        {items.map((item) => {
          const { id, phase } = item;

          if (phase.type === 'divider') return <Divider key={id} />;

          if (phase.type === 'bar') {
            return (
              <ShimmerLoader
                key={id}
                labels={phase.labels}
                icons={phase.icons}
                duration={phase.duration}
                tokenTarget={phase.tokenTarget}
                showPercent={phase.showPercent}
                onComplete={() => {
                  setTimeout(advance, 150);
                }}
              />
            );
          }

          if (phase.type === 'lines' && item.lineIndex !== undefined) {
            const isLast = item.lineIndex === phase.lines.length - 1;
            return (
              <TypeWritter
                key={id}
                text={phase.lines[item.lineIndex]}
                onComplete={() => {
                  setTimeout(() => typeNextLine(phase.lines), isLast ? 0 : 200);
                }}
              />
            );
          }

          if (phase.type === 'message') {
            return (
              <div
                key={id}
                style={{
                  color: 'rgb(160,130,255)',
                  fontWeight: 700,
                  fontSize: 14,
                  paddingLeft: 4,
                }}
              >
                {phase.text}
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
}
