"use client"

import { useEffect } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-config"

type UseRevealOptions = {
  root: React.RefObject<HTMLElement | null>
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  stagger?: number
}

// Apply reveal animations to elements with data-reveal attributes
export function useReveal({ 
  root, 
  direction = "up", 
  delay = 0, 
  duration = 0.6, 
  stagger = 0.1 
}: UseRevealOptions) {
  useEffect(() => {
    if (!root.current) return

    const ctx = gsap.context(() => {
      const elements = Array.from(
        root.current!.querySelectorAll<HTMLElement>("[data-reveal]")
      )

      elements.forEach((el, index) => {
        const customDirection = el.getAttribute("data-reveal-direction") || direction
        const customDelay = parseFloat(el.getAttribute("data-reveal-delay") || "0") || delay
        const customDuration = parseFloat(el.getAttribute("data-reveal-duration") || "0") || duration

        let fromProps: any = { opacity: 0 }
        let toProps: any = { opacity: 1, duration: customDuration }

        switch (customDirection) {
          case "up":
            fromProps.y = 60
            toProps.y = 0
            break
          case "down":
            fromProps.y = -60
            toProps.y = 0
            break
          case "left":
            fromProps.x = 60
            toProps.x = 0
            break
          case "right":
            fromProps.x = -60
            toProps.x = 0
            break
        }

        gsap.fromTo(el, fromProps, {
          ...toProps,
          delay: customDelay + (index * stagger),
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        })
      })
    }, root)

    return () => ctx.revert()
  }, [root, direction, delay, duration, stagger])
}
