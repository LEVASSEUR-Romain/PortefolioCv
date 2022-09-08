import React from "react";
import "./scrollBottom.scss";
export default function ScrollBottom({ bottom }: { bottom: string }) {
  return (
    <div className="scrollBottom" style={{ bottom: bottom }}>
      <span></span>
    </div>
  );
}
