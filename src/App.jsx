import React, { useContext } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import UserContext from "./providers/UserContext";
import "./App.scss";

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<NotAuth element={<LoginPage />} />} />
        <Route path="/signup" element={<NotAuth element={<SignUpPage />} />} />
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
  <CheckAuth notAuth={element} auth={<Navigate to="posts" replace />} />;
};
