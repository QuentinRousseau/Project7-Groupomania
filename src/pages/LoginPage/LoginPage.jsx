import React from "react";
import "./loginPage.scss";
import Header from "../../components/Header/Header.jsx";
import { Link } from "react-router-dom";
import { loginFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginPage() {
  return (
    <div className="root">
      <div className="title">
        <h1 className="">Réseau Social d'entreprise</h1>
        <p className="subtitle is-1">Projet 7 - OpenClassrooms</p>
      </div>
      <form onSubmit={loginFetch} className="log">
        <div className="field">
          <label className="label">Connexion</label>
          <p className="control has-icons-left has-icons-right">
            {/* Utilisation du switch , useState ou useEffect ? */}
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Email"
            ></input>
            {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
              {/** s'affiche si le mail est bon, sinon <FontAwesomeIcon icon="fas fa-exclamation-triangle"/> */}
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="has-text-centered">
          <button
            className="button is-medium has-background-danger-dark"
            type="submit"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
