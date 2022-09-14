import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import AdminFeedPage from "./pages/AdminFeedPage";
import { useState } from "react";
import "./app.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContext from "./providers/UserContext";
import { useContext } from "react";
import ErrorPage from "./components/ErrorPage";
import Logged from "./components/Logged";

export function App() {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route
          path="signup"
          element={user.auth ? <SignUpPage /> : <LoginPage />}
        />

        <Route
          path={`/posts`}
          element={user.auth ? <FeedPage /> : <LoginPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
