"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, Suspense } from "react"
import ThreeScene from "@/components/ThreeScene"
import About from "@/components/about"
import FAQ from "@/components/faq"
import Games from "@/components/games"
import Music from "@/components/music"

// Loading component for 3D scene
function SceneLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-sm opacity-70">Loading city suburbs...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform values for horizontal sliding and vertical transitions
  const aboutX = useTransform(scrollYProgress, [0, 0.2], [100, 0])
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0])

  const gamesX = useTransform(scrollYProgress, [0.2, 0.4], [100, 0])
  const gamesOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0, 1, 0])

  const musicX = useTransform(scrollYProgress, [0.4, 0.6], [100, 0])
  const musicOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0, 1, 0])

  const faqX = useTransform(scrollYProgress, [0.6, 0.8], [100, 0])
  const faqOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 1, 0])

  // Background color transitions synchronized with camera movements
  const backgroundColorProgress = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(30, 58, 138, 0.2)", // Blue morning
      "rgba(59, 130, 246, 0.3)", // Bright blue day
      "rgba(147, 51, 234, 0.3)", // Purple evening
      "rgba(34, 197, 94, 0.3)", // Green night
      "rgba(239, 68, 68, 0.3)", // Red dawn
    ],
  )

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Progress Indicator Heights
  const progressHeights = [
    useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]),
    useTransform(scrollYProgress, [0.2, 0.4], ["0%", "100%"]),
    useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]),
    useTransform(scrollYProgress, [0.6, 0.8], ["0%", "100%"]),
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* 3D City Suburbs Scene - Fixed and Interactive */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<SceneLoader />}>
          <ThreeScene scrollProgress={scrollYProgress} />
        </Suspense>
      </div>

      {/* Dynamic Background Overlay */}
      <motion.div className="fixed inset-0 z-5" style={{ backgroundColor: backgroundColorProgress }} />

      {/* Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center p-8">
          <motion.div
            className="text-center backdrop-blur-sm bg-slate-900/20 rounded-2xl p-12 border border-slate-700/30 max-w-4xl"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              City Suburbs
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Take a cinematic journey through our digital neighborhood
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-4 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <span>🎥 Cinematic Camera</span>
              <span>•</span>
              <span>🏘️ Interactive 3D</span>
              <span>•</span>
              <span>📱 Scroll to Explore</span>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section - Residential Area */}
        <section className="h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            className="w-full max-w-6xl backdrop-blur-md bg-blue-900/20 rounded-3xl p-8 border border-blue-700/30"
            style={{
              x: aboutX,
              opacity: aboutOpacity,
            }}
            initial={{ x: 100 }}
          >
            <About />
          </motion.div>

          {/* Section Label */}
          <motion.div
            className="absolute top-8 left-8 text-blue-300 text-sm font-medium tracking-wider"
            style={{ opacity: aboutOpacity }}
          >
            01 / RESIDENTIAL DISTRICT
          </motion.div>

          {/* Camera Position Indicator */}
          <motion.div className="absolute bottom-8 right-8 text-blue-400/60 text-xs" style={{ opacity: aboutOpacity }}>
            📹 Camera: West View • 🏘️ Suburban Homes
          </motion.div>
        </section>

        {/* Games Section - Entertainment Zone */}
        <section className="h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            className="w-full max-w-6xl backdrop-blur-md bg-purple-900/20 rounded-3xl p-8 border border-purple-700/30"
            style={{
              x: gamesX,
              opacity: gamesOpacity,
            }}
            initial={{ x: 100 }}
          >
            <Games />
          </motion.div>

          {/* Section Label */}
          <motion.div
            className="absolute top-8 left-8 text-purple-300 text-sm font-medium tracking-wider"
            style={{ opacity: gamesOpacity }}
          >
            02 / ENTERTAINMENT ZONE
          </motion.div>

          {/* Camera Position Indicator */}
          <motion.div
            className="absolute bottom-8 right-8 text-purple-400/60 text-xs"
            style={{ opacity: gamesOpacity }}
          >
            📹 Camera: East View • 🎮 Recreation Area
          </motion.div>
        </section>

        {/* Music Section - Cultural District */}
        <section className="h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            className="w-full max-w-6xl backdrop-blur-md bg-green-900/20 rounded-3xl p-8 border border-green-700/30"
            style={{
              x: musicX,
              opacity: musicOpacity,
            }}
            initial={{ x: 100 }}
          >
            <Music />
          </motion.div>

          {/* Section Label */}
          <motion.div
            className="absolute top-8 left-8 text-green-300 text-sm font-medium tracking-wider"
            style={{ opacity: musicOpacity }}
          >
            03 / CULTURAL DISTRICT
          </motion.div>

          {/* Camera Position Indicator */}
          <motion.div className="absolute bottom-8 right-8 text-green-400/60 text-xs" style={{ opacity: musicOpacity }}>
            📹 Camera: Aerial View • 🎵 Community Center
          </motion.div>
        </section>

        {/* FAQ Section - Information Hub */}
        <section className="h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            className="w-full max-w-6xl backdrop-blur-md bg-red-900/20 rounded-3xl p-8 border border-red-700/30"
            style={{
              x: faqX,
              opacity: faqOpacity,
            }}
            initial={{ x: 100 }}
          >
            <FAQ />
          </motion.div>

          {/* Section Label */}
          <motion.div
            className="absolute top-8 left-8 text-red-300 text-sm font-medium tracking-wider"
            style={{ opacity: faqOpacity }}
          >
            04 / INFORMATION HUB
          </motion.div>

          {/* Camera Position Indicator */}
          <motion.div className="absolute bottom-8 right-8 text-red-400/60 text-xs" style={{ opacity: faqOpacity }}>
            📹 Camera: Close-up • 📋 Service Center
          </motion.div>
        </section>

        {/* Final Section - City Overview */}
        <section className="h-screen flex items-center justify-center p-8">
          <motion.div
            className="text-center backdrop-blur-sm bg-slate-900/20 rounded-2xl p-12 border border-slate-700/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Journey Complete</h2>
            <p className="text-xl text-slate-300 mb-8">Ready to make this neighborhood your home?</p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full border border-white/20 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
            </motion.button>
          </motion.div>
        </section>
      </main>

      {/* Cinematic Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4 bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
          <div className="text-xs text-slate-300 mb-2 text-center font-medium">🎬 Scene Progress</div>
          {["Residential", "Entertainment", "Cultural", "Information"].map((scene, index) => (
            <div key={scene} className="flex items-center space-x-3">
              <motion.div className="w-2 h-8 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-gradient-to-t from-blue-500 via-purple-500 via-green-500 to-red-500 rounded-full"
                  style={{
                    height: progressHeights[index],
                  }}
                />
              </motion.div>
              <span className="text-xs text-slate-400 w-20">{scene}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Camera Control Indicator */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4 bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
          <div className="text-xs text-slate-300 mb-2 text-center font-medium">📹 Camera Shots</div>
          {[
            { name: "Establishing", color: "bg-slate-400", icon: "🏙️", desc: "Wide" },
            { name: "Residential", color: "bg-blue-400", icon: "🏘️", desc: "West" },
            { name: "Recreation", color: "bg-purple-400", icon: "🎮", desc: "East" },
            { name: "Cultural", color: "bg-green-400", icon: "🎵", desc: "Aerial" },
            { name: "Service", color: "bg-red-400", icon: "📋", desc: "Close" },
          ].map((shot, index) => (
            <motion.div
              key={shot.name}
              className="flex items-center space-x-2 cursor-pointer hover:bg-slate-800/30 rounded p-2 transition-colors"
              animate={{
                opacity: scrollYProgress.get() >= index * 0.2 && scrollYProgress.get() < (index + 1) * 0.2 ? 1 : 0.4,
                scale: scrollYProgress.get() >= index * 0.2 && scrollYProgress.get() < (index + 1) * 0.2 ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-3 h-3 rounded-full ${shot.color}`} />
              <span className="text-xs text-slate-300">{shot.icon}</span>
              <div className="flex flex-col">
                <span className="text-xs text-slate-300 font-medium">{shot.name}</span>
                <span className="text-xs text-slate-500">{shot.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-red-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
