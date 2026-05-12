'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-2">
            Designed & Built with <span className="text-accent">❤️</span> by Krish Kumar Kumawat
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved. | Made with Next.js & Tailwind CSS
          </p>
        </motion.div>

        <div className="mt-6 flex justify-center gap-6 text-gray-400">
          <motion.a
            href="#home"
            whileHover={{ color: '#00d4ff', y: -2 }}
            className="transition-colors"
          >
            Back to Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  )
}

export default Footer