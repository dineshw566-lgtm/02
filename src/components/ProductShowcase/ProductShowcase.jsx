import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import ProductCard from "../ProductCard"
import "./ProductShowcase.css"

export default function ProductShowcase({ products, onDetails, onTry }) {
  // Use first 4 optical products (Aster, Marlow, Serein, Cove)
  const displayProducts = (products || []).slice(0, 4)

  return (
    <section
      className="product-showcase-section"
      aria-labelledby="showcase-heading"
    >
      <div className="showcase-ambient-glow" aria-hidden="true" />
      <div className="showcase-container">
        {/* SECTION HEADER */}
        <header className="showcase-header">
          <div className="showcase-header-left">
            {/* Small uppercase label with horizontal accent line */}
            <div className="showcase-eyebrow-wrap">
              <span className="showcase-eyebrow-line" aria-hidden="true" />
              <span className="showcase-eyebrow-text">NEW OPTICAL</span>
            </div>

            {/* Oversized editorial headline */}
            <h2 id="showcase-heading" className="showcase-headline">
              <span className="showcase-headline-accent">Fresh</span>{" "}
              perspective.
            </h2>

            {/* Supporting text */}
            <p className="showcase-tagline">
              TIMELESS FRAMES FOR A BRIGHTER YOU
            </p>
          </div>

          {/* Right-aligned CTA */}
          <div className="showcase-header-right">
            <Link
              to="/eyeglasses"
              className="showcase-header-cta"
              aria-label="View all eyeglasses"
            >
              <span>VIEW ALL EYEGLASSES</span>
              <span className="showcase-cta-circle">
                <ArrowRight size={14} strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </header>

        {/* 4 PRODUCT CARDS RESPONSIVE GRID */}
        <div className="showcase-product-grid">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetails={onDetails}
              onTry={onTry}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
