import React from "react";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import "./projets.scss";
import listProjects from "./../../list/listProjects";
import CardsProjet from "../../component/general/cardsProjet/CardsProjet";
import { Project } from "../../interface";
export default function Projets() {
  return (
    <section id="projects">
      <UnderTitle title="Projets" />
      <ul className="listProject">
        {listProjects.map((elmt: Project, index: number) => (
          <li key={index}>
            <CardsProjet project={elmt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
