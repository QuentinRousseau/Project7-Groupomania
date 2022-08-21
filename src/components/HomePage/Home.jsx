import React from "react";
//import homeLogo from "../../assets/homeLogo";
import "./home.scss";
import Header from "../Header/Header.jsx";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="logoBlock">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="../assets/homeLogo.png"
            className="logo"
            alt="Groupomania logo"
          />
        </a>
      </div>
      <h1>Réseau Social d'entreprise</h1>
      <p>Projet 7 - OpenClassrooms</p>
      <div className="card">
        <label for="mail">Addresse Mail: </label>
        <input type="text" id="mail" name="mail" required size="10"></input>

        <label for="password">Mot de passe: </label>
        <input
          type="text"
          id="password"
          name="password"
          required
          size="10"
        ></input>

        <button id="login-SignIn" onClick={<Link to></Link>}>
          Connexion
        </button>
      </div>
    </div>
  );
}

export default HomePage;
