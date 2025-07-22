"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What technologies do you use?",
      answer:
        "We use cutting-edge technologies including React, Three.js, WebGL, and modern web standards to create immersive experiences.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply reach out to us through our contact form, and we'll discuss your project requirements and vision.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we specialize in creating custom interactive experiences tailored to your specific needs and brand.",
    },
  ]

  return (
    <motion.div className="text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        FAQ
      </motion.h2>
      <motion.div
        className="space-y-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
          >
            <motion.button
              className="w-full p-6 text-left hover:bg-white/10 transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <h3 className="text-xl font-bold">{faq.question}</h3>
            </motion.button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-white/80">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
