import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import About from "../AboutPage/AboutPage";
import ProjectPage from "../ProjectsPage/ProjectPage";
import Contact from "../ContactPage/Contact";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import shelbyImage from "../../Images/shelby-photo.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="animated-background">
          <div className="home-info">
            <p>Hey, I'm Shelby!</p>
            <p>A Full Stack Web Developer</p>
            <div className="social-icon-container">
              <a
                href="https://github.com/shugabee"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/shelby-webb-422b7191/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="shelby-photo-container canvas">
            <div className="curtain">
              <img
                className="shelby-photo"
                src={shelbyImage}
                alt="photo of shelby"
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <ProjectPage />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
