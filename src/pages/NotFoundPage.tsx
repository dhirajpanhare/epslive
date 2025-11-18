import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} size="lg">
            Back to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
