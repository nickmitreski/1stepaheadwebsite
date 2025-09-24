"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import QuoteBreakSection from "@/components/quote-break-section"
import GreyPlaceholder from "@/components/grey-placeholder"
import { CheckCircle, DollarSign, Brain, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-config"
import { useParallax } from "@/lib/use-parallax"
import { useReveal } from "@/lib/use-reveal"

const programs = [
  {
    title: "Financial literacy",
    description: "Budgeting, saving, tax, super, banking, payslips",
    icon: DollarSign,
  },
  {
    title: "Psychology & mindset tools", 
    description: "Values, habits, stress, gratitude, resilience",
    icon: Brain,
  },
  {
    title: "Real-world application",
    description: "Making financial decisions with confidence", 
    icon: Target,
  },
]

const outcomes = [
  "Practical money management skills",
  "Improved understanding of their money mindset", 
  "Strategies to set and achieve SMART goals",
  "Tools to reduce financial stress and improve wellbeing",
  "Greater confidence in navigating independence"
]

const topics = [
  "Understanding money profiles",
  "Budgeting and saving basics", 
  "Needs vs. wants",
  "SMART goals",
  "Tax, super & payslips",
  "Banking systems",
  "Money habits & mindset",
  "Gratitude & financial wellbeing",
  "Values-based decision making",
]

const organizations = [
  "High schools (Years 10–12)",
  "Youth organisations and shelters",
  "Community groups", 
  "TAFEs and training providers",
  "Family support services",
  "Local councils and youth hubs",
]

export default function ProgramsPage() {
  const programsRef = useRef<HTMLDivElement>(null)
  const topicsRef = useRef<HTMLDivElement>(null)
  const orgsRef = useRef<HTMLDivElement>(null)
  const deliveryRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const outcomesRef = useRef<HTMLDivElement>(null)

  // Add parallax and reveal effects
  useParallax({ root: heroRef })
  useParallax({ root: programsRef })
  useParallax({ root: topicsRef })
  useParallax({ root: orgsRef })
  useParallax({ root: deliveryRef })
  useParallax({ root: outcomesRef })

  useReveal({ root: heroRef })
  useReveal({ root: programsRef, stagger: 0.2 })
  useReveal({ root: topicsRef, stagger: 0.1 })
  useReveal({ root: orgsRef, stagger: 0.15 })
  useReveal({ root: deliveryRef, stagger: 0.2 })
  useReveal({ root: outcomesRef, stagger: 0.1 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Program cards animation
      if (programsRef.current) {
        const cards = programsRef.current.querySelectorAll(".program-card")
        gsap.fromTo(cards, 
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: programsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Topics cards animation
      if (topicsRef.current) {
        const cards = topicsRef.current.querySelectorAll(".topic-card")
        gsap.fromTo(cards,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: topicsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Organizations animation
      if (orgsRef.current) {
        const items = orgsRef.current.querySelectorAll(".org-card")
        gsap.fromTo(items,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: orgsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Delivery cards animation
      if (deliveryRef.current) {
        const cards = deliveryRef.current.querySelectorAll(".delivery-card")
        gsap.fromTo(cards,
          { y: 60, opacity: 0, rotateX: 15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: deliveryRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }
  }, [])

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" data-parallax data-parallax-speed="80">
          <Image
            src="/bg_overlays/bg2.png"
            alt=""
            fill
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="container max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-black" data-reveal>
            What We <span className="relative">
              Offer
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-light-primary rounded-full"></div>
            </span>
          </h1>
          <p className="text-black text-lg leading-relaxed" data-reveal data-reveal-delay="0.2">
            At 1 Step Ahead, we create practical, engaging, and psychology-informed financial education workshops designed
            specifically for young people aged 16–24. Our programs go beyond dollars and cents; they empower students with
            the knowledge, mindset, and confidence to stay one step ahead in life.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-20 md:py-24 bg-section-b">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center" data-reveal>
            <h2 className="text-black mb-6">Our Programs</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={program.title} className="program-card group hover:shadow-xl transition-all duration-500 bg-white border-2 border-light-primary" data-reveal data-reveal-delay={index * 0.2}>
                <CardHeader className="text-center">
                  <program.icon className="h-8 w-8 mx-auto mb-2 text-light-primary" />
                  <CardTitle className="text-black text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-black">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-black text-center max-w-3xl mx-auto text-lg" data-reveal data-reveal-delay="0.6">
            Each workshop is tailored to your group through pre-program surveys, ensuring relevance and impact.
          </p>
        </div>
      </section>

      <QuoteBreakSection image="/images/break.png" quote="Programs that blend knowledge and mindset create lasting change." heightClassName="h-56 md:h-80" highlightWords={["knowledge", "mindset"]} />

      {/* Who We Work With */}
      <section ref={orgsRef} className="py-20 md:py-24 bg-section-a relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" data-parallax data-parallax-speed="90">
          <Image
            src="/bg_overlays/2.png"
            alt=""
            fill
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="container max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center" data-reveal>
            <h2 className="text-black mb-6">Who We Work With</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((item, index) => (
              <Card key={item} className="org-card hover:shadow-xl transition-all duration-500 bg-white border-2 border-light-primary" data-reveal data-reveal-delay={index * 0.15}>
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-black">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Outcomes */}
      <section ref={outcomesRef} className="py-20 md:py-24 bg-section-b">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div data-reveal data-reveal-direction="left">
              <h2 className="text-black mb-8">Workshop Outcomes</h2>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3" data-reveal data-reveal-delay={index * 0.1}>
                    <CheckCircle className="h-5 w-5 text-light-primary mt-0.5 flex-shrink-0" /> 
                    <span className="text-black">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center" data-reveal data-reveal-direction="right">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden" data-parallax data-parallax-speed="110">
                <Image
                  src="/images_for_placeholders/students1a.png"
                  alt="Students achieving workshop outcomes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteBreakSection image="/images/break_2.png" quote="Every session is tailored to your group for real-world impact." heightClassName="h-56 md:h-80" highlightWords={["tailored", "impact"]} />

      {/* Flexible Delivery */}
      <section ref={deliveryRef} className="py-20 md:py-24 bg-section-a relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" data-parallax data-parallax-speed="100">
          <Image
            src="/bg_overlays/bg3.png"
            alt=""
            fill
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="container max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center" data-reveal>
            <h2 className="text-black mb-12">Flexible Delivery Options</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-2 border-light-primary" data-reveal data-reveal-delay="0">
              <CardHeader className="text-center">
                <CardTitle className="text-black text-xl">Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-light-primary mb-3">40–60</p>
                <p className="text-black font-medium">minutes per session</p>
                <p className="text-black/80 text-sm mt-2">Tailored to your group's needs</p>
              </CardContent>
            </Card>
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-2 border-light-primary" data-reveal data-reveal-delay="0.2">
              <CardHeader className="text-center">
                <CardTitle className="text-black text-xl">Format</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black font-medium leading-relaxed mb-2">One-off workshops or multi-part series</p>
                <p className="text-black/80 text-sm">Flexible scheduling to fit your program</p>
              </CardContent>
            </Card>
            <Card className="delivery-card hover:shadow-xl transition-all duration-300 bg-white border-2 border-light-primary" data-reveal data-reveal-delay="0.4">
              <CardHeader className="text-center">
                <CardTitle className="text-black text-xl">Delivery</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black font-medium leading-relaxed mb-2">In-person (NSW & VIC) or virtual Australia-wide</p>
                <p className="text-black/80 text-sm">Choose what works best for your students</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section ref={topicsRef} className="py-20 md:py-24 bg-section-b">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center" data-reveal>
            <h2 className="text-black mb-6">Topics We Cover</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Card key={topic} className="topic-card hover:shadow-lg transition-all duration-300 border-2 border-light-primary/30 hover:border-light-primary" data-reveal data-reveal-delay={index * 0.1}>
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-black">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12" data-reveal data-reveal-delay="0.8">
            <Button size="lg" className="text-lg px-8 bg-light-primary text-white border-2 border-light-primary hover:bg-light-primary/90">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  )
}


