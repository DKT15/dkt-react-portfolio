import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        DKT
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav__links mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/Contact">
              Contact
            </a>
          </li>
          <li>
            <img
              className="avatar__image"
              src="./assets/images/avatar-image.svg"
              alt=""
            ></img>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
