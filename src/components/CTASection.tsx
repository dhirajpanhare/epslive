"use-client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0A6EAA] via-[#0A64A0] to-[#14508C]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Ready to Ship 10x Faster?
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join 500+ companies already building the future with AI-powered development. 
            Start your free trial today - no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 shadow-2xl"
            >
              Start Building Your Ai Agent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10x</div>
              <div className="text-sm text-white/80">Faster Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">80%</div>
              <div className="text-sm text-white/80">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-white/80">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
