import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const Github = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
    <path d='M9 18c-4.51 2-5-2-7-2' />
  </svg>
));
Github.displayName = 'Github';

export const Twitter = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
  </svg>
));
Twitter.displayName = 'Twitter';

export const Linkedin = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
    <rect width='4' height='12' x='2' y='9' />
    <circle cx='4' cy='4' r='2' />
  </svg>
));
Linkedin.displayName = 'Linkedin';

export const Dribbble = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <circle cx='12' cy='12' r='10' />
    <path d='M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94' />
    <path d='M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32' />
    <path d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72' />
  </svg>
));
Dribbble.displayName = 'Dribbble';

export const Codesandbox = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    {...props}
  >
    <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
    <polyline points='7.5 4.21 12 6.81 16.5 4.21' />
    <polyline points='7.5 19.79 7.5 14.6 3 12' />
    <polyline points='21 12 16.5 14.6 16.5 19.79' />
    <polyline points='3.27 6.96 12 12.01 20.73 6.96' />
    <line x1='12' x2='12' y1='22.08' y2='12' />
  </svg>
));
Codesandbox.displayName = 'Codesandbox';

export const LinkedinIcon = Linkedin;
export const TwitterIcon = Twitter;
