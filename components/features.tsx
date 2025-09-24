"use client"
import Image from "next/image"
import { Heart, Users, BookOpen, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionTitle } from "@/components/ui/section-title"
import { useRef } from "react"
import { useReveal } from "@/lib/use-reveal"

const features = [
  {
    name: "Our Mission",
    description:
      "1 Step Ahead empowers youth aged 16–24 through psychology, financial literacy, and real-life skills. We build confidence by helping young people understand their mindset, values, and habits.",
    icon: Target,
  },
  {
    name: "Who We Are",
    description:
      "We're a team of financial professionals and mental health practitioners. Our unique approach combines practical knowledge with psychological insights to help the next generation thrive.",
    icon: Users,
  },
  {
    name: "What We Offer",
    description:
      "We provide interactive, tailored workshops for schools, community groups, and youth services. Topics cover budgeting, SMART goals, money mindsets, and values-based decision-making, customized via pre-surveys.",
    icon: BookOpen,
  },
  {
    name: "Why It Matters",
    description:
      "Young people face big decisions without the right tools. We bridge the gap with financial literacy and wellbeing, equipping them with knowledge and confidence to stay one step ahead.",
    icon: Heart,
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useReveal({ root: sectionRef, stagger: 0.1, duration: 0.6 })

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-24 bg-section-a relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/bg_overlays/2.png"
          alt=""
          fill
          className="object-cover pointer-events-none"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-10">
          {/* Centered Title and Subtitle */}
          <div className="flex gap-4 flex-col items-center text-center" data-reveal>
            <div>
              <Badge variant="outline" className="bg-white text-black border-light-primary">1 Step Ahead</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <SectionTitle 
                keyword="Impact" 
                title="About Us" 
              />
              <p className="text-black text-lg leading-relaxed max-w-3xl">
                Discover how 1 Step Ahead transforms young lives through financial education and psychological insights.
              </p>
            </div>
          </div>
          
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Our Mission - spans 2 columns */}
            <div className="bg-white rounded-md lg:col-span-2 p-6 border-2 border-dark-primary/20 hover:border-dark-primary transition-all duration-300" data-reveal data-reveal-delay="0.2">
              <div className="flex gap-6">
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl tracking-tight text-black mb-3">{features[0].name}</h3>
                  <p className="text-black text-base leading-relaxed">
                    {features[0].description}
                  </p>
                </div>
                <div className="relative w-[352px] h-[169px] rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/images_for_placeholders/b-thub-3.png"
                    alt="Students learning about financial literacy"
                    fill
                    className="object-cover"
                    sizes="352px"
                  />
                </div>
              </div>
            </div>
            
            {/* Who We Are - single column */}
            <div className="bg-white rounded-md p-6 border-2 border-dark-primary/20 hover:border-dark-primary transition-all duration-300" data-reveal data-reveal-delay="0.4">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-black mb-3">{features[1].name}</h3>
                <p className="text-black text-base leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>

            {/* What We Offer - single column */}
            <div className="bg-white rounded-md p-6 border-2 border-dark-primary/20 hover:border-dark-primary transition-all duration-300" data-reveal data-reveal-delay="0.6">
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-black mb-3">{features[2].name}</h3>
                <p className="text-black text-base leading-relaxed">
                  {features[2].description}
                </p>
              </div>
            </div>
            
            {/* Why It Matters - spans 2 columns */}
            <div className="bg-white rounded-md lg:col-span-2 p-6 border-2 border-dark-primary/20 hover:border-dark-primary transition-all duration-300" data-reveal data-reveal-delay="0.8">
              <div className="flex gap-6">
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl tracking-tight text-black mb-3">{features[3].name}</h3>
                  <p className="text-black text-base leading-relaxed">
                    {features[3].description}
                  </p>
                </div>
                <div className="relative w-[352px] h-[169px] rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src="/images_for_placeholders/b-thub-1.png"
                    alt="Financial wellbeing workshop"
                    fill
                    className="object-cover"
                    sizes="352px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
