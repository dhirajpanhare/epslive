"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Phone ,ArrowRight} from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission here
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Futuristic Background Element 1 (Subtle Glow) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
      {/* Futuristic Background Element 2 (Grid Effect) */}
      <div className="absolute inset-0 bg-futuristic-grid opacity-5 dark:opacity-10" />

      <Navigation />
      <div className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl  lato-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-indigo-700 bg-clip-text text-transparent">
                Connect with the Future
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 second">
                Let's discuss how our advanced solutions can drive your success.
              </p>
            </motion.div>

            {/* Contact Info Cards - Enforced Same Height */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch" /* items-stretch ensures grid items fill height */
            >
              <motion.div variants={itemVariants} className="h-full flex flex-col">
                <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-blue-400/50 hover:border-blue-600 transition-all shadow-lg flex-1">
                  <CardHeader className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <CardTitle className="text-gray-900 dark:text-white">Email Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold leading-snug">enprosys@epsinfotech.com</p>
                    <p className="text-sm text-gray-500 mt-1">Guaranteed response within 24 hours</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="h-full flex flex-col">
                <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-cyan-400/50 hover:border-cyan-600 transition-all shadow-lg flex-1">
                  <CardHeader className="text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-500" />
                    <CardTitle className="text-gray-900 dark:text-white">Direct Line</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold leading-snug">+91 9009733733</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm IST</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="h-full flex flex-col">
                <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-indigo-400/50 hover:border-indigo-600 transition-all shadow-lg flex-1">
                  <CardHeader className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-4 text-indigo-600" />
                    <CardTitle className="text-gray-900 dark:text-white">Global HQ</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {/* The address is the longest content, dictating the height */}
                    <p className="text-gray-700 dark:text-gray-300 leading-snug">Plot no. 17-A, Electronics Complex Pardeshipura, Indore, Madhya Pradesh, India 452003</p>
                    <p className="text-sm text-gray-500 mt-1">GSTN : 23AAHCE5600L1ZS</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-2xl border-t-4 border-t-indigo-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Initiate Contact</CardTitle>
                  <CardDescription className="dark:text-gray-400">Fill out the form below and let's begin the collaboration.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div>
                        <label className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">Name</label>
                        <Input
                          className="border-gray-300 focus-visible:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Your full name"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message as string}</span>}
                      </div>
                      {/* Email Input */}
                      <div>
                        <label className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">Email</label>
                        <Input
                          className="border-gray-300 focus-visible:ring-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          {...register("email", { required: "Email is required" })}
                          type="email"
                          placeholder="your.professional@email.com"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message as string}</span>}
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">Subject</label>
                      <Input
                        className="border-gray-300 focus-visible:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Inquiry Topic"
                      />
                      {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message as string}</span>}
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700 dark:text-gray-300">Message</label>
                      <Textarea
                        className="border-gray-300 focus-visible:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        {...register("message", { required: "Message is required" })}
                        placeholder="Detail your request or inquiry here..."
                        rows={5}
                      />
                      {errors.message && <span className="text-red-500 text-sm">{errors.message.message as string}</span>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg gradient-light nav-text font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      SEND TRANSMISSION <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}