'use client';

import { useId, useState, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface GooeyDeleteProps {
  itemLabel: string;
  deleted?: boolean;
  defaultDeleted?: boolean;
  onDeletedChange?: (deleted: boolean) => void;
  className?: string;
  style?: CSSProperties;
}

// The 5px Gaussian blur and alpha threshold recreate the soft connection
// used in Oğuzhan Tüfek's Gooey Search and Lucas Bebber's SVG goo filter.
export function GooeyDelete({
  itemLabel,
  deleted,
  defaultDeleted = false,
  onDeletedChange,
  className,
  style,
}: GooeyDeleteProps) {
  const [internal, setInternal] = useState(defaultDeleted);
  const removed = deleted ?? internal;
  const filter = 'goo-delete-' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const reduced = useReducedMotion();
  const spring = reduced
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.75, bounce: 0.15 };

  function toggle() {
    const next = !removed;
    if (deleted === undefined) setInternal(next);
    onDeletedChange?.(next);
  }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: 'min(100%, 238px)',
        height: 56,
        color: '#f6f5f2',
        ...style,
      }}
    >
      <svg
        width='0'
        height='0'
        aria-hidden='true'
        focusable='false'
        style={{ position: 'absolute' }}
      >
        <defs>
          <filter
            id={filter}
            x='-30%'
            y='-50%'
            width='160%'
            height='200%'
            colorInterpolationFilters='sRGB'
          >
            <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='blur' />
            <feColorMatrix
              in='blur'
              type='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
        </defs>
      </svg>

      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          filter: 'url(#' + filter + ')',
        }}
      >
        <motion.span
          initial={false}
          animate={{
            width: removed ? '69%' : '44%',
            x: removed ? '-18%' : '0%',
          }}
          transition={spring}
          style={{
            display: 'block',
            position: 'absolute',
            left: '28%',
            top: 5,
            height: 46,
            borderRadius: 30,
            background: '#171918',
          }}
        />
        <motion.span
          initial={false}
          animate={{ left: removed ? '83%' : '51%', scale: removed ? 1 : 0.65 }}
          transition={spring}
          style={{
            display: 'block',
            position: 'absolute',
            top: 8,
            marginLeft: -2,
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#171918',
          }}
        />
      </div>

      <motion.button
        type='button'
        initial={false}
        animate={{ width: removed ? '69%' : '44%', x: removed ? '-18%' : '0%' }}
        transition={spring}
        onClick={toggle}
        aria-label={
          removed ? 'Undo deletion of ' + itemLabel : 'Delete ' + itemLabel
        }
        style={{
          position: 'absolute',
          left: '28%',
          top: 5,
          height: 46,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 7,
          cursor: 'pointer',
          borderRadius: 30,
          border: 0,
          outlineOffset: 3,
          color: 'inherit',
          background: 'transparent',
          font: '600 14px/1 system-ui',
          whiteSpace: 'nowrap',
        }}
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          {removed ? (
            <path d='m9 5-5 5 5 5M4 10h9a6 6 0 0 1 6 6v2' />
          ) : (
            <>
              <path d='M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13M10 10v7m4-7v7' />
            </>
          )}
        </svg>
        {removed ? 'Undo delete' : 'Delete'}
      </motion.button>

      <motion.span
        initial={false}
        aria-hidden='true'
        animate={{ opacity: removed ? 1 : 0, left: removed ? '83%' : '51%' }}
        transition={spring}
        style={{
          position: 'absolute',
          top: 8,
          marginLeft: -2,
          width: 40,
          height: 40,
          display: 'grid',
          placeItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <svg
          width='18'
          height='18'
          viewBox='0 0 20 20'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='m4 10 4 4 8-8' />
        </svg>
      </motion.span>
      <span
        role='status'
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clipPath: 'inset(50%)',
          whiteSpace: 'nowrap',
        }}
      >
        {itemLabel} {removed ? 'deleted' : 'available'}
      </span>
    </div>
  );
}
