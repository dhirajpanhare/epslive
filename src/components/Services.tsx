// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { Zap, Rocket, Code, Smartphone, Database, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"

// type Service = {
//   icon: any
//   title: string
//   description: string
//   bullets: string[]
//   gradient?: string
//   bgGradient?: string
// }

// export default function Services() {
//   const services: Service[] = [
//     {
//       icon: Zap,
//       title: "AI That Predicts and Automates",
//       description:
//         "Intelligent AI systems that work 24/7 — from chatbots that answer instantly to models that predict what happens next.",
//       bullets: ["Smart Chatbots", "Predictive Analytics", "Process Automation"],
//       gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#14508C]/10",
//     },
//     {
//       icon: Rocket,
//       title: "Software That Gets You to Market Faster",
//       description:
//         "Custom business platforms and mobile apps designed, developed, and deployed with agility — no long IT cycles.",
//       bullets: ["Custom Platforms", "Mobile Apps", "Rapid Development"],
//       gradient: "from-[#0082BE] via-[#0A6EAA] to-[#14508C]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#0A64A0]/10",
//     },
//     {
//       icon: Code,
//       title: "Digital Tools That Think for You",
//       description:
//         "Streamline operations and reduce human errors with intuitive tools powered by automation, not endless spreadsheets.",
//       bullets: ["Workflow Automation", "Smart Dashboards", "Data Integration"],
//       gradient: "from-[#0A6EAA] via-[#14508C] to-[#144682]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#144682]/10",
//     },
//     {
//       icon: Database,
//       title: "AI-Powered ERP Solutions",
//       description:
//         "Reimagine your business operations with advanced AI-driven ERP systems.",
//       bullets: ["AI-powered automation and analytics", "Real-time data integration across all departments", "Flexible, cloud-ready platforms for agile teams"],
//       gradient: "from-[#0082BE] via-[#0A64A0] to-[#14508C]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#14508C]/10",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Enterprise Security & Performance",
//       description:
//         "Robust security implementations and performance optimization for mission-critical business operations.",
//       bullets: ["Security Audits", "Performance Testing", "System Monitoring"],
//       gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#14508C]/10",
//     },
//     {
//       icon: Smartphone,
//       title: "Cloud & Mobile Solutions",
//       description:
//         "Scale your business with cloud infrastructure and mobile-first applications that work everywhere.",
//       bullets: ["Cloud Migration", "Mobile Development", "Scalable Architecture"],
//       gradient: "from-[#0082BE] via-[#0A6EAA] to-[#0A64A0]",
//       bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#0A64A0]/10",
//     },
//   ]

//   function ServiceCarousel({ services }: { services: Service[] }) {
//     const containerRef = useRef<HTMLDivElement | null>(null)
//     const [leftDisabled, setLeftDisabled] = useState(true)
//     const [rightDisabled, setRightDisabled] = useState(false)

//     const updateButtons = () => {
//       const el = containerRef.current
//       if (!el) return
//       const maxScroll = el.scrollWidth - el.clientWidth
//       setLeftDisabled(el.scrollLeft <= 8)
//       setRightDisabled(el.scrollLeft >= maxScroll - 8)
//     }

//     useEffect(() => {
//       updateButtons()
//       const onResize = () => updateButtons()
//       window.addEventListener('resize', onResize)
//       return () => window.removeEventListener('resize', onResize)
//     }, [])

//     const scrollByAmount = (dir: number) => {
//       const el = containerRef.current
//       if (!el) return
//       const scrollAmount = el.clientWidth
//       el.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
//       setTimeout(() => {
//         updateButtons()
//       }, 600)
//     }

//     return (
//       <div className="relative w-full">
//         <button
//           aria-label="Previous"
//           onClick={() => scrollByAmount(-1)}
//           disabled={leftDisabled}
//           className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white/90 dark:bg-gray-800/80 transition transform hover:scale-105 ${leftDisabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
//         >
//           <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
//         </button>

//         <div
//           ref={containerRef}
//           onScroll={updateButtons}
//           className="relative flex gap-6 md:gap-8 overflow-x-auto scroll-smooth no-scrollbar px-16 py-4"
//           style={{ scrollSnapType: 'x mandatory' } as React.CSSProperties}
//         >
//           {services.map((s, idx) => (
//             <motion.div
//               key={s.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: idx * 0.05 }}
//               className="snap-start shrink-0 w-1/3 h-80"
//               style={{ scrollSnapAlign: 'center' }}
//             >
//               <div className={`relative h-full ${s.bgGradient ? `bg-linear-to-br ${s.bgGradient}` : 'bg-white'} border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col`}>

//                 <div className="relative flex flex-col gap-3 h-full">
//                   <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center text-white shadow-md z-10 shrink-0">
//                     <s.icon className="w-5 h-5 text-white" />
//                   </div>

//                   <div className="flex-1 flex flex-col overflow-hidden">
//                     <h3 className="text-lg md:text-xl font-bold z-10 line-clamp-2">{s.title}</h3>
//                     <p className="text-muted-foreground mt-2 text-sm md:text-base z-10 line-clamp-3">{s.description}</p>

//                     <ul className="space-y-1.5 z-10 text-sm mt-auto">
//                       {s.bullets.map((b) => (
//                         <li key={b} className="flex items-start gap-2 text-sm line-clamp-1">
//                           <span className="mt-1 w-2 h-2 rounded-full gradient-blue shrink-0" />
//                           <span className="text-sm line-clamp-1">{b}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <button
//           aria-label="Next"
//           onClick={() => scrollByAmount(1)}
//           disabled={rightDisabled}
//           className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white/90 dark:bg-gray-800/80 transition transform hover:scale-105 ${rightDisabled ? 'opacity-40 cursor-not-allowed' : 'opacity-100'}`}
//         >
//           <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white" />
//         </button>
//       </div>
//     )
//   }

//   return (
//     <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-white">
//       {/* subtle grid background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-12 max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
//           >
//             <Zap className="w-4 h-4 text-primary" />
//             <span className="text-sm font-medium text-primary">Our Capabilities</span>
//           </motion.div>

//           <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
//             Solutions That Drive Real Business Results
//           </h2>

//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             We don't just build technology - we solve business problems. From AI that works around the clock to software that accelerates your growth, every solution is designed with your success in mind.
//           </p>
//         </div>

//         <ServiceCarousel services={services} />
//       </div>
//     </section>
//   )
// }


// infinite scroll
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Zap, Rocket, Code, Smartphone, Database, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"

type Service = {
  icon: any
  title: string
  description: string
  bullets: string[]
  gradient?: string
  bgGradient?: string
}

// NOTE: I'm defining the services array outside the component to keep the diff clean, 
// but in your original code, it's fine to keep it inside the 'Services' component.
const services: Service[] = [
    {
      icon: Zap,
      title: "AI That Predicts and Automates",
      description:
        "Intelligent AI systems that work 24/7 — from chatbots that answer instantly to models that predict what happens next.",
      bullets: ["Smart Chatbots", "Predictive Analytics", "Process Automation"],
      gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
      bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#14508C]/10",
    },
    {
      icon: Rocket,
      title: "Software That Gets You to Market Faster",
      description:
        "Custom business platforms and mobile apps designed, developed, and deployed with agility — no long IT cycles.",
      bullets: ["Custom Platforms", "Mobile Apps", "Rapid Development"],
      gradient: "from-[#0082BE] via-[#0A6EAA] to-[#14508C]",
      bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#0A64A0]/10",
    },
    {
      icon: Code,
      title: "Digital Tools That Think for You",
      description:
        "Streamline operations and reduce human errors with intuitive tools powered by automation, not endless spreadsheets.",
      bullets: ["Workflow Automation", "Smart Dashboards", "Data Integration"],
      gradient: "from-[#0A6EAA] via-[#14508C] to-[#144682]",
      bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#144682]/10",
    },
    {
      icon: Database,
      title: "AI-Powered ERP Solutions",
      description:
        "Reimagine your business operations with advanced AI-driven ERP systems.",
      bullets: ["AI-powered automation and analytics", "Real-time data integration across all departments", "Flexible, cloud-ready platforms for agile teams"],
      gradient: "from-[#0082BE] via-[#0A64A0] to-[#14508C]",
      bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#14508C]/10",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security & Performance",
      description:
        "Robust security implementations and performance optimization for mission-critical business operations.",
      bullets: ["Security Audits", "Performance Testing", "System Monitoring"],
      gradient: "from-[#0A6EAA] via-[#0A64A0] to-[#14508C]",
      bgGradient: "from-white to-blue-50 dark:from-[#0A6EAA]/10 dark:to-[#14508C]/10",
    },
    {
      icon: Smartphone,
      title: "Cloud & Mobile Solutions",
      description:
        "Scale your business with cloud infrastructure and mobile-first applications that work everywhere.",
      bullets: ["Cloud Migration", "Mobile Development", "Scalable Architecture"],
      gradient: "from-[#0082BE] via-[#0A6EAA] to-[#0A64A0]",
      bgGradient: "from-white to-blue-50 dark:from-[#0082BE]/10 dark:to-[#0A64A0]/10",
    },
]


function ServiceCarousel({ services: infiniteServices }: { services: Service[] }) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const controls = useAnimation()
    const [isHovered, setIsHovered] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)
    const scrollDuration = 40 // seconds for one full loop (adjustable)
    const scrollAmount = useRef(0)

    // NEW: State for responsive items per view and gap
    const [layout, setLayout] = useState({
      itemsPerView: 3,
      itemGap: 32, // md:gap-8 = 32px
    });

    const itemsPerView = layout.itemsPerView
    const itemGap = layout.itemGap
    
    // Check screen width for layout changes
    useEffect(() => {
        const checkLayout = () => {
            const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
            setLayout({
                itemsPerView: isMobile ? 1 : 3,
                itemGap: isMobile ? 16 : 32, // Use a smaller gap for mobile (gap-4)
            });
        };

        checkLayout();
        window.addEventListener('resize', checkLayout);
        return () => window.removeEventListener('resize', checkLayout);
    }, []);

    const startScrolling = async () => {
        if (!containerRef.current) return
        
        // This is the core change: Card width must be calculated relative to the container,
        // which now holds 'itemsPerView' cards plus their gaps.
        const cardWidth = (containerWidth - itemGap * (itemsPerView - 1)) / itemsPerView
        
        // Calculate the total width of the original services (6 cards + 5 gaps)
        // This is the distance we need to scroll before the loop resets
        const totalOriginalWidth = cardWidth * services.length + itemGap * (services.length - 1)
        
        // The scroll amount is the width of the original list segment.
        scrollAmount.current = totalOriginalWidth + itemGap;
        
        await controls.start({
            x: -scrollAmount.current,
            transition: {
                x: {
                    ease: "linear",
                    duration: scrollDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                },
            },
        })
    }
    
    // Calculate container width on mount and resize
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                // Use clientWidth to get the visible width of the container
                setContainerWidth(containerRef.current.clientWidth)
            }
        }
        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])
    
    // Start or stop the scroll animation (Reruns on layout change)
    useEffect(() => {
        // Reset position on layout change to prevent weird jumps
        controls.set({ x: 0 }); 
        
        if (containerWidth > 0) {
            if (!isHovered) {
                startScrolling()
            } else {
                // Stop the animation while preserving the current position
                controls.stop()
            }
        }
    }, [isHovered, containerWidth, itemsPerView]) // Added itemsPerView as a dependency

    // Manual Scroll logic is more complex with variable card widths, 
    // but the auto-scroll handles the main requirement. I'm keeping 
    // the manual functions, but the buttons are commented out.
    const manualScroll = (direction: number) => {
        controls.stop();
        const currentX = controls.get().x || 0
        const cardWidth = (containerWidth - itemGap * (itemsPerView - 1)) / itemsPerView
        const step = cardWidth + itemGap

        let newX = currentX + (direction * step)
        
        controls.start({
            x: newX,
            transition: { duration: 0.5, ease: "easeOut" }
        })
    }

    // Dynamic Card Width Calculation for the style prop
    const cardCalculatedWidth = containerWidth > 0 
        ? `calc((${containerWidth}px - ${itemGap * (itemsPerView - 1)}px) / ${itemsPerView})`
        : `calc(100% / ${itemsPerView} - ${itemGap * 2}px)`; // Fallback

    return (
      <div className="relative w-full overflow-hidden">
        {/* Manual Scroll Buttons (Uncomment to use with manualScroll function) */}
        {/* {itemsPerView === 1 && ( // Only show buttons on mobile for manual scrolling
             <button
               aria-label="Previous"
               onClick={() => manualScroll(1)}
               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white/90 dark:bg-gray-800/80 transition transform hover:scale-105 opacity-100"
             >
               <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
             </button>
        )} */}
        
        <div
          ref={containerRef}
          className={`relative flex py-4`}
          // Use dynamic gap based on screen size
        >
          {/* Outer container to catch hover events */}
          <motion.div
            className={`flex`}
            style={{ gap: `${itemGap}px` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={controls}
            // The total width is the sum of all cards and gaps in the infinite list
            style={{ 
              width: containerWidth > 0 
                ? `${(containerWidth / itemsPerView) * infiniteServices.length + itemGap * (infiniteServices.length - 1)}px` 
                : 'auto',
              gap: `${itemGap}px` 
            }}
          >
            {infiniteServices.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 1, y: 0 }}
                className="shrink-0 h-80"
                style={{
                  // Apply the responsive calculated width
                  width: cardCalculatedWidth,
                }}
              >
                <div className={`relative h-full ${s.bgGradient ? `bg-linear-to-br ${s.bgGradient}` : 'bg-white'} border border-gray-200 dark:border-gray-800 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col`}>

                  <div className="relative flex flex-col gap-3 h-full">
                    <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center text-white shadow-md z-10 shrink-0">
                      <s.icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex-1 flex flex-col overflow-hidden">
                      <h3 className="text-lg md:text-xl font-bold z-10 line-clamp-2">{s.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm md:text-base z-10 line-clamp-3">{s.description}</p>

                      <ul className="space-y-1.5 z-10 text-sm mt-auto">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm line-clamp-1">
                            <span className="mt-1 w-2 h-2 rounded-full gradient-blue shrink-0" />
                            <span className="text-sm line-clamp-1">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* {itemsPerView === 1 && (
             <button
               aria-label="Next"
               onClick={() => manualScroll(-1)}
               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white/90 dark:bg-gray-800/80 transition transform hover:scale-105 opacity-100"
             >
               <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white" />
             </button>
        )} */}
      </div>
    )
}

export default function Services() {
  const infiniteServices = [...services, ...services]

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      
      {/* Global CSS for gradient-blue class */}
      <style jsx global>{`
        .gradient-blue {
          background: linear-gradient(to right, #0A6EAA, #14508C);
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Capabilities</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Solutions That Drive Real Business Results
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just build technology - we solve business problems. From AI that works around the clock to software that accelerates your growth, every solution is designed with your success in mind.
          </p>
        </div>
        
        {/* Pass the duplicated list to the carousel */}
        <ServiceCarousel services={infiniteServices} />
      </div>
    </section>
  )
}