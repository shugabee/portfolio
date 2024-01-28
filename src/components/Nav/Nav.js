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
    <div className="nav-container">
      <div className="logo">
        <h1>Shelby Webb</h1>
      </div>
      {/* <div className="nav-menu"> */}
      <div className={`nav-menu ${showMobileMenu ? "show" : ""}`}>
        {/* <NavLink to="/">Home</NavLink> */}
        <HashLink to="/">Home</HashLink>
        <HashLink to="/#about">About</HashLink>
        <HashLink className="nav-link" to="/#projects">
          Projects
        </HashLink>
        <HashLink className="nav-link" to="/#contact">
          Contact
        </HashLink>
      </div>
      {/* <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776
      </div> */}
    </div>
  );
};

export default Nav;
