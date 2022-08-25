import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to="/SignUp">
            <a className="button is-primary is-light">
              <strong>Sign up</strong>
            </a>
          </Link>
          <Link to="/Login">
            <a className="button is-danger is-light">Log in</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
