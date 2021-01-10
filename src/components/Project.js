import React from "react";
import Button from "./Button";
// import video from "../video/Category.mp4";
import Fade from "react-reveal/Fade";
function Project({ title, text, demoURL, sourceURL, video }) {
  return (
    <div className="projects">
      <Fade left>
        <div className="left">
          <h3>{title}</h3>

          <p>{text}</p>
          <div className="buttons">
            <Button url={demoURL} text={"DEMO"} color={"white"} />
            <a href={sourceURL} target="_blank" className="no-border-button">
              Code source
            </a>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="right">
          <div className="backgroundvideocontainer">
            <video autoPlay muted loop playsinline className="video">
              <source src={video} type="video/mp4" />
              votre browser ne supporte pas la video
            </video>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Project;
