import React from "react";
import Nav from "../Nav/Nav";
import Skills from "../Skills/Skills";
import "./AboutPage.css";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="about-me-container">
        <div className="about-me-info">
          <h1 className="name">Shelby Webb</h1>
          <h2 className="occupation">Full Stack Web Developer</h2>
          <p className="about-me-text">
          Occupational Therapist turned Web Developer, passionate about crafting web solutions that meet clients' demands and boost their online presence. Years of experience helping people of diverse backgrounds and abilities navigate technology, coupled with a strong passion for accessibility, have guided my journey. 
          <br/>
          As a Web Developer proficient in WordPress, PHP, and React, I work closely with clients to translate their visions into reality. My focus extends beyond aesthetics to include optimizing websites for search engines (SEO). I'm dedicated to helping businesses enhance their online visibility and reach their target audiences effectively.
          <br/>
          If you're seeking a developer who combines technical expertise with a deep understanding of client needs and SEO strategies, let's connect and explore how I can contribute to your digital success.
          </p>

          <section className="skills-section">
            <h3>Skills</h3>
            <div>
              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />

              <img
                className="skills-icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
            </div>
          </section>
        </div>
        <div className="shelby-photo-container">
          <img
            className="shelby-photo"
            src="https://drive.google.com/uc?export=view&id=12so4i8RuI076mxfhktF0nfxsxTJ0w2PV"
            alt="photo of shelby"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
