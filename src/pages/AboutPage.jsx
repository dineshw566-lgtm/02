import { images } from "../data/products"
import usePageMeta from "../hooks/usePageMeta"
import logo from "../assets/logo.png"
import FoldText from "../components/FoldText"

export default function AboutPage() {
  usePageMeta(
    "Our Story",
    "Meet Vizhen Plus Optics: a modern optical brand built around considered design, trusted expertise and human care.",
  )
  return (
    <div className="content-page about-page">
      <header className="page-hero about-hero">
        <img
          src={images.editorial.optical}
          alt="Woman wearing refined optical glasses"
        />
        <div>
          <p className="eyebrow">Our story</p>
          <h1>
            <FoldText
              text={"A considered view\nof eyewear."}
              trigger="mount"
              splitBy="char"
              hinge="top"
            />
          </h1>
        </div>
      </header>
      <section className="section manifesto">
        <div className="manifesto-brand-badge">
          <img
            src={logo}
            alt="VIZHEN PLUS OPTICS - For Your Perfect Vision"
            className="manifesto-logo"
          />
        </div>
        <p className="eyebrow">Vizhen Plus Optics</p>
        <h2>
          <FoldText
            text="We believe eyewear should do more than correct vision. It should feel personal, considered and quietly confidence-giving."
            trigger="scroll"
            splitBy="word"
            hinge="top"
          />
        </h2>
      </section>
      <section className="editorial-split about-split">
        <div className="editorial-image">
          <img
            src={images.editorial.man}
            alt="Portrait in modern eyewear"
            loading="lazy"
          />
        </div>
        <div className="editorial-copy">
          <p className="eyebrow">What guides us</p>
          <h2>
            <FoldText
              text="Clarity in every sense."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            Vizhen brings together optical expertise and a tightly edited point
            of view. We simplify the choices that matter—frame fit, lens
            performance, material and proportion—without simplifying the care
            behind them.
          </p>
          <p>
            Our approach is calm, transparent and tailored. No rushed decisions.
            No unnecessary complexity. Just thoughtful eyewear and advice
            designed around real life.
          </p>
        </div>
      </section>
      <section className="section values">
        <article>
          <span>01</span>
          <h3>Expertise without ego</h3>
          <p>
            Knowledge shared clearly, so every decision feels informed and
            comfortable.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Design with purpose</h3>
          <p>
            Frames selected for proportion, material integrity, wearability and
            character.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Care that continues</h3>
          <p>
            Thoughtful fitting and practical aftercare long after collection
            day.
          </p>
        </article>
      </section>
      <section className="experience-quote">
        <blockquote>
          “See well. Choose well.
          <br />
          Wear what feels like you.”
        </blockquote>
      </section>
    </div>
  )
}
