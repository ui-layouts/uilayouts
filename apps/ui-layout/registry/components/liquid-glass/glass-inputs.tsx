'use client';
import { useState } from 'react';
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
  const matches = photos.filter(([name]) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div
      style={{
        width: '100%',
        padding: '36px 16px',
        minHeight: 236,
        borderRadius: 14,
        display: 'grid',
        placeItems: 'center',
        background: `linear-gradient(#18232d30,#111c2244),url("/image-effects/${selected}.webp") center/cover`,
      }}
    >
      <div style={{ width: 'min(100%,280px)', display: 'grid', gap: 12 }}>
        <LiquidGlass
          frost={6}
          borderRadius='24px'
          style={{ height: 48, color: '#fff', background: '#16272966' }}
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
              background: 'transparent',
            }}
          />
        </LiquidGlass>
        <LiquidGlass
          frost={4}
          borderRadius='24px'
          style={{ height: 48, color: '#17252c', background: '#f7f8f4a8' }}
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
              background: 'transparent',
              cursor: 'pointer',
              font: '600 15px system-ui',
            }}
          >
            {!matches.some(([, id]) => id === selected) && (
              <option value=''>
                {matches.length ? 'Choose a landscape' : 'No matches'}
              </option>
            )}
            {matches.map(([name, id]) => (
              <option key={id} value={id}>
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
