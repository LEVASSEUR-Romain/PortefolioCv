import React from "react";
import "./buttonLiens.scss";
export default function ButtonLiens({
  value,
  link,
}: {
  value: string;
  link: string;
}) {
  return (
    <a href={"?action=#" + link} className="ancreNavBar">
      {value}
    </a>
  );
}
