import React from "react";
import "./buttonRound.scss";
export default function ButtonRound({
  value,
  link,
}: {
  value: string;
  link: string;
}) {
  if (link === "cv") {
    return (
      <a className="buttonRound" href="/cv">
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
