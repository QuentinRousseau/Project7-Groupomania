import React, { useState } from "react";
import "./footer.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered is-small">
        <p>
          <strong>Developpé</strong> par{" "}
          <a href="https://github.com/QuentinRousseau?tab=repositories">
            Rousseau Quentin
          </a>{" "}
          dans le cadre du Projet 7 d'OpenClassrooms.
          <a href="https://vitejs.dev/">Vite</a>, {""}
          <a href="https://fr.reactjs.org/">React</a> et {""}
          <a href="https://bulma.io/">Bulma</a> ont été utilisés pour la partie
          front ainsi que l'API. La partie back a été effectuée sous{" "}
          <a href="http://expressjs.com/fr/">Express</a> et la DataBase avec{" "}
          <a href="https://www.mongodb.com/">MongoDB</a> .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
