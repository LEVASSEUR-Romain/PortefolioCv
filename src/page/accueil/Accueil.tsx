import React from "react";
import "./accueil.scss";
import Title from "./../../component/general/title/Title";
import CardLieu from "../../component/general/cardLieu/CardLieu";
import ButtonContact from "../../component/button/buttonRound/buttonRound";
import ScrollBottom from "../../component/decoration/scrollBottom/ScrollBottom";
import OpacityWhite from "../../component/decoration/opacityWhite/OpacityWhite";
import principal from "../../asset/image/principal.jpg";
export default function Accueil() {
  return (
    <section id="principal">
      <div className="background">
        <img src={principal} alt="decoration" />
      </div>
      <OpacityWhite />
      <Title value="Développeur Web" />
      <CardLieu />
      <ButtonContact value="Me contacter" link="contact" />
      <ScrollBottom bottom="-25%" />
    </section>
  );
}
