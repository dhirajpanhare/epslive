import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import InvestorLogos from "@/components/InvestorLogos"
import ProblemSolution from "@/components/ProblemSolution"
import SpeedComparison from "@/components/SpeedComparison"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import AIAgents from "@/components/AIAgents"
import Services from "@/components/Services"
import ProcessSection from "@/components/ProcessSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* <InvestorLogos /> */}
      <Services />
      <ProblemSolution />
      <SpeedComparison />
      {/* <TestimonialsCarousel /> */}
      <AIAgents />
      <ProcessSection />
      {/* <FAQSection /> */}
      {/* <CTASection /> */}
      <Footer />
    </div>
  )
}
