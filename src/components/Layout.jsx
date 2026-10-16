import { useState } from "react"
import { Link, Outlet } from "react-router"
import { ChevronRight, MessageCircle } from "lucide-react"
import Navbar from "./Navbar/Navbar"
import AppointmentModal from "./AppointmentModal"
import { buildWhatsAppUrl } from "../data/config"
import logo from "../assets/logo/logo.png"

import { WishlistProvider, useWishlist } from "../context/WishlistContext"

const footerNav = [
  ["Eyeglasses", "/eyeglasses"],
  ["Sunglasses", "/sunglasses"],
  ["Kids", "/kids"],
  ["Eye care", "/eye-care"],
]

export default function Layout() {
  const [appointment, setAppointment] = useState(false)

  return (
    <WishlistProvider>
      <LayoutContent
        appointment={appointment}
        setAppointment={setAppointment}
      />
    </WishlistProvider>
  )
}

function LayoutContent({ appointment, setAppointment }) {
  const { wishlistCount } = useWishlist()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Production Navbar matching exact visual reference */}
      <Navbar
        onBookAppointment={() => setAppointment(true)}
        cartCount={0}
        wishlistCount={wishlistCount}
      />

      <main id="main">
        <Outlet context={{ openAppointment: () => setAppointment(true) }} />
      </main>

      <a
        className="whatsapp-float"
        href={buildWhatsAppUrl(
          "Hello Vizhen, I would like help choosing eyewear.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle />
      </a>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <Link
              className="brand brand-light"
              to="/"
              aria-label="Vizhen Plus Optics home"
            >
              <img
                src={logo}
                alt="VIZHEN PLUS OPTICS - For Your Perfect Vision"
                className="brand-logo brand-logo-footer"
                width="200"
                height="70"
              />
            </Link>
            <p>
              Considered eyewear. Clearer days.
              <br />
              Personal optical care for every view.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            {footerNav.map(([label, path]) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            <Link to="/our-story">Our story</Link>
            <Link to="/visit">Contact & Visit</Link>
            <button onClick={() => setAppointment(true)}>
              Book appointment
            </button>
          </div>
          <div className="newsletter">
            <h3>A clearer inbox</h3>
            <p>New frames, lens notes and care guidance—occasionally.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>
                <span className="sr-only">Email address</span>
                <input type="email" placeholder="Email address" required />
              </label>
              <button aria-label="Subscribe">
                <ChevronRight />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vizhen Plus Optics</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </footer>

      <AppointmentModal
        open={appointment}
        onClose={() => setAppointment(false)}
      />
    </>
  )
}
