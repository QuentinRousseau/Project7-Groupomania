import React, { useState } from "react";
import "./signUpPage.scss";
import {
  faEnvelope,
  faLock,
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { signUpFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title/Title";
import { handleChange } from "../../utils/tools/validation";
import { Box } from "react-bulma-components";
import Textinput from "../../components/Input/Textinput";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //verif du mdp
  const [message, setMessage] = useState(""); // creation d'un message vide

  async function submit(e) {
    //lors de l'event submit
    e.preventDefault();
    setMessage("Please wait ..."); //attribution de la valeur au msg
    try {
      const ret = await signUpFetch(email, password);
      console.log(ret);
    } catch (e) {
      setMessage(e);
    }
    if (ret) return <Redirect to="/posts" push />;
  }
  return (
    <div className="column ">
      <Title />
      <Box>
        <form onSubmit={submit} className="log">
          <div className="field">
            <label className="label">Inscription</label>
            <p className="control has-icons-left has-icons-right">
              <Textinput
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right ">
                <FontAwesomeIcon icon={handleChange(email) && faCheck} />
              </span>
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
      </Box>
    </div>
  );
}

export default SignUpPage;
