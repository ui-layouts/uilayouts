'use client'
import React, { useRef } from 'react'
import { ChevronRight, Plus } from 'lucide-react'
import { Button } from '@repo/shadcn'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const StartupPlans = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        ref={timelineRef}
        className="py-24 bg-neutral-100/50 min-h-screen flex flex-col items-center gap-12 px-6 font-dmSans"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <TimelineAnimation
              animationNum={1}
              timelineRef={timelineRef}
              as="h2"
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            >
              Flexible plans for every business
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={2}
              timelineRef={timelineRef}
              as="p"
              className="text-neutral-500 text-pretty max-w-lg leading-relaxed"
            >
              Your product design partner. Unlock instant, world-class design
              with a simple monthly fee.
            </TimelineAnimation>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Premium Plan Single Card */}
            <TimelineAnimation
              animationNum={3}
              timelineRef={timelineRef}
              className="bg-white rounded-xl p-8 border border-neutral-200 relative h-fit overflow-hidden group"
            >
              <div className="absolute top-0 right-0 size-32 bg-blue-500/40 blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-500/50 transition-colors" />
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Premium Plan
                </span>
                <span className="bg-neutral-200 text-neutral-600 px-3 py-1 rounded text-xs font-medium">
                  Basic
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold ">$7.90</span>
                <span className="text-neutral-400 text-sm">/month</span>
              </div>
              <div className="space-y-5 mb-10 pt-6 border-t border-neutral-100">
                {[
                  'Everything in Basic, plus',
                  'Smart budget suggestions',
                  'Savings goal tracker',
                  'Monthly financial reports',
                  'Priority support',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" />
                      <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" />
                    </svg>
                    <span className="text-sm font-medium text-neutral-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <TimelineAnimation animationNum={4} timelineRef={timelineRef}>
                <Button
                  className="w-full py-8 rounded-2xl bg-black text-white gap-2 active:scale-98 text-lg transition-transform shadow-[inset_3px_4px_5px_0px_rgba(183,183,183,0.5),inset_-2px_-2px_5px_0px_rgba(255,255,255,0.5)]"
                  size="lg"
                >
                  Get started <ChevronRight className="size-5" />
                </Button>
              </TimelineAnimation>
            </TimelineAnimation>

            {/* Startup Plan Dark Card */}
            <TimelineAnimation
              animationNum={5}
              timelineRef={timelineRef}
              className="bg-neutral-950 rounded-xl p-10 w-full text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-6 bg-orange-500 px-4 py-1.5 rounded-b-lg text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <div className="space-y-6">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-2">Startup Plan</h3>
                  <p className="text-neutral-400 text-sm">
                    For experienced developers and small teams.
                  </p>
                </div>
                <div className="flex items-center gap-6 pb-6 border-b border-neutral-800">
                  <span className="text-6xl font-bold ">$399</span>
                  <div className="text-left leading-tight">
                    <p className="text-neutral-200 font-medium capitalize">
                      one-time payment
                    </p>
                    <p className="text-neutral-400 text-xs">plus local taxes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    '5 users license',
                    'Access to all components',
                    'Lifetime access',
                    'Unlimited projects',
                    'Customer supports',
                    'Free updates',
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" />
                        <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <TimelineAnimation animationNum={6} timelineRef={timelineRef}>
                  <Button className="w-full py-4 rounded-2xl active:scale-98 bg-orange-500 hover:bg-orange-500 border-none text-lg shadow-[inset_3px_4px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_0px_rgba(255,255,255,0.5)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111" />
                      <path d="M12.5 2.5V4.21M12.5 21.5V19.79" />
                    </svg>
                    <span>Buy now</span>
                  </Button>
                </TimelineAnimation>
              </div>
            </TimelineAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
