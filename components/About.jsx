'use client'

import { motion } from 'framer-motion'
import { Code2, Gamepad2, BookOpen, MapPin } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Krish Kumar Kumawat</h3>
              <p className="text-accent font-semibold flex items-center gap-2">
                <MapPin size={18} /> Bangalore, India
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
              <p className="text-gray-300"><span className="font-semibold">Bangalore Institute of Technology</span></p>
              <p className="text-gray-400">Electronics and Communication Engineering</p>
              <p className="text-gray-400 text-sm">1st Year | 2nd Semester</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Gamepad2 className="text-accent" size={20} /> Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Gaming', 'Game Development'].map((interest) => (
                  <span key={interest} className="px-4 py-2 bg-dark-700 text-accent rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Hobbies */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <BookOpen className="text-accent" size={20} /> Hobbies & Interests
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Playing Kabaddi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Chess
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Gaming
                </li>
              </ul>
            </div>

            <div className="bg-dark-700 p-6 rounded-lg border border-dark-600">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="text-accent" size={20} /> Core Competencies
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> C Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Communication Skills
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">→</span> Problem Solving
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
