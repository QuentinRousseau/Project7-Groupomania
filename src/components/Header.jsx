import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/icon-left-font-monochrome-white.png?url";
import UserContext from "../providers/UserContext";
import "./Header.scss";

function Header() {
  const [active, setActive] = useState(false); //on créé une variable en booleen pour modifier l'affichage
  const toggleActive = () => setActive((state) => !state); //la fonction changera l'etat de l'élément html
  const { userLogged, login, logout } = useContext(UserContext);

  console.log(userLogged);
  return (
    <nav
      className="navbar is-full is-shadowless has-background-dark "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <img
          src={logo}
          width="200"
          height="2000"
          alt="Logo de l'entreprise Groupomania"
          className="image ml-4 my-3 "
        ></img>

        <a
          role="button"
          className={`navbar-burger  ${
            active && "is-active"
          } has-text-white mt-2`}
          onClick={toggleActive}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        className={`navbar-menu  ${active && "is-active"} has-background-dark`}
      >
        <div className="navbar-end navbar-item">
          <div className="buttons">
            {!userLogged.auth && (
              <NavLink
                className="button is-danger is-light is-outlined"
                to="/signup"
              >
                <p>S'inscrire</p>
              </NavLink>
            )}

            <NavLink to="/login">
              {userLogged.auth ? (
                <button
                  onClick={logout}
                  className="button is-danger is-light is-outlined"
                >
                  Se Deconnecter
                </button>
              ) : (
                <button className="button is-danger is-light is-outlined">
                  Se Connecter
                </button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
