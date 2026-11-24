'use client';
import { useState, type CSSProperties } from 'react';
import {
  Plane,
  Wifi,
  Bluetooth,
  Radio,
  Sun,
  Volume2,
  VolumeX,
  Moon,
} from 'lucide-react';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const tile: CSSProperties = {
  padding: 12,
  display: 'grid',
  placeItems: 'center',
  color: 'white',
  background: 'rgba(29,39,65,.20)',
};
export default function ControlCenter() {
  const [radios, setRadios] = useState([false, true, true, true]),
    [brightness, setBrightness] = useState(70),
    [volume, setVolume] = useState(48),
    [focus, setFocus] = useState(false);
  return (
    <section
      aria-label='Control Center'
      style={{
        width: '100%',
        position: 'relative',
        isolation: 'isolate',
        minHeight: 330,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        borderRadius: 16,
        background: '#263c54',
      }}
    >
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: -12,
          zIndex: -1,
          background:
            'linear-gradient(175deg,#0f477c99,transparent 62%),url(/image-effects/valley.webp) center/cover',
          filter: 'blur(4px)',
          opacity: 0.48 + (0.52 * brightness) / 100,
        }}
      />
      <div
        style={{
          width: 'min(86%,310px)',
          display: 'grid',
          gridTemplateColumns: '1.3fr .55fr .55fr',
          gridTemplateRows: '119px 48px',
          gap: 10,
        }}
      >
        <LiquidGlass
          frost={6}
          style={{ ...tile, gridTemplateColumns: '1fr 1fr', gap: 5 }}
          borderRadius='27px'
        >
          {[Plane, Wifi, Bluetooth, Radio].map((Icon, i) => (
            <button
              type='button'
              key={i}
              aria-label={
                ['Airplane mode', 'Wi-Fi', 'Bluetooth', 'Cellular data'][i]
              }
              aria-pressed={radios[i]}
              onClick={() =>
                setRadios((a) => a.map((v, j) => (i === j ? !v : v)))
              }
              style={{
                zIndex: 2,
                width: 39,
                height: 39,
                display: 'grid',
                placeItems: 'center',
                border: 0,
                borderRadius: '50%',
                color: 'white',
                background: radios[i]
                  ? i === 3
                    ? '#36bd64'
                    : '#1679ed'
                  : '#ffffff37',
                cursor: 'pointer',
              }}
            >
              <Icon size={20} />
            </button>
          ))}
        </LiquidGlass>
        {['Brightness', 'Volume'].map((name, i) => {
          const val = i === 0 ? brightness : volume,
            Icon = i === 0 ? Sun : val ? Volume2 : VolumeX;
          return (
            <LiquidGlass
              key={name}
              frost={5}
              borderRadius='28px'
              style={{ ...tile, gridRow: 'span 2', overflow: 'hidden' }}
            >
              <span
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  inset: `${100 - val}% 0 0`,
                  background: 'rgba(250,250,255,.89)',
                  pointerEvents: 'none',
                }}
              />
              <Icon
                size={20}
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  bottom: 14,
                  zIndex: 3,
                  color: val > 16 ? '#20334c' : 'white',
                }}
              />
              <input
                aria-label={name}
                type='range'
                min={0}
                max={100}
                value={val}
                onChange={(e) =>
                  (i === 0 ? setBrightness : setVolume)(Number(e.target.value))
                }
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 4,
                  height: '100%',
                  width: '100%',
                  margin: 0,
                  opacity: 0,
                  writingMode: 'vertical-lr',
                  direction: 'rtl',
                  cursor: 'ns-resize',
                }}
              />
            </LiquidGlass>
          );
        })}
        <LiquidGlass
          frost={5}
          borderRadius='25px'
          style={{ ...tile, padding: 0 }}
        >
          <button
            type='button'
            aria-pressed={focus}
            onClick={() => setFocus(!focus)}
            style={{
              zIndex: 2,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 7,
              color: 'white',
              font: '600 12px system-ui',
              border: 0,
              borderRadius: 'inherit',
              background: focus ? '#6d62bb99' : 'transparent',
              cursor: 'pointer',
            }}
          >
            <Moon size={18} fill='currentColor' />
            Focus
          </button>
        </LiquidGlass>
      </div>
    </section>
  );
}
