import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/homeLogoHeader.png?url";

function Header() {
  return (
    <nav
      className="navbar is-full is-shadowless "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to={"/"}>
          <img
            src={logo}
            width="200"
            height="2000"
            alt="Logo de l'entreprise Groupomania"
            className="image is-hidden-desktop mt-5 "
          ></img>
        </Link>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link
              className="button has-background-danger has-text-white  is-outlined"
              to="/SignUp"
            >
              <strong>S'inscrire</strong>
            </Link>
            <Link className="button is-danger is-light is-outlined" to="/Login">
              Se Connecter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
