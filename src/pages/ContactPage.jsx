import { useState } from "react"
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useOutletContext } from "react-router"
import { business, buildWhatsAppUrl } from "../data/config"
import usePageMeta from "../hooks/usePageMeta"
import logo from "../assets/logo.png"
import FoldText from "../components/FoldText"

export default function ContactPage() {
  const { openAppointment } = useOutletContext()
  const [sent, setSent] = useState(false)
  usePageMeta(
    "Contact & Visit",
    "Contact Vizhen Plus Optics, plan a store visit or request a personal eye care appointment.",
  )
  return (
    <div className="content-page contact-page">
      <header className="page-title">
        <p className="eyebrow">Contact & visit</p>
        <h1>
          <FoldText
            text="We’d love to help."
            trigger="mount"
            splitBy="char"
            hinge="top"
          />
        </h1>
        <p>
          Questions about frames, lenses or your next eye test? Start here and
          our team will guide you.
        </p>
      </header>
      <section className="section contact-layout">
        <div className="contact-details">
          <img src={logo} alt="VIZHEN PLUS OPTICS" className="contact-logo" />
          <h2>
            <FoldText
              text="Visit Vizhen"
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p className="config-note">
            Business details below are privacy-safe launch settings and can be
            updated in <code>src/data/config.js</code> before publication.
          </p>
          {[
            [MapPin, "Location", business.location],
            [Phone, "Phone", business.phone],
            [Mail, "Email", business.email],
            [Clock3, "Hours", business.hours],
          ].map(([Icon, label, value]) => (
            <div className="contact-row" key={label}>
              <Icon />
              <span>
                <small>{label}</small>
                {value}
              </span>
            </div>
          ))}
          <a
            className="button button-outline"
            href={buildWhatsAppUrl(
              "Hello Vizhen, I would like to plan a visit.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle /> WhatsApp enquiry
          </a>
          <div className="map-panel">
            <MapPin />
            <strong>Store map activates with verified address</strong>
            <span>
              Appointment confirmations include complete visit details.
            </span>
          </div>
        </div>
        <div className="enquiry-card">
          {sent ? (
            <div className="success-state">
              <span className="success-icon">✓</span>
              <p className="eyebrow">Message received</p>
              <h2>
                <FoldText
                  text="Thank you for getting in touch."
                  trigger="mount"
                  splitBy="word"
                  hinge="top"
                />
              </h2>
              <p>
                Our team will respond using the contact details you provided.
              </p>
              <button
                className="button button-dark"
                onClick={() => setSent(false)}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">Send an enquiry</p>
              <h2>
                <FoldText
                  text="How can we help?"
                  trigger="scroll"
                  splitBy="word"
                  hinge="top"
                />
              </h2>
              <form
                className="form-grid"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <label className="field">
                  Name
                  <input required name="name" />
                </label>
                <label className="field">
                  Phone
                  <input required name="phone" type="tel" />
                </label>
                <label className="field field-wide">
                  Email
                  <input required name="email" type="email" />
                </label>
                <label className="field field-wide">
                  What can we help with?
                  <select>
                    <option>Frames and availability</option>
                    <option>Lens advice</option>
                    <option>Eye test</option>
                    <option>Store visit</option>
                    <option>Aftercare</option>
                  </select>
                </label>
                <label className="field field-wide">
                  Message
                  <textarea required rows="5" />
                </label>
                <button className="button button-accent field-wide">
                  Send enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </section>
      <section className="appointment-banner">
        <div>
          <p className="eyebrow">Prefer to plan ahead?</p>
          <h2>
            <FoldText
              text="Reserve time with our care team."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
        </div>
        <button className="button button-dark" onClick={openAppointment}>
          Book appointment
        </button>
      </section>
    </div>
  )
}
