import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// Import existing optimized lifestyle imagery
import craftsmanLifestyle from "../../assets/hero page img/web/elegant-young-handsome-man-studio-fashion-portrait.jpg"
import womanLifestyle from "../../assets/hero page img/web/indoor-shot-smart-successful-female-entrepreneur-sharing-ways-success-touching-frames-checking-glasses-smiling-delighted-accomplished-as-gazing-self-assured-camera-against-white-wall.jpg"
import manLifestyle from "../../assets/hero page img/web/charming-man-with-fashion-glasses.jpg"
import sunLifestyle from "../../assets/hero page img/web/beauty-fashion-brunette-young-model-girl-wearing-stylish-sunglasses-isolated-gray-fashion-blogger.jpg"
import logoMark from "../../assets/logo-mark.png"
import { images } from "../../data/products"
import "./PromoBannerCarousel.css"

// The 3 promotional campaign slides for the second banner
const promoSlides = [
  {
    id: "promo-eyewear-collection",
    themeClass: "slide-theme-1",
    badge: "ATELIER CRAFT · 2026",
    heading: "SEE THE WORLD DIFFERENTLY",
    supportingText: "Discover frames that define your style.",
    ctaText: "EXPLORE COLLECTION",
    ctaLink: "/eyeglasses",
    lifestyleImg: womanLifestyle,
    lifestyleAlt: "Woman wearing handcrafted optical glasses",
    productImg: images.frames[0],
    productAlt: "Hand-finished Italian bio-acetate frames",
  },
  {
    id: "promo-everyday-essentials",
    themeClass: "slide-theme-2",
    badge: "SIGNATURE SERIES · ESSENTIALS",
    heading: "STYLE IN EVERY DETAIL",
    supportingText: "Find the perfect frame for every moment.",
    ctaText: "SHOP BESTSELLERS",
    ctaLink: "/eyeglasses?collection=essentials",
    lifestyleImg: manLifestyle,
    lifestyleAlt: "Man wearing stainless steel prescription glasses",
    productImg: images.frames[1],
    productAlt: "Precision engineered titanium frames",
  },
  {
    id: "promo-new-arrivals",
    themeClass: "slide-theme-3",
    badge: "NEW PERSPECTIVE · EDITORIAL",
    heading: "A NEW POINT OF VIEW",
    supportingText: "Explore the latest arrivals.",
    ctaText: "DISCOVER MORE",
    ctaLink: "/sunglasses",
    lifestyleImg: sunLifestyle,
    lifestyleAlt: "Model wearing sculptural sunglasses",
    productImg: images.frames[3],
    productAlt: "UV400 protective polarized sunglasses",
  },
]

export default function PromoBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)
  const slideCount = promoSlides.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Automatic slide rotation every 5 seconds (pauses when hovered, focused, or tab hidden)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setIsPaused(true)
      } else {
        setIsPaused(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Touch swipe support for mobile
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

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prevSlide()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      nextSlide()
    }
  }

  return (
    <section
      className="promo-banners-section"
      aria-label="Promotional campaign banners"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ====================================================================
          1. TOP PROMOTIONAL BANNER
          Reference dimensions: 1378px x 205px (~6.72:1 ratio)
          Spacing: ~96px below preceding section, centered horizontally
          ==================================================================== */}
      <Link
        to="/about"
        className="promo-banner-top"
        aria-label="Made in Craftsmanship: A Vizhen Story - Discover the Atelier"
      >
        <div className="promo-top-img-wrap">
          <img
            src={craftsmanLifestyle}
            alt="Hand-finishing artisanal frames"
            loading="eager"
            className="promo-top-img"
          />
        </div>

        <div className="promo-top-copy">
          <span className="promo-top-badge">VIZHEN EDITORIAL SERIES</span>
          <h3 className="promo-top-heading">
            MADE IN CRAFTSMANSHIP · A VIZHEN STORY
          </h3>
          <p className="promo-top-subtext">
            Discover the art of hand-finished Japanese titanium & Italian
            bio-acetate.
          </p>
        </div>

        <div className="promo-top-cta-wrap">
          <span className="promo-top-btn">
            <span>DISCOVER THE STORY</span>
            <ArrowRight size={13} />
          </span>
        </div>
      </Link>

      {/* ====================================================================
          2. SECOND PROMOTIONAL BANNER (CAROUSEL)
          Reference dimensions: 1144px x 173px (~6.61:1 ratio)
          Spacing: Gap of ~75px from top banner, centered independently
          ==================================================================== */}
      <div className="promo-banner-second-container">
        <div
          className="promo-banner-second-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="promo-banner-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {promoSlides.map((slide, index) => {
              const isCurrent = index === currentIndex
              return (
                <div
                  key={slide.id}
                  className={`promo-banner-slide ${slide.themeClass}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slideCount}`}
                  aria-hidden={!isCurrent}
                >
                  {/* Left Lifestyle Image */}
                  <div className="promo-lifestyle-wrap">
                    <img
                      src={slide.lifestyleImg}
                      alt={slide.lifestyleAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="promo-lifestyle-img"
                    />
                  </div>

                  {/* Center Editorial Copy */}
                  <div className="promo-copy-wrap">
                    <div className="promo-brand-mark">
                      <img
                        src={logoMark}
                        alt=""
                        className="promo-brand-icon"
                        aria-hidden="true"
                      />
                      <span className="promo-badge-text">{slide.badge}</span>
                    </div>

                    <h4 className="promo-heading">{slide.heading}</h4>
                    <p className="promo-subtext">{slide.supportingText}</p>
                  </div>

                  {/* Center-Right Product Hero Visual */}
                  <div className="promo-product-wrap" aria-hidden="true">
                    <img
                      src={slide.productImg}
                      alt={slide.productAlt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="promo-product-img"
                    />
                  </div>

                  {/* Right CTA Button */}
                  <div className="promo-cta-wrap">
                    <Link
                      to={slide.ctaLink}
                      className="promo-cta-btn"
                      aria-label={`${slide.ctaText} - ${slide.heading}`}
                      tabIndex={isCurrent ? 0 : -1}
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight size={13} className="promo-cta-arrow" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="promo-nav-btn prev"
            onClick={prevSlide}
            aria-label="Previous promotional slide"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
          <button
            type="button"
            className="promo-nav-btn next"
            onClick={nextSlide}
            aria-label="Next promotional slide"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* ==================================================================
            3. PAGINATION INDICATORS
            Spacing: 14-20px (16px) beneath second banner
            Matching exact reference: ○ ○ ▬ ○
            ================================================================== */}
        <div
          className="promo-indicators"
          role="tablist"
          aria-label="Promotional slide navigation"
        >
          {promoSlides.map((slide, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={slide.id}
                type="button"
                className={`promo-indicator-dot ${isActive ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.heading}`}
                role="tab"
                aria-selected={isActive}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
