import React from "react";
import iconeProfil from "../../../asset/svg/iconeProfil.svg";
import ButtonDescribe from "../../button/buttonDescribe/ButtonDescribe";
import "./cardProfil.scss";
export default function CardProfil() {
  return (
    <div className="cardProfil">
      <img src={iconeProfil} alt="un homme blond prés d'un ordinateur" />
      <h3>LEVASSEUR Romain</h3>
      <p>
        “L’imagination est plus importante que le savoir.”{" "}
        <span>De Albert Einstein</span>
      </p>
      <ButtonDescribe value={"age"} />
      <ButtonDescribe value={"Aisne"} />
      <ButtonDescribe value={"Loisirs : Cinéma, twitch interview"} />
      <ButtonDescribe value={"Sports : Natation, Jogging"} />
    </div>
  );
}
