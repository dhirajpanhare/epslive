import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"

import ProblemSolution from "@/components/ProblemSolution"

import AIAgents from "@/components/AIAgents"
import Services from "@/components/Services"
import ProcessSection from "@/components/ProcessSection"

import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      <Services />
      <ProblemSolution />
    
      <AIAgents />
      <ProcessSection />

      <Footer />
    </div>
  )
}
