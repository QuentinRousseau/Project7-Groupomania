import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faCheck,
  faUser,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "react-bulma-components";
import { Link, useNavigate } from "react-router-dom";

import { validMail } from "../utils/tools/validation";
import { signUpFetch } from "../providers/fetch";
import UserContext from "../providers/UserContext";
import Title from "../components/Title";
import Textinput from "../components/Textinput";
import { useField } from "../utils/hooks/useField";
import "./SignUpPage.scss";

import RoadToTest from "../components/RoadToTest";

function SignUpPage() {
  const [email, setEmail] = useState(""); // l'etat de l'email de base est vide
  const [isEmailValid, setEmailValid] = useState(true); //etat de la verif de l'email de base est sur OK
  const [password, setPassword] = useState(""); //verif du mdp
  const [message, setMessage] = useState(""); // creation d'un message vide
  const [name, setName] = useState("");
  // const [avatar, setAvatar] = useField();
   
  const { user, login } = useContext(UserContext);

  const navigateTo = useNavigate();

  async function submit(e) {
    //lors de l'event submit
    e.preventDefault();
    setMessage("Please wait ..."); //attribution de la valeur au msg
    try {
      const response = await signUpFetch(name, email, password);
      console.log(response);
      user.id = response.userId;
      user.token = response.token;
      
      login(user.id);
      console.log(user);

      navigateTo(`/posts`);
      console.log("il est sensé aller sur /posts"); // Fonction qui permet de rediriger vers un autre url
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
      <RoadToTest />

      <Box id="connexionInput">
        <form onSubmit={submit} className="log">
          <div className="field">
            <label className="label">Inscription</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Nom"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>{" "}
          <div className="field">
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
          {/* <label className="file-label mb-2 mx-auto">
            <input
              className="file-input"
              id="fileinput"
              type="file"
              name="resume"
              files={avatar}
              onChange={(e) => {
                setAvatar(e.target.files[0]);
              }}
            ></input>
            <span className="file-cta">
              <span className="file-icon">
                <FontAwesomeIcon icon={faUpload} />
              </span>
              <span className="file-label">Choisir un Avatar</span>
            </span>
            <span className="file-name has-background-white">
              {avatar?.name}
              {/*le "?" vérifie la donnée avant d'appeler le name}
            </span>
          </label> */}
          <div className="has-text-centered">
            <button
              className="button is-medium has-background-danger has-text-white "
              type="submit"
            >
              S'inscrire
            </button>
            {JSON.stringify(message)}
          </div>
        </form>
        <Link to={"/login"} className="is-small has-text-black mx-auto">
          Déjà inscrit ? Se Connecter
        </Link>
      </Box>
    </div>
  );
}

export default SignUpPage;
