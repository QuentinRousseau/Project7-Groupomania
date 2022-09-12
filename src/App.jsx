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
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function App() {
  // test pour le changement d'état ,
  //si l'utilisateur est connecté, modifier le "Se Co " en "Se Deco"
  const [user, setUser] = useState(null);
  //bas de données factice
  const handleLogin = () =>
    setUser({
      id: "6319f98d1e57ba9a42451490",
      name: "djani",
      permissions: ["all"],
      roles: ["admin"],
    });
  const handleLogout = () => setUser(null);
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route path="signup" element={<SignUpPage />} />

        <Route
          path="posts"
          element={
            <ProtectedRoute isAllowed={!user}>
              <FeedPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <AdminFeedPage />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
