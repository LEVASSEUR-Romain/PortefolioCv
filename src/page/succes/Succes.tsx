import React from "react";
import CardSucces from "../../component/general/cardSucces/CardSucces";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import listSucces from "../../list/listSucces";
import "./succes.scss";
export default function Succes() {
  return (
    <section id="succes">
      <UnderTitle title="succès" />
      <ul className="listSucces">
        {listSucces.map((elmt, index) => (
          <li key={index}>
            <CardSucces succes={elmt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
