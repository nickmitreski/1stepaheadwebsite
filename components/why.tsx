"use client"
import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-config"
import { SectionTitle } from "@/components/ui/section-title"
import { useReveal } from "@/lib/use-reveal"

export default function Why() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animatedValues, setAnimatedValues] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
  })

  // Animate-in effects for this section
  useReveal({ root: sectionRef, stagger: 0.1, duration: 0.6 })

  useEffect(() => {
    if (typeof window !== "undefined" && sectionRef.current) {
      const ctx = gsap.context(() => {
        const heading = sectionRef.current!.querySelector("h2")
        const paragraphs = sectionRef.current!.querySelectorAll("p:not(.stat-card p)")

                gsap.fromTo(heading,
                  { y: 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: sectionRef.current,
                      start: "top 80%",
                      toggleActions: "play none none none"
                    }
                  }
                )

                gsap.fromTo(paragraphs,
                  { y: 30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: sectionRef.current,
                      start: "top 70%",
                      toggleActions: "play none none none"
                    }
                  }
                )

        // Counter animation for stats
        const statsCards = sectionRef.current!.querySelectorAll(".stat-card")
        const finalValues = [15, 45, 90, 64]
        statsCards.forEach((card, index) => {
          const counter = { value: 0 }
          const finalValue = finalValues[index] ?? 0

                  gsap.to(counter, {
                    value: finalValue,
                    duration: 1.2,
                    ease: "power2.out",
                    onUpdate: () => {
                      const currentValue = Math.round(counter.value)
                      setAnimatedValues(prev => ({
                        ...prev,
                        [`stat${index + 1}`]: currentValue
                      }))
                    },
                    scrollTrigger: {
                      trigger: card,
                      start: "top 80%",
                      toggleActions: "play none none none"
                    }
                  })
        })
      }, sectionRef)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="why" className="relative overflow-hidden py-20 md:py-24 bg-section-b">
      <div className="container max-w-6xl mx-auto space-y-16">
        <div className="mx-auto max-w-4xl text-center" data-reveal>
          <SectionTitle 
            keyword="Excellence" 
            title="Why is financial wellbeing important?" 
            className="mb-8"
          />
          <div className="space-y-6 text-black text-lg">
            <p className="leading-relaxed" data-reveal data-reveal-delay="0.2">
              With a rapidly increasing number of young Australians reporting that money worries affect their mental
              wellbeing, financial education isn't optional; it's essential. We help bridge the gap by combining
              financial literacy with psychology and wellbeing education, giving you the knowledge and confidence to
              stay one step ahead.
            </p>
            <p className="leading-relaxed" data-reveal data-reveal-delay="0.4">
              Building money skills early creates strong foundations for life. When young people learn to budget, save,
              and understand their money mindset, they gain more than financial literacy—they gain confidence,
              resilience, and independence.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-light-primary" data-reveal data-reveal-delay="0.6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-light-primary mb-2">{animatedValues.stat1}%</div>
              <h3 className="text-lg font-bold text-black mb-2">FINANCIALLY<br />ILLITERATE</h3>
              <p className="text-sm text-black leading-relaxed">
                of females and 27% of males graduate from Australian High schools financially literate
              </p>
            </div>
          </div>

          <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-light-primary" data-reveal data-reveal-delay="0.8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-light-primary mb-2">{animatedValues.stat2}%</div>
              <h3 className="text-lg font-bold text-black mb-2">FINANCIALLY<br />ILLITERATE</h3>
              <p className="text-sm text-black leading-relaxed">
                of the total Australian population (more than 8.5 million people) are financially illiterate
              </p>
            </div>
          </div>

          <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-light-primary" data-reveal data-reveal-delay="1.0">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-light-primary mb-2">{animatedValues.stat3}%</div>
              <h3 className="text-lg font-bold text-black mb-2">INADEQUATE<br />SAVINGS</h3>
              <p className="text-sm text-black leading-relaxed">
                of women will retire with inadequate savings to fund a comfortable lifestyle
              </p>
            </div>
          </div>

          <div className="stat-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-light-primary" data-reveal data-reveal-delay="1.2">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-light-primary mb-2">{animatedValues.stat4}%</div>
              <h3 className="text-lg font-bold text-black mb-2">FINANCIAL<br />STRESS</h3>
              <p className="text-sm text-black leading-relaxed">
                Australians report low satisfaction in their lives due to financial stress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


