import React, { useEffect, useState } from "react";
import slideLeft from "../../../asset/svg/slideLeft.svg";
import "./hamburger.scss";
import SlideOnWindow from "../../../hook/SlideOnWindow.hook";
export default function Hamburger({ element }: { element: JSX.Element }) {
  const Hamburger = SlideOnWindow(20);
  // on click
  const onClickHamburger = () => {
    Hamburger.setIsHamburgerOpen(Hamburger.isHamburgerOpen ? false : true);
  };
  //hook

  return (
    <div
      className={
        Hamburger.isHamburgerOpen ? "hamburger hambugerChecked" : "hamburger"
      }
    >
      <div className="hambugerLines" onClick={onClickHamburger}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="menuItems">
        {element}
        <img
          src={slideLeft}
          alt="rester appuyé en allant a gauche pour fermer"
          className="imageSlideLeft"
        />
      </div>
    </div>
  );
}
