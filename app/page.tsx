import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ValuesWhite from "@/components/values-white"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Why from "@/components/why"
import Features from "@/components/features"
import WhatWeOfferLanding from "@/components/what-we-offer-landing"
import Team from "@/components/team"
import QuoteBreakSection from "@/components/quote-break-section"
import TestimonialsSlider from "@/components/testimonials-slider"

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Features />
      <QuoteBreakSection image="/images/break.png" quote="Financial confidence starts with understanding your mindset and your money." heightClassName="h-56 md:h-80" highlightWords={["confidence", "money"]} />
      <WhatWeOfferLanding />
      <TestimonialsSlider />
      <QuoteBreakSection image="/images/break_2.png" quote="Good money habits are learned, practiced, and shared." heightClassName="h-56 md:h-80" highlightWords={["money", "shared"]} />
      <ValuesWhite />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
