import { Check, MessageCircle, Ruler, ScanFace, X } from "lucide-react"
import { buildWhatsAppUrl } from "../data/config"
import FoldText from "./FoldText"

export default function ProductModal({ product, onClose, onTry, onBook }) {
  if (!product) return null
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="modal product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
      >
        <button
          className="icon-button modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X />
        </button>
        <div className="product-detail-image">
          <img src={product.image} alt={`${product.name} optical frame`} />
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow">
            {product.category} · {product.gender}
          </p>
          <h2 id="product-title">
            <FoldText
              text={product.name}
              trigger="mount"
              splitBy="char"
              hinge="top"
            />
          </h2>
          <p className="detail-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <p>{product.description}</p>
          <dl className="spec-list">
            <div>
              <dt>Shape</dt>
              <dd>{product.shape}</dd>
            </div>
            <div>
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>Colour</dt>
              <dd>{product.color}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>
                <Ruler /> {product.size}
              </dd>
            </div>
          </dl>
          <p
            className={`availability ${product.available ? "" : "unavailable"}`}
          >
            <span />
            {product.available
              ? "Available for fitting"
              : "Temporarily unavailable"}
          </p>
          <div>
            <h3>Lens options</h3>
            <div className="option-chips">
              {product.lensOptions.map((option) => (
                <span key={option}>{option}</span>
              ))}
            </div>
          </div>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>
                <Check />
                {feature}
              </li>
            ))}
          </ul>
          <div className="detail-actions">
            <button
              className="button button-accent"
              onClick={() => onTry(product)}
            >
              <ScanFace /> Try on
            </button>
            <button className="button button-outline" onClick={onBook}>
              Book eye test
            </button>
            <a
              className="button button-ghost"
              href={buildWhatsAppUrl(
                `Hello Vizhen, I would like to enquire about the ${product.name} frame.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
