import React from "react";
import Banner from "./Banner";
import Project from "./Project";
import amaclone from "../images/amaclone.png";
import jbrite from "../images/jbrite.png";
import woodWars from "../images/wood-wars.png";
import clockingMachine from "../images/clocking-machine.png";
import devRestaurant from "../images/dev-restaurant.png";

function Projects() {
  return (
    <>
      <Banner title={"MES PROJETS"} />

      <Project
        title={"Amazon Clone"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto eligendi aliquam fugit laborum, fuga ad tempora explicabo exercitationem eveniet! Eius libero quae ab repellendus!"
        }
        demoURL={"https://gatsby-simplefolio.netlify.app/"}
        sourceURL={"https://gatsby-simplefolio.netlify.app/"}
        backgroundURL={amaclone}
      />
      <Project
        title={"Jepsen Brite"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto eligendi aliquam fugit laborum, fuga ad tempora explicabo exercitationem eveniet! Eius libero quae ab repellendus!"
        }
        demoURL={"https://gatsby-simplefolio.netlify.app/"}
        sourceURL={"https://gatsby-simplefolio.netlify.app/"}
        backgroundURL={jbrite}
      />
      <Project
        title={"Wood Wars"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto eligendi aliquam fugit laborum, fuga ad tempora explicabo exercitationem eveniet! Eius libero quae ab repellendus!"
        }
        demoURL={"https://gatsby-simplefolio.netlify.app/"}
        sourceURL={"https://gatsby-simplefolio.netlify.app/"}
        backgroundURL={woodWars}
      />
      <Project
        title={"Clocking Machine"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto eligendi aliquam fugit laborum, fuga ad tempora explicabo exercitationem eveniet! Eius libero quae ab repellendus!"
        }
        demoURL={"https://gatsby-simplefolio.netlify.app/"}
        sourceURL={"https://gatsby-simplefolio.netlify.app/"}
        backgroundURL={clockingMachine}
      />

      <Project
        title={"Dev Restaurant"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto eligendi aliquam fugit laborum, fuga ad tempora explicabo exercitationem eveniet! Eius libero quae ab repellendus!"
        }
        demoURL={"https://gatsby-simplefolio.netlify.app/"}
        sourceURL={"https://gatsby-simplefolio.netlify.app/"}
        backgroundURL={devRestaurant}
      />
    </>
  );
}

export default Projects;
