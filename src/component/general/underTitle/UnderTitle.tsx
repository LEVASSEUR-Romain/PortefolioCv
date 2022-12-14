import React from "react";
import "./underTitle.scss";
export default function UnderTitle({ title }: { title: string }) {
  return <h2 className="underTitle">{title}</h2>;
}
