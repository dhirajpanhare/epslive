"use client"

import { motion } from "framer-motion"

interface MetricData {
  label: string
  before: number
  after: number
  maxValue: number
}

const metrics: MetricData[] = [
  { label: "Support Costs", before: 100, after: 40, maxValue: 300 },
  { label: "Query Resolution", before: 35, after: 70, maxValue: 300 },
  { label: "HR Workload", before: 100, after: 55, maxValue: 300 },
  { label: "Conversion Rate", before: 100, after: 240, maxValue: 300 },
]

export default function SpeedComparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold lato-bold mb-4 bg-linear-to-r  from-blue-700 via-cyan-500 to-indigo-700 bg-clip-text text-transparent">
            Measurable Impact
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto second">
            See the real difference AI-powered solutions make across key business metrics
          </p>
        </motion.div>

        {/* Vertical Bar Chart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Legend */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-800 dark:bg-slate-200 rounded"></div>
              <span className="text-sm font-medium">Before AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-linear-to-r  from-blue-700 via-cyan-500 to-indigo-700 rounded"></div>
              <span className="text-sm font-medium">After AI</span>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {metrics.map((metric, idx) => (
              <motion.div key={metric.label} variants={itemVariants} className="flex flex-col items-center">
                {/* Chart Container */}
                <div className="w-full flex flex-col items-end justify-end gap-3 h-80 bg-slate-50 dark:bg-slate-900 rounded-xl p-4 md:p-6">
                  {/* Bars Container */}
                  <div className="flex items-end justify-center gap-4 h-full w-full">
                    {/* Before Bar */}
                    <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                      <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${(metric.before / metric.maxValue) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="w-full bg-slate-800 dark:bg-slate-600 rounded-t-lg flex items-end justify-center pb-2"
                      >
                        <span className="text-white text-xs md:text-sm font-bold">
                          {metric.before}
                        </span>
                      </motion.div>
                      <span className="text-xs text-muted-foreground font-medium">Before</span>
                    </div>

                    {/* After Bar */}
                    <div className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
                      <motion.div
                        initial={{ height: "0%" }}
                        whileInView={{ height: `${(metric.after / metric.maxValue) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="w-full bg-linear-to-r  from-blue-700 via-cyan-500 to-indigo-700 rounded-t-lg flex items-end justify-center pb-2"
                      >
                        <span className="text-white text-xs md:text-sm font-bold">
                          {metric.after}
                        </span>
                      </motion.div>
                      <span className="text-xs text-muted-foreground font-medium">After</span>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-center text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 mt-4 min-h-10">
                  {metric.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
