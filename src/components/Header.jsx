import "./header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/homeLogoHeader.png?url";

function Header(isAllowed) {
  const [active, setActive] = useState(false); //on créé une variable en booleen pour modifier l'affichage
  const toggleActive = () => setActive((state) => !state); //la fonction changera l'etat de l'élément html

  return (
    <nav
      className="navbar is-full is-shadowless "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <img
          src={logo}
          width="200"
          height="2000"
          alt="Logo de l'entreprise Groupomania"
          className="image is-hidden-desktop mt-5 "
        ></img>

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
                to="/signup"
              >
                <strong>S'inscrire</strong>
              </NavLink>

              <NavLink to="/login">
                <button className="button is-danger is-light is-outlined">
                  Se Connecter
                </button>
              </NavLink>

              {/* <button type="button" onClick={onLogout}>
                  Sign Out
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
