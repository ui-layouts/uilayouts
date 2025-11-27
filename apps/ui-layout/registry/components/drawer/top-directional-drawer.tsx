'use client';
import { Drawer } from 'vaul';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Edit, X } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import {
  DirectionalDrawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/directional-drawer';
export default function index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <DirectionalDrawer
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        direction={'top'}
        outsideClose={true}
      >
        <DrawerContent>
          <figure className='w-full h-full  flex flex-col'>
            <div className='p-5 rounded-t-[10px] grow  h-full w-full'>
              <h1 className='font-medium text-2xl'>Update Profile Image</h1>
              <p className='text-sm text-muted-foreground'>
                Upload a new profile image or remove the current one.
              </p>
              <div className='p-2 space-y-4 '>
                <span className='relative flex justify-center overflow-hidden rounded-xl w-full '>
                  <span className='grid place-content-center h-40  w-40 rounded-xl dark:bg-neutral-800 bg-muted'>
                    JP
                  </span>
                </span>
                <div className='mb-3'>
                  <input
                    className='w-full border file:p-2 file:bg-black  file:border-none  file:text-white rounded-xs overflow-hidden'
                    type='file'
                    id='formFile'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full rounded-xs dark:bg-white bg-black  p-2 dark:text-black text-white'
                >
                  Submit
                </button>
              </div>
            </div>
          </figure>
        </DrawerContent>
      </DirectionalDrawer>
      <div className='flex justify-center'>
        <figure className='h-96 w-96 relative'>
          <Image
            src={'/myself.webp'}
            width={600}
            height={600}
            className='h-full w-full object-cover rounded-lg '
            alt='profile_image'
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setSidebarOpen(true)}
            className='absolute left-2 bottom-2 p-4 dark:bg-black bg-white rounded-lg shadow-black'
          >
            <Edit />
          </motion.button>
        </figure>
      </div>
    </>
  );
}
