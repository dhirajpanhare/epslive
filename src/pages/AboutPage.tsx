import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FAQSection from "@/components/FAQSection"
import { motion } from "framer-motion"
import { Database, Cpu, Code, Bot } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About EnProSys</h1>
              <div className="max-w-3xl space-y-6 text-lg text-muted-foreground">
                <p>
                  EnProSys Infotech, headquartered in Indore (M.P.), India, was established in 2008 by
                  Mr. Vivek Deshpande who carries deep insights and long career in IT industry since 1986.
                </p>
                <p>
                  EnProSys Infotech is a dynamic software development and IT consulting firm, specializing in
                  enterprise-grade digital solutions that combine modern technology stacks with artificial
                  intelligence capabilities driven by a talented and experienced team that has created a global
                  footprint in countries like the USA, UK, China, and more.
                </p>
                {/* <p>
                  The company offers expertise in software development, cloud deployment, web portals,
                  mobile applications, and AI. It has successfully served diverse sectors, including
                  Government, Automobile, Telecom, Pharma, Jewellery, Banking, and Education.
                </p> */}
                <div>
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Our Values</h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Speed - Rapid development without compromising quality</li>
                    <li>Accessibility - Making advanced tools available to all developers</li>
                    <li>Quality - Ensuring production-ready code every time</li>
                    <li>Innovation - Pushing the boundaries of what's possible with AI</li>
                    <li>Community - Building a vibrant ecosystem of developers</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Section - Brand Card with Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center align-top"
            >
              <div className="relative w-full h-full min-h-96">
                {/* Glassy background blur effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#0A6EAA]/20 to-[#14508C]/20 rounded-3xl blur-3xl" />

                {/* Main glassy card */}
                <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-center items-center overflow-hidden group">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#0A6EAA]/10 via-transparent to-[#14508C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Decorative blurred circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0082BE]/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0A6EAA]/20 rounded-full blur-3xl" />

                  {/* Content */}
                  <div className="relative z-10 space-y-8 text-center">
                    {/* Icons Grid */}
                    <div className="grid grid-cols-2 gap-6 justify-items-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#0082BE]/50 transition-all"
                      >
                        <Database className="w-10 h-10 text-[#0082BE]" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#0A6EAA]/50 transition-all"
                      >
                        <Cpu className="w-10 h-10 text-[#0A6EAA]" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#0082BE]/50 transition-all"
                      >
                        <Code className="w-10 h-10 text-[#0082BE]" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-[#0A6EAA]/50 transition-all"
                      >
                        <Bot className="w-10 h-10 text-[#0A6EAA]" />
                      </motion.div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2 py-4">
                      <h3 className="text-4xl md:text-5xl font-bold text-white">EnProSys</h3>
                      <p className="text-2xl font-semibold bg-linear-to-r from-[#0082BE] to-[#0A6EAA] bg-clip-text text-transparent">
                        Infotech
                      </p>
                    </div>

                    {/* Tagline */}
                    <div className="space-y-3">
                      <p className="text-sm text-white/80 tracking-widest uppercase font-medium">
                        Innovation Meets Excellence
                      </p>
                      <div className="flex justify-center gap-2">
                        <div className="w-8 h-1 bg-linear-to-r from-[#0082BE] to-[#0A6EAA] rounded-full" />
                        <div className="w-8 h-1 bg-linear-to-r from-[#0A6EAA] to-[#14508C] rounded-full" />
                      </div>
                    </div>

                    {/* Established info */}
                    <div className="pt-4 space-y-1 border-t border-white/10">
                      <p className="text-xs text-white/70 font-medium">Established 2008</p>
                      <p className="text-xs text-[#0082BE]/80 font-medium">Indore, India</p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </div>
  )
}
