"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Instagram, MapPin, Phone, Clock, Users } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@1stepahead.au",
    description: "Get in touch for workshop enquiries"
  },
  {
    icon: Instagram,
    title: "Follow Us",
    content: "@1stepahead.au",
    description: "Daily tips and insights"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Victoria, Australia", 
    description: "Available Australia-wide online"
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Within 24 hours",
    description: "We'll get back to you quickly"
  }
]

const services = [
  {
    icon: Users,
    title: "School Workshops",
    description: "Tailored programs for Years 10-12 students"
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Custom sessions for youth organizations"
  },
  {
    icon: Users,
    title: "Professional Development",
    description: "Training for educators and youth workers"
  }
]

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Form animation
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Contact cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".contact-card")
        gsap.fromTo(cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

      // Services animation
      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll(".service-card")
        gsap.fromTo(cards,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: servicesRef.current,
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
      <section className="py-20 md:py-24 relative bg-gray-300 bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-white drop-shadow-2xl">
            Get In <span className="relative">
              Touch
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFA800] rounded-full"></div>
            </span>
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Ready to bring financial education and wellbeing to your young people? 
            Let's discuss how we can create a tailored program for your group.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Form */}
            <div ref={formRef}>
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Send us a message</CardTitle>
                  <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="School, youth center, etc." />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Workshop enquiry" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your group, your goals, and how we can help..."
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-black mb-8">Contact Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're an educator, youth worker, or community leader, 
                  we're here to help you bring financial education to young people.
                </p>
              </div>

              <div ref={cardsRef} className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="contact-card hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <info.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-black mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.content}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Help With */}
      <section className="py-20 md:py-24 bg-[#FFA800]">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-black mb-6">What We Can Help With</h2>
            <p className="text-black text-lg max-w-3xl mx-auto">
              From one-off workshops to ongoing program development, we're flexible in our approach
            </p>
          </div>
          
          <div ref={servicesRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="service-card hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center">
                  <service.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-black text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-black">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Join the growing community of educators making a difference in young people's financial futures.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="text-lg px-8">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Download Info Pack
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}