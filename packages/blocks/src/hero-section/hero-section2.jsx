"use client";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
export const HeroSections2 = () => {
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
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl font-bold mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500"/>
            Hero Sections
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eye-catching hero sections designed to captivate and convert your visitors with stunning animations
          </p>
        </motion.div>

        <motion.div className="space-y-20" variants={containerVariants} initial="hidden" animate="visible">
          {/* Enhanced Image + Text Hero */}
          <motion.section className="border rounded-2xl overflow-hidden shadow-2xl" variants={itemVariants} whileHover={{ scale: 1.01 }}>
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600"/>
                Image + Text Hero - Enhanced
              </h3>
            </div>
            <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0">
                <motion.div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full" animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
        }} transition={{ duration: 4, repeat: Infinity }}/>
                <motion.div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full" animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
        }} transition={{ duration: 4, repeat: Infinity, delay: 2 }}/>
              </div>
              <div className="relative px-6 py-24 lg:py-40">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    Transform Your Business <span className="text-yellow-300">Today</span>
                  </motion.h2>
                  <motion.p className="text-2xl lg:text-3xl text-emerald-100 mb-16 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                    Join thousands of companies using our platform to accelerate growth 
                    and streamline operations with cutting-edge technology.
                  </motion.p>
                  <motion.div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
                    <button className="text-lg px-10 py-4 bg-white text-emerald-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all group font-bold">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                    </button>
                    <button className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-600 shadow-lg transition-all group font-bold">
                      Request Demo
                      <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"/>
                    </button>
                  </motion.div>
                  <motion.div className="flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.9 }}>
                    <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 inline-flex items-center gap-6 border border-white/20">
                      <span className="text-emerald-100 font-semibold">Trusted by:</span>
                      <div className="flex gap-8 text-white font-bold text-lg">
                        <span className="hover:text-yellow-300 transition-colors cursor-pointer">Google</span>
                        <span className="hover:text-yellow-300 transition-colors cursor-pointer">Microsoft</span>
                        <span className="hover:text-yellow-300 transition-colors cursor-pointer">Apple</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>


        </motion.div>
      </div>
    </div>);
};
