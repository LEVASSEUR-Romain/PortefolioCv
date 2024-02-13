import React from "react";
import "./footer.scss";
import ButtonLiensSocial from "./../../component/button/buttonLiensSocial/ButtonLiensSocial";
import AncreSpecial from "../../component/decoration/ancreSpecial/AncreSpecial";
import iconeTel from "../../asset/svg/iconeTel.svg";
import iconeMail from "../../asset/svg/iconeMail.svg";
import ButtonToUp from "./../../component/button/buttonToUp/ButtonToUp";
import listUrl from "../../list/listUrl";
export default function Footer() {
  const GitHubLiens = listUrl.find((e) => e.type === "github");
  const linkedinLiens = listUrl.find((e) => e.type === "linkedin");
  return (
    <footer>
      <div className="liensSocialFooter">
        <ButtonLiensSocial type="gitHub" url={GitHubLiens ? GitHubLiens.url : ""} style={{}} />
      </div>
      <div className="droit">© Copyright 2022 - LEVASSEUR Romain - Tous droits réservés</div>

      <div className="infoFooter">
        <AncreSpecial value="romainlev@gmail.com" href="mailto:romainlev@gmail.com" alt="email" src={iconeMail} />
        <AncreSpecial value="0669565371" href="tel:+33(0)669565371" alt="telephone" src={iconeTel} />
      </div>

      <ButtonToUp />
    </footer>
  );
}
