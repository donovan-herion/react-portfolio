import React from "react";
import Banner from "./Banner";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Wobble from "react-reveal/Wobble";
import amacloneVideo from "../video/amazon.mp4";
import jbriteVideo from "../video/jepsen-brite.mp4";
import devRestoVideo from "../video/dev-resto.mp4";

function Projects() {
  return (
    <>
      <Banner title={"MES PROJETS"} />

      <Project
        title={"Amazon Clone"}
        text={
          "Site E-commerce complètement fonctionnel comprenant un système d'authentification et de paiement. Adapté à tous les écrans."
        }
        demoURL={"https://amaclone-8c301.web.app/"}
        sourceURL={"https://github.com/donovan-herion/amazon-clone"}
        video={amacloneVideo}
      />
      <Project
        title={"Jepsen Brite"}
        text={
          "Site de gestion d'évènements pourvu d'un système d'authentification et de création d'évènements par la communauté. Adapté à tous les écrans."
        }
        demoURL={"https://j-brite.herokuapp.com/"}
        sourceURL={"https://github.com/donovan-herion/jepsen-brite"}
        video={jbriteVideo}
      />
      <Project
        title={"Dev Restaurant"}
        text={
          "Site vitrine d'un restaurant. Entièrement personnalisable par l'utilisateur final. Possibilité de création et publications de recettes. Adapté à tous les écrans."
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
          <FontAwesomeIcon icon={faGithub} /> Voir plus sur Github
        </button>
      </Wobble>
    </>
  );
}

export default Projects;
