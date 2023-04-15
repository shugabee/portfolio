import React from "react";
import Nav from "../Nav/Nav";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <Nav />
      {/* <h1>Projects</h1> */}

      <div className="projects-container">
        <div className="trail-project-container">
          <h1>Trail Tracks</h1>
          <div className="trail-iframe-container">
          <iframe
            className="responsive-trail-frame"
            width="530"
            height="315"
            src="https://www.youtube.com/embed/pmXenoZIyiE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </div>

          <p className="project-description-text">
            A React app designed for mountain bikers to track and add notes to
            their rides. Users are able to create an account where all of their
            information is stored. The app utilizes a trail API and a database
            to add, edit, and delete notes each time they ride a certain trail.
            They also have the ability to keep a favorites list of their most
            loved trails.{" "}
          </p>

          <div className="link-container">
          <a
            className="project-repo-link"
            href="https://github.com/shugabee/mtn-bike-trails"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>

          <a
          className="project-site-link"
          href="https://shugabee.github.io/mtn-bike-trails/"
          target="_blank"
          >
            Site
          </a>
          </div>

        </div>

        <div className="dino-project-container">
          <h1>Let's Meet A Dinosaur</h1>

          <div className="dino-iframe-container">
          <iframe
            className="responsive-dino-frame"
            width="530"
            height="315"
            src="https://www.youtube.com/embed/NcwfagqPiKY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </div>

          <p className="project-description-text">
            An application aimed at giving kids an opportunity to learn and
            navigate the computer while building a dinosaur! Users are able to
            select a dino and location to create a responsive combination.
            Users can also provide their own dinosaur image to be used.{" "}
          </p>

          <div className="link-container">
          <a
            className="project-repo-link"
            href="https://github.com/shugabee/capstone-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
          <a
          className="project-site-link"
          href="https://shugabee.github.io/capstone-project-dino/client/"
          target="_blank"
          >
            Site
          </a>
          </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectPage;
