import React from "react";
import "./buttonToUp.scss";
import upPage from "../../../asset/svg/upPage.svg";
export default function ButtonToUp() {
  return (
    <a href="#" className="buttonToUp">
      <img src={upPage} alt="revenir en haut de la page" />
    </a>
  );
}
