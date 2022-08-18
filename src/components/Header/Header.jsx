import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/login" className="link">
        Connexion
      </Link>
      <Link to="/signIn" className="link">
        S'inscrire'
      </Link>
    </nav>
  );
}

export default Header;
