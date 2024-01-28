import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Nav.css";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="nav-container">
      <div className="logo">
        <h1>Shelby Webb</h1>
      </div>
      <ul className={`nav-menu ${showMobileMenu ? "show" : ""}`}>
        <li>
          <HashLink smooth to="/" duration={800}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" duration={800}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link" smooth to="/#projects" duration={800}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink className="nav-link" smooth to="/#contact" duration={800}>
            Contact
          </HashLink>
        </li>
      </ul>
      {/* <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776
      </div> */}
    </nav>
  );
};

export default Nav;
