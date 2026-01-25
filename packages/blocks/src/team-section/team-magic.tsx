'use client'

import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { Button } from '@repo/ui'
import React, { useRef } from 'react'

const MAGIC_TEAM = [
  {
    id: '2',
    name: 'Henrik Duer',
    role: 'Healthy habits expert and life-style coach',
    img: 'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1025&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Rikke Hørlykke',
    role: 'Olympic handball gold winner and personal trainer',
    img: 'https://images.unsplash.com/photo-1765438869321-d60141efd813?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Stig Severinsen',
    role: 'World record holder and breathwork expert',
    img: 'https://images.unsplash.com/photo-1734434570358-21badf4ba1c6?q=80&w=687&auto=format&fit=crop',
  },
]
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

export const TeamMagic = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="bg-neutral-950 min-h-screen py-24 px-6 text-white text-center"
      ref={timelineRef}
    >
      <div className="max-w-5xl mx-auto">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={1}
          as="h2"
          className="text-6xl font-spaceGrotesk font-semibold mb-6"
        >
          Behind the Magic
        </TimelineAnimation>
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={2}
          as="p"
          className="text-gray-400 text-lg mb-20 max-w-3xl mx-auto leading-relaxed"
        >
          We're a group of passionate designers, developers, and strategists
          united by a mission to craft beautiful and impactful digital
          experiences.
        </TimelineAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {MAGIC_TEAM.map((member, i) => (
            <TimelineAnimation
              key={member.id}
              timelineRef={timelineRef}
              animationNum={3 + i}
              className="relative group perspective-1000"
            >
              <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-all duration-700 relative">
                <img
                  src={member.img}
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-50 group-hover:scale-110 transition-all duration-700"
                  alt={member.name}
                />

                <div className="absolute inset-4 rounded-3xl border border-white/20 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center p-6 border-b-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="mt-auto text-center">
                    <h4 className="text-2xl font-bold font-spaceGrotesk mb-1 text-blue-600">
                      {member.name}
                    </h4>
                    <p className="text-white text-sm mb-6">{member.role}</p>
                    <button className="cursor-pointer px-6 py-2 rounded-full border border-white/30 text-xs font-bold bg-white/10 hover:bg-white hover:text-black transition-all">
                      Let's Connect
                    </button>
                  </div>
                </div>
              </div>
            </TimelineAnimation>
          ))}
        </div>

        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={6}
          className="flex flex-col md:flex-row items-center justify-between text-left gap-8 py-12 border-t border-white/5"
        >
          <div>
            <h3 className="text-3xl font-spaceGrotesk font-bold mb-4">
              Follow us to see what we're creating.
            </h3>
            <p className="text-gray-500 max-w-xl">
              We're a diverse team of problem-solvers, designers, and tech
              lovers — passionate about creating impact through digital
              experiences.
            </p>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-4 text-white cursor-pointer hover:text-white bg-white/5 p-3 h-14 rounded-full border border-white/10 hover:bg-white/10 transition-all group"
          >
            <span className="font-bold">Contact Us</span>
            <div className="w-8 h-8 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full flex items-center justify-center group-hover:bg-[#00D1FF] group-hover:text-black transition-all">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </Button>
        </TimelineAnimation>

        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={7}
          className="flex gap-4 mt-8"
        >
          <div className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Icons.LinkedIn />
          </div>
          <div className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Icons.Instagram />
          </div>
          <div className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors cursor-pointer">
            <Icons.Twitter />
          </div>
        </TimelineAnimation>
      </div>
    </div>
  )
}
