"use client"

import { motion } from "framer-motion"

export default function InvestorLogos() {
  const backedBy = [
    { name: "Y Combinator", logo: "YC" },
    { name: "Sequoia", logo: "SQ" },
    { name: "a16z", logo: "A16Z" },
  ]

  const supportedBy = [
    { name: "Microsoft", logo: "MS" },
    { name: "Google", logo: "GG" },
    { name: "AWS", logo: "AWS" },
    { name: "OpenAI", logo: "AI" },
    { name: "Anthropic", logo: "AN" },
  ]

  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6">
        {/* Backed By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-sm font-semibold text-center text-muted-foreground mb-8 uppercase tracking-wider">
            Backed By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {backedBy.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center w-32 h-20 glass rounded-xl hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl font-bold text-primary">{investor.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supported By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-center text-muted-foreground mb-8 uppercase tracking-wider">
            Supported By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {supportedBy.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center w-24 h-16 opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="text-lg font-semibold text-foreground">{company.logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
