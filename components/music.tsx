"use client"

import { motion } from "framer-motion"

export default function Music() {
  const tracks = [
    { title: "Digital Dreams", artist: "Synthwave Collective", duration: "3:45" },
    { title: "Neon Nights", artist: "Cyber Orchestra", duration: "4:12" },
    { title: "Future Bass", artist: "Electronic Minds", duration: "3:28" },
  ]

  return (
    <motion.div className="text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Music
      </motion.h2>
      <motion.div
        className="space-y-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {tracks.map((track, index) => (
          <motion.div
            key={track.title}
            className="flex items-center justify-between bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.02, x: 10 }}
          >
            <div>
              <h3 className="text-xl font-bold">{track.title}</h3>
              <p className="text-white/70">{track.artist}</p>
            </div>
            <div className="text-white/60">{track.duration}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
