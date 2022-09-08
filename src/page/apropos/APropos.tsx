import React from "react";
import CardsMonParcours from "../../component/general/cardMonParcours/CardMonParcours";
import CardProfil from "../../component/general/cardProfil/CardProfil";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import "./aPropos.scss";
export default function APropos() {
  return (
    <section id="aPropos">
      <UnderTitle title="A propos" />
      <div className="aProposCards">
        <CardsMonParcours />
        <CardProfil />
      </div>
    </section>
  );
}
