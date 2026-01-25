'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { Boxes } from 'lucide-react'
import React, { useRef } from 'react'

export const EXPERT_TEAM = [
  {
    id: '1',
    name: 'Eskild Ebbesen',
    role: 'Olympic rowing gold winner and public speaker',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Henrik Duer',
    role: 'Healthy habits expert and life-style coach',
    image:
      'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Rikke Hørlykke',
    role: 'Olympic handball gold winner and personal trainer',
    image:
      'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Stig Severinsen',
    role: 'World record holder and breathwork expert',
    image:
      'https://images.unsplash.com/photo-1734434570358-21badf4ba1c6?q=80&w=687&auto=format&fit=crop',
  },
]
const ActivityCard = ({
  title,
  timelineRef,
  animationNum,
}: {
  title: string
  timelineRef: React.RefObject<HTMLElement | null>
  animationNum: number
}) => (
  <TimelineAnimation
    timelineRef={timelineRef}
    animationNum={animationNum}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group cursor-default"
  >
    <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-orange-50 group-hover:scale-110 transition-transform">
      <Boxes />
    </div>
    <h4 className="text-lg font-spaceGrotesk font-bold text-gray-800 my-1">
      {title}
    </h4>
    <p className="text-gray-400 text-sm">Strategy and M&A teams</p>
  </TimelineAnimation>
)

export const TeamExpert = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-neutral-50 py-24 px-6" ref={timelineRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            as="h2"
            className="text-4xl font-light text-gray-800 mb-4"
          >
            Activities from{' '}
            <span className="font-bold font-spaceGrotesk">
              experts of the world
            </span>
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={2}
            as="p"
            className="max-w-4xl mx-auto text-gray-500 text-lg leading-relaxed"
          >
            'Pleazers' are short team activities led by world record holders,
            Olympic gold medalists, and other inspiring athletes and experts.
          </TimelineAnimation>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERT_TEAM.map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={2 + i}
              className="group p-6 rounded-3xl transition-all duration-300 bg-orange-100 border border-orange-200 hover:bg-[#FF6B00] hover:shadow-2xl hover:shadow-orange-200"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-transparent group-hover:border-white/20 transition-all">
                <img
                  src={member.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={member.name}
                />
              </div>
              <h3 className="font-spaceGrotesk text-2xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors">
                {member.name}
              </h3>
              <p className="text-sm mb-6 text-gray-500 group-hover:text-white/80 transition-colors">
                {member.role}
              </p>
              <button className="font-spaceGrotesk text-sm font-semibold flex items-center gap-2 text-[#FF6B00] group-hover:text-white transition-colors">
                READ MORE
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </TimelineAnimation>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <ActivityCard
            title="Workout"
            timelineRef={timelineRef}
            animationNum={6}
          />
          <ActivityCard
            title="Stretching"
            timelineRef={timelineRef}
            animationNum={7}
          />
          <ActivityCard
            title="Brain Breaks"
            timelineRef={timelineRef}
            animationNum={8}
          />
          <ActivityCard
            title="Mindfulness"
            timelineRef={timelineRef}
            animationNum={9}
          />
        </div>
      </div>
    </section>
  )
}
