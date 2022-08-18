import React from "react";
//import homeLogo from "../../assets/homeLogo";
import "./Home.scss";
import Header from "../Header/Header.jsx";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="logoBlock">
        <a href="https://vitejs.dev" target="_blank">
          <img src="#" className="logo" alt="Groupomania logo" />
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

        <button
          id="login-SignIn"
          onClick={() => setCount((count) => count + 1)}
        >
          Connexion
        </button>
      </div>
    </div>
  );
}

export default HomePage;
