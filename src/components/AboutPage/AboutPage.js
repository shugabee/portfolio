import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import "./AboutPage.css";

const About = () => {
  return (
    <div>
      <Nav />
      {/* <h1>About Me</h1> */}
      <div className="about-me-container">
        <div className="about-me-info">
          <h1 className="name">Shelby Webb</h1>
          <h2 className="occupation">Full Stack Web Developer</h2>
          <p className="about-me-text">
            Hey there, I'm an Occupational Therapist turned Web Developer! After
            spending years helping people of all ages and skills navigate and
            become more independent with technology, I've developed a huge
            passion for accessibility. I love learning and implementing
            techniques into my code to provide all users with an efficient way
            to access the web, including those using a keyboard, switch device,
            or their eyes for navigation.
          </p>

          <p className="about-me-text">
            Outside of coding you'll probably find me in nature rock climbing,
            snowboarding, mountain biking, or hiking!
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
        <div>
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
