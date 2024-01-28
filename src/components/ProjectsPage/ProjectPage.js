import React, { useState } from "react";
import Project from "../Project/Project";
import Nav from "../Nav/Nav";
import buttermintsImage from "../../Images/buttermints.png";
import pooltechImage from "../../Images/pooltech.png";
import shakespeareImage from "../../Images/shakespeare.png";
import duttonImage from "../../Images/DuttonAir.png";
import trailImage from "../../Images/trailtracks.jpg";
import dinoImage from "../../Images/dino.jpg";
import "./ProjectPage.css";

const ProjectPage = (props) => {
  return (
    <div className="projects-page">
      <h2>Projects</h2>

      <div className="projects-container">
        <Project
          title="Buttermints"
          image={buttermintsImage}
          link="https://www.buttermints.com/"
          description="An eCommerce site for a homemade buttermints company built out of Utah.
          This site was created utilizing Wordpress Elementor, and PHP. Customers
          are able to add or remove items in their cart and purchase using
          WooCommerce."
        />
        <Project
          title="Pool Tech"
          image={pooltechImage}
          link="https://www.pooltechllc.com"
          description="A service website for a local pool company providing customers with service information and a way to contact the comapny. Built using Wordpress and PHP incorporating advanced custom fields."
        />

        <Project
          title="Shakespeare Development"
          image={shakespeareImage}
          link="https://www.shakespearedev.flitchbeta.com"
          description="A development company specializing in house and commercial properties. Built with Wordpress and PHP."
        />

        <Project
          title="Dutton Air Care"
          image={duttonImage}
          link="https://www.duttonaircare.com"
        />

        <Project
          title="Trail Tracks"
          image={trailImage}
          description="A React app designed for mountain bikers to track and add notes to their rides. Users are able to create an account where all of their info is stored. The app utilizes a trail API and a database to add, edit, and delete notes each time they ride a certain trail."
        />

        <Project
          title="Let's Meet a Dino"
          image={dinoImage}
          description="An application aimed at giving kids the opportunity to learn and navigate the computer while building a dinosaur! Users are able to select a dino and location to create a responsive combination. Users can also provide thier own dino image to be used."
        />
      </div>
    </div>
  );
};

export default ProjectPage;
