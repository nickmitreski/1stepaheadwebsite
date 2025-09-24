"use client"
import Image from "next/image"
import { useRef } from "react"
import { useParallax } from "@/lib/use-parallax"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useParallax({ root: sectionRef })
  return (
    <section ref={sectionRef} className="relative bg-gradient-hero overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content - Left side */}
          <div className="text-left pt-20 lg:pt-0">
            <div className="space-y-1">
              {/* Hero Title with exact Anur staggered layout */}
              <div className="text-white" data-parallax data-parallax-speed="240">
                <div className="text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-black leading-none tracking-tight">
                  <div className="block">
                    <span>Building</span>
                  </div>
                  <div className="block pl-8 md:pl-16 lg:pl-24 xl:pl-36 -mt-1">
                    <span>Brighter</span>
                  </div>
                  <div className="block pl-28 md:pl-40 lg:pl-56 xl:pl-72 -mt-1">
                    <span>Futures</span>
                  </div>
                </div>
              </div>
              <p className="text-black text-lg md:text-xl mt-3">
                transferring young lives through financial education and psychological insights
              </p>
            </div>
          </div>

          {/* Right Side - Empty space for layout */}
          <div className="hidden lg:block" data-parallax data-parallax-speed="180"></div>
          
        </div>
      </div>

      {/* Right Image Section - exact Anur positioning */}
      <div className="hidden lg:block absolute right-16 xl:right-64 top-1/2 -translate-y-[60%] z-20">
        <div className="relative" data-parallax data-parallax-speed="180">
          {/* Main Image with bounce animation */}
          <div className="relative">
            <Image
              src="/right-img.png"
              alt="Hero illustration"
              width={690}
              height={690}
              className="w-full max-w-xl xl:max-w-2xl"
              style={{
                animation: 'bounce 3s linear infinite'
              }}
            />
          </div>
          
          {/* Animated Circles - exact Anur sizing and positioning */}
          <div 
            className="absolute -left-20 top-0 w-[754px] h-[754px] border border-dashed border-white/20 rounded-full -z-10 xl:block hidden"
            style={{
              animation: 'circle 60s linear infinite'
            }}
          ></div>
          
          <div 
            className="absolute -left-5 top-16 w-[634px] h-[634px] border border-white/20 rounded-full -z-10 xl:block hidden"
            style={{
              animation: 'circle 60s linear infinite'
            }}
          ></div>
          
          <div 
            className="absolute left-8 top-28 w-[535px] h-[535px] border border-dashed border-white/20 rounded-full -z-10"
            style={{
              animation: 'circle 60s linear infinite'
            }}
          ></div>
          
          <div 
            className="absolute left-20 top-40 w-[424px] h-[424px] border border-white/20 rounded-full -z-10 xl:block hidden"
            style={{
              animation: 'circle 60s linear infinite'
            }}
          ></div>
        </div>
      </div>

      

      {/* Custom Keyframe Animations */}
      <style jsx>{`
        @keyframes circle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}