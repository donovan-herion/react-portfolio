import React from "react";
import Banner from "./Banner";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Wobble from "react-reveal/Wobble";
import city2 from "../video/city2.mp4";
import nocturne from "../video/nocturne.mp4";
import mapedicure from "../video/mapedicure.mp4";

function Projects({ english }) {
  return (
    <>
      <Banner title={english ? "MY PROJECTS" : "MES PROJETS"} />

      <Project
        english={english}
        title={"City2 Shopping Center"}
        text={
          english
            ? "With more than 100 shops in the heart of the city, City 2 is THE place to be for your shopping spree in Brussels... Adapted to all screens. Elementor website."
            : "Avec plus de 100 enseignes réunies au cœur de la ville, City 2, c'est LE point de rendez-vous idéal pour vos virées shopping à Bruxelles... Adapté à tous les écrans. Site web développé sur mesure avec Elementor"
        }
        demoURL={"https://city2.be"}
        sourceURL={null}
        video={city2}
      />
      <Project
        english={english}
        title={"Nocturne Agency"}
        text={
          english
            ? "Nocturne Agency creates the visual content necessary for the company to digitally show its positioning, its promise and its activities... Adapted to all screens. Website using NextJS"
            : "Nocturne Agency est une agence de communication spécialisée dans la création et la publication de contenu pour tout type d'entreprise... Adapté à tous les écrans. Site web réalisé sur mesure avec NextJS"
        }
        demoURL={"https://nocturne-agency.com"}
        sourceURL={null}
        video={nocturne}
      />
      <Project
        english={english}
        title={"Ma Pedicure"}
        text={
          english
            ? "Showcase site of an independent pedicure. Fully customizable by the client. Possibility to change the text of the different sections, to add different prices... Adapted to all screens. Website using Wordpress and ACF"
            : "Site vitrine d'une pédicure indépendante. Entièrement personnalisable par le client. Possibilité de changer le texte des différentes sections, d'ajouter différents tarifs... Adapté à tous les écrans. Site web réalisé avec Wordpress et ACF"
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
