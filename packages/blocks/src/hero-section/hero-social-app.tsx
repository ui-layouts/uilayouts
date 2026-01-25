'use client'
import { Apple, PlayCircle, Smartphone, Play, Zap } from 'lucide-react'
import { PhoneMockup } from '../../assets/index'
import { useRef } from 'react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'
import MotionDrawer from '@/components/ui/motion-drawer'

export const HeroSocialApp = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section
      className="min-h-screen bg-neutral-100 text-neutral-950 overflow-hidden flex flex-col items-center 
      font-spaceGrotesk
    "
      ref={timelineRef}
    >
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="flex gap-4 justify-between items-center pt-2 w-full px-1">
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
                About Us
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Press
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Careers
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
            animationNum={2}
            timelineRef={timelineRef}
            className="flex gap-4"
          >
            <button className="cursor-pointer px-8 py-3 rounded-xl bg-white border border-gray-100 shadow-sm font-semibold text-sm">
              Login
            </button>
            <button className="cursor-pointer px-8 py-3 rounded-xl bg-[#2b2b2b] text-white shadow-xl font-semibold text-sm hover:bg-black transition">
              Signup
            </button>
          </TimelineAnimation>
        </div>
      )}

      {/* Header */}
      {!isMobile && (
        <header className="w-full container sm:px-20 px-10 border-b border-x relative border-neutral-200">
          <TimelineAnimation
            animationNum={2}
            timelineRef={timelineRef}
            className="sm:w-20 w-10 h-full absolute left-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
          />
          <TimelineAnimation
            animationNum={2}
            timelineRef={timelineRef}
            className="sm:w-20 w-10 h-full absolute right-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
          />
          <div className="flex items-center justify-between border-x px-5 py-4 border-neutral-200">
            <TimelineAnimation
              animationNum={0}
              timelineRef={timelineRef}
              className="flex items-center gap-2"
            >
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
            </TimelineAnimation>
            <TimelineAnimation
              as="nav"
              animationNum={1}
              timelineRef={timelineRef}
              className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500"
            >
              <a href="#" className="text-gray-900">
                Home
              </a>
              <a href="#" className="hover:text-gray-900">
                About
              </a>
              <a href="#" className="hover:text-gray-900">
                Reviews
              </a>
              <a href="#" className="hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="hover:text-gray-900">
                Blog
              </a>
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={2}
              timelineRef={timelineRef}
              className="flex gap-4"
            >
              <button className="cursor-pointer px-8 py-3 rounded-xl bg-white border border-gray-100 shadow-sm font-semibold text-sm">
                Login
              </button>
              <button className="cursor-pointer px-8 py-3 rounded-xl bg-[#2b2b2b] text-white shadow-xl font-semibold text-sm hover:bg-black transition">
                Signup
              </button>
            </TimelineAnimation>
          </div>
        </header>
      )}

      {/* Hero Layout */}
      <div className="w-full container sm:px-20 px-10 border-x border-b relative border-neutral-200">
        <TimelineAnimation
          animationNum={3}
          timelineRef={timelineRef}
          className="sm:w-20 w-10 h-full absolute left-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
        />
        <TimelineAnimation
          animationNum={4}
          timelineRef={timelineRef}
          className="sm:w-20 w-10 h-full absolute right-0 top-0 bg-[repeating-linear-gradient(135deg,#e0e0e0_0px_1px,transparent_1px_10px)]"
        />
        <div className="lg:flex items-center justify-between md:p-20 p-5 gap-12 border-x grow border-neutral-200">
          {/* Left Side: Content */}
          <div className="flex-1">
            <TimelineAnimation
              as="h1"
              animationNum={3}
              timelineRef={timelineRef}
              className="xl:text-5xl text-4xl 2xl:text-7xl font-semibold leading-none tracking-tight text-gray-900 mb-8"
            >
              Turn Ideas into
              <TimelineAnimation
                as="span"
                animationNum={4}
                timelineRef={timelineRef}
                className="inline-block bg-neutral-800 translate-x-3 xl:translate-y-3 translate-y-2 text-white rounded-2xl border-4 border-white shadow-lg p-3 rotate-12 lg:mr-0 mr-4"
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  className="2xl:w-10 2xl:h-10 xl:w-6 w-5 xl:h-6 h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4249 15.6246L34.8267 0L31.6509 0L20.0141 13.5666L10.7198 0L0 0L14.0548 20.5152L0 36.9H3.17598L15.4647 22.5732L25.2802 36.9H36L21.4241 15.6246H21.4249ZM17.075 20.6959L15.6509 18.6531L4.32033 2.3979H9.19845L18.3424 15.5163L19.7664 17.5592L31.6524 34.6111H26.7743L17.075 20.6967V20.6959Z"
                    fill="white"
                  />
                </svg>
              </TimelineAnimation>
              Posts in Seconds, Not Hours
            </TimelineAnimation>
            <TimelineAnimation
              as="p"
              animationNum={5}
              timelineRef={timelineRef}
              className="xl:text-xl text-gray-500 leading-relaxed mb-12 font-medium"
            >
              Just drop your idea, we'll turn it into a viral post, complete
              with scroll-stopping copy, clean formatting, and a publish-ready
              finish.
            </TimelineAnimation>

            <div className="flex items-center gap-5 ">
              <TimelineAnimation
                as="button"
                animationNum={6}
                timelineRef={timelineRef}
                className="
    flex items-center justify-center gap-2 cursor-pointer
    px-4 py-2.5
    rounded-xl
    bg-neutral-900
    relative
    shadow-[0px_2.27px_1.82px_rgba(0,0,0,0.12),
            0px_2.47px_2.47px_rgba(0,0,0,0.14),
            0px_18.36px_14.69px_rgba(0,0,0,0.14),
            0px_10.29px_8.23px_rgba(0,0,0,0.135),
            0px_5.47px_4.37px_rgba(0,0,0,0.128),
            inset_0px_0.82px_0px_rgba(255,255,255,0.3),
            inset_0px_-2.47px_0px_#080808]
  "
              >
                {/* Radial highlight */}
                <div
                  className="
      pointer-events-none absolute inset-0 rounded-xl
      bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)]
    "
                />

                {/* Text */}
                <span
                  className="
       relative z-10
      text-sm font-medium text-white
      tracking-tight capitalize
      whitespace-nowrap
    "
                >
                  Apple Store
                </span>

                {/* Icon wrapper */}
                <div className="relative z-10 w-[18.9px] h-[22.2px] flex items-center justify-center">
                  {/* Apple icon SVG */}
                  <svg
                    width="18.72"
                    height="18.72"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M9.35 0C8.58 0.56 8 1.47 8 2.39C8 2.51 8.01 2.64 8.03 2.74C8.86 2.78 9.72 2.2 10.18 1.58C10.61 1.02 10.93 0.12 10.93 0C10.93 0 9.98 0 9.35 0Z"
                      fill="white"
                    />
                    <path
                      d="M15.74 6.46C15.66 6.5 13.77 7.52 13.77 9.67C13.77 12.1 15.95 12.95 15.98 12.96C15.98 13.01 15.64 14.2 14.82 15.44C14.08 16.52 13.3 17.59 12.1 17.59C10.9 17.59 10.61 16.89 9.22 16.89C7.86 16.89 7.42 17.61 6.32 17.61C5.22 17.61 4.47 16.58 3.72 15.51C2.87 14.29 2.18 12.09 2.18 9.99C2.18 6.62 4.36 4.78 6.51 4.78C7.64 4.78 8.58 5.54 9.29 5.54C9.97 5.54 11.03 4.75 12.32 4.75C12.81 4.75 14.58 4.8 15.74 6.46Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </TimelineAnimation>

              <TimelineAnimation
                as="span"
                animationNum={7}
                timelineRef={timelineRef}
                className="font-bold text-gray-800"
              >
                Or
              </TimelineAnimation>
              <TimelineAnimation
                as="button"
                animationNum={7}
                timelineRef={timelineRef}
                className="
    flex items-center justify-center gap-2 cursor-pointer
    px-4 py-2.5
    rounded-xl
    bg-neutral-900
    relative
    shadow-[0px_2.27px_1.82px_rgba(0,0,0,0.12),
            0px_2.47px_2.47px_rgba(0,0,0,0.14),
            0px_18.36px_14.69px_rgba(0,0,0,0.14),
            0px_10.29px_8.23px_rgba(0,0,0,0.135),
            0px_5.47px_4.37px_rgba(0,0,0,0.128),
            inset_0px_0.82px_0px_rgba(255,255,255,0.3),
            inset_0px_-2.47px_0px_#080808]
  "
              >
                {/* Radial highlight */}
                <div
                  className="
      pointer-events-none absolute inset-0 rounded-xl
      bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)]
    "
                />

                {/* Text */}
                <span
                  className="
       relative z-10
      text-sm font-medium text-white
      tracking-tight capitalize
      whitespace-nowrap
    "
                >
                  Play Store
                </span>

                {/* Icon wrapper */}
                <div className="relative z-10 w-[18.9px] h-[22.2px] flex items-center justify-center">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1180_14358)">
                      <path
                        d="M3.67371 0.297647C3.24353 0.0196782 2.72684 -0.0643358 2.24219 0.0500679L10.7591 8.56702L13.5195 5.80665L3.67371 0.297647Z"
                        fill="white"
                      />
                      <path
                        d="M1.18286 0.742188C0.94531 1.058 0.808594 1.44576 0.808594 1.85595V17.0271C0.808594 17.4373 0.945347 17.825 1.18286 18.1408L9.88214 9.44155L1.18286 0.742188Z"
                        fill="white"
                      />
                      <path
                        d="M17.121 7.82216L14.6402 6.43408L11.6328 9.44147L14.6404 12.449L17.1214 11.0608C17.7158 10.7278 18.0707 10.1225 18.0707 9.44147C18.0707 8.76044 17.7158 8.15519 17.121 7.82216Z"
                        fill="white"
                      />
                      <path
                        d="M10.7586 10.3164L2.24219 18.8328C2.38182 18.8657 2.52392 18.8834 2.66602 18.8834C3.0172 18.8834 3.36716 18.7835 3.67323 18.5857L13.5191 13.0768L10.7586 10.3164Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1180_14358">
                        <rect width="18.8829" height="18.8829" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </TimelineAnimation>
            </div>

            <div className="flex xl:justify-start justify-between pt-10">
              <TimelineAnimation
                animationNum={8}
                timelineRef={timelineRef}
                className="border-r border-neutral-200 xl:pr-8 pr-4"
              >
                <span className="h-10 w-10 bg-neutral-200 grid place-items-center rounded-lg">
                  <Smartphone className="text-neutral-900 size-5" />
                </span>
                <p className="text-2xl font-black mt-4">45k+</p>
                <p className="text-gray-400 xl:text-md text-sm">Downloads</p>
              </TimelineAnimation>
              <TimelineAnimation
                animationNum={9}
                timelineRef={timelineRef}
                className="border-r border-neutral-200 xl:px-8 px-4"
              >
                <span className="h-10 w-10 bg-neutral-200 grid place-items-center rounded-lg">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    className="fill-black"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1180_14358)">
                      <path d="M3.67371 0.297647C3.24353 0.0196782 2.72684 -0.0643358 2.24219 0.0500679L10.7591 8.56702L13.5195 5.80665L3.67371 0.297647Z" />
                      <path d="M1.18286 0.742188C0.94531 1.058 0.808594 1.44576 0.808594 1.85595V17.0271C0.808594 17.4373 0.945347 17.825 1.18286 18.1408L9.88214 9.44155L1.18286 0.742188Z" />
                      <path d="M17.121 7.82216L14.6402 6.43408L11.6328 9.44147L14.6404 12.449L17.1214 11.0608C17.7158 10.7278 18.0707 10.1225 18.0707 9.44147C18.0707 8.76044 17.7158 8.15519 17.121 7.82216Z" />
                      <path d="M10.7586 10.3164L2.24219 18.8328C2.38182 18.8657 2.52392 18.8834 2.66602 18.8834C3.0172 18.8834 3.36716 18.7835 3.67323 18.5857L13.5191 13.0768L10.7586 10.3164Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1180_14358">
                        <rect width="18.8829" height="18.8829" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p className="text-2xl font-black mt-4">20k+</p>
                <p className="text-gray-400 xl:text-md text-sm">Active Users</p>
              </TimelineAnimation>
              <TimelineAnimation
                animationNum={10}
                timelineRef={timelineRef}
                className="xl:pl-8 pl-4"
              >
                <span className="h-10 w-10 bg-neutral-200 grid place-items-center rounded-lg">
                  <svg
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    className="fill-neutral-900"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.07078 1.29021L8.52165 0.510952C8.79996 0.0239097 9.42056 -0.140282 9.9076 0.138028C10.3946 0.416339 10.5588 1.03693 10.2805 1.52398L5.93622 9.04374H9.07827C10.0969 9.04374 10.6674 10.2405 10.2249 11.0698H1.01302C0.450871 11.0698 0 10.6189 0 10.0568C0 9.49461 0.450871 9.04374 1.01302 9.04374H3.59569L6.90193 3.31349L5.86941 1.52121C5.5911 1.03417 5.75529 0.419104 6.24233 0.135262C6.72937 -0.143048 7.34444 0.0211446 7.62828 0.508187L8.07078 1.29021ZM4.16344 12.1134L3.18936 13.8027C2.91105 14.2898 2.29046 14.454 1.80341 14.1757C1.31637 13.8974 1.15218 13.2768 1.43049 12.7897L2.15407 11.5373C2.97226 11.2841 3.63739 11.4789 4.16344 12.1134ZM12.5515 9.04934H15.187C15.7491 9.04934 16.2 9.50021 16.2 10.0624C16.2 10.6245 15.7491 11.0754 15.187 11.0754H13.7231L14.7111 12.7897C14.9894 13.2768 14.8252 13.8918 14.3381 14.1757C13.8511 14.454 13.236 14.2898 12.9522 13.8027C11.2879 10.9167 10.0384 8.75706 9.20899 7.31827C8.36015 5.85438 8.96685 4.38495 9.56524 3.88677C10.2304 5.02782 11.224 6.75052 12.5515 9.04934Z" />
                  </svg>
                </span>
                <p className="text-2xl font-black mt-4">25k+</p>
                <p className="text-gray-400 xl:text-md text-sm">Active Users</p>
              </TimelineAnimation>
            </div>
          </div>

          {/* Right Side: Content */}
          <TimelineAnimation
            animationNum={4}
            timelineRef={timelineRef}
            className="flex-1 relative bg-white 2xl:h-172 xl:h-152 h-128 lg:mt-0 mt-10 flex items-end justify-center overflow-hidden shadow-sm"
          >
            <TimelineAnimation
              animationNum={5}
              as="img"
              timelineRef={timelineRef}
              // @ts-ignore
              src={PhoneMockup?.src}
              alt="phoneMockUP"
              className="2xl:w-120 md:w-105 w-96 relative z-4"
            />
            <TimelineAnimation
              animationNum={6}
              timelineRef={timelineRef}
              className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[14px_14px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            />
          </TimelineAnimation>
        </div>
      </div>
    </section>
  )
}
