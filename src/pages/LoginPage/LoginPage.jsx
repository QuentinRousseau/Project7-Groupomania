import React from "react";
import "./loginPage.scss";
import Header from "../../components/Header/Header.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";

function LoginPage() {
  return (
    <div className="root">
      <Header />
      <div className="logoBlock">
        <Link to="/posts" className="link">
          <img src="#" className="logo" alt="Groupomania logo" />
        </Link>
      </div>
      <div className="title">
        <h1 className="">Réseau Social d'entreprise</h1>
        <p className="subtitle is-1">Projet 7 - OpenClassrooms</p>
      </div>

      <div class="field">
        <label class="label">Connexion</label>
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email"></input>
          {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
          <span class="icon is-small is-left">
            <FontAwesomeIcon icon="fas fa-envelope" />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            {/** s'affiche si le mail est bon, sinon <FontAwesomeIcon icon="fas fa-exclamation-triangle"/> */}
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password"></input>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <button className="button is-medium" type="submit">
        Connexion
      </button>
    </div>
  );
}

export default LoginPage;
