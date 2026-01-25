'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'

const Icons = {
  Twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  ),
}

export const TeamClassic = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="bg-[#FFF0F5] min-h-screen py-24 px-6 text-center"
      ref={timelineRef}
    >
      <div className="max-w-6xl mx-auto">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={1}
          as="h2"
          className="text-5xl font-cursive text-gray-800 mb-6"
        >
          Our Team Of Professionals
        </TimelineAnimation>
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={2}
          as="p"
          className="text-gray-500 max-w-xl mx-auto mb-20 text-sm tracking-wide"
        >
          Awesome site on the top advertising a business online includes
          assembling <br /> Having the most well-planned
        </TimelineAnimation>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              id: '1',
              name: 'Candice Wu',
              role: 'Founder & CEO',
              borderClass: 'ring-red-500',
              emoji: '🔥',
              image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop',
            },
            {
              id: '2',
              name: 'Demi Wilkinson',
              borderClass: 'ring-blue-500',
              role: 'Engineering Manager',
              emoji: '🌊',
              image:
                'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',
            },
            {
              id: '3',
              name: 'Drew Cano',
              role: 'Product Manager',
              borderClass: 'ring-purple-500',
              emoji: '🎯',
              image:
                'https://images.unsplash.com/photo-1569292316763-0b667e9e960c?q=80&w=687&auto=format&fit=crop',
            },
            {
              id: '4',
              name: 'Natali Craig',
              role: 'Frontend Developer',
              borderClass: 'ring-green-400',
              emoji: '🌿',
              image:
                'https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=746&auto=format&fit=crop',
            },
          ].map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={3 + i}
              className="flex flex-col items-center group"
            >
              <div
                className={cn(
                  `relative sm:w-56 w-48 sm:h-56 h-48 rounded-xl p-1 mb-5 group-hover:ring-4`,
                  member.borderClass
                )}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-white shadow-xl">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover"
                    alt={member.name}
                  />
                </div>
                <div className="absolute top-0 group-hover:opacity-100 opacity-0 right-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-x-1/4 -translate-y-1/4 text-green-500 transition-opacity duration-300">
                  {member.emoji}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 tracking-wider mb-1 font-spaceGrotesk">
                {member.name}
              </h3>
              <p className="text-green-500 font-medium text-xs tracking-widest uppercase mb-4">
                {member.role}
              </p>
              <div className="flex gap-6 text-gray-500">
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Facebook />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Twitter />
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  <Icons.Instagram />
                </a>
              </div>
            </TimelineAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
