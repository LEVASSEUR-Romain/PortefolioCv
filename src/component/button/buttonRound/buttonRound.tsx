import React from "react";
import "./buttonRound.scss";
import Pdf from "../../../asset/cv.pdf";
export default function ButtonRound({
  value,
  link,
}: {
  value: string;
  link: string;
}) {
  if (link === "cv") {
    return (
      <a className="buttonRound" href={Pdf} target="_blank" rel="noreferrer">
        {value}
      </a>
    );
  }
  return (
    <a className="buttonRound" href={"#" + link}>
      {value}
    </a>
  );
}
