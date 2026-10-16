import React from "react"
import { Link } from "react-router"
import {
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import { buildWhatsAppUrl } from "../../data/config"

export default function TopBar({ onBookAppointment }) {
  return (
    <div
      className="navbar-top-bar"
      role="complementary"
      aria-label="Store announcement and quick contact"
    >
      <div className="navbar-top-bar-container">
        {/* Left: Hours & Boutique Locator */}
        <div className="navbar-top-left">
          <span className="navbar-top-item">
            <Clock3 size={13} className="navbar-top-icon" />
            <span>Mon – Sat: 10:00 AM – 8:30 PM</span>
          </span>
          <span className="navbar-top-divider" aria-hidden="true">
            •
          </span>
          <Link to="/visit" className="navbar-top-item navbar-top-link-item">
            <MapPin size={13} className="navbar-top-icon" />
            <span>Find Boutique</span>
          </Link>
        </div>

        {/* Center: Announcement & Promo */}
        <div className="navbar-top-center">
          <span className="navbar-top-badge">
            <Sparkles size={11} className="navbar-top-badge-icon" />
            OFFER
          </span>
          <span className="navbar-top-announcement">
            Complimentary Frame Styling with Every Eye Test
          </span>
          <Link to="/eye-care" className="navbar-top-cta-link">
            <span>Explore</span>
            <ChevronRight size={13} />
          </Link>
        </div>

        {/* Right: Quick Consultation & WhatsApp */}
        <div className="navbar-top-right">
          <button
            type="button"
            onClick={onBookAppointment}
            className="navbar-top-action-btn"
          >
            <span>Book Consultation</span>
          </button>
          <span className="navbar-top-divider" aria-hidden="true">
            •
          </span>
          <a
            href={buildWhatsAppUrl(
              "Hello Vizhen, I would like help choosing eyewear.",
            )}
            target="_blank"
            rel="noreferrer"
            className="navbar-top-item navbar-top-whatsapp"
            aria-label="Chat with Vizhen on WhatsApp"
          >
            <MessageCircle size={13} className="navbar-top-icon" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
