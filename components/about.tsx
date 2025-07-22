"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.div className="text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-8 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        About Us
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            We create immersive digital experiences that blend cutting-edge technology with creative storytelling. Our
            passion lies in pushing the boundaries of what`s possible in interactive media.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            From 3D visualizations to interactive games and music experiences, we craft memorable journeys that engage
            and inspire.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
