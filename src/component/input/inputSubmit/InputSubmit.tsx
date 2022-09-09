import React from "react";
import "./inputSubmit.scss";
export default function InputSubmit({ value }: { value: string }) {
  return <input type="submit" value={value} className="inputSubmit" />;
}
