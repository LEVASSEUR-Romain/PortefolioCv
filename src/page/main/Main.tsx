import React from "react";
import "./main.scss";
import ChangeDarkMode from "./../../hook/ChangeDarkMode.hook";
import contextData from "../../tools/contextData";
import HeaderPage from "./../headerPage/HeaderPage";
import Accueil from "../accueil/Accueil";
import APropos from "../apropos/APropos";
import Competences from "../competences/Competences";
import Projets from "../projets/Projets";
//import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Certification from "./../certification/Certification";
export default function Main() {
  // dark Mode
  const darkModeValue = ChangeDarkMode();

  return (
    <contextData.Provider value={darkModeValue}>
      <main>
        <HeaderPage />
        <Accueil />
        <APropos />
        <Competences />
        <Projets />
        <Certification />
        <Footer />
      </main>
    </contextData.Provider>
  );
}
