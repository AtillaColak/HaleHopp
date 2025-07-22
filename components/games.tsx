"use client"

import { motion } from "framer-motion"

export default function Games() {
  const games = [
    { title: "Cosmic Adventure", description: "Explore the universe in this space odyssey" },
    { title: "Puzzle Master", description: "Challenge your mind with intricate puzzles" },
    { title: "Racing Thunder", description: "High-speed racing through neon cities" },
  ]

  return (
    <motion.div className="text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Games
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h3 className="text-2xl font-bold mb-4">{game.title}</h3>
            <p className="text-white/80">{game.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
