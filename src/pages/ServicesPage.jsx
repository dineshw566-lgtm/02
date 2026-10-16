import {
  ArrowRight,
  Eye,
  Glasses,
  ScanEye,
  Sparkles,
  SunMedium,
  Waves,
} from "lucide-react"
import { useOutletContext } from "react-router"
import usePageMeta from "../hooks/usePageMeta"
import FoldText from "../components/FoldText"

const services = [
  [
    ScanEye,
    "Comprehensive eye testing",
    "A structured assessment of visual acuity, prescription, eye coordination and everyday visual needs.",
  ],
  [
    Glasses,
    "Prescription lenses",
    "Single-vision and task-specific lenses selected and measured for your frame, prescription and routine.",
  ],
  [
    Eye,
    "Blue-light support",
    "Lens options for screen-heavy days, recommended only when they suit your comfort and use.",
  ],
  [
    Sparkles,
    "Anti-glare lenses",
    "Refined coatings designed to reduce distracting reflections and improve lens clarity.",
  ],
  [
    Waves,
    "Progressive lenses",
    "Personal measurements and considered fitting for smoother transitions across near, middle and distance.",
  ],
  [
    SunMedium,
    "Photochromic lenses",
    "Light-adaptive options that darken outdoors and return to clear indoors.",
  ],
]

export default function ServicesPage() {
  const { openAppointment } = useOutletContext()
  usePageMeta(
    "Eye Care Services",
    "Explore comprehensive eye tests, prescription lenses, progressive fitting and personal frame consultations.",
  )
  return (
    <div className="content-page services-page">
      <header className="page-hero service-hero">
        <p className="eyebrow">Eye care</p>
        <h1>
          <FoldText
            text={"Expert vision care,\nmade personal."}
            trigger="mount"
            splitBy="char"
            hinge="top"
          />
        </h1>
        <p>
          Technology, experience and unhurried conversation—working together for
          comfortable, confident sight.
        </p>
        <button className="button button-light" onClick={openAppointment}>
          Book an eye test
        </button>
      </header>
      <section className="section intro-statement">
        <p className="eyebrow">How we care</p>
        <h2>
          <FoldText
            text="We start by listening."
            trigger="scroll"
            splitBy="word"
            hinge="top"
          />
        </h2>
        <p>
          Your prescription is only one part of the picture. We consider how you
          work, read, drive, move and rest—then shape our advice around your
          day.
        </p>
      </section>
      <section className="section service-grid">
        {services.map(([Icon, title, text], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <Icon />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="consultation-block">
        <div>
          <p className="eyebrow">Frame consultation</p>
          <h2>
            <FoldText
              text="A good frame should look right and feel effortless."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            We consider proportion, bridge fit, temple length, lens depth and
            personal style. Then we fine-tune the fit once your lenses are
            ready.
          </p>
          <button className="arrow-link light" onClick={openAppointment}>
            Arrange a consultation <ArrowRight />
          </button>
        </div>
      </section>
      <section className="section process">
        <p className="eyebrow">Your appointment</p>
        <h2>
          <FoldText
            text="Clear at every step."
            trigger="scroll"
            splitBy="word"
            hinge="top"
          />
        </h2>
        <div>
          {[
            [
              "01",
              "Conversation",
              "We understand your visual needs and any concerns.",
            ],
            [
              "02",
              "Assessment",
              "Your optometrist performs the appropriate checks.",
            ],
            [
              "03",
              "Recommendation",
              "We explain the options without pressure or jargon.",
            ],
            [
              "04",
              "Fitting",
              "Frames and lenses are measured, adjusted and reviewed.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="appointment-banner">
        <div>
          <p className="eyebrow">Make time for your eyes</p>
          <h2>
            <FoldText
              text="Book your personal consultation."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
        </div>
        <button className="button button-dark" onClick={openAppointment}>
          Choose a date
        </button>
      </section>
    </div>
  )
}
