import React from "react";
import ReactDOM from "react-dom/client";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import "./main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router exact path="/SignUp">
      <LoginPage />
      {/*<SignUpPage />*/}
      {/*<HomePage />*/}
    </Router>
  </React.StrictMode>
);
