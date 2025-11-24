import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, MapPin, Send } from "lucide-react"
import Navigation from "@/components/Navigation"

// NOTE: All previous Service, ServiceCarousel, and service array definitions 
// have been removed to implement the requested Contact/Map layout.

// Placeholder for a simple contact form (you would expand this)
const ContactForm = () => {
  return (
    <>
    <Navigation/>
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="I'm interested in..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 shadow-md"
        >
          <Send className="w-5 h-5" />
          Submit Inquiry
        </button>
      </form>
    </div>
 </>
  )
}

// Placeholder for Google Map (requires embedding or a library)
const GoogleMapEmbed = () => {
  // Replace the src with your actual Google Maps embed iframe or use a React Map library
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7029514757536!2d77.20894051443015!3d28.69460018236798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2c12b7a91d%3A0xf636a0c0e5a9c0e5!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin";
  
  return (
    <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pinned Location Map"
      ></iframe>
      <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md flex items-center gap-2">
        <MapPin className="w-5 h-5 text-red-500" />
        <span className="text-sm font-medium text-gray-800">Our Location Pinned</span>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      {/* Global CSS for gradient-blue class */}
      <style jsx global>{`
        .gradient-blue {
          background: linear-gradient(to right, #0A6EAA, #14508C);
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-blue-300/50 mb-6"
          >
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 lato-bold leading-tight">
            Ready to Start a Project? Contact Us.
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto second">
            Fill out the form to the left or find us on the map to the right. We look forward to hearing from you.
          </p>
        </div>

        {/* New Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* LEFT SECTION: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* RIGHT SECTION: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <GoogleMapEmbed />
          </motion.div>

        </div>
      </div>
    </section>
  )
}