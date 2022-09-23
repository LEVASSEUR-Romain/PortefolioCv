import React from "react";
import CardSucces from "../../component/general/cardSucces/CardSucces";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import listSucces from "../../list/listSucces";
import "./certification.scss";
export default function Certification() {
  return (
    <section id="certification">
      <UnderTitle title="certification" />
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
