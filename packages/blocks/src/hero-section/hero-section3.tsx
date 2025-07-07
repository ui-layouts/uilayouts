
"use client"
import { ArrowLeft, Play, Star, Users, Zap, ArrowRight, Sparkles, Rocket, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export const HeroSections3:React.FC = () => {
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
          {/* Enhanced Animated Headline Hero */}
          <motion.section 
            className="border rounded-2xl overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                Animated Headline Hero - Enhanced
              </h3>
            </div>
            <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white px-6 py-24 lg:py-40 relative overflow-hidden">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 gap-4 h-full">
                  {[...Array(48)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/20 rounded"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeInOut" 
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="max-w-5xl mx-auto text-center relative">
                <motion.h2 
                  className="text-6xl lg:text-8xl font-black mb-8 leading-tight"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  We help you{" "}
                  <motion.span 
                    className="relative inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Scale
                    </motion.span>
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-lg"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.span>
                </motion.h2>
                <motion.h3 
                  className="text-4xl lg:text-5xl font-bold text-gray-300 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  your business to <span className="text-yellow-400">new heights</span>
                </motion.h3>
                <motion.p 
                  className="text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  From startups to enterprise, our solutions adapt to your needs and grow with your ambitions.
                </motion.p>
                <motion.div 
                  className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  {[
                    { value: "99.9%", label: "Uptime", color: "text-green-400", icon: CheckCircle },
                    { value: "24/7", label: "Support", color: "text-blue-400", icon: Users },
                    { value: "1M+", label: "Users", color: "text-purple-400", icon: Star }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                      <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-gray-400 font-semibold">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
};
