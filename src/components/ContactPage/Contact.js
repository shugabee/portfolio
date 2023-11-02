import React from "react";
import Nav from "../Nav/Nav";
import "./Contact.css";
import { MdEmail, MdArticle } from "react-icons/md";

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
        <a 
        href="https://github.com/shugabee" 
        target="_blank" 
        rel="noreferrer">
          <img
            className="contact-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          />
        </a>
        <div>
          <MdArticle size="50px" />
        <a 
        href="https://docs.google.com/document/d/1q9FiFhlQiIFcVR3LguO9dB2-4TQwFpK0qGgR5Z7xfaA/edit?usp=sharing" 
        target="_blank" 
        rel="noreferrer"
        >
        <p className="resume-text">Resume</p> 
        </a>
        </div>
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
      </div>
    </div>
  );
};

export default Contact;
