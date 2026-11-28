import { ArrowRight, ImageIcon, Layers, ScanLine, Waves } from 'lucide-react';

const steps = [
  {
    Icon: ImageIcon,
    title: 'Backdrop',
    detail: 'Start with an image or gradient with visible edges.',
  },
  {
    Icon: Waves,
    title: 'Bend',
    detail: 'Blur the backdrop, then offset pixels with an SVG filter.',
  },
  {
    Icon: Layers,
    title: 'Face and edge',
    detail: 'Add an outer glow and inset highlights along the same radius.',
  },
  {
    Icon: ScanLine,
    title: 'Content',
    detail: 'Place the icons and labels above the filtered layers.',
  },
];

export function LiquidGlassFlow() {
  return (
    <figure className='not-prose my-5'>
      <ol
        aria-label='Liquid Glass rendering order'
        className='grid grid-cols-2 gap-x-5 gap-y-6 rounded-xl border border-border bg-muted/35 p-4 sm:grid-cols-4 sm:gap-x-6 sm:p-5'
      >
        {steps.map(({ Icon, title, detail }, index) => (
          <li key={title} className='relative'>
            <div className='mb-3 grid h-20 place-items-center rounded-lg border border-border bg-background text-primary'>
              <Icon size={46} strokeWidth={1.35} aria-hidden='true' />
            </div>
            {index < steps.length - 1 && (
              <ArrowRight
                size={16}
                aria-hidden='true'
                className='absolute top-8 -right-5 hidden text-muted-foreground sm:block'
              />
            )}
            <p className='text-sm font-semibold'>{title}</p>
            <p className='mt-1 text-xs leading-relaxed text-muted-foreground'>{detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
