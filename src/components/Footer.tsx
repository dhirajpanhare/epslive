"use client"

import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = {
    product: [
      { label: "Features", href: "#agents" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
    company: [
      { label: "Solutions", href: "#" },
      { label: "Agentic AI", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Web Development", href: "#" },
      { label: "Mobile Apps", href: "#" },
      { label: "UI/UX", href: "#" },
      { label: "Digital Stratergy", href: "#" },
      { label: "Consulting", href: "#" },
      { label: "Support", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/enprosysinfotech/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-linear-to-r  from-blue-700 via-cyan-500 to-indigo-700  bg-clip-text text-transparent mb-4">
             <Link to="/" className="flex items-center">
                    <img src="/logo1.png" alt="EnProSys" className="h-10 md:h-12 w-auto" />
                  </Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs second">
              Transforming ideas into exceptional digital experiences that drive business growth and user engagement.
            </p>
            <p className="text-muted-foreground mb-6 max-w-xs second">
              Plot no. 17-A, Electronics Complex,
              Pardeshipura, Indore, Madhya Pradesh, India 452003

              GSTN : 23AAHCE5600L1ZS
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label} className="nav-text">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label} className="nav-text">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label} className="nav-text">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label} className="nav-text">
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 EnProSys. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:enprosys@epsinfotech.com" className="hover:text-foreground transition-colors">
              enprosys@epsinfotech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
