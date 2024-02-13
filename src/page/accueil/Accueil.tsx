import React from "react";
import "./accueil.scss";
import Title from "./../../component/general/title/Title";
import CardLieu from "../../component/general/cardLieu/CardLieu";
import ButtonContact from "../../component/button/buttonRound/buttonRound";
import ScrollBottom from "../../component/decoration/scrollBottom/ScrollBottom";
import OpacityWhite from "../../component/decoration/opacityWhite/OpacityWhite";
import principal from "../../asset/image/principal.jpg";
import listUrl from "../../list/listUrl";
import ButtonLiensSocial from "../../component/button/buttonLiensSocial/ButtonLiensSocial";
export default function Accueil() {
  const GitHubLiens = listUrl.find((e) => e.type === "github");
  return (
    <section id="principal">
      <div className="background">
        <img src={principal} alt="decoration" />
      </div>
      <OpacityWhite />
      <Title value="Développeur Web" />
      <CardLieu />
      <ButtonContact value="Me contacter" link="contact" />
      <div className="accueilSocial">
        <ButtonLiensSocial type="gitHub" url={GitHubLiens ? GitHubLiens.url : ""} style={{ zIndex: 4 }} />
      </div>
      <ScrollBottom bottom="-10%" />
    </section>
  );
}
