"use client"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { useRef } from "react"
import { useReveal } from "@/lib/use-reveal"

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useReveal({ root: sectionRef, stagger: 0.15, duration: 0.6 })

  return (
    <section ref={sectionRef} id="team" className="py-20 md:py-24 bg-section-a relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/bg_overlays/bg1.png"
          alt=""
          fill
          className="object-cover pointer-events-none"
        />
      </div>
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16" data-reveal>
          <SectionTitle 
            keyword="Experts" 
            title="WHO WE ARE" 
            className="mb-8"
          />
        </div>
        
        <div className="space-y-16">
          {/* George Gendy */}
          <div className="grid gap-12 md:grid-cols-2 items-center" data-reveal data-reveal-delay="0.3">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-black mb-2">GEORGE GENDY</h3>
              <p className="text-lg font-semibold text-light-primary mb-4">
                Co-founder 1 Step Ahead / Registered tax agent / Finance broker specialist
              </p>
              <p className="text-black leading-relaxed">
                With over 20 years of experience in banking, finance, and accounting, George is passionate about empowering the next generation with practical financial knowledge. George leads an accounting and finance brokerage that offers tailored financial analysis and consulting services. George is dedicated to making financial literacy accessible for young Australians.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image 
                src="/images/geroge.png"
                alt="George Gendy - Co-founder 1 Step Ahead"
                width={400}
                height={400}
                className="object-cover w-full h-auto max-w-md"
              />
            </div>
          </div>

          {/* Jennica Kelada */}
          <div className="grid gap-12 md:grid-cols-2 items-center" data-reveal data-reveal-delay="0.6">
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <Image 
                src="/images/jen.png"
                alt="Jennica Kelada - Co-founder 1 Step Ahead"
                width={400}
                height={400}
                className="object-cover w-full h-auto max-w-md"
              />
            </div>
            <div className="text-left order-1 md:order-2">
              <h3 className="text-2xl font-bold text-black mb-2">JENNICA KELADA</h3>
              <p className="text-lg font-semibold text-light-primary mb-4">
                Co-founder 1 Step Ahead / Registered Clinical Counsellor
              </p>
              <p className="text-black leading-relaxed">
                With over 14 years experience working in mental health, Jennica is deeply committed to supporting young people in realising their full potential. Jennica has worked in maximum security prisons, where she observed the profound effects of inadequate financial literacy. Her experience extends to crisis support services, and currently leads a counselling and wellbeing team working with children and adolescence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


