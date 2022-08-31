import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/homeLogo.png";

function Header() {
  return (
    <nav
      className="navbar is-full has-background-danger-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <img
          src={logo}
          width="112"
          height="2000"
          alt="Logo de l'entreprise Groupomania"
          className="image is-200x200 mr-6"
        ></img>

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

      <div id="navbarBasicExample" className="navbar-menu">
        <Link to={"/"}>
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
        </Link>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/SignUp">
                <a className="button has-background-danger has-text-white">
                  <strong>Sign up</strong>
                </a>
              </Link>
              <Link to="/Login">
                <a className="button is-danger is-light">Log in</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
