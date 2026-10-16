import { ArrowRight, ScanFace } from "lucide-react"

export default function ProductActions({ product, onDetails, onTry }) {
  return (
    <div className="luxury-product-actions">
      <button
        type="button"
        className="luxury-details-btn"
        onClick={() => onDetails?.(product)}
        aria-label={`View details for ${product.name}`}
      >
        <span>DETAILS</span>
        <ArrowRight size={13} className="luxury-details-arrow" />
      </button>

      <button
        type="button"
        className="luxury-tryon-btn"
        onClick={() => onTry?.(product)}
        aria-label={`Virtual try on for ${product.name}`}
      >
        <ScanFace size={15} />
        <span>TRY ON</span>
      </button>
    </div>
  )
}
