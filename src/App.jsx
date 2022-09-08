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
import Header from "./components/Header";
import Footer from "./components/Footer";

export function App() {
  return (
    // <Route path="/profile/:name"></Route>
    //

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        {/*path = le chemin d'accès envoyé lors du clic, renvoie le composant LoginPage.*/}
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Posts" element={<FeedPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
