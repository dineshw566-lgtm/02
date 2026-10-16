import { useRef, useState, useEffect } from "react"
import { Link } from "react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./ShopByBrands.css"

// Import local photography assets
import manPortrait from "../../assets/hero page img/web/elegant-young-handsome-man-studio-fashion-portrait.jpg"
import womanPortrait from "../../assets/hero page img/web/indoor-shot-smart-successful-female-entrepreneur-sharing-ways-success-touching-frames-checking-glasses-smiling-delighted-accomplished-as-gazing-self-assured-camera-against-white-wall.jpg"

/**
 * 3D SALE Tag vector graphic matching the "Offer" circle in reference screenshot.
 * Lilac tag with string, 3D embossed SALE text and sparkles.
 */
function OfferGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background Soft Glow */}
      <circle cx="50" cy="50" r="48" fill="#ffffff" />

      {/* Decorative Sparkles & Pastel Dots */}
      <circle cx="28" cy="24" r="1.8" fill="#f472b6" />
      <circle cx="76" cy="30" r="2.2" fill="#c084fc" />
      <circle cx="24" cy="72" r="1.5" fill="#f472b6" />
      <circle cx="74" cy="76" r="2.5" fill="#e879f9" opacity="0.6" />
      <path
        d="M20 38 L22 34 L24 38 L28 40 L24 42 L22 46 L20 42 L16 40 Z"
        fill="#fbcfe8"
      />
      <path
        d="M78 48 L79.5 45 L81 48 L84 49.5 L81 51 L79.5 54 L78 51 L75 49.5 Z"
        fill="#f5d0fe"
      />

      {/* Tag String */}
      <path
        d="M38 18 Q 42 12, 45 15 Q 48 20, 42 24"
        stroke="#e2e8f0"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* 3D Isometric Tag Group */}
      <g transform="rotate(-18 50 50) translate(28, 14)">
        {/* Drop shadow */}
        <path
          d="M16 4 L30 18 L30 62 C30 65, 27 68, 24 68 L8 68 C5 68, 2 65, 2 62 L2 18 Z"
          fill="rgba(192, 132, 252, 0.25)"
          transform="translate(3, 4)"
        />

        {/* Tag 3D Extrusion Side */}
        <path
          d="M30 18 L33 19 L33 63 C33 66, 30 69, 27 69 L24 68 C27 68, 30 65, 30 62 Z"
          fill="#9333ea"
        />

        {/* Main Tag Body */}
        <path
          d="M16 4 L30 18 L30 62 C30 65, 27 68, 24 68 L8 68 C5 68, 2 65, 2 62 L2 18 Z"
          fill="url(#offerTagGrad)"
        />

        {/* Tag Eyelet Hole */}
        <circle cx="16" cy="14" r="3.2" fill="#ffffff" />
        <circle cx="16" cy="14" r="2" fill="#c084fc" />

        {/* "SALE" Text (Vertical 3D) */}
        <text
          x="16"
          y="28"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          S
        </text>
        <text
          x="16"
          y="38"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          A
        </text>
        <text
          x="16"
          y="48"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          L
        </text>
        <text
          x="16"
          y="58"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.5"
        >
          E
        </text>
      </g>

      <defs>
        <linearGradient
          id="offerTagGrad"
          x1="2"
          y1="4"
          x2="30"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c084fc" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/**
 * Vetra brand badge matching the reference screenshot.
 * Navy circle with sky-blue "NEW" ribbon and "VETRA" logo.
 */
function VetraGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background Navy Circle */}
      <circle cx="50" cy="50" r="50" fill="#1d2c42" />

      {/* "NEW" Top-Left Ribbon */}
      <path d="M-5 36 L36 -5 L52 11 L11 52 Z" fill="#3b82f6" />
      <text
        x="24"
        y="21"
        fill="#ffffff"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.8"
        transform="rotate(-45 24 21)"
        textAnchor="middle"
      >
        NEW
      </text>

      {/* Main "VETRA" Logo */}
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="17"
        fontWeight="700"
        fontFamily="'Inter', -apple-system, sans-serif"
        letterSpacing="1.8"
      >
        VETRA
      </text>

      {/* Small Separator / Trademark Symbol */}
      <text x="82" y="45" fill="#93c5fd" fontSize="5" fontFamily="sans-serif">
        ™
      </text>

      {/* Subtitle */}
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize="4.8"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.8"
      >
        IN-HOUSE
      </text>
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize="4.2"
        fontWeight="500"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.6"
      >
        AUTOMATIC MOVEMENT
      </text>
    </svg>
  )
}

/**
 * Mag By Titan brand badge matching the reference screenshot.
 * Deep crimson circle with orange "new" dot and "Mag by TITAN" typography.
 */
function MagGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background Crimson Circle */}
      <circle cx="50" cy="50" r="50" fill="#6f0c23" />

      {/* "new" Orange Circular Badge at Top-Right */}
      <circle cx="78" cy="22" r="10.5" fill="#f59e0b" />
      <text
        x="78"
        y="25"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="8"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        new
      </text>

      {/* "Mag" Script/Serif Logo */}
      <text
        x="48"
        y="53"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="28"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="'Playfair Display', 'Cormorant Garamond', Georgia, serif"
      >
        Mag
      </text>

      {/* "by TITAN" */}
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fill="#f8fafc"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
        letterSpacing="0.9"
      >
        by TITAN
      </text>
    </svg>
  )
}

/**
 * The items displayed in the circular navigation carousel.
 * The first 7 items exactly match the reference screenshot.
 * Additional items follow for horizontal scroll capability.
 */
const carouselItems = [
  {
    id: "men",
    title: "Men",
    type: "image",
    image: manPortrait,
    avatarClass: "avatar-bw",
    route: "/eyeglasses?gender=Men",
  },
  {
    id: "women",
    title: "Women",
    type: "image",
    image: womanPortrait,
    avatarClass: "",
    route: "/sunglasses?gender=Women",
  },
  {
    id: "offer",
    title: "Offer",
    type: "custom",
    render: () => <OfferGraphic />,
    avatarClass: "avatar-offer",
    route: "/catalogue?filter=sale",
  },
  {
    id: "vetra",
    title: "Vetra",
    type: "custom",
    render: () => <VetraGraphic />,
    avatarClass: "avatar-vetra",
    route: "/eyeglasses?brand=Vetra",
  },
  {
    id: "mag",
    title: "Mag By Titan",
    type: "custom",
    render: () => <MagGraphic />,
    avatarClass: "avatar-mag",
    route: "/eyeglasses?brand=Titan",
  },
  {
    id: "smart",
    title: "Smart",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1510519138161-58474ebdb7c3?auto=format&fit=crop&w=300&q=80",
    avatarClass: "",
    route: "/eyeglasses?category=smart",
  },
  {
    id: "bestsellers",
    title: "Bestsellers",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80",
    avatarClass: "",
    route: "/catalogue?filter=bestsellers",
  },
  {
    id: "kids",
    title: "Kids",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=300&q=80",
    avatarClass: "",
    route: "/kids",
  },
  {
    id: "rayban",
    title: "Ray-Ban",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80",
    avatarClass: "",
    route: "/eyeglasses?brand=Ray-Ban",
  },
  {
    id: "oakley",
    title: "Oakley",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=300&q=80",
    avatarClass: "",
    route: "/sunglasses?brand=Oakley",
  },
]

export default function ShopByBrands() {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Update button visibility based on scroll position
  const checkScroll = () => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const track = trackRef.current
    if (track) {
      track.addEventListener("scroll", checkScroll, { passive: true })
      window.addEventListener("resize", checkScroll)
    }
    return () => {
      if (track) {
        track.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (!trackRef.current) return
    const scrollAmount = direction === "left" ? -280 : 280
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section
      className="story-circles-section"
      aria-label="Categories and Brands"
    >
      <div className="story-circles-container">
        {/* Left Arrow Button */}
        <button
          type="button"
          className={`story-nav-btn nav-prev ${
            !canScrollLeft ? "nav-hidden" : ""
          }`}
          onClick={() => scroll("left")}
          aria-label="Previous categories"
          tabIndex={canScrollLeft ? 0 : -1}
        >
          <ChevronLeft size={18} strokeWidth={2.4} />
        </button>

        {/* Scrollable Track */}
        <div
          ref={trackRef}
          className="story-circles-track"
          role="region"
          aria-label="Category carousel"
        >
          {carouselItems.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className="story-circle-item"
              aria-label={item.title}
            >
              <div className={`story-circle-avatar ${item.avatarClass || ""}`}>
                {item.type === "image" ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width="96"
                    height="96"
                  />
                ) : (
                  item.render()
                )}
              </div>
              <span className="story-circle-label">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          className={`story-nav-btn nav-next ${
            !canScrollRight ? "nav-hidden" : ""
          }`}
          onClick={() => scroll("right")}
          aria-label="Next categories"
          tabIndex={canScrollRight ? 0 : -1}
        >
          <ChevronRight size={18} strokeWidth={2.4} />
        </button>
      </div>
    </section>
  )
}
