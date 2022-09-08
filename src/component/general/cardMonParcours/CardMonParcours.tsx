import React from "react";
import "./cardMonParcours.scss";
import ButtonSkill from "../../button/buttonSkill/ButtonSkill";
import ButtonRound from "../../button/buttonRound/buttonRound";
export default function CardsMonParcours() {
  return (
    <div className="monParcours">
      <h3>Mon Parcours</h3>
      <p>
        Aprés une expérience de professeur de maths sciences pour des bacs
        professionnel. j'ai décidé une reconversion professionnelle dans un
        domaine qui me corresponder mieux. Pendant mes temps libre j'ai appris
        en autodidact le developpement web car l'aspect logique et créativité
        m'interesse. Je suis en cours d'apprentisage avec des projets et la
        formation &nbsp;
        <a
          href="https://openclassrooms.com/fr/paths/500-developpeur-dapplication-php-symfony"
          target="_blank"
          rel="noreferrer"
        >
          openclassrooms
        </a>
        .
      </p>
      <h3>Compétences social</h3>
      <ul>
        <li>
          <ButtonSkill value="Esprit d'équipe" />
        </li>
        <li>
          <ButtonSkill value="Autonomie" />
        </li>
        <li>
          <ButtonSkill value="Rigueur" />
        </li>
        <li>
          <ButtonSkill value="Curieux" />
        </li>
        <li>
          <ButtonSkill value="Bienvaillance" />
        </li>
        <li>
          <ButtonSkill value="Humble" />
        </li>
      </ul>
      <div className="myCv">
        <ButtonRound value="Télécharger mon CV" link="/cv" />
      </div>
    </div>
  );
}
