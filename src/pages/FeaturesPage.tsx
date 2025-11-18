import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AIAgents from "@/components/AIAgents"

export default function AiPage() {
 
  return (
    <div className="min-h-screen">
      <Navigation />
      <AIAgents/>
      <Footer />
    </div>
  )
}
