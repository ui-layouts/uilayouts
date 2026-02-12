'use client'
import { TimelineAnimation } from '@/components/ui/timeline-animation'
import { useRef } from 'react'

function CreativeTestimonial() {
  const testimonialRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: 'blur(10px)',
      y: -20,
      opacity: 0,
    },
  }

  return (
    <>
      <section
        className="relative h-full container mx-auto rounded-lg py-14"
        ref={testimonialRef}
      >
        <article
          className={'max-w-(--breakpoint-md) mx-auto text-center space-y-2 '}
        >
          <TimelineAnimation
            as="h1"
            className={'xl:text-4xl text-3xl  font-medium'}
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Trusted by Startups and the worlds's largest companies
          </TimelineAnimation>
          <TimelineAnimation
            as="p"
            className={'mx-auto text-gray-500'}
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Let's hear how hypershpere client's feels about our service
          </TimelineAnimation>
        </article>
        <div className="lg:grid lg:grid-cols-3  gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2 ">
            <TimelineAnimation
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className=" lg:flex-7 flex-6 flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[50px_56px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <figure>
                <img
                  src={'https://pro-section.ui-layouts.com/logos/Logo-1.svg'}
                  alt="logo"
                  width={200}
                  height={200}
                />
              </figure>
              <article className="mt-auto">
                <p>
                  "Hypersphere has been a game-changer for us. Their service is
                  top-notch and their team is incredibly responsive."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-sm">
                      Guillermo Rauch
                    </h2>
                    <p className="">CEO of Enigma</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/am1.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-3 flex-4 lg:h-fit  lg:shrink-0 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <article className="mt-auto">
                <p>
                  "We've seen incredible results with Hypersphere. Their
                  expertise, dedication."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">Rika Shinoda</h2>
                    <p className="">CEO of Kintsugi</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/am3.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
          </div>
          <div className="lg:h-full  md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            <TimelineAnimation
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "Their team is highly professional, and their innovative
                  solutions have truly transformed the way we operate."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">
                      Reacher{' '}
                    </h2>
                    <p className="lg:text-base text-sm">CEO of OdeaoLabs</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/aam4.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "We're extremely satisfied with Hypersphere. Their expertise
                  and dedication have exceeded our expectations."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">John </h2>
                    <p className="lg:text-base text-sm">CEO of Labsbo</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/am2.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative bg-[#111111] text-white overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <article className="mt-auto">
                <p className="2xl:text-base text-sm">
                  "Their customer support is absolutely exceptional. They are
                  always available, incredibly helpful."
                </p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h2 className=" font-semibold lg:text-xl text-lg">
                      Steven Sunny
                    </h2>
                    <p className="lg:text-base text-sm">CEO of boxefi</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/aam3.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="lg:w-16 lg:h-16 w-12 h-12 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
          </div>
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            <TimelineAnimation
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className=" lg:flex-3 flex-4 flex flex-col justify-between relative bg-blue-600 text-white overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <article className="mt-auto">
                <p>
                  "Hypersphere has been a key partner in our growth journey."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">Guillermo Rauch</h2>
                    <p className="">CEO of OdeaoLabs</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/aam1.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
            <TimelineAnimation
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-7 flex-6 flex flex-col justify-between relative bg-primaryColor overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 p-5"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[50px_56px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <figure>
                <img
                  src={'https://pro-section.ui-layouts.com/logos/Logo-5.svg'}
                  alt="logo"
                  width={200}
                  height={200}
                />
              </figure>
              <article className="mt-auto">
                <p>
                  "Hypersphere has been a true game-changer for us. Their
                  exceptional service, combined with their deep expertise and
                  commitment to excellence, has made a significant impact on our
                  business."
                </p>
                <div className="flex justify-between pt-5">
                  <div>
                    <h2 className=" font-semibold text-xl">Paul Brauch</h2>
                    <p className="">CTO of Spectrum</p>
                  </div>
                  <img
                    src="https://pro-section.ui-layouts.com/people/in1.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineAnimation>
          </div>
        </div>

        <div className="absolute border-b-2 border-[#e6e6e6] dark:border-neutral-800 bottom-0 h-16 z-2 md:w-full w-[90%] md:left-0 left-[5%]">
          <div className="container mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 dark:before:bg-neutral-700 before:bg-white before:shadow-xs before:border dark:before:border-neutral-800 dark:after:border-neutral-800 before:border-gray-300 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white dark:after:bg-neutral-700 after:shadow-xs after:border after:border-gray-300 "></div>
        </div>
      </section>
    </>
  )
}

export default CreativeTestimonial
