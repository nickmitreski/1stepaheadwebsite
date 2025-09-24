"use client"

import { useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-config"

type UseParallaxOptions = {
  root: React.RefObject<HTMLElement | null>
}

// Apply exaggerated parallax to any children with data-parallax attributes inside root
// Usage: add data-parallax data-parallax-speed="200" (positive moves up on scroll)
export function useParallax({ root }: UseParallaxOptions) {
  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      const elements = Array.from(
        root.current!.querySelectorAll<HTMLElement>("[data-parallax]")
      )

      elements.forEach((el) => {
        const speedAttr = el.getAttribute("data-parallax-speed")
        const speed = speedAttr ? parseFloat(speedAttr) : 100

        gsap.fromTo(
          el,
          { y: speed * 0.6 },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [root])
}


