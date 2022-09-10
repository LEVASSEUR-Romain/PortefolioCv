import React from "react";
import "./scrollBottom.scss";
export default function ScrollBottom({ bottom }: { bottom: string }) {
  return (
    <a href="#aPropos" className="scrollBottom" style={{ bottom: bottom }}>
      <span></span>
    </a>
  );
}
