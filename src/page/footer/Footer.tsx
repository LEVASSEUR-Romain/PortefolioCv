import React from "react";
import "./footer.scss";
import ButtonLiensSocial from "./../../component/button/buttonLiensSocial/ButtonLiensSocial";
import AncreSpecial from "../../component/decoration/ancreSpecial/AncreSpecial";
import iconeTel from "../../asset/svg/iconeTel.svg";
import iconeMail from "../../asset/svg/iconeMail.svg";
import ButtonToUp from "./../../component/button/buttonToUp/ButtonToUp";
export default function Footer() {
  return (
    <footer>
      <div className="liensSocialFooter">
        <ButtonLiensSocial
          type="gitHub"
          url="https://github.com/LEVASSEUR-Romain"
          style={{}}
        />
        <ButtonLiensSocial
          type="linkedin"
          url="https://github.com/LEVASSEUR-Romain"
          style={{}}
        />
      </div>
      <div className="mentions">
        <div>
          <a href="">Mentions Légales</a> |
          <a href=""> Politique de confidentialité</a>
        </div>
        <div className="droit">
          © Copyright 2022 - LEVASSEUR Romain - Tous droits réservés
        </div>
      </div>
      <div className="infoFooter">
        <AncreSpecial
          value="romainlev@gmail.com"
          href="mailto:romainlev@gmail.com"
          alt="email"
          src={iconeMail}
        />
        <AncreSpecial
          value="0669565371"
          href="tel:+33(0)669565371"
          alt="telephone"
          src={iconeTel}
        />
      </div>

      <ButtonToUp />
    </footer>
  );
}
