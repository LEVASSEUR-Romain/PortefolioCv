import React from "react";
import "./inputBasique.scss";
import ChampObligatoire from "./../../decoration/scrollBottom/champObligatoire/ChampObligatoire";
export default function InputBasique({
  type,
  value,
  placeholder,
  required,
}: {
  type: string;
  value: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <label className="inputBasique">
      <p>
        {required ? <ChampObligatoire /> : ""}
        {value} :
      </p>
      <input type={type} placeholder={placeholder} required={required} />
    </label>
  );
}
