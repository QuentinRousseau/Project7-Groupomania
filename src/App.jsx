import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";

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
import AuthProvider from "./providers/auth";

const AuthContext = React.createContext(null);

export function App() {
  const [token, setToken] = React.useState(null);

  const fakeAuth = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    // <Route path="/profile/:name"></Route>
    //
    <AuthProvider>
      <BrowserRouter>
        <Header token={token} onLogout={handleLogout} />
        <Routes>
          <Route path="Login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
          <Route path="SignUp" element={<SignUpPage />} />
          <Route path="Posts" element={<FeedPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
