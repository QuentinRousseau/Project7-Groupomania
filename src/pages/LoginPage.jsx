import React from "react";
import "./loginPage.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { loginFetch } from "../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Title from "../components/Title";
import { validMail } from "../utils/tools/validation";
import { Box } from "react-bulma-components";
import Textinput from "../components/Textinput";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";

function LoginPage() {
  const { onLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(true); //etat de la verif de l'email de base est sur OK
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigateTo = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const ret = await loginFetch(email, password);
      console.log(ret);
      navigateTo("/Posts");
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
            to={"/SignUp"}
            className="is-centered has-text-centered is-small has-text-black"
          >
            Pas encore insrcit ? Creer votre compte
          </NavLink>
        </form>
      </Box>
    </div>
  );
}

export default LoginPage;
