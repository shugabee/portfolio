import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/AboutPage/AboutPage";
import ProjectPage from "./components/ProjectsPage/ProjectPage";
import Contact from "./components/ContactPage/Contact";

export default (
  <Router>
    <Routes>
      <Route exact path="/" element={<About />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);