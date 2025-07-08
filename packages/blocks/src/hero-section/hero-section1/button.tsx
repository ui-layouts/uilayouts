'use client'
import {
  Play,
  Star,
  Users,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'motion/react'

export const Buttons: React.FC = () => {
  return (
    <motion.div 
    className="flex flex-col sm:flex-row gap-4 mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.9 }}
  >
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <button className="text-lg px-4 text-white flex items-center gap-2 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all group">
          Get Started Free
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="text-lg px-4 text-black flex items-center gap-2 py-2 border-2 hover:bg-gray-50 group">
          <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Watch Demo
        </button>
      </motion.div>
      <motion.div
        className="flex items-center gap-8 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
            ))}
          </div>
          <span className="font-semibold">4.9/5 rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          <span className="font-semibold">50k+ users</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
