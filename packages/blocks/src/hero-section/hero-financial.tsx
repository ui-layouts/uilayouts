'use client'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { EcommerceDash } from '../../assets/index'
import { useMediaQuery } from '@/hooks/use-media-query'
import MotionDrawer from '@/components/ui/motion-drawer'

export const HeroFinancial = () => {
  const timelineRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      ref={timelineRef}
      className="min-h-screen bg-[#f7f9fc] text-[#1e293b] relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50" />

      <svg
        width="358"
        height="483"
        viewBox="0 0 358 483"
        className="absolute top-0 z-1 left-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_1)">
          <rect
            x="-86.9961"
            y="-33.114"
            width="72"
            height="541"
            rx="36"
            transform="rotate(-30.8182 -86.9961 -33.114)"
            fill="url(#paint0_linear_0_1)"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <rect
            x="-17"
            y="-135.113"
            width="50.0937"
            height="541"
            rx="25.0469"
            transform="rotate(-30.8182 -17 -135.113)"
            fill="url(#paint1_linear_0_1)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="-137.641"
            y="-120.646"
            width="440.285"
            height="602.787"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="-71.707"
            y="-215.486"
            width="429.598"
            height="599.69"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="32"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="-50.9961"
            y1="-33.114"
            x2="-50.9961"
            y2="507.886"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#91bbfb" />
            <stop offset="1" stop-color="#E6F1FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="8.04686"
            y1="-135.113"
            x2="8.04686"
            y2="405.887"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8dbafd" />
            <stop offset="1" stop-color="#c1d9f8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Soft Background Gradients */}
      <TimelineAnimation
        timelineRef={timelineRef}
        animationNum={5}
        className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-blue-50 via-blue-100 to-transparent opacity-100"
      />
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-5 w-full pt-4">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={'#ffffff'}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-white border-r border-neutral-200 text-black"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200"
          >
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-black">
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
                <span>UI-Layouts</span>
              </div>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Our Service
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Contact
              </a>
            </nav>
          </MotionDrawer>
          <button className="bg-neutral-900 text-white px-3 py-3 relative z-2 flex gap-1 items-center rounded-xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)]">
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      )}
      {/* Header */}
      {!isMobile && (
        <header className="relative z-10 w-full max-w-7xl mx-auto p-2 mt-4">
          <TimelineAnimation
            animationNum={1}
            timelineRef={timelineRef}
            className="bg-white/80 backdrop-blur-xl p-2 rounded-xl border border-white shadow-sm flex items-center justify-between"
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
            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-neutral-500">
              <a href="#" className="hover:text-[#3b82f6] transition">
                Home
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                About Us
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Blog
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Pages
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Pricing
              </a>
            </nav>
            <button className="bg-neutral-900 text-white px-3 py-3 flex gap-1 items-center rounded-xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)]">
              Get Started <ChevronRight size={20} />
            </button>
          </TimelineAnimation>
        </header>
      )}
      {/* Hero Content */}
      <div className="relative z-10 text-center pt-24 pb-16 px-4 flex flex-col gap-6">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          className="bg-white w-fit mx-auto text-black px-1.5 py-1 rounded-full inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 border-2 border-white"
        >
          <span className="bg-linear-to-br from-blue-500 to-blue-200 text-white px-2 py-0.5 rounded-full text-xs font-medium uppercase tracking-widest">
            New
          </span>
          <span className="text-sm font-medium">
            Anouncing our latest product launch
          </span>
        </TimelineAnimation>

        <TimelineAnimation
          as="h1"
          animationNum={2}
          timelineRef={timelineRef}
          className="sm:text-6xl text-5xl md:text-8xl font-medium tracking-tight text-neutral-900 max-w-6xl"
        >
          Make your financial <br /> operations seamless.
        </TimelineAnimation>

        <TimelineAnimation
          as="p"
          animationNum={3}
          timelineRef={timelineRef}
          className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed px-4"
        >
          Take control of your finances with Startive the next-generation
          finance software built to simplify, automate, and elevate your
          financial operations.
        </TimelineAnimation>

        <div className="flex gap-4 justify-center">
          <TimelineAnimation
            as="button"
            animationNum={4}
            timelineRef={timelineRef}
            className="px-4 bg-linear-to-br from-blue-500 via-blue-400 to-blue-200 text-white text-xl rounded-lg shadow-sm transition py-2.5 border border-blue-300"
          >
            Get Started
          </TimelineAnimation>
          <TimelineAnimation
            as="button"
            animationNum={5}
            timelineRef={timelineRef}
            className="px-4 bg-linear-to-br from-neutral-50 via-neutral-100 to-neutral-300 text-black text-xl rounded-lg shadow-sm  transition py-2.5 border border-neutral-300"
          >
            Learn more
          </TimelineAnimation>
        </div>
      </div>

      {/* Dashboard UI Frame */}
      <div className="w-full max-w-7xl mx-auto rounded-xl relative mt-10">
        <TimelineAnimation
          animationNum={6}
          timelineRef={timelineRef}
          className="rounded-2xl bg-white/50 backdrop-blur-lg p-4"
        >
          <TimelineAnimation
            animationNum={7}
            as="img"
            timelineRef={timelineRef}
            // @ts-ignore
            src={EcommerceDash?.src}
            alt="phoneMockUP"
            className="w-full relative z-4 rounded-2xl"
          />
        </TimelineAnimation>
      </div>
    </section>
  )
}
