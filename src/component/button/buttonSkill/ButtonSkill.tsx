import React from "react";
import "./buttonSkill.scss";
export default function ButtonSkill({ value }: { value: string }) {
  return <div className="skill">{value}</div>;
}
