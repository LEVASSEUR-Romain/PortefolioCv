import React from "react";
import UnderTitle from "../../component/general/underTitle/UnderTitle";
import "./contact.scss";
import InputBasique from "./../../component/input/inputBasique/InputBasique";
import ChampObligatoire from "../../component/decoration/scrollBottom/champObligatoire/ChampObligatoire";
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
      <form method="post" action="">
        <ul>
          <li>
            <InputBasique
              type="text"
              value="Prénom"
              placeholder="Votre prénom"
              required={false}
            />
          </li>
          <li>
            <InputBasique
              type="text"
              value="Nom"
              placeholder="Votre Nom"
              required={true}
            />
          </li>
          <li>
            <InputBasique
              type="tel"
              value="Téléphone"
              placeholder="Votre Téléphone"
              required={false}
            />
          </li>
          <li>
            <InputBasique
              type="email"
              value="Mail"
              placeholder="mail@example.com"
              required={true}
            />
          </li>
          <li>
            <TextArea
              value="Message"
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
