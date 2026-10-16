import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonialVideos } from "../../data/testimonialsData"
import TestimonialVideoCard from "./TestimonialVideoCard"
import "./TestimonialsSection.css"

export default function TestimonialsSection() {
  // Start centered on the 3rd card (index 2) so cards fan out symmetrically
  const [activeIndex, setActiveIndex] = useState(2)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const containerRef = useRef(null)

  const total = testimonialVideos.length

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
    } else if (e.key === "ArrowRight") {
      nextSlide()
    }
  }

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={containerRef}
    >
      <div className="testimonials-container">
        {/* SECTION HEADER */}
        <header className="testimonials-header">
          <p className="testimonials-subtitle">
            REAL PEOPLE. REAL EXPERIENCES. A CLEARER WAY TO SEE.
          </p>
          <h2 id="testimonials-heading" className="testimonials-heading">
            Precision, made personal
          </h2>
        </header>

        {/* OVERLAPPING VIDEO CAROUSEL STAGE */}
        <div
          className="testimonials-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="testimonials-stage">
            {testimonialVideos.map((item, index) => {
              // Calculate circular offset relative to active card
              let offset = index - activeIndex
              if (offset > total / 2) offset -= total
              if (offset < -total / 2) offset += total

              const isActive = offset === 0

              return (
                <TestimonialVideoCard
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  offset={offset}
                  onClick={() => goToSlide(index)}
                />
              )
            })}
          </div>
        </div>

        {/* CONTROLS: PREV, DOTS, NEXT */}
        <div
          className="testimonials-controls"
          aria-label="Testimonials carousel controls"
        >
          <button
            type="button"
            className="testimonials-arrow-btn prev"
            onClick={prevSlide}
            aria-label="Previous customer story"
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          <div
            className="testimonials-dots"
            role="tablist"
            aria-label="Choose story"
          >
            {testimonialVideos.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`testimonials-dot ${
                  idx === activeIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to ${item.customerName || `Story ${idx + 1}`}`}
                role="tab"
                aria-selected={idx === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials-arrow-btn next"
            onClick={nextSlide}
            aria-label="Next customer story"
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  )
}
