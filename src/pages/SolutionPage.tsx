import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Services from "@/components/Services"

export default function SolutionPage() {
  
  return (
    <div className="min-h-screen">
      <Navigation />
          
       <Services/>
       
      <Footer />

    </div>
  )
}
