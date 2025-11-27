'use client';
import { motion } from 'motion/react';
import { Edit } from 'lucide-react';
import Image from 'next/image';
import {
  DirectionalDrawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/directional-drawer';

export default function index() {
  return (
    <>
      <div className='flex justify-center'>
        <figure className='h-96 w-96 relative'>
          <Image
            src={'/myself2.webp'}
            width={600}
            height={600}
            className='h-full w-full object-cover rounded-lg'
            alt='profile_image'
          />
          <DirectionalDrawer direction={'right'} outsideClose={true}>
            <DrawerTrigger>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className='absolute right-2 bottom-2 p-4 dark:bg-black bg-white rounded-lg shadow-black'
              >
                <Edit />
              </motion.button>
            </DrawerTrigger>
            <DrawerContent>
              <figure className='flex flex-col w-full h-full rounded-xl overflow-hidden'>
                {/* Header / Body */}
                <div className='p-6 flex flex-col gap-4 grow'>
                  <div>
                    <h1 className='font-semibold text-xl'>
                      Update Profile Image
                    </h1>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Upload a new profile image or remove the current one.
                    </p>
                  </div>

                  {/* Avatar Preview */}
                  <div className='flex justify-center'>
                    <div className='h-32 w-32 rounded-xl dark:bg-neutral-800 bg-muted grid place-content-center text-xl font-medium'>
                      JP
                    </div>
                  </div>

                  {/* File Input */}
                  <div>
                    <label className='text-sm font-medium mb-1 block'>
                      Profile Picture
                    </label>
                    <input
                      type='file'
                      id='formFile'
                      className='w-full bg-background border border-border rounded-md p-2 file:bg-black file:text-white file:border-none file:px-3 file:py-1 cursor-pointer'
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type='submit'
                    className='w-full rounded-md bg-black text-white dark:bg-white dark:text-black p-2 font-medium'
                  >
                    Save Changes
                  </button>
                </div>
              </figure>
            </DrawerContent>
          </DirectionalDrawer>
        </figure>
      </div>
    </>
  );
}
