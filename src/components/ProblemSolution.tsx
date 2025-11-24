"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ProblemSolution() {
  const problems = [
    "Development takes months, not weeks",
    "Engineering costs drain your runway",
    "Finding and managing talent is a nightmare",
    "Technical debt compounds daily",
    "Scaling teams is expensive and slow",
  ]

  const solutions = [
    "Ship production-ready code in days",
    "Reduce development costs by 80%",
    "AI agents that never sleep or quit",
    "Clean, maintainable code from day one",
    "Instant scaling with zero hiring friction",
  ]

  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 lato-bold leading-tight ">
            The Operational Gap is
            <br />
            <span className="bg-gradient-to-r from-black to-gray-800bg-gradient-to-r from-black to-gray-800   bg-clip-text text-transparent lato-bold ">
              {" "}Killing You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto second">
            Traditional development is too slow and expensive for modern startups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 mb-4">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Traditional Development</span>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 nav-text rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-foreground/90">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-semibold">With EmproSys</span>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 nav-text rounded-xl border border-green-200 dark:border-green-900/30 bg-green-50/50 dark:bg-green-950/10"
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-green-600 dark:text-green-400 shrink-0" />
                  <p className="text-foreground/90">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
