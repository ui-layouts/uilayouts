'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { Quote } from 'lucide-react'
import React, { useRef } from 'react'

export const VR_TEAM = [
  {
    id: '1',
    name: 'Michael Scott',
    role: 'Founder and CEO',
    quote:
      'Innovation is not just about technology, it is about creating experiences that bring people together.',
    image:
      'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'David Brent',
    role: 'Founder and COO',
    quote:
      'Innovation is not just about technology, it is about creating experiences that bring people together.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Lara Croft',
    role: 'Founder and CTO',
    quote:
      'Innovation is not just about technology, it is about creating experiences that bring people together.',
    image:
      'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
  },
]

export const TeamVR = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="bg-neutral-950 min-h-screen py-24 px-6 overflow-hidden"
      ref={timelineRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#ee33a6_100%)]"></div>
      <div className="max-w-7xl mx-auto text-center">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={1}
          as="p"
          className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4"
        >
          Meet the Team
        </TimelineAnimation>
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={2}
          as="h2"
          className="text-white text-5xl font-spaceGrotesk md:text-7xl font-bold tracking-tight mb-20"
        >
          The Minds behind Social VR
        </TimelineAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative">
          {VR_TEAM.map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={3 + i}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden transition-all duration-700 ease-out group-hover:shadow-[0_0_50px_rgba(255,0,128,0.3)]">
                <div className="absolute inset-0 h-full rounded-2xl px-10  flex justify-center flex-col items-center bg-linear-to-tr from-[#FF0080] to-[#FF8C00] opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10">
                  <Quote className="fill-white rotate-180 mb-5" />{' '}
                  <span>{member.quote}</span>
                </div>
                <img
                  src={member.image}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-0"
                  alt={member.name}
                />
              </div>

              <h3 className="font-spaceGrotesk text-white text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#FF0080] group-hover:to-[#FF8C00] transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-[10px] group-hover:text-gray-300 transition-colors">
                {member.role}
              </p>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
