import React from "react";
import "./inputBasique.scss";
import ChampObligatoire from "../../decoration/champObligatoire/ChampObligatoire";
export default function InputBasique({
  type,
  value,
  name,
  placeholder,
  required,
}: {
  type: string;
  value: string;
  name: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <label className="inputBasique">
      <p>
        {required ? <ChampObligatoire /> : ""}
        {value} :
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
