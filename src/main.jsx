import React from "react";
import ReactDOM from "react-dom/client";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import FeedPage from "./pages/FeedPage/FeedPage";

import "./main.scss";
import { App } from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
