"use client"

import { motion } from "motion/react"
import {
  Apple,
  MessageSquare,
  Zap,
  Users,
  Smartphone,
  Monitor,
  Layers,
  GitBranch,
  Database,
  Cloud,
  ArrowRight,
  Play,
  Grid3X3,
  Workflow,
} from "lucide-react"

const HeroSection = () => {
  const connections = [
    { from: { x: 20, y: 35 }, to: { x: 50, y: 50 } },
    { from: { x: 35, y: 25 }, to: { x: 50, y: 50 } },
    { from: { x: 80, y: 35 }, to: { x: 50, y: 50 } },
    { from: { x: 65, y: 25 }, to: { x: 50, y: 50 } },
    { from: { x: 20, y: 65 }, to: { x: 50, y: 50 } },
    { from: { x: 80, y: 65 }, to: { x: 50, y: 50 } },
    { from: { x: 35, y: 75 }, to: { x: 50, y: 50 } },
    { from: { x: 65, y: 75 }, to: { x: 50, y: 50 } },
  ]

  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 100%", "100% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-20 relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
          <span className="text-gray-300 text-sm">All in One Team Integration</span>
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </motion.div>



        <motion.h1
          className="text-6xl text-center font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unite every tool,
          <br />
          every team, everywhere.
        </motion.h1>

                 


        {/* description */}
        <motion.div
          className="text-center mb-13 mt-8  max-w-4xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl text-gray-300 mb-2">
            Seamlessly 
            <span className="inline-flex items-center gap-1">
              <span className="text-orange-400">📊</span>
              <span className="text-orange-400 font-medium">manage projects</span>
            </span>
            , 
            <span className="inline-flex items-center gap-1">
              <span className="text-purple-400">🔄</span>
              <span className="text-purple-400 font-medium">automate tasks</span>
            </span>
            , and
            <span className="inline-flex items-center gap-1">
              <span className="text-pink-400">💬</span>
              <span className="text-pink-400 font-medium">collaborate in real-time</span>
            </span>
          </p>
          <p className="text-xl text-gray-300">
            across all apps and devices—all in one platform
          </p>
        </motion.div>

        {/* Icons  */}
        <div className="relative w-full max-w-4xl h-80 mb-16">
          {/*  Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((connection, index) => (
              <motion.line
                key={index}
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke="#10b981"
                strokeWidth="2"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/*  Icon  */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="absolute top-[25%] left-[20%] transform -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Apple className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[15%] left-[35%] transform -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Zap className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[15%] right-[35%] transform translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Grid3X3 className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[25%] right-[20%] transform translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            {/* bottom  */}
            <motion.div
              className="absolute bottom-[25%] left-[20%] transform -translate-x-1/2 translate-y-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] left-[35%] transform -translate-x-1/2 translate-y-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 2.5 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] right-[35%] transform translate-x-1/2 translate-y-1/2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.3, repeat: Infinity, delay: 3 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Database className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[25%] right-[20%] transform translate-x-1/2 translate-y-1/2"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 3.5 }}
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center">
                <Workflow className="w-6 h-6 text-gray-400" />
              </div>
            </motion.div>

            {/* Center Icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <Layers className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/*  buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
         <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 transition-colors">
            Learn More
          </button>
             
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection