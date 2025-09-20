'use client';

import Image from 'next/image';
import Link from 'next/link';
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

const contributorProfile = [
  {
    href: 'https://github.com/afsar-dev',
    alt: 'Afsar',
    src: 'https://avatars.githubusercontent.com/u/154600314?v=4',
    workDetails: [
      'Created the UI-Layouts CLI',
      'Implemented GitHub page actions (report, feature requests, edit page)',
      'Added V0 + Shadcn code preview, component JSON build, registry list, and documentation',
    ],
  },
  {
    href: 'https://github.com/Yeom-JinHo',
    alt: 'Jinho',
    src: 'https://avatars.githubusercontent.com/u/81306489?v=4',
    workDetails: [
      'Migrated docs config from JSON to TypeScript with type safety',
      'Refactored docs from `docsJson.dataArray` to `AllComponents` and simplified component code',
    ],
  },
];

export default function Contributors() {
  return (
    <section className='relative py-20 pb-52 px-4'>
      <div className='absolute top-0 left-0 w-full h-full dark:bg-[radial-gradient(125%_125%_at_50%_10%,#050505_40%,#243aff_100%)] bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#243aff_100%)]'></div>
      <article className='space-y-4 relative z-10'>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-medium text-center'>
          Open Source Heroes
        </h1>
        <p className='text-center max-w-lg mx-auto text-muted-foreground'>
          UI-Layouts thrives thanks to our incredible contributors. Every idea,
          PR, and improvement helps shape a library that developers love.
        </p>
      </article>
      {/* Contributors Grid */}
      <div className='mt-12 grid gap-6 md:w-[40rem] w-[95%] mx-auto grid-cols-2'>
        {contributorProfile.map((contributor, i) => (
          <Dialog
            key={i}
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.5,
            }}
          >
            {/* Trigger Card */}
            <DialogTrigger
              style={{ borderRadius: '12px' }}
              className='flex w-full md:h-72 h-60 border dark:bg-black bg-white flex-col overflow-hidden relative'
            >
              <DialogImage
                src={contributor.src}
                alt={contributor.alt}
                className='h-full w-full object-cover'
              />
              <div className='flex flex-grow flex-row items-end justify-between p-3 pt-4 text-primary absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent'>
                <DialogTitle className='text-xl text-white'>
                  {contributor.alt}
                </DialogTitle>
                <button className='absolute bottom-2 right-2 p-2 bg-neutral-200 dark:bg-neutral-900 rounded-lg'>
                  <Plus className='w-6 h-6' />
                </button>
              </div>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContainer className='grid place-items-center h-full'>
              <DialogContent
                style={{ borderRadius: '24px' }}
                className='h-fit mx-auto'
              >
                <div className='flex flex-col relative dark:bg-neutral-900 bg-neutral-100 lg:w-[28rem] w-[80%] lg:h-[50vh] h-[80vh] mx-auto overflow-y-auto'>
                  {/* Top Image */}
                  <div className='flex-1 overflow-hidden'>
                    <DialogImage
                      src={contributor.src}
                      alt={contributor.alt}
                      className='h-full w-full object-cover mx-auto'
                    />
                  </div>

                  {/* Contributor Details */}
                  <div className='p-6'>
                    <DialogTitle className='text-4xl font-semibold dark:text-white text-zinc-950'>
                      {contributor.alt}
                    </DialogTitle>

                    <DialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, scale: 0.8, y: -40 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, scale: 0.8, y: -50 },
                      }}
                    >
                      <ul className='mt-4 list-disc space-y-2 pl-5 text-left text-zinc-700 dark:text-zinc-300'>
                        {contributor.workDetails.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </DialogDescription>

                    {/* GitHub Link */}
                    <Link
                      href={contributor.href}
                      target='_blank'
                      className='mt-6 inline-block text-primary hover:underline'
                    >
                      View GitHub Profile →
                    </Link>
                  </div>

                  <DialogClose className='absolute top-4 right-4 text-primary bg-primary-foreground p-4 rounded-lg' />
                </div>
              </DialogContent>
            </DialogContainer>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
