"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProposalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industry: "",
    primaryUseCase: "",
    expectedUsers: "",
    preferredTimeline: "",
    description: "",
  })

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const features = [
    "Real-time Analytics",
    "Custom Integration",
    "Priority Support",
    "Advanced Security",
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", { ...formData, selectedFeatures })
    // Handle form submission here
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center p-6 md:p-8 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-950">
                <h2 className="text-2xl md:text-3xl font-bold">🤖 Build Your AI Agent</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Left Section - Form */}
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Name */}
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Industry and Primary Use Case */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) =>
                            handleSelectChange("industry", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primaryUseCase">Primary Use Case</Label>
                        <Select
                          value={formData.primaryUseCase}
                          onValueChange={(value) =>
                            handleSelectChange("primaryUseCase", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select use case" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automation">Automation</SelectItem>
                            <SelectItem value="analytics">Analytics</SelectItem>
                            <SelectItem value="integration">Integration</SelectItem>
                            <SelectItem value="customApp">Custom App</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Expected Users and Preferred Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expectedUsers">Expected Users</Label>
                        <Select
                          value={formData.expectedUsers}
                          onValueChange={(value) =>
                            handleSelectChange("expectedUsers", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 Users</SelectItem>
                            <SelectItem value="11-50">11-50 Users</SelectItem>
                            <SelectItem value="51-100">51-100 Users</SelectItem>
                            <SelectItem value="100+">100+ Users</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTimeline">Preferred Timeline</Label>
                        <Select
                          value={formData.preferredTimeline}
                          onValueChange={(value) =>
                            handleSelectChange("preferredTimeline", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (1-2 weeks)</SelectItem>
                            <SelectItem value="month">Within a Month</SelectItem>
                            <SelectItem value="quarter">Within a Quarter</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Features */}
                    <div className="space-y-3">
                      <Label>Additional Features</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={selectedFeatures.includes(feature)}
                              onCheckedChange={() => handleFeatureToggle(feature)}
                            />
                            <label
                              htmlFor={feature}
                              className="text-sm font-medium cursor-pointer"
                            >
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        className="min-h-32"
                      />
                    </div>
                  </form>
                </div>

                {/* Right Section - Package Info */}
                <div className="space-y-6">
                  {/* Development Package Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 bg-gradient-to-br from-[#0A6EAA]/10 to-[#14508C]/10 dark:from-[#0A6EAA]/20 dark:to-[#14508C]/20 rounded-xl border border-[#0A6EAA]/20 dark:border-[#0A6EAA]/30"
                  >
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                      Development Package
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0A6EAA] mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          A one-time engagement to design, build, and deploy your custom AI solution
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0A6EAA] mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                         Contact us for a personalized proposal.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Monthly Operation Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-gradient-to-br from-[#0082BE]/10 to-[#0A64A0]/10 dark:from-[#0082BE]/20 dark:to-[#0A64A0]/20 rounded-xl border border-[#0082BE]/20 dark:border-[#0082BE]/30"
                  >
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                      Monthly Operation
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0082BE] mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                         Hosting, maintenance, and ongoing support included.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0082BE] mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Reach out to discuss your specific needs.
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* What's Included Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-gradient-to-br from-[#14508C]/10 to-[#0A6EAA]/10 dark:from-[#14508C]/20 dark:to-[#0A6EAA]/20 rounded-xl border border-[#14508C]/20 dark:border-[#14508C]/30"
                  >
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Custom AI Agent Development
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                         Integration with Your Systems
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Training & Documentation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Performance Analytics
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={onClose}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="lg"
                      className="flex-1 gradient-blue text-white"
                      onClick={handleSubmit}
                    >
                      Get Detailed Proposal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
