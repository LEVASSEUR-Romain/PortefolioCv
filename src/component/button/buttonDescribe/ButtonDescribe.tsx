import React from "react";
import "./buttonDescribe.scss";
import getAge from "./../../../tools/getAge";

export default function ButtonDescribe({ value }: { value: string }) {
  let valueRender = value;
  if (value === "age") {
    valueRender = getAge() + " ans";
  }
  return <div className="buttonDescribe">{valueRender}</div>;
}
