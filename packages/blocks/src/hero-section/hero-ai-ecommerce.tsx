'use client'
import { useRef } from 'react'
import { CreditCard, LogIn } from 'lucide-react'
import { EcommerceDash } from '../../assets/index'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'
import MotionDrawer from '@/components/ui/motion-drawer'

export const HeroAiEcommerce = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      ref={timelineRef}
      className="min-h-screen text-black bg-white relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1764138370667-d15f89ee1c45?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50" />
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-10 pt-4">
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
          <TimelineAnimation
            as="button"
            animationNum={2}
            timelineRef={timelineRef}
            className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-xs border border-neutral-200 text-sm font-medium"
          >
            <LogIn size={16} /> Sign in
          </TimelineAnimation>
        </div>
      )}

      {/* Navigation */}
      {!isMobile && (
        <header className="w-full relative z-10 max-w-5xl mx-auto flex items-center justify-between px-6 py-6">
          <TimelineAnimation
            as="nav"
            animationNum={1}
            timelineRef={timelineRef}
            className="flex items-center gap-8 bg-white px-6 py-3 rounded-full shadow-xs border border-neutral-200"
          >
            <div className="text-2xl font-extrabold text-[#5d5dff]">
              <svg
                className="fill-indigo-500 w-8 h-8"
                width="97"
                height="108"
                viewBox="0 0 97 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
              </svg>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-800">
              <a href="#" className="hover:text-indigo-500">
                How It Works
              </a>
              <a href="#" className="hover:text-indigo-500">
                Internships
              </a>
              <a href="#" className="hover:text-indigo-500">
                Students
              </a>
              <a href="#" className="hover:text-indigo-500">
                Professors
              </a>
              <a href="#" className="hover:text-indigo-500">
                FAQs
              </a>
            </nav>
          </TimelineAnimation>

          <div className="flex items-center gap-3">
            <TimelineAnimation
              as="button"
              animationNum={2}
              timelineRef={timelineRef}
              className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-xs border border-neutral-200 text-sm font-medium"
            >
              <LogIn size={16} /> Sign in
            </TimelineAnimation>
          </div>
        </header>
      )}
      {/* Hero Body */}
      <div className="text-center relative px-4 pt-16 pb-12 z-10">
        <TimelineAnimation
          as="h1"
          animationNum={3}
          timelineRef={timelineRef}
          className="sm:text-6xl text-5xl md:text-7xl font-medium tracking-tight text-neutral-800 mb-8"
        >
          Empower Your Learning <br className="sm:inline-block hidden" />
          With{' '}
          <TimelineAnimation
            as="span"
            animationNum={4}
            timelineRef={timelineRef}
            className="relative inline-block border-2 border-indigo-500 px-4 py-1 bg-indigo-100 text-indigo-500 rounded-md"
          >
            AI Communities
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-500"></div>
          </TimelineAnimation>
        </TimelineAnimation>
        <TimelineAnimation
          as="p"
          animationNum={5}
          timelineRef={timelineRef}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-5 font-normal leading-relaxed"
        >
          Join AI-powered course communities that help you study faster,
          collaborate with peers, and excel in your classes.
        </TimelineAnimation>
        <div className="flex flex-col items-center gap-6">
          <TimelineAnimation
            as="button"
            animationNum={6}
            timelineRef={timelineRef}
            className="p-1.5 bg-linear-to-t from-indigo-800 to-indigo-100 h-20 rounded-full"
          >
            <span className="bg-linear-to-l from-indigo-500 to-indigo-600 shadow-[inset_4px_4px_5px_0px_rgba(168,170,241,0.5),inset_-1px_-2px_5px_0px_rgba(74,78,197,0.5),inset_-1px_4px_8px_0px_rgba(44,58,98,0.25)] text-white px-10 py-5 rounded-full text-lg font-semibold cursor-pointer">
              Start Your 14 Day Free Trial
            </span>
          </TimelineAnimation>
          <TimelineAnimation
            as="p"
            animationNum={6}
            timelineRef={timelineRef}
            className="text-gray-600 text-sm flex items-center gap-2 font-medium"
          >
            <CreditCard size={16} /> No Credit Card Required
          </TimelineAnimation>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="w-full max-w-7xl mx-auto rounded-xl relative mt-10">
        <TimelineAnimation
          animationNum={7}
          timelineRef={timelineRef}
          className="rounded-2xl bg-white/50 backdrop-blur-lg p-4"
        >
          <TimelineAnimation
            animationNum={8}
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
