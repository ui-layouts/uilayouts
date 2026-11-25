import { LocalImageTrailPreview } from '@/registry/components/mousetrail/trail-explorer';

export default function HomeMouseTrail() {
  return (
    <LocalImageTrailPreview
      variant='image-shrink'
      className='h-full [&>div]:h-full [&>div]:rounded-xl [&_h2]:text-[clamp(2rem,8cqw,4rem)]'
    />
  );
}
