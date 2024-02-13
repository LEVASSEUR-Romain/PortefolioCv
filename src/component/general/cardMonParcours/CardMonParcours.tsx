import React from "react";
import "./cardMonParcours.scss";
import ButtonSkill from "../../button/buttonSkill/ButtonSkill";
import ButtonRound from "../../button/buttonRound/buttonRound";
import { listSocial } from "../../../list/listCompences";
export default function CardsMonParcours() {
  return (
    <div className="monParcours">
      <h3>Mon Parcours</h3>
      <p>
        Après une expérience de 7 ans et presque 1 ans en auto-entreprise dans le domaine de la thérapie en tant que professeur de maths-sciences dans l'enseignement, j'ai décidé de faire une
        reconversion professionnelle dans le développement web. Passionné d'informatique, j'ai appris en autodidacte la programmation pendant mon temps libre. La logique, la créativité et la
        conception sont des domaines dans lesquels je m'épanouis.
      </p>
      <h3>Compétences sociales</h3>
      <ul>
        {listSocial.map((elmt, index) => (
          <li key={index}>
            <ButtonSkill value={elmt} />
          </li>
        ))}
      </ul>
      <div className="myCv">
        <ButtonRound value="Télécharger mon CV" link="cv" />
      </div>
    </div>
  );
}
