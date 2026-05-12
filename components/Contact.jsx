'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Instagram, Linkedin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'kumarkrish7691@gmail.com',
      link: 'mailto:kumarkrish7691@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 82338 70727',
      link: 'tel:+918233870727',
    },
    {
      icon: <Instagram size={24} />,
      title: 'Instagram',
      value: '@kkrishh.k',
      link: 'https://www.instagram.com/kkrishh.k?igsh=cm84azdwc3IwczV2',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-blue-400 rounded mb-12 mx-auto"></div>
        </motion.div>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me for collaborations or just a friendly hello!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-dark-800 p-8 rounded-lg border border-dark-700 hover:border-accent transition-all text-center group"
            >
              <div className="text-accent mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-300 break-all">{method.value}</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Connect <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
