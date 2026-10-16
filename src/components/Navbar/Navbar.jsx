import React, { useState, useCallback, useRef, useEffect } from "react"
import { Link, NavLink, useNavigate, useLocation } from "react-router"
import {
  CalendarDays,
  Eye,
  Glasses,
  Heart,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"
import MegaMenu from "./MegaMenu"
import MobileMenu, { KidsIcon, SunglassesIcon } from "./MobileMenu"
import TopBar from "./TopBar"
import { megaMenuData, navItems } from "./megaMenuData"
import logo from "../../assets/logo/logo.png"
import "./Navbar.css"

/* Map iconName strings to components — avoids dynamic import */
function NavIcon({ name, size = 22 }) {
  switch (name) {
    case "glasses":
      return <Glasses size={size} strokeWidth={1.8} />
    case "sunglasses":
      return <SunglassesIcon size={size} />
    case "kids":
      return <KidsIcon size={size} />
    case "eye":
      return <Eye size={size} strokeWidth={1.8} />
    case "users":
      return <Users size={size} strokeWidth={1.8} />
    case "map-pin":
      return <MapPin size={size} strokeWidth={1.8} />
    default:
      return null
  }
}

export default function Navbar({
  onBookAppointment,
  cartCount = 0,
  wishlistCount = 0,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchFocused, setSearchFocused] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  /* Hover mega-menu state */
  const [activeMenu, setActiveMenu] = useState(null)
  const closeTimerRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* --- Hover logic with close-delay to prevent hover-gap problem --- */
  const openMenu = useCallback((menuKey) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveMenu(menuKey)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 120) // 120ms grace period — stops menu from blinking on mouse move
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const closeMenu = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setActiveMenu(null)
  }, [])

  /* --- Search & CTA --- */
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      closeMenu()
      navigate(`/eyeglasses?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleCtaClick = () => {
    closeMenu()
    if (onBookAppointment) onBookAppointment()
    else navigate("/book-eye-test")
  }

  return (
    <>
      {/* ── OUTER WRAPPER: covers TopBar + header + open mega-menu for mouse-leave detection ── */}
      <div
        className={`navbar-wrapper ${isHome ? "is-home-hero" : ""} ${
          isScrolled ? "is-scrolled" : "is-top"
        }`}
        onMouseLeave={scheduleClose}
      >
        {/* ── Top small info bar ── */}
        <TopBar onBookAppointment={handleCtaClick} />

        {/* ── Main transparent header blending with hero ── */}
        <header
          className={`navbar-header ${isHome ? "is-home" : ""} ${
            isScrolled ? "is-scrolled" : "is-top"
          }`}
        >
          <div className="navbar-container">
            {/* LEFT: LOGO */}
            <div className="navbar-left">
              <Link
                to="/"
                className="navbar-logo-link"
                aria-label="VIZHEN PLUS OPTICS Home"
                onClick={closeMenu}
              >
                <img
                  src={logo}
                  alt="VIZHEN PLUS OPTICS - For Your Perfect Vision"
                  className="navbar-logo"
                  width="160"
                  height="54"
                />
              </Link>
            </div>

            {/* CENTER: DESKTOP NAVIGATION with hover mega-menu trigger */}
            <nav className="navbar-center" aria-label="Main Store Navigation">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="navbar-nav-trigger"
                  onMouseEnter={() =>
                    item.hasMenu ? openMenu(item.menuKey) : closeMenu()
                  }
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => {
                      const isMenuOpen = activeMenu === item.menuKey
                      return [
                        "navbar-nav-item",
                        isActive ? "active" : "",
                        isMenuOpen ? "menu-open" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }}
                    onClick={closeMenu}
                  >
                    <span className="navbar-nav-icon" aria-hidden="true">
                      <NavIcon name={item.iconName} />
                    </span>
                    <span className="navbar-nav-label">{item.label}</span>
                    {item.hasMenu && (
                      <span
                        className={`navbar-nav-chevron ${
                          activeMenu === item.menuKey ? "open" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* RIGHT: Search, Wishlist, Cart, CTA, Hamburger */}
            <div className="navbar-right">
              <div className="navbar-divider" aria-hidden="true" />

              {/* Pill Search */}
              <form
                className={`navbar-search-form ${
                  searchFocused ? "focused" : ""
                }`}
                onSubmit={handleSearchSubmit}
                role="search"
              >
                <input
                  type="text"
                  className="navbar-search-input"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  aria-label="Search products, brands"
                />
                <button
                  type="submit"
                  className="navbar-search-submit"
                  aria-label="Submit search"
                >
                  <Search size={18} strokeWidth={2} />
                </button>
              </form>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="navbar-icon-btn navbar-wishlist-btn"
                aria-label={`View Wishlist with ${wishlistCount} items`}
                onClick={closeMenu}
              >
                <Heart size={21} strokeWidth={1.8} />
                {wishlistCount > 0 && (
                  <span className="navbar-wishlist-badge">{wishlistCount}</span>
                )}
              </Link>

              {/* Cart with badge */}
              <Link
                to="/cart"
                className="navbar-icon-btn navbar-cart-btn"
                aria-label={`Shopping cart with ${cartCount} items`}
                onClick={closeMenu}
              >
                <ShoppingCart size={21} strokeWidth={1.8} />
                <span className="navbar-cart-badge">{cartCount}</span>
              </Link>

              {/* CTA */}
              <button
                type="button"
                className="navbar-cta-btn"
                onClick={handleCtaClick}
              >
                <CalendarDays size={18} strokeWidth={2.2} />
                <span>BOOK AN EYE TEST</span>
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                className="navbar-hamburger-btn"
                onClick={() => {
                  closeMenu()
                  setMobileMenuOpen(true)
                }}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* ── MEGA MENU PANEL — rendered inside wrapper so mouse-leave works ── */}
        {activeMenu && megaMenuData[activeMenu] && (
          <div
            className="mega-menu-overlay"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <MegaMenu data={megaMenuData[activeMenu]} onClose={closeMenu} />
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookAppointment={onBookAppointment}
        cartCount={cartCount}
      />
    </>
  )
}
