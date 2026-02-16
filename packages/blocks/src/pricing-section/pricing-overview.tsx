'use client'
import React, { useId, useState, useRef } from 'react'
import { Calendar, Check } from 'lucide-react'
import { motion } from 'motion/react'
import NumberFlow from '@number-flow/react'
import { Button, Switch } from '@repo/shadcn'
import { cn } from '@/lib/utils'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const PricingOverview = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')
  const id = useId()
  const timelineRef = useRef<HTMLDivElement>(null)

  // Calculate prices based on billing cycle (20% discount for yearly)
  const landingPagePrice = billing === 'monthly' ? 1699 : 1500
  const productDesignPrice = billing === 'monthly' ? 3099 : 2300
  const partnershipPrice = billing === 'monthly' ? 4099 : 3100

  return (
    <section
      ref={timelineRef}
      className="py-20 px-6 max-w-5xl mx-auto font-dmSans"
    >
      <div className="text-left mb-12">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          as="h1"
          className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4"
        >
          Flexible plans for every business
        </TimelineAnimation>
        <TimelineAnimation
          animationNum={2}
          timelineRef={timelineRef}
          as="p"
          className="text-neutral-500 text-pretty max-w-lg leading-relaxed"
        >
          Your product design partner. Unlock instant, world-class design with a
          simple monthly fee.
        </TimelineAnimation>
      </div>

      <TimelineAnimation
        animationNum={3}
        timelineRef={timelineRef}
        className="flex flex-col items-start gap-6 mb-6"
      >
        <TimelineAnimation
          animationNum={4}
          timelineRef={timelineRef}
          className="flex items-center gap-4"
        >
          <span
            className={cn(
              'text-md transition-colors',
              billing === 'monthly'
                ? 'text-neutral-900 font-bold'
                : 'text-neutral-400'
            )}
          >
            Monthly
          </span>
          <Switch
            id={id}
            // @ts-ignore
            checked={billing === 'yearly'}
            className="bg-neutral-300 rounded-full"
            thumbsClassName="rounded-full"
            // @ts-ignore
            onCheckedChange={(checked) =>
              setBilling(checked ? 'yearly' : 'monthly')
            }
          />
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-sm transition-colors ',
                billing === 'yearly'
                  ? 'text-neutral-900 font-bold'
                  : 'text-neutral-400'
              )}
            >
              Yearly
            </span>
            <span className="px-2 py-0.5 bg-[#C7FF33] text-[9px] font-bold rounded-full uppercase tracking-tighter">
              Save 20%
            </span>
          </div>
        </TimelineAnimation>
      </TimelineAnimation>

      <TimelineAnimation
        animationNum={4}
        timelineRef={timelineRef}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Landing Page Card */}
        <TimelineAnimation
          animationNum={5}
          timelineRef={timelineRef}
          className="bg-gray-100 border border-neutral-200 rounded-xl p-2 flex flex-col hover:shadow-md transition-shadow"
        >
          <div className="bg-white p-1.5 rounded-lg">
            <div className="p-4 bg-neutral-100 border border-zinc-100 rounded-lg space-y-2">
              <h3 className="text-3xl font-bold mb-2">Landing Page</h3>
              <p className="text-neutral-500 text-sm font-medium">
                Get a high quality landing page for your product.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold flex items-center">
                  $
                  <NumberFlow
                    value={landingPagePrice}
                    format={{ useGrouping: false }}
                  />
                </span>
                <span className="text-neutral-400 text-sm">
                  /{billing === 'monthly' ? 'fixed' : 'fixed (yearly rate)'}
                </span>
              </div>
              <TimelineAnimation animationNum={6} timelineRef={timelineRef}>
                <Button className="w-full gap-2 mt-2 text-lg" size="lg">
                  Book a call <Calendar className="size-4" />
                </Button>
              </TimelineAnimation>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 p-4">
            {[
              'Design concepts',
              'Tailored solution',
              'Responsive design',
              'Revisions',
              'Up to 4 subpages',
              'Post-launch support',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-md text-neutral-600 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#000000"
                  stroke="#fff"
                  stroke-width="1.5"
                >
                  <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                  <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </TimelineAnimation>

        {/* Product Design Card */}
        <TimelineAnimation
          animationNum={7}
          timelineRef={timelineRef}
          className="bg-gray-100 border border-neutral-200 rounded-xl p-2 flex flex-col hover:shadow-md transition-shadow"
        >
          <div className="bg-white p-1.5 rounded-lg">
            <div className="p-4 bg-neutral-100 border border-zinc-100 rounded-lg relative overflow-hidden space-y-2">
              <div className="absolute top-0 right-0 size-32 bg-red-500/40 blur-3xl -mr-16 -mt-16 group-hover:bg-[#FF7777]/20 transition-colors" />
              <h3 className="text-3xl font-bold mb-2">Product design</h3>
              <p className="text-neutral-500 text-sm">
                Let's bring your idea to life.
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold flex items-center">
                  $
                  <NumberFlow
                    value={productDesignPrice}
                    format={{ useGrouping: false }}
                  />
                </span>
                <span className="text-neutral-400 text-sm">
                  /{billing === 'monthly' ? 'fixed' : 'fixed (yearly rate)'}
                </span>
              </div>
              <TimelineAnimation animationNum={8} timelineRef={timelineRef}>
                <Button className="w-full mt-2 gap-2 text-lg" size="lg">
                  Book a call <Calendar className="size-4" />
                </Button>
              </TimelineAnimation>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-4 p-4">
            {[
              'Brainstorming',
              'Tailored solution',
              'UX-based strategy',
              'Design concepts',
              'Revisions',
              'Support',
              'On-time delivery',
              'Scaleable',
              'Async communication',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-md font-medium text-neutral-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="#000000"
                  stroke="#fff"
                  stroke-width="1.5"
                >
                  <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                  <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </TimelineAnimation>
      </TimelineAnimation>

      {/* Partnership Card */}
      <TimelineAnimation
        animationNum={9}
        timelineRef={timelineRef}
        className="mt-6 bg-linear-to-b from-neutral-950 to-neutral-800 text-white rounded-3xl p-10 md:flex items-center gap-4 relative overflow-hidden"
      >
        <div className="flex-1 space-y-3 relative z-10">
          <div className="flex items-center gap-2 text-lime-400 text-sm font-medium">
            <div className="size-2 rounded-full bg-lime-500 animate-pulse" />
            Limited availability
          </div>
          <h3 className="text-3xl font-bold">Product Partnership</h3>
          <p className="text-neutral-400 text-pretty">
            Get full-product team, according to your needs. No long-term
            commitment.
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold flex items-center">
              $
              <NumberFlow
                value={partnershipPrice}
                format={{ useGrouping: false }}
              />
            </span>
            <span className="text-neutral-500 text-sm">
              /{billing === 'monthly' ? 'month' : 'yearly'}
            </span>
          </div>
          <TimelineAnimation animationNum={10} timelineRef={timelineRef}>
            <Button
              variant="outline"
              className="w-fit text-black bg-white hover:bg-neutral-100 gap-2 px-8 text-lg"
            >
              Book a call <Calendar className="size-5" />
            </Button>
          </TimelineAnimation>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-2 relative z-10">
          {[
            'Development lead',
            'Flexible communication',
            'No hire costs',
            '1 workstream',
            'Pause or resume anytime',
            'Revisions',
          ].map((item, i) => (
            <TimelineAnimation
              key={i}
              animationNum={11 + i}
              timelineRef={timelineRef}
              className="flex items-center gap-3 text-sm text-neutral-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#000000"
                stroke="#fff"
                stroke-width="1.5"
              >
                <path d="M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z" />
                <path d="M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5" />
              </svg>
              {item}
            </TimelineAnimation>
          ))}
        </div>
      </TimelineAnimation>
    </section>
  )
}
