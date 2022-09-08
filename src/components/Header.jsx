import "./header.scss";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import logo from "../assets/homeLogoHeader.png?url";

function Header({ history }) {
  const isAuth = !!localStorage.getItem("token");
  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Vijit");
  };
  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  const [active, setActive] = useState(false); //on créé une variable en booleen pour modifier l'affichage
  const toggleActive = () => setActive((state) => !state); //la fonction changera l'etat de l'élément html

  return (
    <nav
      className="navbar is-full is-shadowless "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to={"/"}>
          <img
            src={logo}
            width="200"
            height="2000"
            alt="Logo de l'entreprise Groupomania"
            className="image is-hidden-desktop mt-5 "
          ></img>
        </NavLink>
        <a
          role="button"
          className={`navbar-burger ${active && "is-active"}`}
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
      <div className={`navbar-menu  ${active && "is-active"}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink
                className="button has-background-danger has-text-white  is-outlined"
                to="/SignUp"
              >
                <strong>S'inscrire</strong>
              </NavLink>

              {!isAuth ? (
                <NavLink to="/Login">
                  <button
                    className="button is-danger is-light is-outlined"
                    onClick={loginUser}
                  >
                    Se Connecter
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/Login">
                  <button
                    className="button is-danger is-light is-outlined"
                    onClick={logoutUser}
                  >
                    Se Deconnecter
                  </button>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
