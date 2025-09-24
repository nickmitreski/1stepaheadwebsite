"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"
import { useRef } from "react"
import { useParallax } from "@/lib/use-parallax"
import { useReveal } from "@/lib/use-reveal"

const topics = [
  { 
    title: "Understanding Money Profiles", 
    description: "Discover your unique relationship with money and how different personalities approach financial decisions."
  },
  { 
    title: "Budgeting & Saving", 
    description: "Learn practical budgeting techniques and strategies to build sustainable saving habits for your future."
  },
  { 
    title: "Needs vs. Wants", 
    description: "Master the art of distinguishing between essential expenses and desires to make smarter spending choices."
  },
  { 
    title: "SMART Goals", 
    description: "Set Specific, Measurable, Achievable, Relevant, and Time-bound financial goals that actually work."
  },
  { 
    title: "Banking & Tax Basics", 
    description: "Navigate the banking system and understand tax essentials that every young adult should know."
  },
  { 
    title: "Money Habits & Mindset", 
    description: "Identify and reshape the psychological patterns that drive your financial behaviors and decisions."
  }
]

export default function WhatWeOfferLanding() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useParallax({ root: sectionRef })
  useReveal({ root: sectionRef, stagger: 0.2 })

  const imageMap: Record<string, string> = {
    "Understanding Money Profiles": "/gen-images/Understanding-Money-Profiles.jpg",
    "Budgeting & Saving": "/gen-images/Budgeting_Saving.jpg",
    "Needs vs. Wants": "/gen-images/Needs_Wants.jpg?v=1",
    "SMART Goals": "/gen-images/SMART_Goals.jpg",
    "Banking & Tax Basics": "/gen-images/Banking_Tax-Basics.jpg",
    "Money Habits & Mindset": "/gen-images/Money_Habits.jpg",
  }

  return (
    <section ref={sectionRef} id="what-we-offer-landing" className="py-20 md:py-24 bg-section-b">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-center text-center" data-reveal>
            <div>
              <Badge variant="outline" className="bg-white text-black border-light-primary">Workshop Topics</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <SectionTitle 
                keyword="Programs" 
                title="What We Offer" 
              />
              <p className="text-black text-lg max-w-3xl leading-relaxed">
                We design interactive, custom workshops for schools, community groups, and youth services. Every program includes a pre-survey so we can tailor the experience to meet your group's needs and measure growth.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="flex flex-col gap-2" data-reveal>
                <div className="relative bg-gray-200 rounded-md aspect-video mb-2 overflow-hidden">
                  {imageMap[topic.title] ? (
                    <Image
                      src={imageMap[topic.title]}
                      alt={topic.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">Image Placeholder</span>
                  )}
                </div>
                <h3 className="text-xl tracking-tight text-black">{topic.title}</h3>
                <p className="text-black text-base leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4" data-reveal>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" className="text-lg px-8 bg-dark-primary text-white hover:bg-dark-primary/90">Enquire About a Workshop</Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white" asChild>
                <a href="/programs">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


