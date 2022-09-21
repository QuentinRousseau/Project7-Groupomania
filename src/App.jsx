import React, { useState, useContext } from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import AdminFeedPage from "./pages/AdminFeedPage";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContext from "./providers/UserContext";

import ErrorPage from "./components/ErrorPage";
import Logged from "./components/Logged";
import "./App.scss";

export function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="login" element={<NotAuth element={<LoginPage />} />} />
        <Route path="signup" element={<NotAuth element={<SignUpPage />} />} />
        <Route index element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}

        <Route path="/posts" element={<IsAuth element={<FeedPage />} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

function CheckAuth({ auth, notAuth }) {
  const { user } = useContext(UserContext);
  return user.auth ? auth : notAuth;
}

const IsAuth = ({ element }) => (
  <CheckAuth auth={element} notAuth={<Navigate to="/" replace />} />
);

const NotAuth = ({ element }) => {
  <CheckAuth auth={<Navigate to="/login" replace />} notAuth={element} />;
};
