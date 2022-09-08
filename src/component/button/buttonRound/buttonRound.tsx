import React from "react";
import "./buttonRound.scss";
export default function ButtonRound({
  value,
  link,
}: {
  value: string;
  link: string;
}) {
  return (
    <a className="buttonRound" href={link}>
      {value}
    </a>
  );
}
