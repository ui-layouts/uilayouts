const steps = [
  {
    title: 'Backdrop',
    detail: 'Start with a visible line.',
    strokes: <path className='stroke-primary' d='M4 30h112' />,
  },
  {
    title: 'Bend',
    detail: 'Offset the line inside the glass.',
    strokes: (
      <>
        <rect x='29' y='9' width='62' height='42' rx='12' />
        <path className='stroke-primary' d='M4 30h25c13 0 12-9 23-9s13 18 24 18c7 0 10-9 15-9h25' />
      </>
    ),
  },
  {
    title: 'Face and edge',
    detail: 'Trace the rim with light and shadow.',
    strokes: (
      <>
        <rect x='26' y='6' width='68' height='48' rx='15' strokeDasharray='2 4' />
        <rect x='29' y='9' width='62' height='42' rx='12' />
        <path className='stroke-primary' d='M34 28v-7a7 7 0 0 1 7-7h18m27 18v7a7 7 0 0 1-7 7H61' />
      </>
    ),
  },
  {
    title: 'Content',
    detail: 'Keep the foreground sharp.',
    strokes: (
      <>
        <rect x='29' y='9' width='62' height='42' rx='12' />
        <path className='stroke-primary' d='m53 30 5 5 10-10' />
      </>
    ),
  },
];

export function LiquidGlassFlow() {
  return (
    <figure className='not-prose my-5 border-y border-border py-4'>
      <ol
        aria-label='Liquid Glass rendering order'
        className='grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4'
      >
        {steps.map(({ title, detail, strokes }) => (
          <li key={title}>
            <svg
              viewBox='0 0 120 60'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mb-1 h-14 w-full max-w-32 text-muted-foreground/65'
              aria-hidden='true'
            >
              {strokes}
            </svg>
            <p className='text-sm font-medium'>{title}</p>
            <p className='mt-0.5 text-xs leading-relaxed text-muted-foreground'>{detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
