import { MediaModal } from '@/components/ui/modal/media-modal';

export default function HomeDialog() {
  return (
    <div className='relative  lg:h-[255px] h-[304px] '>
      <div className=' h-full'>
        <MediaModal
          imgSrc={
            'https://images.unsplash.com/photo-1706547343914-2b14529049ed?q=80&w=1200&auto=format&fit=crop'
          }
        />
      </div>
    </div>
  );
}
