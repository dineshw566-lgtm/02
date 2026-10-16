import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./SmoothScroll.css"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // 1. Initialize modern momentum smooth scrolling
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    })

    lenisRef.current = lenis

    // 2. Sync Lenis scroll with GSAP ScrollTrigger for FoldText and ScrollExpand
    lenis.on("scroll", ScrollTrigger.update)

    // 3. Drive Lenis updates using GSAP's high-precision animation frame ticker
    const tickHandler = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickHandler)
    gsap.ticker.lagSmoothing(0)

    // 4. Observe body size changes for dynamic route/content loading
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize()
    })
    resizeObserver.observe(document.body)

    // 5. Pause smooth scrolling when modals are open
    const modalObserver = new MutationObserver(() => {
      if (document.body.classList.contains("modal-open")) {
        lenis.stop()
      } else {
        lenis.start()
      }
    })
    modalObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      modalObserver.disconnect()
      resizeObserver.disconnect()
      gsap.ticker.remove(tickHandler)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <div className="smooth-scroll-root">{children}</div>
}
