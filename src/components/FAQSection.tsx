"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AI-powered development actually work?",
    answer: "Our platform uses specialized AI agents trained on billions of lines of code. Each agent handles a specific aspect of development - frontend, backend, database, testing, etc. They work together like a human team, but 10x faster and more consistently."
  },
  {
    question: "What kind of applications can you build?",
    answer: "We can build almost anything - web apps, mobile apps, APIs, SaaS platforms, e-commerce sites, internal tools, and more. If it can be built with code, our AI agents can handle it. We support all major frameworks and technologies."
  },
  {
    question: "How is the quality compared to human developers?",
    answer: "Our AI agents follow industry best practices, write clean and maintainable code, include comprehensive tests, and produce documentation. Many clients report the quality is indistinguishable from experienced human developers, with the added benefit of consistency."
  },
  {
    question: "Can I customize or modify the code afterward?",
    answer: "Absolutely! You own 100% of the code we generate. It's clean, well-documented, and follows standard conventions, making it easy for your team to understand and modify. We also provide ongoing support if needed."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible pricing based on project complexity and timeline. Most clients save 70-80% compared to traditional development costs. We provide a detailed quote after understanding your requirements. No hidden fees."
  },
  {
    question: "How secure is the development process?",
    answer: "Security is our top priority. All code is private and encrypted. We implement industry-standard security practices, including authentication, authorization, data encryption, and regular security audits. We're SOC 2 compliant."
  },
  {
    question: "What happens after launch?",
    answer: "We provide ongoing maintenance, updates, and support. As your product evolves, our AI agents can add new features, fix bugs, and scale your infrastructure. Think of us as an extension of your team."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes! We offer a 30-day satisfaction guarantee. If you're not happy with the results, we'll either revise the work or provide a full refund. We're confident in our quality and stand behind it."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-[#0A6EAA] via-[#0A64A0] to-[#14508C] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AI-powered development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
