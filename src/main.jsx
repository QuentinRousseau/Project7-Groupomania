import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/Home";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router exact path="/">
      <HomePage />
    </Router>
    <Router path="/api"></Router>
  </React.StrictMode>
);
