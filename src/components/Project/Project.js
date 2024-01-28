import React, { useState } from "react";

export const Project = (props) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <div
      className="single-project-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h3>{props.title}</h3>
      <div className="project-image-container">
        <img
          className="project-image"
          src={props.image}
          alt="project site image"
        ></img>
      </div>
      {/* <div className="link-container">
        <a className="project-site-link" href={props.link} target="_blank">
          Site
        </a>
      </div> */}
      {active === true ? (
        <div className="project-description-container">
          <p className="description-text">{props.description}</p>
          <div className="description-links">
            <a href={props.link} target="_blank">
              Website
            </a>
            {props.repolink && (
              <a href={props.repolink} target="_blank">
                Repo
              </a>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Project;
