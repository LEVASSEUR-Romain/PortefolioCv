import React from "react";
import ChampObligatoire from "../../decoration/champObligatoire/ChampObligatoire";
import "./textArea.scss";
export default function TextArea({
  value,
  name,
  placeholder,
  required,
}: {
  value: string;
  name: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <label className="textArea">
      <p>
        {required ? <ChampObligatoire /> : ""}
        {value} :
      </p>
      <textarea
        className="textArea"
        placeholder={placeholder}
        name={name}
        required={required}
      ></textarea>
    </label>
  );
}
