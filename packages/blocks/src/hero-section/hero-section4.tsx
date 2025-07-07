
"use client"
import { ArrowLeft, Play, Star, Users, Zap, ArrowRight, Sparkles, Rocket, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export const HeroSections4:React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl font-bold mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500" />
            Hero Sections
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eye-catching hero sections designed to captivate and convert your visitors with stunning animations
          </p>
        </motion.div>

        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Gradient Glassmorphism Hero */}
          <motion.section 
            className="border rounded-2xl overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-indigo-50 to-pink-50 px-6 py-4 border-b">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Gradient Glassmorphism Hero - Enhanced
              </h3>
            </div>
            <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden min-h-[700px]">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute top-40 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"
                  animate={{ 
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1.2, 1, 1.2]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <motion.div 
                  className="absolute -bottom-32 left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
                  animate={{ 
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                />
              </div>
              
              <div className="relative px-6 py-24 lg:py-40">
                <div className="max-w-5xl mx-auto text-center text-white">
                  <motion.div 
                    className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    whileHover={{ scale: 1.02, rotateX: 2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.h2 
                      className="text-5xl lg:text-7xl font-black mb-8 relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      The Future of <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Design</span> is Here
                    </motion.h2>
                    <motion.p 
                      className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      Experience next-generation interfaces with cutting-edge glassmorphism effects 
                      and modern gradient aesthetics that captivate and convert.
                    </motion.p>
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-6 justify-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      <button className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all group font-bold">
                        Explore Now
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 backdrop-blur-sm transition-all group font-bold">
                        Learn More
                        <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};
