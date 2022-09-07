import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";

import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
