import React from "react";
//import homeLogo from "../../assets/homeLogo";
import "./loginPage.scss";
import Header from "../../components/Header/Header.jsx";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="logoBlock">
        <Link to="/posts" className="link">
          <img
            src="#" //"../../assets/homeLogo.png"
            className="logo"
            alt="Groupomania logo"
          />
        </Link>
      </div>
      <div className="title">
        <h1>Réseau Social d'entreprise</h1>
        <p>Projet 7 - OpenClassrooms</p>
      </div>
      <div className="card">
        <div className="card__box--1">
          <label for="mail">Addresse Mail: </label>
          <input type="text" id="mail" name="mail" required size="10"></input>
        </div>
        <div className="card__box--2">
          <label for="password">Mot de passe: </label>
          <input
            type="text"
            id="password"
            name="password"
            required
            size="10"
          ></input>
        </div>
        <button id="login-SignUp" type="submit">
          Connexion
        </button>
      </div>
    </div>
  );
}

export default HomePage;
