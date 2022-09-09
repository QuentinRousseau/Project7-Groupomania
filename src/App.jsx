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
  const [user, setUser] = useState(null);

  const handleLogin = () =>
    setUser({
      id: "6319f98d1e57ba9a42451490",
      name: "djani",
      permissions: ["all"],
      roles: ["admin"],
    });
  const handleLogout = () => setUser(null);

  return (
    // <Route path="/profile/:name"></Route>
    //

    <BrowserRouter>
      <Header />

      {user ? (
        <button
          className="button is-danger is-light is-outlined"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="button has-background-danger has-text-white  is-outlined"
          onClick={handleLogin}
        >
          Sign In
        </button>
      )}

      <Routes>
        <Route path="Login" element={<LoginPage />} />
        <Route index element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route path="SignUp" element={<SignUpPage />} />
        <Route
          path="Posts"
          element={
            <ProtectedRoute isAllowed={!!user}>
              <FeedPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <AdminFeedPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
