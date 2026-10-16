import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"
import { Link, useOutletContext } from "react-router"
import TestimonialsSection from "../components/Testimonials/TestimonialsSection"
import { images } from "../data/products"
import { buildWhatsAppUrl } from "../data/config"
import usePageMeta from "../hooks/usePageMeta"
import FoldText from "../components/FoldText"
import ScrollExpand from "../components/ScrollExpand"
import HeroSlider from "../components/HeroSlider/HeroSlider"
import PromoBannerCarousel from "../components/PromoBanner/PromoBannerCarousel"
import CollectionSection from "../components/CollectionSection/CollectionSection"
import ShopByBrands from "../components/ShopByBrands/ShopByBrands"

export default function HomePage() {
  usePageMeta(
    "Premium Eyewear & Personal Eye Care",
    "Discover considered frames, comprehensive eye care and personal styling at Vizhen Plus Optics.",
  )
  const { openAppointment } = useOutletContext()
  const collection = (title, text, path, image, className = "") => (
    <Link className={`collection-card ${className}`} to={path}>
      <img src={image} alt="" loading="lazy" />
      <span className="collection-overlay">
        <small>The edit</small>
        <strong>{title}</strong>
        <em>
          {text} <ArrowRight />
        </em>
      </span>
    </Link>
  )
  return (
    <>
      <HeroSlider openAppointment={openAppointment} />

      {/* PROMOTIONAL CAMPAIGN BANNER CAROUSEL */}
      <PromoBannerCarousel />

      <section className="section collections-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Find your form</p>
            <h2>
              <FoldText
                text={"Designed around\nreal personalities."}
                trigger="scroll"
                splitBy="word"
                hinge="top"
              />
            </h2>
          </div>
          <p>
            From quiet classics to sharper statements, each edit is curated to
            make choosing feel intuitive—not overwhelming.
          </p>
        </div>
        <div className="collection-grid">
          {collection(
            "Men",
            "Explore eyeglasses",
            "/eyeglasses",
            images.editorial.optical,
            "collection-tall",
          )}
          {collection(
            "Women",
            "Explore sunglasses",
            "/sunglasses",
            images.editorial.sun,
          )}
          {collection("Kids", "Explore kids", "/kids", images.editorial.man)}
        </div>
      </section>

      {/* PRODUCT COLLECTION CATALOGUE GRID */}
      <CollectionSection />

      {/* SHOP BY BRANDS — same card/grid design as CollectionSection */}
      <ShopByBrands />

      <section className="editorial-split sun-story">
        <div className="editorial-image">
          <img
            src={images.editorial.sun}
            alt="Woman wearing sculptural sunglasses"
            loading="lazy"
          />
        </div>
        <div className="editorial-copy dark">
          <p className="eyebrow">Sun, considered</p>
          <h2>
            <FoldText
              text="Protection without compromise."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            UV400 lenses, nuanced tints and silhouettes made to hold their
            own—from first light to late afternoon.
          </p>
          <Link className="button button-light" to="/sunglasses">
            Shop sunglasses
          </Link>
        </div>
      </section>

      <section className="section kids-story">
        <div className="kids-copy">
          <p className="eyebrow">Vizhen young</p>
          <h2>
            <FoldText
              text="Made to keep up."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            Flexible, lightweight and fitted with patience. Our kids collection
            is ready for school days, play days and every day between.
          </p>
          <div className="micro-features">
            <span>
              <ShieldCheck /> Durable materials
            </span>
            <span>
              <Eye /> Child-friendly fitting
            </span>
          </div>
          <Link className="button button-dark" to="/kids">
            Explore kids frames
          </Link>
        </div>
        <div className="kids-visual">
          <img
            src={images.editorial.man}
            alt="Person wearing lightweight optical glasses"
            loading="lazy"
          />
          <span>
            Lightweight comfort
            <br />
            <strong>all day long</strong>
          </span>
        </div>
      </section>

      <section className="atelier-scroll-expand-section">
        <ScrollExpand
          src={images.editorial.premium}
          alt="Artisanal eyewear in Japanese titanium and hand-finished Italian bio acetate"
          title="The Atelier Edit"
          scrollHint="Scroll to unfold"
          useWindowScroll
          startWidth={50}
          startHeight={64}
          startRadius={28}
          endRadius={0}
          mediaZoom={1.32}
          scrollDistance={1.2}
          holdDistance={0.35}
          smoothing={0.12}
          overlayScrim={0.55}
        >
          <div className="atelier-expand-overlay">
            <p className="eyebrow">The atelier collection</p>
            <h2>
              <FoldText
                text="Quietly exceptional."
                trigger="scroll"
                splitBy="word"
                hinge="top"
              />
            </h2>
            <p>
              Limited-run frames in titanium and Italian acetate, selected for
              material integrity, subtle detail and lasting wear.
            </p>
            <div className="atelier-expand-actions">
              <Link className="button button-light" to="/eyeglasses">
                Discover premium frames <ArrowRight />
              </Link>
              <button className="button button-blur" onClick={openAppointment}>
                Book styling session
              </button>
            </div>
          </div>
        </ScrollExpand>
      </section>

      {/* CUSTOMER TESTIMONIAL VIDEO CAROUSEL SECTION */}
      <TestimonialsSection />

      <section className="why-section">
        <div>
          <p className="eyebrow">Why Vizhen</p>
          <h2>
            <FoldText
              text={"Expert care.\nExceptional eyewear."}
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
        </div>
        <div className="why-grid">
          {[
            [HeartHandshake, "Unhurried attention"],
            [Award, "Curated quality"],
            [CheckCircle2, "Fitting aftercare"],
          ].map(([Icon, title]) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>
                Thoughtful guidance and clear advice, tailored to your everyday
                vision.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="store-story">
        <img
          src={images.editorial.store}
          alt="Rows of eyewear in a modern optical store"
          loading="lazy"
        />
        <div>
          <p className="eyebrow">The store experience</p>
          <h2>
            <FoldText
              text="Come in. Take your time."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            Explore the collection at your own pace, then let us help with the
            details—fit, lens choice and the small adjustments that make a frame
            feel right.
          </p>
          <Link className="button button-light" to="/contact">
            Plan your visit
          </Link>
        </div>
      </section>

      <section className="appointment-banner">
        <div>
          <p className="eyebrow">Your vision, in focus</p>
          <h2>
            <FoldText
              text="Ready for a clearer view?"
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
        </div>
        <button className="button button-dark" onClick={openAppointment}>
          Book your eye test
        </button>
      </section>
      <section className="whatsapp-banner">
        <MessageCircle />
        <div>
          <h2>
            <FoldText
              text="Need help choosing?"
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>Ask about fit, lenses, availability or appointments.</p>
        </div>
        <a
          className="button button-outline"
          href={buildWhatsAppUrl(
            "Hello Vizhen, I need help choosing the right eyewear.",
          )}
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </section>
    </>
  )
}
