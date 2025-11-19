"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Calendar ,Users  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EngageTalentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EngageTalentModal({ isOpen, onClose }: EngageTalentModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industry: "",
    projectType: "",
    teamSizeNeeded: "",
    projectTimeline: "",
    budgetRange: "",
    requiredTechnologies: "",
    projectDescription: "",
  })

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
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
                <h2 className="text-2xl md:text-3xl font-bold">Engage Talent</h2>
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

                    {/* Industry and Project Type */}
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
                        <Label htmlFor="projectType">Project Type</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            handleSelectChange("projectType", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="webApp">Web Application</SelectItem>
                            <SelectItem value="mobileApp">Mobile App</SelectItem>
                            <SelectItem value="aiSolution">AI Solution</SelectItem>
                            <SelectItem value="dataAnalytics">Data Analytics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Team Size Needed and Project Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="teamSizeNeeded">Team Size Needed</Label>
                        <Select
                          value={formData.teamSizeNeeded}
                          onValueChange={(value) =>
                            handleSelectChange("teamSizeNeeded", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3">1-3 Members</SelectItem>
                            <SelectItem value="4-7">4-7 Members</SelectItem>
                            <SelectItem value="8-12">8-12 Members</SelectItem>
                            <SelectItem value="12+">12+ Members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectTimeline">Project Timeline</Label>
                        <Select
                          value={formData.projectTimeline}
                          onValueChange={(value) =>
                            handleSelectChange("projectTimeline", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3months">1-3 Months</SelectItem>
                            <SelectItem value="3-6months">3-6 Months</SelectItem>
                            <SelectItem value="6-12months">6-12 Months</SelectItem>
                            <SelectItem value="12+months">12+ Months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range</Label>
                      <Select
                        value={formData.budgetRange}
                        onValueChange={(value) =>
                          handleSelectChange("budgetRange", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Required Technologies */}
                    <div className="space-y-2">
                      <Label htmlFor="requiredTechnologies">Required Technologies</Label>
                      <Textarea
                        id="requiredTechnologies"
                        name="requiredTechnologies"
                        value={formData.requiredTechnologies}
                        onChange={handleInputChange}
                        placeholder="e.g., React, Node.js, Python, AWS..."
                        className="min-h-20"
                      />
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description</Label>
                      <Textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleInputChange}
                        placeholder="Describe your project requirements..."
                        className="min-h-24"
                      />
                    </div>
                  </form>
                </div>

                {/* Right Section - Info Cards */}
                <div className="space-y-6">
                  {/* 7-Day Free Trial Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500/20 rounded-lg">
                        <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          7-Day Free Trial
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          No commitment required
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Developer Package Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 bg-linear-to-br from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF] rounded-xl border border-[#0A6EAA]/20 dark:border-[#0A6EAA]/30"
                  >
                    <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                      Developer Package
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full gradient-light mt-2 shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Access to experienced developers
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full gradient-light  mt-2 shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Flexible team scaling options
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* What's Included Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 bg-linear-to-br from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF] rounded-xl border border-[#14508C]/20 dark:border-[#14508C]/30"
                  >
                    <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Dedicated project manager
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Weekly status updates
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Quality assurance testing
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Post-launch support
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-2">
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
                      className="flex-1 gradient-light text-white"
                      onClick={handleSubmit}
                    >
                      Submit
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
