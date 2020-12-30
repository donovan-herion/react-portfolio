import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    console.log("clicked");
    scroll.scrollToTop();
    console.log("clicked after");
  };
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <Link activeClass="active" to="landing" smooth={true} duration={1500}>
            <FontAwesomeIcon icon={faChevronUp} />
          </Link>
        </div>
        <div className="links">
          <FontAwesomeIcon icon={faTwitter} className="link" />
          <FontAwesomeIcon icon={faLinkedin} className="link" />
          <FontAwesomeIcon icon={faGithub} className="link" />
        </div>
        <hr />
        <p>{`${new Date().getFullYear()} All rights reserved`}</p>
      </div>
    </footer>
  );
}

export default Footer;
