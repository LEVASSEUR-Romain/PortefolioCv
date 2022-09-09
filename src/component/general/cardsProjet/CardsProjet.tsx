import React from "react";
import "./cardsProjet.scss";
import { Project } from "../../../interface";
import ButtonSkill from "../../button/buttonSkill/ButtonSkill";
export default function CardsProjet({ project }: { project: Project }) {
  /*  console.log(projet); */
  return (
    <div className="cardProjet">
      <a href={project.liens} target="_blank" rel="noreferrer">
        <h4>{project.name}</h4>
        <img src={project.src} alt={"Montre le site " + project.name} />
        <p>{project.description}</p>
        <ul>
          {project.listTech.map((elmt, index) => (
            <li>
              <ButtonSkill key={index} value={elmt} />
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
}
