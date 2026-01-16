import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX, HiAcademicCap } from "react-icons/hi";
import rpLogo from "../image/RP_LOGO.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      {/* Text Logo */}
      <Link to="/" className="header-logo" onClick={closeMenu}>
<img
  src={rpLogo}
  width={200}
  height={200}
  alt="Republic Polytechnic logo"
  className="logo-img"
/>
      </Link>

      {/* Desktop Nav */}
      <nav className="nav-links desktop-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Diplomas
        </NavLink>
        <NavLink to="/registration" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Registration
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          FAQ
        </NavLink>
      </nav>

      {/* Hamburger */}
      <button
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <NavLink to="/" end onClick={closeMenu} className="mobile-link">Home</NavLink>
        <NavLink to="/diplomas" onClick={closeMenu} className="mobile-link">Diplomas</NavLink>
        <NavLink to="/registration" onClick={closeMenu} className="mobile-link">Registration</NavLink>
        <NavLink to="/faq" onClick={closeMenu} className="mobile-link">FAQ</NavLink>
      </div>

      {/* Overlay */}
      <div className={open ? "menu-overlay open" : "menu-overlay"} onClick={closeMenu} />
    </header>
  );
}
