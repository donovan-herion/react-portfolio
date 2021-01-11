import React from "react";
import Banner from "./Banner";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Wobble from "react-reveal/Wobble";
import amacloneVideo from "../video/amazon.mp4";
import jbriteVideo from "../video/jepsen-brite.mp4";
import devRestoVideo from "../video/dev-resto.mp4";

function Projects({ english }) {
  return (
    <>
      <Banner title={english ? "MY PROJECTS" : "MES PROJETS"} />

      <Project
        english={english}
        title={"Amazon Clone"}
        text={
          english
            ? "Fully functional E-commerce site including an authentication and payment system. Adapted to all screens."
            : "Site E-commerce complètement fonctionnel comprenant un système d'authentification et de paiement. Adapté à tous les écrans."
        }
        demoURL={"https://amaclone-8c301.web.app/"}
        sourceURL={"https://github.com/donovan-herion/amazon-clone"}
        video={amacloneVideo}
      />
      <Project
        english={english}
        title={"Jepsen Brite"}
        text={
          english
            ? "Event management website provided with an authentication system allowing the creation of events by the community. Adapted to all screens."
            : "Site de gestion d'évènements pourvu d'un système d'authentification et de création d'évènements par la communauté. Adapté à tous les écrans."
        }
        demoURL={"https://j-brite.herokuapp.com/"}
        sourceURL={"https://github.com/donovan-herion/jepsen-brite"}
        video={jbriteVideo}
      />
      <Project
        english={english}
        title={"Dev Restaurant"}
        text={
          english
            ? "Showcase site of a restaurant. Fully customizable by the end user. Possibility to create and publish recipes, add team members etc. Adapted to all screens."
            : "Site vitrine d'un restaurant. Entièrement personnalisable par l'utilisateur final. Possibilité de création et publications de recettes, ajout de personnel etc. Adapté à tous les écrans."
        }
        demoURL={"http://dev-restaurant.unaux.com/"}
        sourceURL={"https://github.com/donovan-herion/dev-restaurant"}
        video={devRestoVideo}
      />

      <Wobble delay={300}>
        <button
          className="btn-more-github"
          onClick={() =>
            window.open("https://github.com/donovan-herion", "_blank")
          }
        >
          <FontAwesomeIcon icon={faGithub} />
          {english ? " See more on Github" : " Voir plus sur Github"}
        </button>
      </Wobble>
    </>
  );
}

export default Projects;
