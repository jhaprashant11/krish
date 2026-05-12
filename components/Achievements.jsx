'use client'

import { motion } from 'framer-motion'
import { Trophy, Award } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-accent" size={32} />,
      title: '1st Position in Game Development',
      subtitle: 'BIT Bangalore',
      description: 'Won 1st position in the Game Development competition at Bangalore Institute of Technology',
      certificate: true,
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded mb-12"></div>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ x: 20 }}
              className="bg-dark-900 p-8 rounded-lg border-l-4 border-accent hover:border-blue-400 transition-all cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{achievement.subtitle}</p>
                  <p className="text-gray-300 mb-4">{achievement.description}</p>
                  {achievement.certificate && (
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Award size={16} /> Certificate received
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
