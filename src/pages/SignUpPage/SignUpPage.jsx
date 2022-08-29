import React from "react";
import "./signUpPage.scss";
import Header from "../../components/Header/Header.jsx";
import { Link } from "react-router-dom";
import { signUpFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="logoBlock">
        <Link to="/posts" className="link">
          <img src="#" className="logo" alt="Groupomania logo" />
        </Link>
      </div>
      <div className="title">
        <h1>Réseau Social d'entreprise</h1>
        <p>Projet 7 - OpenClassrooms</p>
      </div>
      <form onSubmit={signUpFetch} className="log">
        <div class="field">
          <label class="label">Inscription</label>
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
        <div className="has-text-centered">
          <button className="button is-medium is-primary " type="submit">
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
