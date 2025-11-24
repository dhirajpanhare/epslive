"use client"

import { motion } from "framer-motion"
import { MessageSquare, Brain, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Vision",
    description: "Tell us what you want to build. Be as detailed or high-level as you'd like - our AI understands both.",
    step: "01"
  },
  {
    icon: Brain,
    title: "AI Planning",
    description: "Our agents analyze requirements, design architecture, and create a comprehensive development plan.",
    step: "02"
  },
  {
    icon: Code2,
    title: "Automated Development",
    description: "Watch as specialized AI agents collaborate to write code, create databases, and build features in real-time.",
    step: "03"
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Your application is tested, deployed, and ready to scale. Continuous updates and improvements included.",
    step: "04"
  }
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto second">
            From idea to production in four simple steps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-16 last:mb-0"
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                    <div className={`inline-block mb-4 text-6xl font-bold text-primary/20`}>
                      {step.step}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center border-4 border-primary/20">
                      <div className="w-24 h-24 rounded-full gradient-light flex items-center justify-center">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 top-full w-1 h-16 bg-gradient-to-b from-primary/40 to-transparent -ml-0.5" />
                    )}
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
