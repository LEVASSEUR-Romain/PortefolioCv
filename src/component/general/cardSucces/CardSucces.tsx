import React from "react";
import { Succes } from "../../../interface";
import ButtonLiensSocial from "../../button/buttonLiensSocial/ButtonLiensSocial";
import "./cardSucces.scss";
export default function CardSucces({ succes }: { succes: Succes }) {
  return (
    <div className="cardSucces">
      <a
        href={succes.liens}
        target="_blank"
        rel="noreferrer"
        className="cardSuccesAncre"
      >
        <h3>{succes.name}</h3>
        <img src={succes.src} alt={"Logo" + succes.name} />
      </a>
      {succes.liensGitHub === "" ? (
        ""
      ) : (
        <ButtonLiensSocial
          type="gitHub"
          url={succes.liensGitHub}
          style={{ position: "absolute" }}
        />
      )}
    </div>
  );
}
