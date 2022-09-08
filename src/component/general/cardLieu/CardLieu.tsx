import React from "react";
import localisation from "../../../asset/svg/localisation.svg";
import "./cardLieu.scss";
export default function CardLieu() {
  return (
    <div className="lieu">
      <img src={localisation} alt="localisation géographique" />
      <a
        href="https://www.google.com/maps/place/Aisne/"
        target="_blank"
        rel="noreferrer"
      >
        Aisne
      </a>
    </div>
  );
}
