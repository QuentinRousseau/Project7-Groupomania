import React, { useState } from "react";
import "./signUpPage.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { loginFetch, signUpFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useField } from "../../utils/hooks/hooks";

function SignUpPage() {
  const [email, setEmail, emailMessage] = useField("", (value) => {
    if (value.length < 3) return "Email trop court"; // vérif de l'adresse mail
  });
  const [password, setPassword] = useField(""); //verif du mdp
  const [message, setMessage] = useState(""); // creation d'un message vide
  async function submit(e) {
    //lors de l'event submit
    e.preventDefault();
    setMessage("Please wait ..."); //attribution de la valeur au msg
    const ret = await signUpFetch(email, password); // attente du fetch avec mail et mdp
    console.log(ret); //affichage du retour
    if (ret.console.error) setMessage(ret.error); //si erreur afficher celle ci
  }
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
                <FontAwesomeIcon
                  icon={!emailMessage ? faCheck : faExclamationTriangle}
                />
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
