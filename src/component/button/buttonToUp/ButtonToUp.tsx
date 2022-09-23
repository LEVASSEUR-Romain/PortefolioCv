import React from "react";
import "./buttonToUp.scss";
import upPage from "../../../asset/svg/upPage.svg";
export default function ButtonToUp() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="buttonToUp">
      <img src={upPage} alt="revenir en haut de la page" />
    </a>
  );
}
