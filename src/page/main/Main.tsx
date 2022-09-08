import React from "react";
import "./main.scss";
import ChangeDarkMode from "./../../hook/ChangeDarkMode.hook";
import contextData from "../../tools/contextData";
import HeaderPage from "./../headerPage/HeaderPage";
import Accueil from "../accueil/Accueil";
import APropos from "../apropos/APropos";
export default function Main() {
  // dark Mode
  const darkModeValue = ChangeDarkMode();

  return (
    <contextData.Provider value={darkModeValue}>
      <main>
        <HeaderPage />
        <Accueil />
        <APropos />
      </main>
    </contextData.Provider>
  );
}