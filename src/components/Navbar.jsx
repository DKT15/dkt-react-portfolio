import React from "react";
import "../styles/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyling = {
    fontWeight: "bold",
    color: "#2f3e55",
  };

  return (
    <header className="nav-wrapper">
      <Link to="/" className="navbar-brand">
        DKT
      </Link>
      <nav className="nav-desktop">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? navStyling : null)}
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/liveprojects"
          style={({ isActive }) => (isActive ? navStyling : null)}
          className="nav-link"
        >
          Live Projects
        </NavLink>
        <NavLink
          to="/developmentprojects"
          style={({ isActive }) => (isActive ? navStyling : null)}
          className="nav-link"
        >
          Development Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? navStyling : null)}
          className="nav-link"
        >
          Contact
        </NavLink>
      </nav>
      <div className="nav-mobile">
        <HamburgerMenu />
      </div>
    </header>
  );
}
