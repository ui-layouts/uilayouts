'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Footer from '@/components/website/footer';
import HomeFooter from '../home/home-footer';

export default function BlocksHomeClient({ blocksData }: { blocksData: any }) {
  return (
    <>
      <div className='pt-36 max-w-7xl mx-auto border-x dark:border-neutral-700'>
        <article className='w-fit mx-auto max-w-5xl text-center space-y-4 pb-10 md:px-0 px-4'>
          <h1 className='font-manrope font-medium xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>
            <span>
              Build & Ship{' '}
              <span className='bg-linear-to-tr from-blue-500 dark:from-blue-500 dark:via-blue-200 via-blue-300 to-blue-600 font-bold bg-clip-text text-transparent'>
                faster
              </span>{' '}
              With,
            </span>
            <br />
            <span>
              {' '}
              Production-ready{' '}
              <span className='bg-linear-to-br from-red-400 via-orange-500 to-rose-500 font-bold bg-clip-text text-transparent'>
                blocks
              </span>{' '}
            </span>
          </h1>
          <p className='xl:text-xl md:text-base text-sm lg:max-w-3xl max-w-xl mx-auto font-manrope'>
            Beautifully designed sections you can copy and paste straight into
            your apps. Creatively crafted with Tailwind CSS and shadcn/ui, these
            blocks are built for real-world React and Next.js projects
          </p>

          <div className='flex gap-2 items-center w-fit mx-auto'>
            <a
              href='https://ui.shadcn.com/'
              target='_blank'
              className='bg-neutral-100 dark:bg-neutral-800 p-2 border dark:border-neutral-700 h-14 w-14 grid place-items-center'
            >
              <svg
                width='569'
                className='w-7 h-7 stroke-foreground'
                height='512'
                viewBox='0 0 569 512'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1567_3282)'>
                  <path
                    d='M285.5 201C255.4 201 231 225.4 231 255.5C231 285.6 255.4 310 285.5 310C315.6 310 340 285.6 340 255.5C340 225.4 315.6 201 285.5 201Z'
                    fill='#58C4DC'
                  />
                  <path
                    d='M568.96 255.994C568.96 213.208 529.338 175.681 466.252 150.985C467.095 145.424 467.857 139.922 468.399 134.521C474.622 73.0415 459.809 28.6686 426.71 9.55414C389.677 -11.8292 337.37 3.6913 284.48 46.0162C231.59 3.6913 179.283 -11.8292 142.25 9.55414C109.151 28.6686 94.3382 73.0415 100.561 134.521C101.102 139.922 101.845 145.444 102.708 151.025C97.4494 153.033 92.2909 155.161 87.3331 157.39C31.0112 182.709 0 217.765 0 255.994C0 298.781 39.6221 336.307 102.708 361.004C101.845 366.565 101.102 372.067 100.561 377.468C94.3382 438.947 109.151 483.32 142.25 502.435C153.63 508.888 166.524 512.187 179.604 511.992C210.956 511.992 247.568 495.488 284.48 465.973C321.372 495.488 358.004 511.992 389.396 511.992C402.475 512.184 415.369 508.885 426.75 502.435C459.849 483.32 474.662 438.947 468.439 377.468C467.898 372.067 467.135 366.565 466.292 361.004C529.378 336.347 569 298.761 569 255.994M389.155 27.1025C397.565 26.8996 405.878 28.9369 413.242 33.0055C436.224 46.2772 446.541 82.2775 441.523 131.77C441.182 135.143 440.78 138.557 440.299 141.99C414.067 134.088 387.206 128.452 360.011 125.145C343.525 103.224 325.193 82.7564 305.214 63.9662C336.587 39.7116 366.032 27.1025 389.135 27.1025M378.357 310.206C368.205 327.831 357.151 344.92 345.238 361.405C325.045 363.48 304.759 364.512 284.46 364.497C264.168 364.511 243.888 363.479 223.702 361.405C211.821 344.919 200.8 327.83 190.684 310.206C180.533 292.629 171.307 274.534 163.045 255.994C171.307 237.455 180.533 219.359 190.684 201.783C200.784 184.229 211.771 167.201 223.602 150.764C243.825 148.638 264.146 147.579 284.48 147.592C304.772 147.58 325.052 148.612 345.238 150.684C357.109 167.146 368.136 184.201 378.276 201.783C388.419 219.364 397.645 237.458 405.915 255.994C397.645 274.53 388.419 292.625 378.276 310.206M419.725 290.127C426.095 307.504 431.325 325.277 435.381 343.335C417.78 348.824 399.837 353.15 381.668 356.285C388.573 345.871 395.264 335.036 401.74 323.778C408.143 312.655 414.145 301.431 419.805 290.208M246.363 390.378C258.848 391.141 271.594 391.583 284.5 391.583C297.406 391.583 310.232 391.141 322.737 390.378C310.881 404.583 298.108 417.998 284.5 430.534C270.922 418 258.182 404.585 246.363 390.378ZM187.312 356.245C169.137 353.124 151.188 348.811 133.579 343.335C137.619 325.306 142.828 307.559 149.175 290.208C154.755 301.431 160.736 312.655 167.24 323.778C173.743 334.902 180.467 345.865 187.312 356.285M149.175 221.761C142.851 204.474 137.655 186.795 133.619 168.835C151.184 163.352 169.086 159.013 187.211 155.844C180.347 166.225 173.622 176.987 167.139 188.21C160.656 199.434 154.735 210.517 149.074 221.761M322.617 121.591C310.132 120.828 297.386 120.386 284.38 120.386C271.48 120.386 258.768 120.788 246.243 121.591C258.061 107.384 270.801 93.9691 284.38 81.4342C297.992 93.9658 310.766 107.38 322.617 121.591ZM401.7 188.21C395.197 176.94 388.473 166.097 381.528 155.684C399.744 158.819 417.734 163.152 435.381 168.654C431.332 186.681 426.122 204.427 419.785 221.781C414.205 210.557 408.204 199.334 401.72 188.23M127.517 131.79C122.439 82.3177 132.816 46.2973 155.779 33.0256C163.145 28.9632 171.456 26.9264 179.865 27.1226C202.968 27.1226 232.413 39.7317 263.786 63.9862C243.794 82.7899 225.448 103.271 208.949 125.205C181.762 128.528 154.904 134.143 128.661 141.99C128.2 138.557 127.778 135.164 127.457 131.79M98.453 182.106C101.544 180.768 104.695 179.429 107.907 178.091C114.221 204.736 122.782 230.797 133.499 255.994C122.762 281.241 114.193 307.357 107.887 334.059C56.7434 313.077 27.0971 284.004 27.0971 255.994C27.0971 229.451 53.1907 202.526 98.453 182.106ZM155.779 478.963C132.816 465.691 122.439 429.671 127.517 380.198C127.838 376.825 128.26 373.432 128.721 369.978C154.954 377.879 181.815 383.514 209.009 386.824C225.5 408.753 243.832 429.233 263.806 448.043C220.069 481.834 180.106 492.978 155.839 478.963M441.503 380.198C446.521 429.691 436.204 465.691 413.221 478.963C388.975 493.018 348.991 481.834 305.274 448.043C325.241 429.233 343.567 408.752 360.051 386.824C387.246 383.517 414.107 377.881 440.339 369.978C440.82 373.432 441.222 376.825 441.563 380.198M461.193 334.018C454.869 307.333 446.294 281.231 435.562 255.994C446.29 230.744 454.858 204.629 461.173 177.93C512.216 198.912 541.943 227.985 541.943 255.994C541.943 284.004 512.297 313.077 461.153 334.059'
                    fill='#58C4DC'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1567_3282'>
                    <rect width='569' height='512' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              className='bg-neutral-100 dark:bg-neutral-800 p-2 border dark:border-neutral-700 h-14 w-14 grid place-items-center'
              href='https://tailwindcss.com/'
              target='_blank'
            >
              <svg
                width='224'
                height='134'
                className='w-8 h-8'
                viewBox='0 0 224 134'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M112 0C82.1333 0 63.4667 14.8889 56 44.6667C67.2 29.7778 80.2667 24.1944 95.2 27.9167C103.72 30.0383 109.81 36.2048 116.551 43.0248C127.531 54.1377 140.241 67 168 67C197.867 67 216.533 52.1111 224 22.3333C212.8 37.2222 199.733 42.8056 184.8 39.0833C176.28 36.9617 170.19 30.7952 163.449 23.9752C152.469 12.8623 139.759 0 112 0ZM56 67C26.1333 67 7.46667 81.8889 0 111.667C11.2 96.7778 24.2667 91.1944 39.2 94.9167C47.7203 97.0425 53.8098 103.205 60.5505 110.025C71.5307 121.138 84.2406 134 112 134C141.867 134 160.533 119.111 168 89.3333C156.8 104.222 143.733 109.806 128.8 106.083C120.28 103.962 114.19 97.7952 107.449 90.9752C96.4693 79.8623 83.7594 67 56 67Z'
                  fill='#38BDF8'
                />
              </svg>
            </a>
            <a
              href='https://motion.dev/'
              target='_blank'
              className='bg-neutral-100 dark:bg-neutral-800 p-2 border dark:border-neutral-700 h-14 w-14 grid place-items-center'
            >
              <svg
                width='330'
                className='w-8 h-8 dark:fill-yellow-500 fill-yellow-400'
                height='116'
                viewBox='0 0 330 116'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_1557_3113)'>
                  <path d='M124.602 0L59.4 115.898H0L50.9121 25.4004C58.8043 11.3722 78.499 0 94.9021 0H124.602ZM270.267 28.9745C270.267 12.9722 283.564 0 299.967 0C316.37 0 329.667 12.9722 329.667 28.9745C329.667 44.9764 316.37 57.9489 299.967 57.9489C283.564 57.9489 270.267 44.9764 270.267 28.9745ZM135.74 0H195.14L129.937 115.898H70.5374L135.74 0ZM205.896 0H265.296L214.383 90.4974C206.491 104.526 186.796 115.898 170.394 115.898H140.694L205.896 0Z' />
                </g>
                <defs>
                  <clipPath id='clip0_1557_3113'>
                    <rect width='330' height='116' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href='https://ui.shadcn.com/'
              target='_blank'
              className='bg-neutral-100 dark:bg-neutral-800 p-2 border dark:border-neutral-700 h-14 w-14 grid place-items-center'
            >
              <svg
                width='200'
                height='200'
                className='w-7 h-7 stroke-foreground'
                viewBox='0 0 200 200'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M184 104L104 184'
                  stroke-width='32'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M168 16L16 168'
                  stroke-width='32'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </a>
          </div>
        </article>
        <div
          className={cn(
            'border-y dark:border-neutral-700 dark:bg-neutral-800 bg-white h-12',
            'dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
          )}
        ></div>
        <div className='grid md:grid-cols-3 grid-cols-2'>
          {blocksData?.map((component: any, index: number) => {
            const isFirstItemOfRow = index % 3 === 0;
            return (
              <>
                <Link
                  href={component?.url}
                  className={cn(
                    'relative transition-all p-5 border-b border-l last:border-r dark:border-neutral-700',
                    isFirstItemOfRow && 'border-l-0'
                  )}
                >
                  <>
                    {component?.imgSrc && (
                      <div
                        className={cn(
                          'relative h-fit aspect-video px-6 pt-6',
                          component?.imgclass
                        )}
                      >
                        <svg
                          className='absolute inset-0 w-full h-full mix-blend-overlay opacity-50'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <defs>
                            <filter id='noise6'>
                              <feTurbulence
                                type='fractalNoise'
                                baseFrequency='0.6'
                                numOctaves='4'
                              />
                            </filter>
                          </defs>
                          <rect
                            width='100%'
                            height='100%'
                            filter='url(#noise6)'
                          />
                        </svg>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={400}
                          height={400}
                          className={cn('w-full object-cover')}
                        />
                      </div>
                    )}
                  </>
                  <div className='sm:py-2 py-1 mt-2'>
                    <h1 className='2xl:text-3xl xl:text-2xl md:text-xl text-lg font-medium leading-[140%] capitalize'>
                      {component.name}
                    </h1>
                    <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize opacity-70'>
                      {component?.blocks?.length} Blocks
                    </h1>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div
          className={cn( 
            'border-y dark:border-neutral-700 dark:bg-neutral-800 bg-white h-12',
            'dark:bg-[repeating-linear-gradient(135deg,#2f2f2f_0px_1px,transparent_1px_10px)] bg-[repeating-linear-gradient(135deg,#f0f0f0_0px_1px,transparent_1px_10px)]'
          )}
        ></div>
        {/* <Footer /> */}
        <HomeFooter className='mt-20 bg-linear-to-t dark:from-neutral-800 from-neutral-200 to-transparent' isHideCollaboration={true} />
      </div>
    </>
  );
}
