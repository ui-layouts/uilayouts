'use client';

import { useState } from 'react';
import { GooeyDelete } from '@/components/ui/gooey-delete';

export default function GooeyDeleteDemo() {
  const [deleted, setDeleted] = useState(false);
  return (
    <section
      aria-label='Draft file'
      style={{
        display: 'grid',
        placeItems: 'center',
        minHeight: 340,
        padding: 24,
        background: '#e5e7eb',
        color: '#222',
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          width: 'min(100%,340px)',
          display: 'grid',
          justifyItems: 'center',
          gap: 20,
        }}
      >
        <div
          style={{
            minHeight: 88,
            width: '100%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {deleted ? (
            <p style={{ color: '#53575b', margin: 0 }}>Draft deleted</p>
          ) : (
            <article
              style={{
                width: '100%',
                padding: '18px 22px',
                borderRadius: 14,
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <svg
                aria-hidden='true'
                width='28'
                height='34'
                viewBox='0 0 28 34'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.3'
              >
                <path d='M4 2h13l7 7v23H4zM17 2v8h7M8 17h12M8 22h9' />
              </svg>
              <div>
                <h3 style={{ fontSize: 16, margin: 0 }}>Field notes</h3>
                <p
                  style={{ fontSize: 13, color: '#636568', margin: '2px 0 0' }}
                >
                  Draft document
                </p>
              </div>
            </article>
          )}
        </div>
        <GooeyDelete
          itemLabel='Field notes'
          deleted={deleted}
          onDeletedChange={setDeleted}
        />
      </div>
    </section>
  );
}
