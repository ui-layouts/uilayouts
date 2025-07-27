"use client"

import { motion } from "motion/react"
import { ChevronRight, Play } from "lucide-react"
import { useState } from "react"

export const Buttons = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
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
            transition={{ type: "spring", stiffness: 300 }}
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
  )
}

export default Buttons