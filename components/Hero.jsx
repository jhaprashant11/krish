'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-900 opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Krish</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Electronics & Communication Engineering Student at <span className="text-accent font-semibold">BIT Bangalore</span>
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about <span className="text-accent">AI</span> & <span className="text-accent">Gaming</span>
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
              className="px-8 py-4 bg-accent text-dark-900 font-bold rounded-lg flex items-center gap-2 justify-center hover:bg-blue-400 transition-all"
            >
              Get In Touch <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-accent transition-all"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-accent text-3xl">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero