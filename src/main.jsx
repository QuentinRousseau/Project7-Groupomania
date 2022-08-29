import React from "react";
import ReactDOM from "react-dom/client";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router exact path="/login">
      <LoginPage />
      {/*<SignUpPage />*/}
    </Router>
  </React.StrictMode>
);
