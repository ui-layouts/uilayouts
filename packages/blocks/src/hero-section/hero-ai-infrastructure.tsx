'use client'
import React, { Suspense, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'
import MotionDrawer from '@/components/ui/motion-drawer'

export const HeroAiInfrastructure = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen flex flex-col bg-black text-white w-full overflow-hidden"
    >
      <Suspense>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '120vh',
          }}
          lazyLoad={undefined}
          fov={undefined}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.4}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={7}
            positionX={0}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={0}
            rotationZ={140}
            color1="#1f469a"
            color2="#000000"
            color3="#000000"
            reflection={0.5}
            // View (camera) props
            cAzimuthAngle={250}
            cPolarAngle={140}
            cDistance={1.5}
            cameraZoom={12.5}
            // Effect props
            lightType="3d"
            brightness={1.5}
            envPreset="city"
            grain="on"
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </Suspense>
      {isMobile && (
        <div className="flex gap-4 justify-between items-center px-10 pt-4">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={'#000000'}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-black border-r border-neutral-900 text-white"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0"
          >
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-white">
                <svg
                  className="fill-white w-8 h-8"
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
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Products
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Leaderboards
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Enterprise
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Government
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Customers
              </a>
            </nav>
          </MotionDrawer>
          <TimelineAnimation
            as="button"
            timelineRef={timelineRef}
            animationNum={2}
            className="cursor-pointer bg-white/10 hover:bg-white/20 transition px-2 py-2 rounded text-sm font-medium border border-white/10 backdrop-blur-md"
          >
            Register For Free
          </TimelineAnimation>
        </div>
      )}
      {!isMobile && (
        <header className="relative z-10 flex items-center max-w-7xl mx-auto w-full justify-between px-8 py-6">
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={1}
            className="flex items-center gap-5"
          >
            <div className="text-2xl font-semibold tracking-tight">
              <svg
                className="fill-white w-8 h-8"
                width="97"
                height="108"
                viewBox="0 0 97 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
              </svg>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-md text-gray-300">
              <a href="#" className="hover:text-white transition">
                Products
              </a>
              <a href="#" className="hover:text-white transition">
                Leaderboards
              </a>
              <a href="#" className="hover:text-white transition">
                Enterprise
              </a>
              <a href="#" className="hover:text-white transition">
                Government
              </a>
              <a href="#" className="hover:text-white transition">
                Customers
              </a>
            </nav>
          </TimelineAnimation>
          <div className="flex items-center gap-4">
            <TimelineAnimation
              as="button"
              timelineRef={timelineRef}
              animationNum={2}
              className="cursor-pointer bg-white/10 hover:bg-white/20 transition px-2 py-2 rounded text-sm font-medium border border-white/10 backdrop-blur-md"
            >
              Register For Free
            </TimelineAnimation>
          </div>
        </header>
      )}

      {/* Main Content */}
      <div className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pt-24 mb-10">
        <TimelineAnimation
          timelineRef={timelineRef}
          animationNum={3}
          className="border border-blue-800 flex items-center gap-2 rounded-2xl p-1 pr-3 bg-blue-800/50 backdrop-blur-lg"
        >
          <span className="py-0.5 px-1 rounded-lg bg-blue-600 text-white">
            New
          </span>
          <span>Trusted by 999+ growing B2B teams</span>
        </TimelineAnimation>
        <TimelineAnimation
          timelineRef={timelineRef}
          as="h1"
          animationNum={4}
          className="text-5xl md:text-7xl font-medium tracking-tight leading-[120%] max-w-5xl my-5"
        >
          Powering the Next <br />
          Generation of AI
          <br />
          Infrastructure
        </TimelineAnimation>

        <TimelineAnimation
          timelineRef={timelineRef}
          as="p"
          animationNum={5}
          className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 font-light"
        >
          High-quality data, scalable tooling, and reliable infrastructure to
          build, train, and deploy AI systems faster and with confidence.
        </TimelineAnimation>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <TimelineAnimation
            timelineRef={timelineRef}
            as="button"
            animationNum={6}
            className="cursor-pointer bg-white text-black px-6 py-3 rounded-sm font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
          >
            Book a Free Demo <ArrowRight size={18} />
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            as="button"
            animationNum={7}
            className="cursor-pointer relative bg-white/10 hover:bg-white/20 transition px-8 py-3 rounded-sm font-semibold border border-white/20 backdrop-blur-md"
          >
            Build With AI
          </TimelineAnimation>
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="relative z-10 py-16 flex flex-col items-center">
        <TimelineAnimation
          timelineRef={timelineRef}
          as="p"
          animationNum={7}
          className="text-gray-400 md:text-xl text-nd text-center mb-8"
        >
          Scale works with{' '}
          <span className="text-white font-medium">
            Generative AI Companies
          </span>
          , U.S. Government Agencies & Enterprises
        </TimelineAnimation>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <TimelineAnimation
            timelineRef={timelineRef}
            as="img"
            animationNum={8}
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            className="h-8"
            alt="google"
          />
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={9}
            className="flex gap-2 text-2xl items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              className="h-6"
              alt="Microsoft"
            />
            <span>Microsoft</span>
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            animationNum={10}
            className="flex gap-2 text-2xl items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              className="h-6"
              alt="figma"
            />
            <span>Figma</span>
          </TimelineAnimation>
          <TimelineAnimation
            timelineRef={timelineRef}
            as="img"
            animationNum={11}
            src="https://upload.wikimedia.org/wikipedia/en/1/1f/Reddit_logo_2023.svg"
            className="h-6 invert"
            alt="reddit"
          />
        </div>
      </div>
    </section>
  )
}
