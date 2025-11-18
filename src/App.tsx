import { useEffect } from 'react'
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import InvestorLogos from "@/components/InvestorLogos"
import ProblemSolution from "@/components/ProblemSolution"
import SpeedComparison from "@/components/SpeedComparison"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import AIAgents from "@/components/AIAgents"
import ProcessSection from "@/components/ProcessSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import ErrorReporter from "@/components/ErrorReporter"
import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger"

export default function App() {
  useEffect(() => {
    // Load external script for route messenger
    const script = document.createElement('script')
    script.src = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
    script.async = true
    script.setAttribute('data-target-origin', '*')
    script.setAttribute('data-message-type', 'ROUTE_CHANGE')
    script.setAttribute('data-include-search-params', 'true')
    script.setAttribute('data-only-in-iframe', 'true')
    script.setAttribute('data-debug', 'true')
    script.setAttribute('data-custom-data', JSON.stringify({ appName: "YourApp", version: "1.0.0", greeting: "hi" }))
    document.body.appendChild(script)
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <ErrorReporter />
      <Navigation />
      <HeroSection />
      <InvestorLogos />
      <ProblemSolution />
      <SpeedComparison />
      <TestimonialsCarousel />
      <AIAgents />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <VisualEditsMessenger />
    </div>
  )
}
