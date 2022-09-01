import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/homeLogo.png?url";

function Title() {
  return (
    <div className="title">
      <h1 className="title has-text-danger is-1 is-inline-block" id="">
        <Link to={"/"}>
          <img
            src={logo}
            width="700"
            height="2000"
            alt="Logo de l'entreprise Groupomania"
            className="image is-centered  is-hidden-touch mt-5"
          ></img>
        </Link>
      </h1>
    </div>
  );
}

export default Title;
