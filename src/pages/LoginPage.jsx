import React, { useContext, useState } from "react";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "react-bulma-components";
import { NavLink, useNavigate } from "react-router-dom";

import { validMail } from "../utils/tools/validation";
import Title from "../components/Title";
import Textinput from "../components/Textinput";
import { loginFetch } from "../providers/fetch";
import UserContext from "../providers/UserContext";
import "./LoginPage.scss";
import RoadToTest from "../components/RoadToTest";

function LoginPage() {
  const navigateTo = useNavigate();

  const { userLogged, login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true); //etat de la verif de l'email de base est sur OK
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const response = await loginFetch(email, password);
      console.log(response);
      userLogged.id = response.user._id;
      userLogged.token = response.token;
      login(userLogged.id);
      console.log(userLogged);
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
    <div className="column">
      <Title />
      <RoadToTest />

      <Box id="connexionInput">
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
              {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
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
            className="subtitle has-text-centered mt-4 is-6 is-small has-text-black"
          >
            <p>Pas encore insrcit ? Creer votre compte</p>
          </NavLink>
        </form>
      </Box>
    </div>
  );
}

export default LoginPage;
