'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import React, { useRef } from 'react'

const TROOPS = [
  {
    name: 'Michael Rhodes',
    role: 'Tax Officer',
    pos: 'top-10 left-0',
    arrow: 'M10 80 Q 20 40 40 50',
  },
  {
    name: 'Scarlett Gilbert',
    role: 'Regional Manager',
    pos: 'top-20 left-1/4',
    arrow: 'M10 10 Q 50 10 50 60',
  },
  {
    name: 'Felipe Aguilar',
    role: 'Vice President',
    pos: 'top-10 left-1/2',
    arrow: 'M10 80 Q 20 40 40 50',
  },
  {
    name: 'Liza Goldman',
    role: 'Agent',
    pos: 'top-20 left-3/4',
    arrow: 'M10 10 Q 50 10 50 60',
  },
  {
    name: 'Misty Evans',
    role: 'Branch Manager',
    pos: 'top-10 right-0',
    arrow: 'M10 80 Q 20 40 40 50',
  },
]

export const TeamTroops = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="bg-white min-h-screen p-10 py-10 relative"
      ref={timelineRef}
    >
      <div className="max-w-7xl mx-auto text-center">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={1}
          as="h2"
          className="text-6xl font-semibold font-spaceGrotesk text-[#4B70F5] mb-2"
        >
          Our Troops
        </TimelineAnimation>
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={2}
          as="p"
          className="max-w-2xl mx-auto text-gray-500 text-lg"
        >
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Ut fringilla orci vel lacus suscipit
          sollicitudin.
        </TimelineAnimation>
      </div>

      <div className="max-w-7xl mx-auto relative xl:flex flex xl:flex-row md:flex-row-reverse flex-col-reverse justify-between items-end gap-4 mt-10">
        {[
          'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1734434570358-21badf4ba1c6?q=80&w=687&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop',
        ].map((src, i) => (
          <TimelineAnimation
            key={i}
            timelineRef={timelineRef}
            animationNum={3 + i}
            className="group relative h-full md:mb-0 mb-4"
          >
            {/* Floating Label */}
            <div className="text-left transition-all duration-500 pb-5">
              <h4 className="text-blue-600 md:text-base text-2xl font-bold whitespace-nowrap font-spaceGrotesk">
                {TROOPS[i]?.name}
              </h4>
              <p className="text-gray-400 text-sm whitespace-nowrap">
                {TROOPS[i]?.role}
              </p>
            </div>

            <div className="w-full relative z-10">
              <img
                src={src}
                className="w-full grayscale group-hover:grayscale-0 transition-all border-4 group-hover:shadow-xl border-white group-hover:border-black shadow-black"
                alt="Team member"
              />
            </div>
          </TimelineAnimation>
        ))}
      </div>
    </section>
  )
}
