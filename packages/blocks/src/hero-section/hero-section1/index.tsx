
"use client"
import { ArrowLeft, Play, Star, Users, Zap, ArrowRight, Sparkles, Rocket, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { Buttons } from "./button";

export const HeroSections1:React.FC = () => {
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
    <div className="min-h-screen">
      {/* Enhanced Navigation */}
      <div className="px-6 py-8">
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Split Layout Hero */}
          <motion.section 
            className="border rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
            // @ts-ignore
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-600" />
                Split Layout Hero - Enhanced
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
                <motion.div 
                  className="max-w-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.h2 
                    className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Amazing</span> Products Faster
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Streamline your development process with our powerful tools and intuitive interface. 
                    Get from idea to launch in record time with AI-powered assistance.
                  </motion.p>
                  <Buttons/>
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
              </div>
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-12 relative overflow-hidden">
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
                  // @ts-ignore
                  variants={floatingVariants}
                  animate="animate"
                />
                <motion.div 
                  className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full"
                  // @ts-ignore
                  animate="animate"
                  transition={{ delay: 1 }}
                />
                <motion.div 
                  className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="text-center text-white">
                    <motion.div 
                      className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Zap className="w-16 h-16" />
                    </motion.div>
                    <p className="text-xl font-bold mb-2">AI-Powered</p>
                    <p className="text-white/80">Next-Gen Development</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </div>
  );
};
