import { Link } from "react-router"
import { getProducts } from "../../data/products"
import "./CollectionSection.css"

/**
 * CollectionSection — 4-column pure-image product grid.
 * Matches the Titan-style reference screenshot exactly:
 * - White background, centered "COLLECTION" heading (plain, no accent)
 * - Cards are image-only (#F1F1F1 bg, 1px #D8D0D0 border, no radius, no footer)
 * - Image area uses 266:335 (≈4:5) aspect ratio matching the reference
 * - Logos are already embedded in product images — no overlay labels
 */
function buildCollectionItems(count = 8) {
  const eyeglasses = getProducts("eyeglasses").slice(0, Math.ceil(count / 2))
  const sunglasses = getProducts("sunglasses").slice(0, Math.floor(count / 2))
  return [...eyeglasses, ...sunglasses].slice(0, count)
}

export default function CollectionSection() {
  const items = buildCollectionItems(8)

  return (
    <section
      className="collection-gallery-section"
      aria-labelledby="collection-gallery-title"
    >
      <div className="collection-gallery-container">
        {/* ---- Heading ---- */}
        <header className="collection-gallery-heading">
          <h2
            id="collection-gallery-title"
            className="collection-gallery-title"
          >
            COLLECTION
          </h2>
        </header>

        {/* ---- 4-Column Pure-Image Grid ---- */}
        <div className="collection-gallery-grid" role="list">
          {items.map((product) => {
            const route =
              product.category === "sunglasses" ? "/sunglasses" : "/eyeglasses"

            return (
              <Link
                key={product.id}
                to={`${route}?name=${encodeURIComponent(product.name)}`}
                className="collection-gallery-card"
                role="listitem"
                aria-label={product.name}
              >
                {/* Pure product image — logos already in image, no overlay */}
                <div className="collection-card-image-wrap">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.color} ${product.shape} ${product.category} frame`}
                    loading="lazy"
                    width="266"
                    height="335"
                  />
                </div>
              </Link>
            )
          })}
        </div>

        {/* ---- View All CTA ---- */}
        <div className="collection-gallery-view-all">
          <Link to="/eyeglasses" className="collection-gallery-view-all-btn">
            VIEW ALL COLLECTIONS
          </Link>
        </div>
      </div>
    </section>
  )
}
