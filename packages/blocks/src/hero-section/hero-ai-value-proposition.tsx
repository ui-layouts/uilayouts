'use client'
import React, { useRef } from 'react'
import {
  Layout,
  Monitor,
  Smartphone,
  PenTool,
  MousePointer2,
} from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'

export const HeroAiValueProposition = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="relative min-h-screen bg-[#f9f9f9] text-[#111] overflow-hidden flex flex-col"
      ref={timelineRef}
    >
      {/* Header */}
      <TimelineAnimation
        once={true}
        as="header"
        animationNum={1}
        timelineRef={timelineRef}
        className="relative z-10 w-full max-w-7xl mx-auto p-6 flex items-center justify-between border-x border-zinc-200"
      >
        <div className="flex items-center gap-2">
          <svg
            className="fill-black w-8 h-8"
            width="97"
            height="108"
            viewBox="0 0 97 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            UI-Layout
          </span>
        </div>

        <button className="bg-white border border-gray-100 text-gray-500 px-4 py-2.5 rounded-full font-bold text-sm shadow-sm hover:text-black hover:border-gray-300 transition-all cursor-pointer">
          Sign in
        </button>
      </TimelineAnimation>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6">
        <article className="border-y w-full border-zinc-200">
          <div className="flex flex-col items-center text-center space-y-4 max-w-7xl mx-auto border-x border-zinc-200 p-8">
            <TimelineAnimation
              once={true}
              as="h1"
              animationNum={2}
              timelineRef={timelineRef}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900 "
            >
              AI-generated project briefs <br className="hidden md:block" />{' '}
              built for designers
            </TimelineAnimation>
            <TimelineAnimation
              once={true}
              as="p"
              animationNum={3}
              timelineRef={timelineRef}
              className="text-gray-400 text-lg md:text-xl max-w-4xl font-medium leading-relaxed"
            >
              Turn rough ideas into clear, structured project briefs in seconds.
              Let AI handle the planning so you can focus on design, creativity,
              and execution.
            </TimelineAnimation>
          </div>
        </article>
        <div className="border-b border-zinc-200">
          <div className="max-w-7xl mx-auto border-x border-zinc-200 flex flex-col justify-center gap-5 p-10">
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={4}
              timelineRef={timelineRef}
              className="bg-neutral-900 cursor-pointer text-white px-10 py-4 rounded-full font-bold text-base shadow-2xl hover:bg-black transition-all w-fit mx-auto border-4 border-white/80"
            >
              Get started for free
            </TimelineAnimation>
            {/* Designer Proof */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <TimelineAnimation
                once={true}
                as="p"
                animationNum={5}
                timelineRef={timelineRef}
                className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]"
              >
                Join 80,000+ designers
              </TimelineAnimation>
              <div className="flex items-center gap-1">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TimelineAnimation
                      once={true}
                      key={i}
                      animationNum={6}
                      timelineRef={timelineRef}
                    >
                      <img
                        src={`https://picsum.photos/seed/bb-designer-${i}/100`}
                        className="w-10 h-10 rounded-full border-2 border-[#f9f9f9] object-cover shadow-sm"
                        alt=""
                      />
                    </TimelineAnimation>
                  ))}
                </div>
                <TimelineAnimation
                  once={true}
                  as="div"
                  animationNum={7}
                  timelineRef={timelineRef}
                  className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                >
                  1,234+
                </TimelineAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup Preview Area */}
      <div className="relative z-10 w-full border-b border-zinc-200 mb-10">
        <div className="max-w-7xl mx-auto border-x border-zinc-200">
          <TimelineAnimation
            once={true}
            animationNum={8}
            timelineRef={timelineRef}
            className="relative bg-white backdrop-blur-xl rounded-4xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-zinc-200 p-2"
          >
            <div className="bg-linear-to-b from-neutral-200 from-50% to-blue-400/80 rounded-4xl pt-32">
              {/* Background decorative glows inside the frame */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-100 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-100 rounded-full blur-[100px] opacity-40"></div>

              {/* Internal Mockup Shell */}
              <TimelineAnimation
                once={true}
                animationNum={9}
                timelineRef={timelineRef}
                className="relative z-10 min-h-[500px] max-w-5xl mx-auto"
              >
                <TimelineAnimation
                  once={true}
                  animationNum={11}
                  timelineRef={timelineRef}
                  className="absolute -top-8 left-16 -z-2 bg-neutral-100 border border-gray-100/50 w-[85%] h-full rounded-t-4xl"
                />
                <TimelineAnimation
                  once={true}
                  animationNum={12}
                  timelineRef={timelineRef}
                  className="absolute -top-4 left-5 -z-2 bg-neutral-50 border border-gray-100/50 w-[95%] h-full rounded-t-4xl"
                />
                {/* Internal Layout */}
                <TimelineAnimation
                  once={true}
                  animationNum={10}
                  timelineRef={timelineRef}
                  className="flex flex-col gap-12 bg-white backdrop-blur-md border border-gray-100/50 rounded-t-4xl p-12"
                >
                  {/* Breadcrumbs & Profile */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400 font-medium">
                          My briefs /
                        </span>
                        <span className="font-bold text-slate-800">
                          UI-Layout Studio 2026
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-4 bg-gray-50 rounded-full"></div>
                      <img
                        src="https://picsum.photos/seed/bb-avatar/100"
                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                        alt="User"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Content Section */}
                    <div className="lg:col-span-7 space-y-12">
                      <div className="space-y-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Introduction
                        </p>
                        <div className="space-y-3">
                          <div className="w-full h-2.5 bg-gray-50 rounded-full"></div>
                          <div className="w-[95%] h-2.5 bg-gray-50 rounded-full"></div>
                          <div className="w-[90%] h-2.5 bg-gray-50 rounded-full"></div>
                        </div>
                      </div>

                      <TimelineAnimation
                        once={true}
                        animationNum={17}
                        timelineRef={timelineRef}
                        className="space-y-4 pt-4 bg-neutral-100 p-4 border"
                      >
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Goal
                        </p>
                        <div className="relative h-1 bg-neutral-300 rounded-full mt-6">
                          <div className="absolute top-0 left-0 h-full w-[45%] bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="space-y-3 pt-4">
                          <div className="w-[85%] h-2.5 bg-neutral-200 rounded-full"></div>
                          <div className="w-[80%] h-2.5 bg-neutral-200 rounded-full"></div>
                        </div>
                      </TimelineAnimation>
                    </div>

                    {/* Right: Choice Panel */}
                    <div className="lg:col-span-5">
                      <TimelineAnimation
                        once={true}
                        animationNum={13}
                        timelineRef={timelineRef}
                        className="bg-[#fcfcfc] p-8 rounded-4xl border border-gray-100 shadow-sm"
                      >
                        <p className="text-[11px] font-bold text-slate-900 mb-8 uppercase tracking-widest">
                          What type of project?
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                          <TimelineAnimation
                            once={true}
                            animationNum={14}
                            timelineRef={timelineRef}
                            className="bg-white p-5 rounded-2xl border-2 border-blue-500 flex flex-col gap-4 relative group cursor-pointer transition-all shadow-2xl"
                          >
                            <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                              <Monitor size={20} />
                            </div>
                            <p className="text-[11px] font-bold text-slate-900">
                              Web app
                            </p>
                            <div className="absolute top-3 right-3 opacity-100 scale-100 transition-all">
                              <MousePointer2
                                className="text-slate-900 fill-slate-900"
                                size={20}
                              />
                            </div>
                          </TimelineAnimation>
                          <TimelineAnimation
                            once={true}
                            animationNum={15}
                            timelineRef={timelineRef}
                            className="bg-white/80 p-5 rounded-2xl border border-gray-100 flex flex-col gap-4 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                          >
                            <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-xl flex items-center justify-center">
                              <PenTool size={20} />
                            </div>
                            <p className="text-[11px] font-bold text-slate-900">
                              UX/UI Design
                            </p>
                          </TimelineAnimation>
                          <TimelineAnimation
                            once={true}
                            animationNum={16}
                            timelineRef={timelineRef}
                            className="bg-white/80 p-5 rounded-2xl border border-gray-100 flex flex-col gap-4 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                          >
                            <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-xl flex items-center justify-center">
                              <Smartphone size={20} />
                            </div>
                            <p className="text-[11px] font-bold text-slate-900">
                              Mobile App
                            </p>
                          </TimelineAnimation>
                          <TimelineAnimation
                            once={true}
                            animationNum={17}
                            timelineRef={timelineRef}
                            className="bg-white/80 p-5 rounded-2xl border border-gray-100 flex flex-col gap-4 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
                          >
                            <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-xl flex items-center justify-center">
                              <Layout size={20} />
                            </div>
                            <p className="text-[11px] font-bold text-slate-900">
                              Branding & logo
                            </p>
                          </TimelineAnimation>
                        </div>
                      </TimelineAnimation>
                    </div>
                  </div>
                </TimelineAnimation>
              </TimelineAnimation>
            </div>
          </TimelineAnimation>
        </div>
      </div>
    </section>
  )
}
