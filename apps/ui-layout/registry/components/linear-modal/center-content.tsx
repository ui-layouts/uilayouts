import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/linear-modal';
import { Plus } from 'lucide-react';

const items = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1757672242146-a6a7897bcc80?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Accordion',
    description:
      'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
    tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1756806983725-977bb2308d4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Globe Section',
    description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
    tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1756806983832-1f056cf24182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Image Mouse Trail',
    description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
    tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
  },
];
export default function App() {
  return (
    <div className='flex gap-4 max-w-5xl mx-auto h-full justify-center items-center'>
      {items.map((item, i) => {
        return (
          <>
            <Dialog
              transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.5,
              }}
            >
              <DialogTrigger
                style={{
                  borderRadius: '12px',
                }}
                className='flex w-full h-72 border dark:bg-black bg-white flex-col overflow-hidden'
              >
                <DialogImage
                  src={item.url}
                  alt=''
                  className='h-full w-full object-cover'
                />
                <div className='flex flex-grow flex-row items-end justify-between p-3 pt-4 text-primary'>
                  <div>
                    <DialogTitle className='text-xl '>
                      {item.title}
                    </DialogTitle>
                  </div>
                  <button className='absolute bottom-2 right-2 p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg'>
                    <Plus className='w-6 h-6' />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContainer className='grid place-items-center h-full'>
                <DialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='h-fit mx-auto border-4'
                >
                  <div className='flex flex-col relative dark:bg-neutral-900 bg-neutral-100 lg:w-[44rem] w-[80%] h-[80vh] overflow-y-auto '>
                    <div className='flex-1 overflow-hidden'>
                      <DialogImage
                        src={item.url}
                        alt=''
                        className='h-full object-cover w-full mx-auto'
                      />
                    </div>

                    <div className='p-6'>
                      <DialogTitle className='text-5xl dark:text-white text-zinc-950 '>
                        {item.title}
                      </DialogTitle>

                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: -40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: -50 },
                        }}
                      >
                        <p className='mt-2 dark:text-white text-zinc-500 '>
                          {item.description}
                        </p>
                      </DialogDescription>
                    </div>
                    <DialogClose className='text-primary  bg-primary-foreground p-4 rounded-lg' />
                  </div>
                </DialogContent>
              </DialogContainer>
            </Dialog>
          </>
        );
      })}
    </div>
  );
}
