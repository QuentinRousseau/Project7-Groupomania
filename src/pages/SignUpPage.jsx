import React, { useState } from "react";
import "./signUpPage.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { signUpFetch } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/Title";
import { validMail } from "../utils/tools/validation";
import { Box } from "react-bulma-components";
import Textinput from "../components/Textinput";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState(""); // l'etat de l'email de base est vide
  const [isEmailValid, setEmailValid] = useState(true); //etat de la verif de l'email de base est sur OK
  const [password, setPassword] = useState(""); //verif du mdp
  const [message, setMessage] = useState(""); // creation d'un message vide

  const navigateTo = useNavigate();

  async function submit(e) {
    //lors de l'event submit
    e.preventDefault();
    setMessage("Please wait ..."); //attribution de la valeur au msg
    try {
      const ret = await signUpFetch(email, password);
      console.log(ret);
      navigateTo("/"); // Fonction qui permet de rediriger vers un autre url
    } catch (e) {
      setMessage(e);
    }
  }

  const handleEmailChange = (email) => {
    setEmailValid(validMail(email)); //verifie l'email par un booleen
    setEmail(email); //attribue la valeur de l'input a la variable email
  };

  return (
    <div className="column ">
      <Title />
      <Box id="connexionInput">
        <form onSubmit={submit} className="log">
          <div className="field">
            <label className="label">Inscription</label>
            <p className="control has-icons-left has-icons-right">
              <Textinput //on attribue les props pour le composant Textinput
                onChange={handleEmailChange}
                value={email}
                placeholder="Email"
                type="text"
                isValid={isEmailValid}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {isEmailValid && (
                <span className="icon is-small is-right ">
                  <FontAwesomeIcon icon={faCheck} />{" "}
                  {/*si l'email est true , l'affichage de check est effectif */}
                </span>
              )}
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
            {message}
          </div>
        </form>
        <Link to={"/Login"} className="is-small has-text-black mx-auto">
          Déjà inscrit ? Se Connecter
        </Link>
      </Box>
    </div>
  );
}

export default SignUpPage;
