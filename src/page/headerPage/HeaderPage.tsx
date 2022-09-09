import React from "react";
import ButtonDarkMode from "../../component/button/buttonDarkMode/ButtonDarkMode";
import ButtonLiens from "../../component/button/buttonLiens/ButtonLiens";
import Name from "../../component/general/name/Name";
import "./headerPage.scss";
export default function HeaderPage() {
  return (
    <header>
      <nav>
        <Name />
        <ButtonDarkMode />
        <ul>
          <li>
            <ButtonLiens value="Accueil" link="/" />
          </li>
          <li>
            <ButtonLiens value="A propos" link="/apropos" />
          </li>
          <li>
            <ButtonLiens value="Compétences" link="/competences" />
          </li>
          <li>
            <ButtonLiens value="Projets" link="/projets" />
          </li>
          <li>
            <ButtonLiens value="Succès" link="/succes" />
          </li>
          <li>
            <ButtonLiens value="Contact" link="/contact" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
