import React from "react";
import "./signUpPage.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { signUpFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useField } from "../../utils/hooks/hooks";

function SignUpPage() {
  return (
    <div className="column is-vcentered ">
      <div className="title">
        <h1 className="title is-2">Réseau Social d'entreprise</h1>
        <p className="subtitle is-3">Projet 7 - OpenClassrooms</p>
      </div>
      <div className="box">
        <form onSubmit={signUpFetch} className="log">
          <div className="field">
            <label className="label">Inscription</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email"></input>
              {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faCheck} />
                {/**!emailMessage ? faCheck : faExclamationTriangle || s'affiche si le mail est bon, sinon <FontAwesomeIcon icon="fas fa-exclamation-triangle"/> */}
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
              ></input>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </p>
          </div>
          <div className="has-text-centered">
            <button
              className="button is-medium has-background-danger has-text-white "
              type="submit"
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
