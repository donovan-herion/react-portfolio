import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  let history = useHistory();
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <Link activeClass="active" to="landing" smooth={true} duration={1500}>
            <FontAwesomeIcon icon={faChevronUp} />
          </Link>
        </div>
        <div className="links">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="link"
            onClick={() =>
              window.open("https://www.linkedin.com/in/donovan-h%C3%A9rion/", "_blank")
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="link"
            onClick={() =>
              window.open("https://github.com/donovan-herion", "_blank")
            }
          />
            <FontAwesomeIcon
              icon={faDiscord}
              className="link"
              onClick={() =>
                window.open("https://discordapp.com/users/donovan#9964", "_blank")
              }
            />
        </div>
        <hr />
        <p>{`${new Date().getFullYear()} All rights reserved`}</p>
      </div>
    </footer>
  );
}

export default Footer;
