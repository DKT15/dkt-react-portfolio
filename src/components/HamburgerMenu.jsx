import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`} // if open apply the open class otherwise display nothing.
        onClick={() => setIsOpen(!isOpen)} //sets is open to true when intially clicked. When clicked again it is set back to false.
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className="nav-link">
          {/* closes the menu automatically when clicked. */}
          Home
        </NavLink>
        <NavLink
          to="/liveprojects"
          onClick={() => setIsOpen(false)}
          className="nav-link"
        >
          Live Projects
        </NavLink>
        <NavLink
          to="/developmentprojects"
          onClick={() => setIsOpen(false)}
          className="nav-link"
        >
          Development Projects
        </NavLink>
        <NavLink
          to="/aiprojects"
          onClick={() => setIsOpen(false)}
          className="nav-link"
        >
          AI Projects
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="nav-link"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
