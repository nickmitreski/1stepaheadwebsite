"use client"
import Image from 'next/image'
import { SectionTitle } from "@/components/ui/section-title"
import { useRef } from "react"
import { useParallax } from "@/lib/use-parallax"
import { useReveal } from "@/lib/use-reveal"

export default function ValuesWhite() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useParallax({ root: sectionRef })
  useReveal({ root: sectionRef, stagger: 0.3 })

  return (
    <section ref={sectionRef} id="values-white" className="relative overflow-hidden border-t bg-section-b">
      <div className="container py-24 md:py-32 grid gap-8 md:grid-cols-2 items-center">
        <div className="order-1 md:order-1 flex justify-center md:justify-start" data-reveal data-reveal-direction="left">
          <div className="relative w-full max-w-2xl aspect-[16/9] rounded-[32px] overflow-hidden" data-parallax data-parallax-speed="120">
            <Image 
              src="/images_for_placeholders/about1.png" 
              alt="Our values visual"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
              priority
            />
          </div>
        </div>
        <div className="order-2 md:order-2 text-left" data-reveal data-reveal-direction="right">
          <SectionTitle 
            keyword="Foundation" 
            title="Our Values" 
            center={false}
            className="mb-6"
          />
          <ul className="list-disc list-inside space-y-2 text-black text-lg">
            <li data-reveal data-reveal-delay="0.1"><strong className="text-black">Empower</strong> – through education and self-awareness</li>
            <li data-reveal data-reveal-delay="0.2"><strong className="text-black">Trust</strong> – in the way we teach, lead, and support</li>
            <li data-reveal data-reveal-delay="0.3"><strong className="text-black">Growth</strong> – as lifelong learners, individuals, and communities</li>
            <li data-reveal data-reveal-delay="0.4"><strong className="text-black">Motivation</strong> – to take action and stay 1 step ahead</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


