import React from "react";
import ReactDOM from "react-dom/client";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import "./main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
