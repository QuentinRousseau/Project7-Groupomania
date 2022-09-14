import { token } from "morgan";
import { useState } from "react";
import { loginFetch } from "./fetch";
import UserContext from "./UserContext";

export function userProvider({ children }) {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ id: "", auth: true, token: "" });

  // Login updates the user data with a id parameter
  const login = (user) => {
    setUser((user) => ({
      id: user.id,
      auth: true,
      token: user.token,
    }));
  };
  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      id: "",
      auth: false,
      token: "",
    }));
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default userProvider;
