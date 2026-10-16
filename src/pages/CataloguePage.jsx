import { useMemo, useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"
import { useOutletContext } from "react-router"
import ProductCard from "../components/ProductCard"
import ProductModal from "../components/ProductModal"
import TryOnModal from "../components/TryOnModal"
import { getProducts } from "../data/products"
import usePageMeta from "../hooks/usePageMeta"
import FoldText from "../components/FoldText"

const copy = {
  eyeglasses: [
    "Eyeglasses",
    "Everyday frames, distinctly yours.",
    "Optical forms selected for balance, comfort and the way you actually live.",
  ],
  sunglasses: [
    "Sunglasses",
    "Shade, with a point of view.",
    "UV-protective silhouettes with considered proportions and expressive colour.",
  ],
  kids: [
    "Kids",
    "Built for bright young minds.",
    "Comfortable, resilient frames sized for busy days, growing faces and big ideas.",
  ],
}

export default function CataloguePage({ category }) {
  const { openAppointment } = useOutletContext()
  const [search, setSearch] = useState("")
  const [shape, setShape] = useState("All")
  const [material, setMaterial] = useState("All")
  const [price, setPrice] = useState("All")
  const [sort, setSort] = useState("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [tryOn, setTryOn] = useState(null)
  const [title, headline, intro] = copy[category]
  usePageMeta(title, intro)
  const base = getProducts(category)
  const visible = useMemo(() => {
    const filtered = base.filter(
      (p) =>
        `${p.name} ${p.color} ${p.shape} ${p.material}`
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (shape === "All" || p.shape === shape) &&
        (material === "All" || p.material === material) &&
        (price === "All" ||
          (price === "Under ₹4,000" ? p.price < 4000 : p.price >= 4000)),
    )
    return [...filtered].sort((a, b) =>
      sort === "price-low"
        ? a.price - b.price
        : sort === "price-high"
          ? b.price - a.price
          : Number(b.featured) - Number(a.featured),
    )
  }, [base, search, shape, material, price, sort])
  const clear = () => {
    setSearch("")
    setShape("All")
    setMaterial("All")
    setPrice("All")
  }
  const options = (key) => ["All", ...new Set(base.map((item) => item[key]))]

  return (
    <div className="catalogue-page">
      <header className="catalogue-hero">
        <p className="eyebrow">The Vizhen edit</p>
        <h1>
          <FoldText
            key={headline}
            text={headline}
            trigger="mount"
            splitBy="word"
            hinge="top"
          />
        </h1>
        <p>{intro}</p>
      </header>
      <div className="catalogue-toolbar">
        <label className="catalogue-search">
          <span className="sr-only">Search products</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${title.toLowerCase()}`}
          />
        </label>
        <button
          className="filter-toggle"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <SlidersHorizontal /> Filters
        </button>
        <label className="sort">
          Sort{" "}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="catalogue-layout">
        <aside
          className={filtersOpen ? "filters open" : "filters"}
          aria-label="Product filters"
        >
          <div className="filters-heading">
            <h2>Refine</h2>
            <button
              className="icon-button"
              onClick={() => setFiltersOpen(false)}
            >
              <X />
            </button>
          </div>
          {[
            ["shape", "Shape", shape, setShape],
            ["material", "Material", material, setMaterial],
          ].map(([key, label, value, setter]) => (
            <fieldset key={key}>
              <legend>{label}</legend>
              {options(key).map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={key}
                    checked={value === option}
                    onChange={() => setter(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>
          ))}
          <fieldset>
            <legend>Price</legend>
            {["All", "Under ₹4,000", "₹4,000 & above"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="price"
                  checked={price === option}
                  onChange={() => setPrice(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </fieldset>
          <button className="text-button clear-filters" onClick={clear}>
            Clear all filters
          </button>
        </aside>
        <section className="results" aria-live="polite">
          <p className="result-count">{visible.length} frames</p>
          {visible.length ? (
            <div className="product-grid">
              {visible.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDetails={setSelected}
                  onTry={setTryOn}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No frames in this view</h2>
              <p>
                Try removing a filter or searching a different colour, shape or
                name.
              </p>
              <button className="button button-dark" onClick={clear}>
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onTry={(p) => {
            setSelected(null)
            setTryOn(p)
          }}
          onBook={() => {
            setSelected(null)
            openAppointment()
          }}
        />
      )}
      {tryOn && <TryOnModal product={tryOn} onClose={() => setTryOn(null)} />}
    </div>
  )
}
