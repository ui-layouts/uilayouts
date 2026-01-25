'use client'
import React, { useRef } from 'react'
import { Codesandbox } from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const TEAM_MEMBERS_1 = [
  {
    id: '1',
    name: 'Matt Payel',
    role: 'C.E.O',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Jack Remon',
    role: 'C.F.O',
    image:
      'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Zane Carder',
    role: 'Lead Dev',
    quirk: 'Coffee addict',
    image:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Abram Dias',
    role: 'UX lead',
    image:
      'https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=746&auto=format&fit=crop',
  },
]

export const TeamModern = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-white" ref={timelineRef}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-8">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            as="span"
            className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-4"
          >
            Pure talent
          </TimelineAnimation>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <TimelineAnimation
                timelineRef={timelineRef}
                animationNum={2}
                as="h2"
                className="text-5xl font-spaceGrotesk font-bold text-gray-900 mb-6"
              >
                Meet our team
              </TimelineAnimation>
              <TimelineAnimation
                timelineRef={timelineRef}
                animationNum={3}
                as="p"
                className="text-lg text-gray-500 leading-relaxed"
              >
                Unleashing creativity, our team of design visionaries turns
                ordinary spaces into extraordinary experiences.
              </TimelineAnimation>
            </div>
            <TimelineAnimation
              timelineRef={timelineRef}
              animationNum={4}
              className="flex items-center gap-4"
            >
              <button className="font-spaceGrotesk px-3 py-2.5 bg-orange-500 shadow-lg shadow-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Get started
              </button>
              <button className="font-spaceGrotesk bg-neutral-100 px-3 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Explore features
              </button>
            </TimelineAnimation>
          </div>
        </div>

        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={5}
          className="flex flex-wrap gap-8 py-12 mb-12 border-b border-gray-100"
        >
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
            <Codesandbox color="#7C3AED" size={32} /> UI-Layouts
          </div>
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
            <Codesandbox color="#4F46E5" size={32} /> Tools UI
          </div>
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
            <Codesandbox color="#DC2626" size={32} /> Logoipsum
          </div>
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-xl">
            <Codesandbox color="#F59E0B" size={32} /> Logoipsum
          </div>
        </TimelineAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS_1.map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={6 + i}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-4/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-spaceGrotesk font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
