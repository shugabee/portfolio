import React from "react";
import Skills from "../Skills/Skills";
import "./AboutPage.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-me-container">
        <section className="about-me-info">
          <h2>About Me</h2>
          <p className="about-me-text">
            As an Occupational Therapist turned Web Developer, I bring a unique
            perspective to crafting web solutions that meet clients' needs. With
            years of experience helping individuals of diverse abilities
            navigate technology, I’m passionate about contributing to the
            improvement of accessibility across various technologies.
            <br />
            <br />
            In my role as a Web Developer proficient in React, PHP, and
            WordPress, I thrive on collaborating closely with clients to bring
            their visions to life. My problem-solving skills, coupled with a
            keen attention to detail, allow me to create robust and
            user-friendly solutions.
            <br />
            <br />I am not just a developer; I am a dedicated professional who
            understands the intersection of technology and user experience. If
            you are seeking a developer who combines technical expertise with a
            deep understanding of client needs, let's connect and explore how I
            can contribute to your digital success.
          </p>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
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
            <img
              className="skills-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            />
            <img
              className="skills-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
