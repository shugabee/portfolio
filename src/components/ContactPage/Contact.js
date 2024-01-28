import React from "react";
import Nav from "../Nav/Nav";
import Skills from "../Skills/Skills";
import "./Contact.css";
import { MdEmail, MdArticle } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Connect With Me</h2>
      <Skills />
    </div>
  );
};

export default Contact;
