import React, { useContext } from "react";
import contextData from "../../../tools/contextData";
import sun from "../../../asset/svg/darkmode/sun.svg";
import moon from "../../../asset/svg/darkmode/moon.svg";
import "./buttonDarkMode.scss";
export default function ButtonDarkMode() {
  const { isDarkMode, setDarkMode } = useContext(contextData);
  //console.log(ctx);
  function onClickButton() {
    setDarkMode(isDarkMode ? false : true);
  }
  return (
    <div
      className={
        isDarkMode
          ? "backgroundDarkMode backgroundDarkModeChecked"
          : "backgroundDarkMode"
      }
      onClick={onClickButton}
    >
      <img src={sun} className="sun" alt="soleil" />
      <img src={moon} className="moon" alt="lune" />
      {isDarkMode}
    </div>
  );
}
