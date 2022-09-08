import React from "react";
import CardsCompetences from "../../component/general/cardsCompetences/CardsCompetences";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import { listBackEnd, listFrontEnd, listTools } from "../../list/listCompences";
import "./competences.scss";
export default function Competences() {
  return (
    <section id="competences">
      <UnderTitle title="Compétences" />
      <div className="competencesCards">
        <CardsCompetences value="Front-End" list={listFrontEnd} />
        <CardsCompetences value="Back-End" list={listBackEnd} />
        <CardsCompetences value="Tools" list={listTools} />
      </div>
    </section>
  );
}
