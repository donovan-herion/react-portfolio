import React from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";
function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <Fade duration={2000} left>
          <h1>
            Salut, Je suis <span className="name">Donovan</span>
            <span className="second-line">Web Developer</span>
          </h1>
        </Fade>
        <Fade bottom duration={2000} delay={1500}>
          <Button url={"#"} text={"En savoir plus"} color={"white"} />
        </Fade>
      </div>
    </div>
  );
}

export default Landing;
