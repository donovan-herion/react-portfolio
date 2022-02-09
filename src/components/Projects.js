import React from "react";
import Banner from "./Banner";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Wobble from "react-reveal/Wobble";
import amazon from "../video/amazon.mp4";
import airbnb from "../video/airbnb.mp4";
import mapedicure from "../video/mapedicure.mp4";

function Projects({ english }) {
  return (
    <>
      <Banner title={english ? "MY PROJECTS" : "MES PROJETS"} />

      <Project
        english={english}
        title={"Amazon Clone Project"}
        text={english ? "Fully functional E-commerce site including an authentication and payment system. Adapted to all screens." : "Site E-commerce complètement fonctionnel comprenant un système d'authentification et de paiement. Adapté à tous les écrans."}
        demoURL={"https://amazon-clone-project-donovan.vercel.app/"}
        sourceURL={"https://github.com/donovan-herion/amazon-clone-project"}
        video={amazon}
      />
      <Project
        english={english}
        title={"Airbnb Clone Project"}
        text={
          english
            ? "Simplified reproduction of the airbnb site. Possibility to simulate the search for a property via the search bar. Adapted to all screens."
            : "Reproduction simplifiée du site d'airbnb. Possibilité de simuler la recherche d'un bien via la barre de recherche. Adapté à tous les écrans."
        }
        demoURL={"https://airbnb-clone-project-donovan.vercel.app/"}
        sourceURL={"https://github.com/donovan-herion/airbnb-clone-project"}
        video={airbnb}
      />
      <Project
        english={english}
        title={"Ma Pedicure"}
        text={
          english
            ? "Showcase site of an independent pedicure. Fully customizable by the client. Possibility to change the text of the different sections, to add different prices... Adapted to all screens."
            : "Site vitrine d'une pédicure indépendante. Entièrement personnalisable par le client. Possibilité de changer le texte des différentes sections, d'ajouter différents tarifs... Adapté à tous les écrans."
        }
        demoURL={"https://mapedicure.com"}
        sourceURL={null}
        video={mapedicure}
      />

      <Wobble delay={300}>
        <button className="filled-button-white mx-auto" onClick={() => window.open("https://github.com/donovan-herion", "_blank")}>
          <FontAwesomeIcon icon={faGithub} />
          {english ? " See more on Github" : " Voir plus sur Github"}
        </button>
      </Wobble>
    </>
  );
}

export default Projects;
