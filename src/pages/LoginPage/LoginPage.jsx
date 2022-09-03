import React from "react";
import "./loginPage.scss";
import { faEnvelope, faLock, faCheck } from "@fortawesome/free-solid-svg-icons";
import { loginFetch } from "../../providers/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Title from "../../components/Title/Title";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    setMessage("Please wait ...");
    try {
      const ret = await loginFetch(email, password);
      console.log(ret);
    } catch (e) {
      setMessage(e);
    }
    if (ret) return <Redirect to="/posts" push />;
  }
  return (
    <div className="column">
      <Title />
      <div className="box ">
        <form onSubmit={submit} className="log">
          <div className="field ">
            <label className="label">Connexion</label>
            <p className="control has-icons-left has-icons-right">
              {/* Utilisation du switch , useState ou useEffect ? */}
              <input
                className="input"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {/**si la regex est bonne, ajouter "is-succes" a la class, sinon ajouter "is-danger" */}
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon
                  icon={faCheck} //: faExclamationTriangle
                />
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
            {message}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
