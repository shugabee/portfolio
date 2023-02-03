import React from "react";
import Nav from "../Nav/Nav";
import "./Contact.css";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <Nav />
      {/* <h1>Contact Me</h1> */}

      <div className="contact-container">
        <div>
          <MdEmail size="50px" />
          <p className="email-text">shelbylyn.webb@gmail.com</p>
        </div>
        <a href="https://github.com/shugabee" target="_blank" rel="noreferrer">
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shelby-webb-422b7191/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg"
          />
        </a>
        {/* <a>Resume</a> */}
      </div>
    </div>
  );
};

export default Contact;
