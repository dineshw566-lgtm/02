import React from "react"
import { NavLink } from "react-router"

export default function NavItem({ to, label, icon: Icon, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? "navbar-nav-item active" : "navbar-nav-item"
      }
    >
      <span className="navbar-nav-icon" aria-hidden="true">
        {Icon && <Icon size={22} strokeWidth={1.8} />}
      </span>
      <span className="navbar-nav-label">{label}</span>
    </NavLink>
  )
}
