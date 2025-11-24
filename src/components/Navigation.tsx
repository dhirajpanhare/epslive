
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import EngageTalentModal from "./EngageTalentModal"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEngageTalentOpen, setIsEngageTalentOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset" // Clean up on unmount
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solution" },
    { label: "Agentic AI", href: "/agenticAi" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-White/90"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/logo1.png" alt="EnProSys" className="h-10 md:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 nav-text">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 nav-text">
              <Button size="lg" className="gradient-light  text-white font-bold Lato-Regular" onClick={() => setIsEngageTalentOpen(true)}>
                Engage Talent
              </Button>
              <Link to="https://epsiso.enprosysinfotech.com/">
                <Button size="lg" className="gradient-light text-white font-bold">
                  <User />
                  Emp Corner
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 dark:text-white" // Added text color for visibility
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 flex flex-col pt-20 px-6 animate-slide-in-right">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-8">
            <Button
              size="lg"
              className="gradient-light text-white font-bold Lato-Regular w-full"
              onClick={() => {
                setIsEngageTalentOpen(true)
                setIsMobileMenuOpen(false)
              }}
            >
              Engage Talent
            </Button>
            <Link to="https://epsiso.enprosysinfotech.com/" className="w-full">
              <Button size="lg" className="gradient-light text-white font-bold w-full">
                <User className="mr-2" />
                Emp Corner
              </Button>
            </Link>
          </div>
        </div>
      )}
      <EngageTalentModal isOpen={isEngageTalentOpen} onClose={() => setIsEngageTalentOpen(false)} />
    </nav>
  )
}