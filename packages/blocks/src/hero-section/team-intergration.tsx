'use client'
import { motion } from 'motion/react'
import {
  MessageSquare,
  Zap,
  Users,
  Database,
  Cloud,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
  Rocket,
  ChevronRight,
  Play,
} from 'lucide-react'
import { useState } from 'react'
const floatingIcons = [
  { icon: MessageSquare, x: 10, y: 20, delay: 0, color: 'text-blue-400' },
  { icon: Zap, x: 85, y: 15, delay: 0.5, color: 'text-yellow-400' },
  { icon: Users, x: 15, y: 70, delay: 1, color: 'text-purple-400' },
  { icon: Database, x: 80, y: 75, delay: 1.5, color: 'text-green-400' },
  { icon: Cloud, x: 90, y: 40, delay: 2, color: 'text-cyan-400' },
  { icon: Globe, x: 5, y: 45, delay: 2.5, color: 'text-orange-400' },
  { icon: Shield, x: 75, y: 25, delay: 3, color: 'text-red-400' },
  { icon: Rocket, x: 25, y: 85, delay: 3.5, color: 'text-pink-400' },
]
const profiles = [
  {
    href: 'https://github.com/yeabnoah',
    alt: 'Yeabsra',
    src: '/Yeabsra.jpeg',
    translateX: 'translate-x-0',
  },
  {
    href: 'https://github.com/naymurdev',
    alt: 'Naymur',
    src: '/naymur.png',
    translateX: '-translate-x-16',
  },
  {
    href: 'https://github.com/slydeveloper',
    alt: 'Sokolowski',
    src: '/Sokolowski.jpeg',
    translateX: '-translate-x-4',
  },

  {
    href: 'https://github.com/mmNalaka',
    alt: 'Nalaka',
    src: '/nalaka.png',
    translateX: '-translate-x-8',
  },
  {
    href: 'https://github.com/rafaelzomer',
    alt: 'Rafael',
    src: '/Rafael.jpeg',
    translateX: '-translate-x-12',
  },
]
export const TeamIntegration = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%)',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* floating  */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* float  */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={index}
              className={`absolute ${item.color} opacity-20`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                y: [0, -10, 0],
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                delay: item.delay,
              }}
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>
          )
        })}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-20 relative z-10">
        {/*  Badge */}
        <motion.div
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3 mb-8 overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            className="w-3 h-3 bg-emerald-400 rounded-full relative"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(16, 185, 129, 0.7)',
                '0 0 0 10px rgba(16, 185, 129, 0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-gray-300 text-sm font-medium relative z-10">
            All in One Team Integration
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>

        {/*  title */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl text-center font-semibold bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-[90%] tracking-tighter mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span className="inline-block">Unite every tool,</motion.span>
          <br />
          <motion.span className="inline-block">
            every team, everywhere.
          </motion.span>
        </motion.h1>

        {/* Sparkle Effect */}
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
        </motion.div>

        {/*  description */}
        <motion.div
          className="text-center mb-8 mt-8 max-w-4xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed">
            Seamlessly
            <motion.span
              className="inline-flex items-center gap-2 mx-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">📊</span>
              <span className="text-orange-400 font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                manage projects
              </span>
            </motion.span>
            ,
            <motion.span
              className="inline-flex items-center gap-2 mx-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">🔄</span>
              <span className="text-purple-400 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                automate tasks
              </span>
            </motion.span>
            , and
            <motion.span
              className="inline-flex items-center gap-2 mx-2"
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl">💬</span>
              <span className="text-pink-400 font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                collaborate in real-time
              </span>
            </motion.span>
          </p>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            across all apps and devices—all in one platform
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <div className="flex w-fit mx-auto sm:items-center justify-center mt-6 mb-4 lg:pb-0 pb-10 sm:translate-x-8">
          <div className="flex w-fit sm:translate-x-0 translate-x-8">
            {profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.href}
                target="_block"
                className={`dark:bg-neutral-800 bg-neutral-50 p-1 flex-shrink-0 rounded-full relative z-[1] hover:z-[2] ${profile.translateX}`}
              >
                <img
                  src={profile.src}
                  alt={profile.alt}
                  width={300}
                  height={300}
                  className="2xl:w-12 2xl:h-12 xl:w-10 w-8 h-8 xl:h-10 object-cover rounded-full"
                />
              </a>
            ))}
          </div>
          <div className="sm:-translate-x-12  sm:pt-0 pt-2">
            <div className="flex 2xl:gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-amber-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-amber-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-amber-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-amber-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-amber-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="sm:text-sm text-xs font-medium">
              Trusted by 1000+ users
            </div>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="group relative bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-white px-8 py-4 rounded-xl font-semibold border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
