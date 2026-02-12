import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const logos = [
  {
    name: 'Apple',
    img: 'https://cdn.simpleicons.org/apple/000/fff',
  },
  {
    name: 'Google',
    img: 'https://cdn.simpleicons.org/google/000/fff',
  },
  {
    name: 'Facebook',
    img: 'https://cdn.simpleicons.org/facebook/000/fff',
  },
  {
    name: 'ChatGPT',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg',
  },
  {
    name: 'X',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/X_%28formerly_Twitter%29_logo_late_2025.svg',
  },
];

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={cn('h-12 w-12 cursor-pointer')}>
      <img src={img} alt={name} />
    </div>
  );
};

const MarqueeLogos = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg dark:bg-neutral-800 bg-neutral-50 py-20 '>
      <Marquee className='[--gap:3rem]'>
        {logos.map((logo, idx) => (
          <Logo key={idx} {...logo} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-neutral-900'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-neutral-900'></div>
    </div>
  );
};

export default MarqueeLogos;
