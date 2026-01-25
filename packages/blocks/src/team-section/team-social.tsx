'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { Button } from '@repo/ui'
import { LinkedinIcon, TwitterIcon } from 'lucide-react'
import React, { useRef } from 'react'
const TEAM_MEMBERS_3 = [
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
  {
    id: '4',
    name: 'Zahra Christensen',
    role: 'Backend Developer',
    image:
      'https://images.unsplash.com/photo-1734434570358-21badf4ba1c6?q=80&w=687&auto=format&fit=crop',
  },
]

export const TeamSocial = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-white min-h-screen" ref={timelineRef}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            as="span"
            className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full mb-4"
          >
            Pure talent
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={2}
            as="h2"
            className="text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            Meet our team
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={3}
            as="p"
            className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Unleashing creativity, our team of design visionaries turns ordinary
            spaces into extraordinary experiences.
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={4}
            className="flex items-center justify-center gap-4"
          >
            <Button className="px-6 py-3 font-spaceGrotesk bg-orange-500 shadow-lg shadow-orange-500 text-white font-bold rounded-xl hover:bg-ornage-600 transition-all ">
              Get started
            </Button>
            <Button className="px-4 py-3 font-spaceGrotesk border border-gray-200 font-bold rounded-xl text-white transition-all">
              Explore features
            </Button>
          </TimelineAnimation>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {TEAM_MEMBERS_3.map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={5 + i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full rounded-full overflow-hidden mb-6 ring-4 ring-transparent group-hover:ring-orange-100 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <TwitterIcon />
                </a>
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <LinkedinIcon />
                </a>
              </div>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
