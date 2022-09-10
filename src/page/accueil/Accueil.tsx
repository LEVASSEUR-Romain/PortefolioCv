import React from "react";
import "./accueil.scss";
import Title from "./../../component/general/title/Title";
import CardLieu from "../../component/general/cardLieu/CardLieu";
import ButtonContact from "../../component/button/buttonRound/buttonRound";
import ScrollBottom from "../../component/decoration/scrollBottom/ScrollBottom";
import OpacityWhite from "../../component/decoration/opacityWhite/OpacityWhite";
export default function Accueil() {
  return (
    <section id="principal">
      <OpacityWhite />
      <Title value="Développeur Web" />
      <CardLieu />
      <ButtonContact value="Me contacter" link="contact" />
      <ScrollBottom bottom="-25%" />
    </section>
  );
}
