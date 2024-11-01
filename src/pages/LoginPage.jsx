import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "react-bulma-components";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { validMail } from "../utils/tools/validation";
import Textinput from "../components/Textinput";
import { loginFetch } from "../providers/fetch";
import UserContext from "../providers/UserContext";

import "./LoginPage.scss";

function LoginPage() {
  const navigateTo = useNavigate();

  const { userLogged, login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(false); //etat de la verif de l'email de base est sur OK
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const response = await loginFetch(email, password);

      userLogged.id = response.user._id;
      userLogged.token = response.token;
      userLogged.admin = userLogged.id == "636cdc8c2e6460efdba30563" && true;

      login(userLogged.id);

      navigateTo(`/posts`);
    } catch (e) {
      setMessage(e);
    }
  }

  const handleEmailChange = (email) => {
    setEmailValid(validMail(email)); //verifie l'email par un booleen
    setEmail(email); //attribue la valeur de l'input a la variable email
  };

  return (
    <div className="column pt-6">
      <Box id="connexionInput" className="has-background-primary">
        <form onSubmit={submit} className="log">
          <div className="field ">
            <label className="label">Connexion</label>
            <p className="control has-icons-left has-icons-right">
              <Textinput //on attribue les props pour le composant Textinput
                onChange={handleEmailChange}
                value={email}
                placeholder="Email"
                type="text"
                isValid={isEmailValid}
              />
              {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-primary" */}
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
                id="password"
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
              className="button is-medium has-background-danger has-text-white"
              type="submit"
            >
              Connexion
            </button>
            <p>{message}</p>
          </div>
          {/**rajouter l'url de l'id connecté en plus ? */}
          <NavLink
            to={"/signup"}
            className="subtitle has-text-centered  is-6 is-small has-text-black"
          >
            <p className="mt-4">Pas encore insrcit ? Creer votre compte</p>
          </NavLink>
        </form>
      </Box>
    </div>
  );
}

export default LoginPage;
