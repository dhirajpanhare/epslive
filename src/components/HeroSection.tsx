"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import ProposalModal from "./ProposalModal"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Dynamic Geometric Background - Inspired by Reference */}
      <div className="absolute inset-0 z-0">
        {/* Large White Overlay for Left Side */}
        <div className="absolute top-0 left-0 w-3/5 h-full bg-gradient-to-r from-white to-white/90 transform -skew-x-12 origin-top-left -ml-20" />
        <div className="absolute top-0 left-0 w-3/5 h-full bg-white opacity-90" />

        {/* Dynamic Blue Squares - Animated */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-sm shadow-md"
            style={{
              width: `${Math.random() * 30 + 10}px`, // 10-40px
              height: `${Math.random() * 30 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0, // Start invisible
              rotate: Math.random() * 360,
              backgroundColor: `hsl(210, ${Math.random() * 40 + 60}%, ${Math.random() * 30 + 50}%)`, // Varied blues
            }}
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100], // Subtle horizontal drift
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100], // Subtle vertical drift
              rotate: [0, Math.random() * 360],
              opacity: [0, 0.7, 0.7, 0], // Fade in, stay, fade out
              scale: [0.5, 1, 1, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 5, // Random duration 5-15s
              repeat: Infinity,
              delay: Math.random() * 5, // Staggered start
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Static White/Light Blue Squares with borders - More subtle */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`static-${i}`}
            className="absolute rounded-sm"
            style={{
              width: `${Math.random() * 40 + 20}px`, // 20-60px
              height: `${Math.random() * 40 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`, // Semi-transparent white
              border: `1px solid rgba(150, 200, 255, ${Math.random() * 0.4 + 0.2})`, // Light blue border
              rotate: Math.random() * 360,
              zIndex: -1, // Ensure it's behind the content
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.8, 0], rotate: [0, Math.random() * 15 - 7.5, 0] }} // Subtle fade and slight wiggle
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6"> 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-4 border border-blue-300/50">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-widest">AI-POWERED EFFICIENCY</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r lato-bold from-blue-700 via-cyan-500 to-indigo-700 bg-clip-text text-transparent">
     Ready to Transform Your Business with Smart AI Technology?
            </span>
            {/* <br className="hidden sm:block" />
            at Light Speed. */}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed second" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          We solve your business challenges with powerful AI and rapid software solutions
          </motion.p>

          <motion.div
            className="flex justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="gradient-light nav-text font-bold text-white text-lg px-8 py-6 shadow-md hover:shadow-lg"
                onClick={() => setIsModalOpen(true)}
              >
                Start Building Your Own AI Agent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Trusted by leading innovators globally.
          </motion.div>
        </div>
      </div>

      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}