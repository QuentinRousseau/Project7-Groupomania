import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer has-background-dark has-text-white mt-6">
      <div className="content has-text-centered is-small">
        <p>
          Developpé par{" "}
          <a
            className="has-text-white is-underlined"
            href="https://github.com/QuentinRousseau?tab=repositories"
          >
            Rousseau Quentin
          </a>{" "}
          dans le cadre du Projet 7 d'OpenClassrooms.
          <a
            className="has-text-white is-underlined"
            href="https://vitejs.dev/"
          >
            Vite
          </a>
          , {""}
          <a
            className="has-text-white is-underlined"
            href="https://fr.reactjs.org/"
          >
            React
          </a>{" "}
          et {""}
          <a className="has-text-white is-underlined" href="https://bulma.io/">
            Bulma
          </a>{" "}
          ont été utilisés pour la partie front ainsi que l'API. La partie back
          a été effectuée sous{" "}
          <a
            className="has-text-white is-underlined"
            href="http://expressjs.com/fr/"
          >
            Express
          </a>{" "}
          et la DataBase avec{" "}
          <a
            className="has-text-white is-underlined"
            href="https://www.mongodb.com/"
          >
            MongoDB
          </a>{" "}
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
