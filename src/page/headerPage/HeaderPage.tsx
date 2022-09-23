import React from "react";
import ButtonDarkMode from "../../component/button/buttonDarkMode/ButtonDarkMode";
import ButtonLiens from "../../component/button/buttonLiens/ButtonLiens";
import Hamburger from "../../component/general/hamburgerMenu/Hamburger";
import Name from "../../component/general/name/Name";
import "./headerPage.scss";
export default function HeaderPage() {
  const navLink = (
    <ul>
      <li>
        <ButtonLiens value="Accueil" link="" />
      </li>
      <li>
        <ButtonLiens value="A propos" link="aPropos" />
      </li>
      <li>
        <ButtonLiens value="Compétences" link="competences" />
      </li>
      <li>
        <ButtonLiens value="Projets" link="projects" />
      </li>
      <li>
        <ButtonLiens value="Certification" link="certification" />
      </li>
      <li>
        <ButtonLiens value="Contact" link="contact" />
      </li>
    </ul>
  );

  return (
    <header className="headerPage">
      <nav>
        <Name />
        <ButtonDarkMode />
        <Hamburger element={navLink} />
        {navLink}
      </nav>
    </header>
  );
}
