"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X ,User} from "lucide-react"
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solution" },
    { label: "Agentic AI", href: "/agenticAi" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="EnProSys" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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

          <div className="hidden md:flex items-center gap-4">
            <Button size="lg" className="gradient-blue text-white" onClick={() => setIsEngageTalentOpen(true)}>
              Engage Talent
            </Button>
           <Link to="https://epsiso.enprosysinfotech.com/"> <Button size="lg" className="gradient-blue text-white">
              <User/>
              Emp Corner
            </Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" onClick={() => {
                setIsEngageTalentOpen(true)
                setIsMobileMenuOpen(false)
              }}>
                Engage Talent
              </Button>
              <Button size="sm" className="gradient-blue text-white">
                <User/>
                Emp Corner
              </Button>
            </div>
          </div>
        )}
      </div>

      <EngageTalentModal isOpen={isEngageTalentOpen} onClose={() => setIsEngageTalentOpen(false)} />
    </nav>
  )
}
