import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/homeLogo.png?url";

function Title() {
  return (
    <div className="title">
      <h1 className="title has-text-danger is-1 is-inline-block mr-6" id="">
        <NavLink to="/posts">
          <img
            src={logo}
            width="700"
            height="2000"
            alt="Logo de l'entreprise Groupomania"
            className="image is-hidden-touch mt-5"
          ></img>
        </NavLink>
      </h1>
    </div>
  );
}

export default Title;
