'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import React, { useRef } from 'react'

const SYNTH_TEAM = [
  {
    id: '1',
    name: 'Amélie Laurent',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=688&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Nikolas Gibbons',
    role: 'Engineering Manager',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sienna Hewitt',
    role: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
  },
]

export const TeamSynth = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="bg-neutral-950 min-h-screen py-24 px-6 text-white relative overflow-hidden"
      ref={timelineRef}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#292929_1px,transparent_1px),linear-gradient(to_bottom,#292929_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            as="h2"
            className="text-7xl font-semibold italic tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-cyan-400 to-blue-600"
          >
            The Network
          </TimelineAnimation>
          <div className="w-48 h-1 bg-linear-to-r from-neutral-500 to-neutral-300 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SYNTH_TEAM.map((member, i) => (
            <TimelineAnimation
              key={i}
              timelineRef={timelineRef}
              animationNum={2 + i}
              className="group relative"
            >
              <div className="bg-violet-950 p-1 rounded-lg transition-transform duration-300 group-hover:-translate-y-4 group-hover:rotate-1">
                <div className="aspect-square relative overflow-hidden rounded-md">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    alt={member.name}
                  />

                  <div className="absolute inset-0 border-10 border-transparent group-hover:border-cyan-400/20 transition-all"></div>
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-spaceGrotesk font-black uppercase italic tracking-widest text-cyan-300 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-400 font-mono text-xs">
                    {member.role}
                  </p>

                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="h-1 flex-1 bg-cyan-900 group-hover:bg-cyan-400 transition-colors"
                        style={{ transitionDelay: `${j * 50}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
