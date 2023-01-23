import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <NavLink to="/">About</NavLink>
      <NavLink className="nav-link" to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;
