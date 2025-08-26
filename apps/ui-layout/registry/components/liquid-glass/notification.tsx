import { LiquidGlassCard } from '@/components/ui/liquid-glass';

import Image from 'next/image';

const NotificationLiquid = () => {
  return (
    <>
      <div
        className='p-8 w-fit mx-auto gap-2 h-[40rem] flex flex-col justify-end pt-2 pb-10 rounded-xl'
        style={{
          background:
            'url("https://images.unsplash.com/photo-1534259070436-a95806b8621a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center / cover no-repeat',
        }}
      >
        <LiquidGlassCard
          shadowIntensity='md'
          blurIntensity='lg'
          borderRadius='18px'
          glowIntensity='xl'
          draggable={false}
          expandable
          expandedWidth='410px'
          expandedHeight='335px'
          width='410px'
          height='90px'
          className='z-10 flex flex-col items-start relative overflow-hidden'
        >
          <div className='relative z-30 flex items-center p-4  text-white h-full'>
            {/* App Icon */}
            <div className='flex-shrink-0 mr-4'>
              <Image
                src={'/apple-touch-icon.png'}
                alt={`icon`}
                width={56}
                height={56}
                className='rounded-xl'
              />
            </div>

            <div className='flex-grow pr-4'>
              <div className='font-semibold text-lg'>UI-Layouts</div>
              <div className='text-sm'>
                New components are available for you
              </div>
              <div className='text-sm text-gray-200'>Liquid-Glass</div>
            </div>
            <div className='flex-shrink-0 ml-4 text-sm text-gray-200 self-start pt-1'>
              12:34
            </div>
          </div>
          <Image
            src='/og.jpg'
            alt='og'
            width={400}
            height={400}
            className='rounded-xl w-[92%] mx-auto h-full z-20'
          />
        </LiquidGlassCard>
        <LiquidGlassCard
          width='410px'
          height='90px'
          shadowIntensity='md'
          blurIntensity='lg'
          borderRadius='18px'
          glowIntensity='xl'
          className='z-10 flex items-start relative mt-2'
        >
          <div className='relative z-30 flex items-center p-4 text-white z-10'>
            {/* App Icon */}
            <div className='flex-shrink-0 mr-4'>
              <Image
                src={'/apple-touch-icon.png'}
                alt={`icon`}
                width={56}
                height={56}
                className='rounded-xl'
              />
            </div>

            <div className='flex-grow pr-4'>
              <div className='font-semibold text-lg'>
                <svg
                  width='160'
                  height='48'
                  className='w-20 h-8'
                  viewBox='0 0 160 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M23.8678 32.8457H35.6653V44.0914C35.6653 45.1429 35.2789 46.0571 34.506 46.8343C33.7331 47.6114 32.8012 48 31.7101 48H15.8891C14.798 48 13.8661 47.6114 13.0932 46.8343C12.3203 46.0571 11.9339 45.1429 11.9339 44.0914V39.2914C11.9339 38.1943 11.5475 37.2571 10.7746 36.48C10.0017 35.6571 9.0698 35.2457 7.9787 35.2457H3.887C2.8414 35.2457 1.9322 34.88 1.1593 34.1486C0.386402 33.3714 0 32.4343 0 31.3371V0H11.7975V17.6229H21.6856C22.0038 17.6229 22.2766 17.7371 22.5039 17.9657C22.7312 18.1943 22.8449 18.4686 22.8449 18.7886V29.2114C22.8449 29.5314 22.7312 29.8057 22.5039 30.0343C22.2766 30.2629 22.0038 30.3771 21.6856 30.3771H11.7975V34.0114C11.7975 34.3314 11.9112 34.6057 12.1385 34.8343C12.3658 35.0629 12.6386 35.1771 12.9568 35.1771H22.7085C23.0267 35.1771 23.2995 35.0629 23.5268 34.8343C23.7541 34.6057 23.8678 34.3314 23.8678 34.0114V32.8457Z'
                    fill='currentColor'
                  />
                  <path
                    d='M70.6263 17.6914C71.7173 17.6914 72.6493 18.08 73.4223 18.8571C74.1953 19.6343 74.5813 20.5486 74.5813 21.6V44.0914C74.5813 45.1429 74.1953 46.0571 73.4223 46.8343C72.6493 47.6114 71.7173 48 70.6263 48H42.803C41.7574 48 40.8481 47.6114 40.0753 46.8343C39.3024 46.0571 38.916 45.1429 38.916 44.0914V21.6C38.916 20.5486 39.3024 19.6343 40.0753 18.8571C40.8481 18.08 41.7574 17.6914 42.803 17.6914H70.6263ZM62.7833 34.08V31.6114C62.7833 31.2914 62.6703 31.0171 62.4433 30.7886C62.2153 30.56 61.9423 30.4457 61.6243 30.4457H51.1909C50.8726 30.4457 50.5998 30.56 50.3725 30.7886C50.1452 31.0171 50.0316 31.2914 50.0316 31.6114V34.08C50.0316 34.4 50.1452 34.6743 50.3725 34.9029C50.5998 35.1314 50.8726 35.2457 51.1909 35.2457H61.6243C61.9423 35.2457 62.2153 35.1314 62.4433 34.9029C62.6703 34.6743 62.7833 34.4 62.7833 34.08Z'
                    fill='currentColor'
                  />
                  <path
                    d='M110.782 17.6914C111.873 17.6914 112.805 18.08 113.578 18.8571C114.351 19.6343 114.737 20.5486 114.737 21.6V44.0914C114.737 45.1429 114.351 46.0571 113.578 46.8343C112.805 47.6114 111.873 48 110.782 48H82.9593C81.9133 48 81.0043 47.6114 80.2313 46.8343C79.4583 46.0571 79.0723 45.1429 79.0723 44.0914V21.6C79.0723 20.5486 79.4583 19.6343 80.2313 18.8571C81.0043 18.08 81.9133 17.6914 82.9593 17.6914H110.782ZM102.94 34.08V31.6114C102.94 31.2914 102.826 31.0171 102.599 30.7886C102.371 30.56 102.098 30.4457 101.78 30.4457H91.3473C91.0283 30.4457 90.7563 30.56 90.5283 30.7886C90.3013 31.0171 90.1873 31.2914 90.1873 31.6114V34.08C90.1873 34.4 90.3013 34.6743 90.5283 34.9029C90.7563 35.1314 91.0283 35.2457 91.3473 35.2457H101.78C102.098 35.2457 102.371 35.1314 102.599 34.9029C102.826 34.6743 102.94 34.4 102.94 34.08Z'
                    fill='currentColor'
                  />
                  <path d='M132.049 48H119.365V0H132.049V48Z' fill='currentColor' />
                  <path
                    d='M142.953 22.2853V13.7139H160.001V22.2853H151.477V30.8567H134.428V22.2853H142.953ZM160.001 39.4282H151.477V30.8567H160.001V39.4282ZM151.477 39.4282V47.9996H134.428V39.4282H151.477Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <div className='text-sm'>
                New components are available for you
              </div>
            </div>
            <div className='flex-shrink-0 ml-4 text-sm text-gray-200 self-start pt-1'>
              12:34
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </>
  );
};

export default NotificationLiquid;
