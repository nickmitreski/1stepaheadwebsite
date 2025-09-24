"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "@/components/ui/section-title";
import { useParallax } from "@/lib/use-parallax";

type Item = { quote: string; author: string };

const ITEMS: Item[] = [
  {
    quote:
      "This was the first time I actually understood how money works. It made me feel like I could handle the future.",
    author: "Year 12 Student",
  },
  {
    quote:
      "I loved how it wasn't boring finance stuff. It made sense and helped me see how I think about money.",
    author: "Youth program participant",
  },
  {
    quote:
      "Clear, practical and engaging. I left with tools I can use right away.",
    author: "TAFE participant",
  },
  {
    quote:
      "Our students connected with the psychology of money – it changed the conversation.",
    author: "School wellbeing lead",
  },
];

const OPTIONS = { align: "start" as const, loop: true, skipSnaps: false };

export default function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useParallax({ root: sectionRef });

  // Memoized autoplay function with proper cleanup
  const startAutoplay = useCallback(() => {
    if (!emblaApi || !isPlaying) return;
    
    // Clear any existing interval
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      // Double-check emblaApi exists before calling
      if (emblaApi && emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
    }, 4500);
  }, [emblaApi, isPlaying]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsPlaying(false);
    stopAutoplay();
  }, [stopAutoplay]);

  const handleMouseLeave = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Setup autoplay when emblaApi is ready
  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    // Add event listeners for user interactions
    emblaApi.on('pointerDown', stopAutoplay);
    emblaApi.on('pointerUp', () => {
      if (isPlaying) {
        setTimeout(startAutoplay, 2000); // Resume after 2 seconds
      }
    });

    return () => {
      stopAutoplay();
      // Remove event listeners
      emblaApi.off('pointerDown', stopAutoplay);
      emblaApi.off('pointerUp', startAutoplay);
    };
  }, [emblaApi, startAutoplay, stopAutoplay, isPlaying]);

  // Handle play state changes
  useEffect(() => {
    if (isPlaying) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }, [isPlaying, startAutoplay, stopAutoplay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-section-a relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" data-parallax data-parallax-speed="80">
        <Image
          src="/bg_overlays/bg3.png"
          alt=""
          fill
          className="object-cover pointer-events-none"
        />
      </div>
      <div className="container relative z-10">
        <div data-parallax data-parallax-speed="120">
          <SectionTitle 
            keyword="Success" 
            title="What People Are Saying" 
          />
        </div>
        <div 
          className="mt-10 overflow-hidden" 
          ref={emblaRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-label="Customer testimonials carousel"
          data-parallax
          data-parallax-speed="140"
        >
          <div className="flex -ml-4">
            {ITEMS.map((item, idx) => (
              <div 
                key={`testimonial-${idx}`} 
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <div 
                  className={cn("rounded-2xl border bg-background p-6 h-full")}
                  role="article"
                  aria-label={`Testimonial from ${item.author}`}
                > 
                  <blockquote className="text-lg text-black">"{item.quote}"</blockquote>
                  <cite className="mt-4 text-sm text-black not-italic">— {item.author}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


