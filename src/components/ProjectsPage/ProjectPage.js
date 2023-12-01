import React from "react";
import Nav from "../Nav/Nav";
import buttermintsImage from '../../Images/buttermints.png';
import pooltechImage from '../../Images/pooltech.png';
import shakespeareImage from '../../Images/shakespeare.png';
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <Nav />
      {/* <h1>Projects</h1> */}

      <div className="projects-container">
      <div className="single-project-container">
          <h1>Buttermints</h1>
          <div className="buttermints-image-container">
            <img
            className="project-image"
            src={buttermintsImage}
            alt="buttermints site image"
            ></img>
          </div>

          <p className="project-description-text">
            An eCommerce site for a homemade buttermints company built out of Utah. This site was created utilizing Wordpress Elementor, and PHP. Customers are able to add or remove items in their cart and purchase using WooCommerce. 
          </p>

          <div className="link-container">

          <a
          className="project-site-link"
          href="https://www.buttermints.com/"
          target="_blank"
          >
            Site
          </a>
          </div>

        </div>

        <div className="single-project-container">
          <h1>Pool Tech</h1>
          <div className="pooltech-image-container">
            <img
            className="project-image"
            src={pooltechImage}
            alt="pooltech site image"
            ></img>
          </div>

          <p className="project-description-text">
            This is the service website for a local pool company providing customers with service information and a way to contact the company. This site was built using Wordpress and PHP incorporating advanced custom fields.
          </p>

          <div className="link-container">

          <a
          className="project-site-link"
          href="https://www.pooltechllc.com/"
          target="_blank"
          >
            Site
          </a>
          </div>

        </div>

        <div className="single-project-container">
          <h1>Shakespeare Development</h1>
          <div className="shakespeare-image-container">
            <img
            className="project-image"
            src={shakespeareImage}
            alt="shakespeare development site image"
            ></img>
          </div>

          <p className="project-description-text">
            A development company specializing in house and commercial properties. This site was built using WordPress and PHP enabling users to view previous developed properties or browse available homes and plans.
          </p>

          <div className="link-container">

          <a
          className="project-site-link"
          href="https://www.buttermints.com/"
          target="_blank"
          >
            Site
          </a>
          </div>

        </div>

        <div className="single-project-container">
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

        <div className="single-project-container">
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
