import React from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyling = {
    fontWeight: "bold",
    color: "#2f3e55",
  };

  return (
    <header>
      <Link to="/" className="navbar-brand">
        DKT
      </Link>
      <nav className="porfolio-nav">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? navStyling : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/liveprojects"
          style={({ isActive }) => (isActive ? navStyling : null)}
        >
          Live Projects
        </NavLink>
        <NavLink
          to="/developmentprojects"
          style={({ isActive }) => (isActive ? navStyling : null)}
        >
          Development projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? navStyling : null)}
        >
          Contact
        </NavLink>
        <img
          className="avatar__image"
          src="./assets/images/avatar-image.svg"
          alt=""
        ></img>
      </nav>
    </header>
  );
}
