import React, { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router"
import {
  CalendarDays,
  ChevronDown,
  Eye,
  Glasses,
  Heart,
  MapPin,
  ShoppingCart,
  Users,
  X,
} from "lucide-react"
import logo from "../../assets/logo/logo.png"
import { megaMenuData } from "./megaMenuData"

/* ---- Custom SVG icons (self-contained so no external dep) ------------ */

export function SunglassesIcon({
  size = 22,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 11c0-1.5 1-2.5 3-2.5h1.8c2 0 2.7 1 2.7 2.5 0 2.8-1.5 5.5-3.8 5.5C4.3 16.5 3 14 3 11z"
        fill={color}
      />
      <path
        d="M13.5 11c0-1.5.7-2.5 2.7-2.5H18c2 0 3 1 3 2.5 0 3-1.3 5.5-3.7 5.5-2.3 0-3.8-2.7-3.8-5.5z"
        fill={color}
      />
      <path d="M10.5 10.5h3" />
      <path d="M3 10.5L1.5 9" />
      <path d="M21 10.5L22.5 9" />
    </svg>
  )
}

export function KidsIcon({
  size = 22,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M9.5 9.5c.8-1.5 2.2-2.5 3.5-2.5s2.7 1 3.5 2.5" />
      <circle cx="9.5" cy="13" r=".75" fill={color} />
      <circle cx="14.5" cy="13" r=".75" fill={color} />
      <path d="M9.5 16c.8 1 1.7 1.5 2.5 1.5s1.7-.5 2.5-1.5" />
    </svg>
  )
}

/* ---- MobileAccordionSection — expandable nav group ------------------ */
function MobileAccordionSection({ item, onNavClose }) {
  const [expanded, setExpanded] = useState(false)
  const menuData = megaMenuData[item.menuKey]
  const hasChildren = item.hasMenu && menuData

  if (!hasChildren) {
    return (
      <NavLink
        to={item.to}
        onClick={onNavClose}
        className={({ isActive }) =>
          isActive ? "mobile-acc-link active" : "mobile-acc-link"
        }
      >
        <span className="mobile-acc-link-label">{item.label}</span>
      </NavLink>
    )
  }

  // Collect all sub-links from mega data
  const subLinks = []
  if (menuData.type === "mega") {
    menuData.columns.forEach((col) => {
      col.items.forEach((it) => {
        subLinks.push({ label: it.label, href: it.href })
      })
    })
    if (menuData.footerLinks) {
      menuData.footerLinks.forEach((fl) => {
        subLinks.push({
          label: fl.label,
          href: fl.href,
          highlight: fl.highlight,
        })
      })
    }
  } else if (menuData.type === "simple") {
    menuData.links.forEach((l) => {
      subLinks.push({ label: l.label, href: l.href })
    })
  }

  return (
    <div className="mobile-acc-section">
      <button
        type="button"
        className={`mobile-acc-trigger ${expanded ? "expanded" : ""}`}
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
      >
        <span className="mobile-acc-trigger-label">{item.label}</span>
        <ChevronDown
          size={18}
          className={`mobile-acc-chevron ${expanded ? "rotated" : ""}`}
        />
      </button>

      {expanded && (
        <div className="mobile-acc-children">
          <Link
            to={item.to}
            className="mobile-acc-child mobile-acc-child--all"
            onClick={onNavClose}
          >
            View All {item.label}
          </Link>
          {subLinks.map((sl, i) => (
            <Link
              key={i}
              to={sl.href}
              className={
                sl.highlight
                  ? "mobile-acc-child mobile-acc-child--highlight"
                  : "mobile-acc-child"
              }
              onClick={onNavClose}
            >
              {sl.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ---- Main MobileMenu drawer ----------------------------------------- */
export default function MobileMenu({
  isOpen,
  onClose,
  onBookAppointment,
  cartCount = 0,
}) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBook = () => {
    onClose()
    if (onBookAppointment) onBookAppointment()
    else navigate("/book-eye-test")
  }

  const navItemsForMobile = [
    {
      key: "eyeglasses",
      label: "Eyeglasses",
      to: "/eyeglasses",
      hasMenu: true,
      menuKey: "eyeglasses",
    },
    {
      key: "sunglasses",
      label: "Sunglasses",
      to: "/sunglasses",
      hasMenu: true,
      menuKey: "sunglasses",
    },
    { key: "kids", label: "Kids", to: "/kids", hasMenu: true, menuKey: "kids" },
    {
      key: "eye-care",
      label: "Eye Care",
      to: "/eye-care",
      hasMenu: true,
      menuKey: "eyeCare",
    },
    {
      key: "our-story",
      label: "Our Story",
      to: "/our-story",
      hasMenu: true,
      menuKey: "ourStory",
    },
    {
      key: "visit",
      label: "Visit",
      to: "/visit",
      hasMenu: true,
      menuKey: "visit",
    },
  ]

  return (
    <div
      className="mobile-menu-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <aside className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header row */}
        <div className="mobile-menu-header">
          <Link to="/" onClick={onClose} className="mobile-menu-logo-link">
            <img
              src={logo}
              alt="VIZHEN PLUS OPTICS"
              className="mobile-menu-logo"
              width="145"
              height="48"
            />
          </Link>
          <button
            className="mobile-menu-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Accordion navigation */}
        <nav
          className="mobile-menu-nav mobile-menu-acc-nav"
          aria-label="Mobile navigation"
        >
          {navItemsForMobile.map((item) => (
            <MobileAccordionSection
              key={item.key}
              item={item}
              onNavClose={onClose}
            />
          ))}
        </nav>

        {/* Extras: Wishlist + Cart */}
        <div className="mobile-menu-extras">
          <Link
            to="/wishlist"
            onClick={onClose}
            className="mobile-menu-extra-link"
          >
            <Heart size={20} />
            <span>Wishlist</span>
          </Link>
          <Link to="/cart" onClick={onClose} className="mobile-menu-extra-link">
            <div className="mobile-cart-icon-wrapper">
              <ShoppingCart size={20} />
              <span className="mobile-cart-badge">{cartCount}</span>
            </div>
            <span>Shopping Cart</span>
          </Link>
        </div>

        {/* CTA Footer */}
        <div className="mobile-menu-footer">
          <button className="mobile-menu-cta-btn" onClick={handleBook}>
            <CalendarDays size={18} strokeWidth={2} />
            <span>BOOK AN EYE TEST</span>
          </button>
        </div>
      </aside>
    </div>
  )
}
