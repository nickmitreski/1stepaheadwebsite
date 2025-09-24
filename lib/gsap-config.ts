import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Ensure GSAP plugins are registered only once
let isRegistered = false

export function registerGSAPPlugins() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    isRegistered = true
  }
}

// Auto-register on import
registerGSAPPlugins()

export { gsap, ScrollTrigger }



