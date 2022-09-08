import React from "react";
import ButtonSkill from "../../button/buttonSkill/ButtonSkill";
import "./cardsCompetences.scss";
export default function CardsCompetences({
  value,
  list,
}: {
  value: string;
  list: string[];
}) {
  return (
    <div className="cardsCompetences">
      <h3>{value}</h3>
      <div className="listCompetences">
        {list.map((elmt, index) => (
          <ButtonSkill key={index} value={elmt} />
        ))}
      </div>
    </div>
  );
}
