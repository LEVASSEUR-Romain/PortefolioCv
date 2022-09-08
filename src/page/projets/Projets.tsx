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
      <div className="listProject">
        {listProjects.map((elmt: Project, index: number) => (
          <CardsProjet key={index} project={elmt} />
        ))}
      </div>
    </section>
  );
}
