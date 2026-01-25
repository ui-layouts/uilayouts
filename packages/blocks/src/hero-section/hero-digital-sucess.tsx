'use client'
import React, { Suspense, useRef } from 'react'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Component, Layout, Wallet } from 'lucide-react'
import MotionDrawer from '@/components/ui/motion-drawer'

export const HeroDigitalSuccess = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <section
      ref={timelineRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
    >
      <Suspense>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
          lazyLoad={false}
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
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#92dbe0"
            color2="#0b7bff"
            color3="#3865cf"
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType="env"
            brightness={0.8}
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
                Our Service
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-gray-100 hover:text-black rounded-sm"
              >
                Contact
              </a>
            </nav>
          </MotionDrawer>
          <TimelineAnimation
            once={true}
            as="button"
            animationNum={3}
            timelineRef={timelineRef}
            className="flex items-center gap-2 w-fit px-8 py-4 rounded-full font-bold text-lg bg-neutral-800 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Book a call</span>
          </TimelineAnimation>
        </div>
      )}
      {/* Header */}
      {!isMobile && (
        <header className="relative z-10 flex items-center justify-between px-10 p-4">
          <TimelineAnimation
            once={true}
            animationNum={1}
            timelineRef={timelineRef}
            className="flex items-center gap-2"
          >
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
          </TimelineAnimation>

          <TimelineAnimation
            once={true}
            as="nav"
            animationNum={2}
            timelineRef={timelineRef}
            className="hidden md:flex items-center gap-12 text-sm text-white font-medium"
          >
            <a href="#" className="hover:text-white transition">
              Our Services
            </a>
            <a href="#" className="hover:text-white transition">
              About Us
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            as="button"
            animationNum={3}
            timelineRef={timelineRef}
            className="flex items-center gap-2 w-fit px-8 py-4 rounded-full font-bold text-lg bg-neutral-800 text-white"
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-sm font-medium">Book a call</span>
          </TimelineAnimation>
        </header>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 grow flex flex-col justify-center px-12 md:px-24">
        <TimelineAnimation
          once={true}
          as="h1"
          animationNum={4}
          timelineRef={timelineRef}
          className="flex flex-col xl:flex-row text-[10vw] xl:text-[6.5vw] font-medium leading-[100%] items-baseline gap-x-8 gap-y-2 pb-10 "
        >
          Unlocking
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-red-500 to-red-500 pb-8 xl:inline-block block">
            Digital Success
          </span>
        </TimelineAnimation>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex flex-wrap justify-start gap-4">
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={5}
              timelineRef={timelineRef}
              className="cursor-pointer relative group overflow-hidden bg-white text-black px-8 py-4 rounded-full font-medium text-lg flex items-center gap-3 shadow-[0_0_20px_rgba(255,60,60,0.4)]"
            >
              <img
                src="https://picsum.photos/seed/ds/50"
                className="w-6 h-6 rounded-full"
                alt=""
              />
              Book a Consultation
            </TimelineAnimation>
            <TimelineAnimation
              once={true}
              as="button"
              animationNum={6}
              timelineRef={timelineRef}
              className="cursor-pointer border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-medium text-lg"
            >
              More about us
            </TimelineAnimation>
          </div>
          <TimelineAnimation
            once={true}
            as="p"
            animationNum={7}
            timelineRef={timelineRef}
            className="max-w-md text-neutral-100 text-xl font-light leading-relaxed"
          >
            We are a full-stack agency creating captivating web experiences,
            driving e-commerce growth, and maximizing digital impact.
          </TimelineAnimation>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 p-12 flex flex-wrap justify-end items-end">
        <TimelineAnimation
          once={true}
          animationNum={8}
          timelineRef={timelineRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 bg-black/20 backdrop-blur-lg p-4 rounded-lg"
        >
          <TimelineAnimation
            once={true}
            animationNum={9}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">Web Design</p>
            <p className="text-neutral-300 text-xs">Ecommerce Design</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={10}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">Social Media Marketing</p>
            <p className="text-neutral-300 text-xs">Email Marketing</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={11}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">
              Conversion Rate Optimization
            </p>
            <p className="text-neutral-300 text-xs">Paid Traffic & Ad</p>
          </TimelineAnimation>
          <TimelineAnimation
            once={true}
            animationNum={12}
            timelineRef={timelineRef}
          >
            <p className="text-white text-sm mb-1">User Generated Content</p>
            <p className="text-neutral-300 text-xs">and more</p>
          </TimelineAnimation>
        </TimelineAnimation>
      </div>
    </section>
  )
}
