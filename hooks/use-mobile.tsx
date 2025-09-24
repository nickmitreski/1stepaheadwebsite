import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Use matchMedia for better performance and proper event handling
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler function with debouncing to reduce excessive re-renders
    let timeoutId: NodeJS.Timeout
    const debouncedHandler = (event: MediaQueryListEvent | MediaQueryList) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(event.matches)
      }, 16) // ~60fps throttling
    }

    // Set initial value
    debouncedHandler(mediaQuery)
    
    // Add event listener
    mediaQuery.addEventListener("change", debouncedHandler)
    
    // Cleanup
    return () => {
      clearTimeout(timeoutId)
      mediaQuery.removeEventListener("change", debouncedHandler)
    }
  }, [])

  return !!isMobile
}

// Alternative hook with explicit SSR handling
export function useIsMobileWithSSR() {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isHydrated, setIsHydrated] = React.useState(false)

  React.useEffect(() => {
    setIsHydrated(true)
    
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    let timeoutId: NodeJS.Timeout
    const debouncedHandler = (event: MediaQueryListEvent | MediaQueryList) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(event.matches)
      }, 16)
    }

    debouncedHandler(mediaQuery)
    mediaQuery.addEventListener("change", debouncedHandler)
    
    return () => {
      clearTimeout(timeoutId)
      mediaQuery.removeEventListener("change", debouncedHandler)
    }
  }, [])

  // Return false during SSR to prevent hydration mismatches
  return isHydrated ? isMobile : false
}
