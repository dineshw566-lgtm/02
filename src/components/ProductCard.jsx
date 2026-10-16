import { useState } from "react"
import { Heart, Star } from "lucide-react"
import { useWishlist } from "../context/WishlistContext"
import ProductActions from "./ProductActions"
import "./ProductCard.css"

export default function ProductCard({ product, onDetails, onTry }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  const swatches = product.swatches || []
  const [selectedColor, setSelectedColor] = useState(
    product.color || (swatches[0] ? swatches[0].name : ""),
  )

  const handleSwatchClick = (swatch, e) => {
    e.stopPropagation()
    setSelectedColor(swatch.name)
  }

  const handleWishlistClick = (e) => {
    e.stopPropagation()
    toggleWishlist(product)
  }

  return (
    <article
      className="product-card luxury-product-card"
      id={`product-${product.id}`}
    >
      {/* Top Image Box with Rounded Corners and floating badges */}
      <div className="luxury-image-wrap">
        <img
          src={product.image}
          alt={`${product.name} in ${selectedColor} frame`}
          loading="lazy"
          className="luxury-product-img"
        />

        {/* Top-left Editor's Pick badge */}
        <span className="luxury-badge">
          <Star size={11} fill="#916443" color="#916443" strokeWidth={0} />
          <span>EDITOR&apos;S PICK</span>
        </span>

        {/* Top-right Wishlist heart toggle */}
        <button
          type="button"
          className={`luxury-wishlist-btn ${wishlisted ? "active" : ""}`}
          onClick={handleWishlistClick}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
        >
          <Heart
            size={16}
            fill={wishlisted ? "#e04b4b" : "none"}
            color={wishlisted ? "#e04b4b" : "#171C1C"}
            strokeWidth={1.8}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="luxury-product-info">
        {/* Name and Price Row */}
        <div className="luxury-title-price-row">
          <h3 className="luxury-product-name">{product.name}</h3>
          <div className="luxury-price-wrap">
            {product.originalPrice && (
              <del className="luxury-price-original">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </del>
            )}
            <span className="luxury-price-current">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Material and Color description */}
        <p className="luxury-product-desc">
          {product.material} · {selectedColor}
        </p>

        {/* Variant Color Swatches */}
        {swatches.length > 0 && (
          <div
            className="luxury-swatches"
            role="radiogroup"
            aria-label="Color options"
          >
            {swatches.map((swatch) => {
              const isActive = selectedColor === swatch.name
              return (
                <button
                  key={swatch.name}
                  type="button"
                  className={`luxury-swatch-dot ${isActive ? "active" : ""}`}
                  style={{ backgroundColor: swatch.hex }}
                  onClick={(e) => handleSwatchClick(swatch, e)}
                  title={swatch.name}
                  aria-label={`Select ${swatch.name}`}
                  aria-checked={isActive}
                  role="radio"
                />
              )
            })}
          </div>
        )}

        {/* Footer Actions: DETAILS & TRY ON */}
        <ProductActions
          product={{ ...product, selectedColor }}
          onDetails={onDetails}
          onTry={onTry}
        />
      </div>
    </article>
  )
}
