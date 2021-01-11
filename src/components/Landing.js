import React from "react";
import Button from "./Button";
import Fade from "react-reveal/Fade";
import { Link, animateScroll as scroll } from "react-scroll";
function Landing({ english }) {
  return (
    <div className="landing" id="landing">
      <div className="container">
        <Fade duration={2000} left>
          {english ? (
            <h1>
              Hi, my name is <span className="name">Donovan</span>
              <span className="second-line">Web Developer</span>
            </h1>
          ) : (
            <h1>
              Salut, Je suis <span className="name">Donovan</span>
              <span className="second-line">Web Developer</span>
            </h1>
          )}
        </Fade>
        <Fade bottom duration={2000} delay={1500}>
          <Link to="banner-id" spy={true} smooth={true} duration={1000}>
            <Button
              url={"#"}
              text={english ? "More Information" : "En savoir plus"}
              color={"white"}
            />
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Landing;
