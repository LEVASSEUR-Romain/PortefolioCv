import React, { useEffect, useState } from "react";
import slideLeft from "../../../asset/svg/slideLeft.svg";
import "./hamburger.scss";
export default function Hamburger({ element }: { element: JSX.Element }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const onClickHamburger = () => {
    setIsHamburgerOpen(isHamburgerOpen ? false : true);
  };
  const pixelMove = 10; // pourcentage écran
  const pixelEcart = (pixelMove * window.innerWidth) / 100;
  const pointerdown = (x: number) => {
    window.addEventListener("pointerup", (e) => {
      if (e.clientX - x >= pixelEcart && isHamburgerOpen) {
        // fermeture
        setIsHamburgerOpen(false);
      } else if (x - e.clientX >= pixelEcart) {
        setIsHamburgerOpen(true);
      }
    });
  };
  window.addEventListener("pointerdown", (e) => {
    pointerdown(e.clientX);
  });
  return (
    <div
      className={isHamburgerOpen ? "hamburger hambugerChecked" : "hamburger"}
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
