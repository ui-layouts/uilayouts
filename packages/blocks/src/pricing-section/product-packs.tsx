'use client'
import React, { useRef } from 'react'
import { Box, Zap } from 'lucide-react'
import { Button } from '@repo/shadcn'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const ProductPacks = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  return (
    <section
      ref={timelineRef}
      className="py-24 px-6 bg-yellow-50 text-black min-h-screen"
    >
      <div className="max-w-4xl mx-auto ">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          className="text-center mb-12"
        >
          <TimelineAnimation
            animationNum={2}
            timelineRef={timelineRef}
            as="h1"
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            Flexible plans for every business
          </TimelineAnimation>
          <TimelineAnimation
            animationNum={3}
            timelineRef={timelineRef}
            as="p"
            className="text-neutral-500 text-pretty max-w-lg leading-relaxed mx-auto"
          >
            Your product design partner. Unlock instant, world-class design with
            a simple monthly fee.
          </TimelineAnimation>
        </TimelineAnimation>
        <TimelineAnimation
          animationNum={4}
          timelineRef={timelineRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Demo Card */}
          <TimelineAnimation
            animationNum={5}
            timelineRef={timelineRef}
            className="bg-amber-300 border border-neutral-100 rounded-4xl p-10 flex flex-col shadow-sm space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                >
                  <path d="M12 11.5C12.4955 11.5 12.9562 11.3015 13.8775 10.9045L14.5423 10.618C16.1808 9.91202 17 9.55902 17 9C17 8.44098 16.1808 8.08798 14.5423 7.38197L13.8775 7.09549C12.9562 6.6985 12.4955 6.5 12 6.5C11.5045 6.5 11.0438 6.6985 10.1225 7.09549L9.45768 7.38197C7.81923 8.08798 7 8.44098 7 9C7 9.55902 7.81923 9.91202 9.45768 10.618L10.1225 10.9045C11.0438 11.3015 11.5045 11.5 12 11.5ZM12 11.5V17.5" />
                  <path d="M17 9V15C17 15.559 16.1808 15.912 14.5423 16.618L13.8775 16.9045C12.9562 17.3015 12.4955 17.5 12 17.5C11.5045 17.5 11.0438 17.3015 10.1225 16.9045L9.45768 16.618C7.81923 15.912 7 15.559 7 15V9" />
                  <path d="M9.14426 2.5C6.48724 2.56075 4.93529 2.81456 3.87493 3.87493C2.81456 4.93529 2.56075 6.48724 2.5 9.14426M14.8557 2.5C17.5128 2.56075 19.0647 2.81456 20.1251 3.87493C21.1854 4.93529 21.4392 6.48724 21.5 9.14426M14.8557 21.5C17.5128 21.4392 19.0647 21.1854 20.1251 20.1251C21.1854 19.0647 21.4392 17.5128 21.5 14.8557M9.14426 21.5C6.48724 21.4392 4.93529 21.1854 3.87493 20.1251C2.81456 19.0647 2.56075 17.5128 2.5 14.8557" />
                </svg>
                Demo
              </h3>
              <p className="text-neutral-800 text-sm">
                Try Bloom for free to test it in work
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-semibold">Free</span>
              <span className="text-xl font-medium text-neutral-700">
                Don't worry we don't have any hidden fees.
              </span>
            </div>
            <div className="space-y-4 pt-6 border-t border-yellow-50">
              {[
                { label: 'Gradient', val: '10' },
                { label: 'Black', val: '10' },
                { label: 'Clay', val: '10' },
                { label: 'Sources', val: 'PNG' },
                { label: 'Resolution', val: '1200x1200px' },
                { label: 'License', val: 'Personal' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      color="#000000"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" />
                      <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" />
                    </svg>
                    {item.label}
                  </div>
                  <span className="text-sm text-neutral-700 font-semibold">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 border-2 border-black px-6 font-medium text-black transition-all duration-100 shadow-[5px_5px_rgb(0_0_0)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" />
                <path d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016" />
              </svg>
              Download
            </Button>
          </TimelineAnimation>

          {/* Full Pack Card */}
          <TimelineAnimation
            animationNum={6}
            timelineRef={timelineRef}
            className="bg-neutral-900 text-white rounded-4xl p-10 flex flex-col shadow-2xl ring-1 ring-white/10 space-y-6"
          >
            <div className="">
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Box className="size-8 " strokeWidth={1.5} />
                Full pack
              </h3>
              <TimelineAnimation
                animationNum={7}
                timelineRef={timelineRef}
                className="text-neutral-500 text-sm"
              >
                Get a stunning pack of trendy 3D shapes
              </TimelineAnimation>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl font-semibold ">$38</span>
              <TimelineAnimation
                animationNum={8}
                timelineRef={timelineRef}
                className="text-xl font-medium text-neutral-500"
              >
                Get everything in a single purchase, No hidden fees.
              </TimelineAnimation>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-800">
              {[
                { label: 'Gradient', val: '150+' },
                { label: 'Black', val: '150+' },
                { label: 'Clay', val: '150+' },
                { label: 'Sources', val: 'PNG, Figma, Blender' },
                { label: 'Resolution', val: '2400x2400px' },
                { label: 'License', val: 'Commercial' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      color="#ffffff"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" />
                      <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" />
                    </svg>
                    {item.label}
                  </div>
                  <span className="text-sm font-medium text-neutral-400 ">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-50 border-2 border-amber-300 px-6 font-medium text-black transition-all duration-100 shadow-[5px_5px_rgb(255_210_48)] active:translate-x-[3px] active:translate-y-[3px] hover:bg-neutral-100 active:shadow-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-current"
                stroke-width="2"
              >
                <path d="M3.32352 13.0113C3.6739 10.009 4.18586 7.75784 4.66063 6.15851C5.04994 4.84711 5.24459 4.19141 6.04283 3.5957C6.84107 3 7.65697 3 9.28876 3H14.7113C16.3431 3 17.159 3 17.9572 3.5957C18.7554 4.19141 18.9501 4.84711 19.3394 6.15851C19.8142 7.75784 20.3261 10.009 20.6765 13.0113C21.0895 16.5497 21.2959 18.3189 20.1027 19.6594C18.9095 21 16.9758 21 13.1084 21H10.8916C7.02422 21 5.09052 21 3.89731 19.6594C2.70411 18.3189 2.91058 16.5497 3.32352 13.0113Z" />
                <path d="M9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7" />
              </svg>
              Purchase
            </Button>
          </TimelineAnimation>
        </TimelineAnimation>
      </div>
    </section>
  )
}
