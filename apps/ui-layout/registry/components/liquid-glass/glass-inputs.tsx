'use client';
import { useRef, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const photos = [
  ['Coast', 'coast'],
  ['Alpine ridge', 'ridge'],
  ['Forest', 'forest'],
  ['Valley', 'valley'],
  ['Lake', 'lake'],
];
export default function GlassInputs() {
  const [query, setQuery] = useState(''),
    [selected, setSelected] = useState('coast');
  const photo = useRef<HTMLImageElement>(null);
  const matches = photos.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div
      style={{
        width: '100%',
        padding: '36px 16px',
        minHeight: 236,
        borderRadius: 14,
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
      }}
    >
      <img
        ref={photo}
        alt=''
        src={`/image-effects/${selected}.webp`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div style={{ width: 'min(100%,280px)', display: 'grid', gap: 12 }}>
        <LiquidGlass
          backdropImage={photo}
          frost={0.6}
          borderRadius='24px'
          style={{
            height: 48,
            color: '#fff',
            background: '#16272930',
            textShadow: '0 1px 3px #18222b',
          }}
        >
          <Search
            size={18}
            aria-hidden='true'
            style={{ position: 'absolute', zIndex: 2, top: 15, left: 16 }}
          />
          <input
            type='search'
            aria-label='Filter landscapes'
            placeholder='Filter landscapes'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'block',
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: 'inherit',
              padding: '0 16px 0 43px',
              font: '500 15px system-ui',
              color: 'white',
              textShadow: '0 1px 3px #18222b',
              background: 'transparent',
            }}
          />
        </LiquidGlass>
        <LiquidGlass
          backdropImage={photo}
          frost={0.6}
          borderRadius='24px'
          style={{
            height: 48,
            color: 'white',
            background: '#16272930',
            textShadow: '0 1px 3px #18222b',
          }}
        >
          <select
            aria-label='Landscape'
            disabled={!matches.length}
            value={matches.some(([, id]) => id === selected) ? selected : ''}
            onChange={(e) => setSelected(e.target.value)}
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: '100%',
              padding: '0 42px 0 17px',
              border: 0,
              borderRadius: 'inherit',
              appearance: 'none',
              color: 'inherit',
              textShadow: '0 1px 3px #18222b',
              background: 'transparent',
              cursor: 'pointer',
              font: '600 15px system-ui',
            }}
          >
            {!matches.some(([, id]) => id === selected) && (
              <option value=''>{matches.length ? 'Choose a landscape' : 'No matches'}</option>
            )}
            {matches.map(([name, id]) => (
              <option key={id} value={id} style={{ color: '#17252c', textShadow: 'none' }}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            aria-hidden='true'
            style={{
              position: 'absolute',
              zIndex: 3,
              right: 16,
              top: 15,
              pointerEvents: 'none',
            }}
          />
        </LiquidGlass>
      </div>
    </div>
  );
}
