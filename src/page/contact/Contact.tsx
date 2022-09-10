import React from "react";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import "./contact.scss";
import InputBasique from "./../../component/input/inputBasique/InputBasique";
import ChampObligatoire from "../../component/decoration/champObligatoire/ChampObligatoire";
import TextArea from "./../../component/input/textArea/TextArea";
import InputSubmit from "../../component/input/inputSubmit/InputSubmit";
export default function Contact() {
  return (
    <section id="contact">
      <UnderTitle title="Contact" />
      <h3>Pour plus de renseignements, n'hésitez pas à me contacter !</h3>
      <p>
        <ChampObligatoire /> Champs obligatoires
      </p>
      <form
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwOW2bYgrPfoqcXW0DhL9SStV8he3AKnPfz9au3G_BsS04Izk95A6lzBFb6u5Hevh6KQw/exec"
      >
        <ul>
          <li>
            <InputBasique
              type="text"
              value="Prénom"
              name="prenom"
              placeholder="Votre prénom"
              required={false}
            />
          </li>
          <li>
            <InputBasique
              type="text"
              value="Nom"
              name="nom"
              placeholder="Votre Nom"
              required={true}
            />
          </li>
          <li>
            <InputBasique
              type="tel"
              value="Téléphone"
              name="tel"
              placeholder="Votre Téléphone"
              required={false}
            />
          </li>
          <li>
            <InputBasique
              type="email"
              value="Mail"
              name="mail"
              placeholder="mail@example.com"
              required={true}
            />
          </li>
          <li>
            <TextArea
              value="Message"
              name="coms"
              placeholder="Votre Message"
              required={true}
            />
          </li>
          <li>
            <InputSubmit value="Envoyer" />
          </li>
        </ul>
      </form>
    </section>
  );
}
