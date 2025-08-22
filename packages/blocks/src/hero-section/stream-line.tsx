'use client'
import { Star, Users, ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'motion/react'
import { Banner } from '@/components/website/ui/banner'
import {Marquee} from '@/components/ui/marquee'
import { CpuArchitecture, ProgressiveBlur } from '@repo/ui'

export const StreamLineHero: React.FC = () => {
  const reviews = [
    {
      name: 'Jack',
      color: 'bg-blue-600',
      src: '/doordash.png',
    },
    {
      name: 'Jill',
      color: 'bg-orange-600',
      src: '/eventbrite.png',
    },
    {
      name: 'John',
      color: 'bg-green-600',
      src: '/smeg.png',
    },
    {
      name: 'Jane',
      color: 'bg-red-600',
      src: '/surveymonkey.png',
    },
    {
      name: 'Jenny',
      color: 'bg-yellow-600',
      src: '/netflix.png',
    },
    {
      name: 'James',
      color: 'bg-purple-600',
      src: '/zapier.png',
    },
  ]
  return (
    <section className="relative">
      <a
        href={'https://pro.ui-layouts.com'}
        target="_blank"
        className="block group w-full relative"
      >
        <Banner
          variant="rainbow"
          className="h-11 md:text-base sm:text-sm text-xs z-10"
        >
          <p className="group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center">
            <picture>
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                alt="🚀"
                className="w-6 h-6"
                width="32"
                height="32"
              />
            </picture>
            Ship faster with{' '}
            <span className="font-semibold">UI-Layouts Pro</span>
            <span className="md:inline-block hidden">
              – 50+ Tailwind & React components for production-ready UIs
            </span>
          </p>
          <ArrowUpRight
            className="size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0"
            strokeWidth={2}
          />
        </Banner>
      </a>
      <div className="flex py-40 h-full justify-start items-center relative overflow-hidden">
        <div className="flex items-center justify-start px-16 ">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h2
              className="text-6xl 2xl:text-7xl font-normal dark:text-gray-100 text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Build{' '}
              <span className="font-semibold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                Amazing
              </span>{' '}
              Products Faster
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Streamline your development process with our powerful tools and
              intuitive interface. Get from idea to launch in record time with
              AI-powered assistance.
            </motion.p>
            {/* <Buttons /> */}
            <motion.div
              className="flex gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button className="text-lg h-12 px-4 rounded-lg text-white flex items-center gap-2 bg-blue-600 transition-all group">
                Get Started
              </button>
              <button className="text-lg h-12 px-4 dark:text-white text-black flex items-center gap-0 rounded-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </motion.div>
            <motion.div
              className="flex items-center gap-8 text-sm dark:text-gray-300 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>50k+ users</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute top-0 2xl:-right-20 -right-72 overflow-hidden -skew-x-12 h-[44rem] [mask-image:radial-gradient(ellipse_80%_50%_at_100%_50%,#000_70%,transparent_110%)]">
          <CpuArchitecture text="UI-Layouts" />
          <div className="absolute bottom-0 left-0 right-0 -z-10 top-0 dark:bg-[repeating-linear-gradient(135deg,#131313_0px_1px,transparent_1px_16px)] bg-[repeating-linear-gradient(135deg,#d6d6d6_0px_1px,transparent_1px_16px)]"></div>
        </div>
      </div>
      <div className="py-5 relative px-4">
        <Marquee className="[--duration:20s]">
          {reviews.map((review) => (
            <div className="flex px-8 items-center">
              <img
                src={review.src}
                alt="booking"
                width="400"
                height="400"
                className="md:w-36 w-20"
              />
            </div>
          ))}
        </Marquee>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  )
}
