"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Briefcase, // HR Assistant
  Heart, // Health Care
  Monitor, // IT Support
  Shield, // Admin
  DollarSign, // Sales Support
  Scale, // Finance
  GraduationCap, // Education
  Wrench, // Manufacturing
  Truck, // Logistic
  Plane, // Travel
  Car, // Automotive
  Pill, // Pharma
  Bot, // AI Icon for chatbox header
  MessageSquare,
  Send,
  Loader2,
  Minimize2,
  Maximize2,
  X, // Close button icon
} from "lucide-react"

// Define the AgentType outside the component for better organization
type AgentType = {
  icon: any
  name: string
  title: string
  gradient: string
  bgGradient: string
  initialPrompt: string // Added initial prompt for the chat
}

const customAgents: AgentType[] = [
  // Agents 1-6
  {
    icon: Sparkles,
    name: "PM Agent",
    title: "AI Product Manager",
        gradient: "from-[#0082BE] via-[#0A6EAA] to-[#14508C]",
    // gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
     bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "Generate a detailed product specification for a new feature: 'Real-time collaborative editing' in a cloud document app."
  },
  {
    icon: Monitor,
    name: "IT Support",
    title: "AI IT Support Agent",
    gradient: "from-[#0082BE] via-[#0A6EAA] to-[#14508C]",
      bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "Describe the steps to troubleshoot a 'DNS server not responding' error on a Windows machine."
  },
  {
    icon: Briefcase,
    name: "HR Assistant",
    title: "AI HR Assistant",
    gradient: "from-[#0A6EAA] via-[#14508C] to-[#144682]",
     bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "Draft a concise company-wide announcement about the updated remote work policy."
  },
  {
    icon: Scale,
    name: "Finance",
    title: "AI Finance Analyst",
    gradient: "from-[#0082BE] via-[#0A64A0] to-[#14508C]",
     bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "Explain the key differences between CAPEX and OPEX and provide three examples for each."
  },
  {
    icon: DollarSign,
    name: "Sales Support",
    title: "AI Sales Support",
    gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "Write a cold email subject line and opening paragraph targeting SMEs in the food delivery sector."
  },
  {
    icon: Truck,
    name: "Logistics",
    title: "AI Logistics Coordinator",
   gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#0082BE] via-[#0A6EAA] to-[#0A64A0]",
      bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    initialPrompt: "What are the common challenges in 'last-mile delivery' and how can AI address them?"
  },
  // Agents 7-12
  {
    icon: Heart,
    name: "Health Care",
    title: "AI Health Assistant",
    gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#F25C54] via-[#D94F45] to-[#BF433C]",
     bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    // bgGradient: "from-red-50 to-red-100 dark:from-[#F25C54]/10 dark:to-[#BF433C]/10",
    initialPrompt: "Summarize the key regulations in HIPAA regarding patient data privacy."
  },
  {
    icon: Shield,
    name: "Admin",
    title: "AI Admin Assistant",
    gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#5D6D7E] via-[#4A5766] to-[#39424D]",
    bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    // bgGradient: "from-gray-50 to-gray-100 dark:from-[#5D6D7E]/10 dark:to-[#39424D]/10",
    initialPrompt: "Draft an agenda for a 'Quarterly Strategy Review' meeting."
  },
  {
    icon: GraduationCap,
    name: "Education",
    title: "AI Education Tutor",
   gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#FF9900] via-[#E68A00] to-[#CC7A00]",
     bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    // bgGradient: "from-yellow-50 to-yellow-100 dark:from-[#FF9900]/10 dark:to-[#CC7A00]/10",
    initialPrompt: "Create a simple multiple-choice quiz about the solar system for 5th graders."
  },
  {
    icon: Wrench,
    name: "Manufacturing",
    title: "AI Production Planner",
  gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#4CAF50] via-[#43A047] to-[#388E3C]",
   bgGradient: "from-blue-50 to-blue-100 dark:from-[#0082BE]/10 dark:to-[#0A64A0]/10",
    // bgGradient: "from-green-50 to-green-100 dark:from-[#4CAF50]/10 dark:to-[#388E3C]/10",
    initialPrompt: "How can predictive maintenance using AI reduce downtime in a manufacturing plant?"
  },
  {
    icon: Plane,
    name: "Travel",
    title: "AI Travel Booker",
   gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#3F51B5] via-[#3949AB] to-[#303F9F]",
    bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    // bgGradient: "from-indigo-50 to-indigo-100 dark:from-[#3F51B5]/10 dark:to-[#303F9F]/10",
    initialPrompt: "Suggest a 3-day itinerary for a business trip to Tokyo, including flight and hotel suggestions."
  },
  {
    icon: Car,
    name: "Automotive",
    title: "AI Auto Advisor",
   gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
    // gradient: "from-[#FFC107] via-[#FFB300] to-[#FFA000]",
  bgGradient: "from-[#E0ECFF] via-[#D8F7FF] to-[#E6E8FF]",
    // bgGradient: "from-amber-50 to-amber-100 dark:from-[#FFC107]/10 dark:to-[#FFA000]/10",
    initialPrompt: "Explain the signs of a failing catalytic converter and the immediate steps a driver should take."
  }
]

// --- Chat Box Component (No changes needed here as the request focused on cards) ---
function AIChatBox({ agent, onClose }: { agent: AgentType | null, onClose: () => void }) {
  const [messages, setMessages] = useState<{ type: 'user' | 'ai', text: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (agent) {
      setMessages([])
      handleSendMessage(agent.initialPrompt, true)
    }
  }, [agent])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (textToSend: string = input, isCardPrompt: boolean = false) => {
    if (!textToSend.trim() || isLoading || !agent) return

    const userMessage = { type: 'user' as const, text: textToSend }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulating an AI response based on the prompt and agent type
    setTimeout(() => {
      const agentResponse = generateAgentResponse(agent, textToSend)
      const aiMessage = { type: 'ai' as const, text: agentResponse }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, isCardPrompt ? 1000 : 800)
  }

  // Simple response generation based on agent
  const generateAgentResponse = (agent: AgentType, prompt: string) => {
    if (prompt.includes('spec')) {
        return `As the ${agent.title}, I have initiated the detailed specification. It will cover: User Stories, Acceptance Criteria, UI/UX Mockups, and Technical Dependencies. Initial draft available in 4 hours.`
    }
    if (prompt.includes('troubleshoot')) {
        return `As the ${agent.title}, I've found that the issue is common. Please try flushing your DNS cache by running 'ipconfig /flushdns' in Command Prompt as Admin. If that fails, change your adapter's DNS to 8.8.8.8.`
    }
    if (prompt.includes('itinerary')) {
        return `As the ${agent.title}, I've created a 3-day Tokyo itinerary. Day 1: Client meetings in Marunouchi, stay at The Peninsula. Day 2: Site visits, Ryokan dinner. Day 3: Travel prep, expense report automation initiated.`
    }
    return `As the ${agent.title}, I understand your request: "${prompt}". I'm now processing this complex task using industry best practices and will deliver a comprehensive solution shortly. My current estimated completion time is 10 minutes.`
  }

  if (!agent) return null

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: isMaximized ? '0%' : '0%', y: isMaximized ? '0%' : 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed ${isMaximized ? 'inset-0' : 'bottom-4 right-4 w-full max-w-sm h-3/4 max-h-[600px]'} z-50 bg-white dark:bg-gray-900 shadow-2xl rounded-xl flex flex-col border border-blue-500/30`}
    >
      {/* Chat Header - Title and Close button color updated to Blue */}
      <div className={`flex justify-between items-center p-4 bg-blue-600 text-white rounded-t-xl shadow-md`}>
        <div className="flex items-center">
          <Bot className="w-6 h-6 mr-2" /> {/* AI Icon */}
          <div>
            <h4 className="text-lg font-bold">AI Agent</h4>
            <div className="flex items-center text-xs text-white/80">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => setIsMaximized(!isMaximized)} className="p-1 rounded-full hover:bg-white/20 transition-colors mr-2">
            {isMaximized ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          {/* Close button color is blue */}
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-xl ${msg.type === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none'}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none flex items-center">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span className="text-sm">Agent thinking...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 border-t dark:border-gray-700">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage() }} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the agent a question..."
            disabled={isLoading}
            className="flex-grow p-3 border border-gray-300 dark:border-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-3 bg-blue-500 text-white rounded-r-xl disabled:bg-blue-500/50 transition-colors hover:bg-blue-600"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </motion.div>
  )
}

// --- Main Component ---
export default function AIAgents() {
  const [activeAgent, setActiveAgent] = useState<AgentType | null>(null)

  const handleCardClick = (agent: AgentType) => {
    setActiveAgent(agent)
  }

  const AgentCard = ({ agent, index }: { agent: AgentType, index: number }) => (
    <motion.div
      key={agent.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => handleCardClick(agent)}
      className="group relative cursor-pointer flex-shrink-0"
    >
      <div className={`relative h-full bg-gradient-to-br ${agent.bgGradient} backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300`}>
        
        {/* Reduced Icon Size and Margin */}
        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg gradient-light p-2 mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
          <agent.icon className="w-full h-full text-white" />
        </div>

        <div className="mb-2">
          {/* Reduced Name Text Size */}
          <div className="text-xs font-semibold text-muted-foreground mb-0.5 uppercase tracking-wider">
            {agent.name}
          </div>
          {/* Reduced Title Text Size */}
          <h3 className="text-base md:text-lg font-bold group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
            {agent.title}
          </h3>
        </div>

        {/* Reduced CTA Padding/Margin */}
        <div className="mt-2 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Chat now</span>
          <MessageSquare className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="agents" className="py-24 md:py-32 relative overflow-hidden bg-linear-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">12 AI-Powered Agents</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold lato-bold mb-6 leading-tight">
            See AI Agents{" "}
            <span className="bg-linear-to-r  from-blue-700 via-cyan-500 to-indigo-700 bg-clip-text text-transparent">
             Solve Real Problems
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Built in-house to help you ship 10x faster
          </p>
          
          <p className="text-base md:text-lg second text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Click on any agent card to start a simulated chat and see a live demonstration of its capabilities and initial prompt!
          </p>
        </motion.div>

        {/* Static Agent Grid (6 cards per row on xl screens, 4 on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 max-w-7xl mx-auto">
          {customAgents.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg text-muted-foreground mb-6">
            All agents work together in perfect harmony
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-linear-to-r from-[#0A6EAA] to-[#14508C] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              See Agents in Action
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300">
              View Documentation
            </button>
          </div> */}
        </motion.div>
      </div>
      
      {/* AI Chat Box - Renders only when an agent is active */}
      {activeAgent && (
        <AIChatBox 
          agent={activeAgent} 
          onClose={() => setActiveAgent(null)} 
        />
      )}
    </section>
  )
}