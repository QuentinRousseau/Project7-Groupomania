import { useState } from "react";
import UserContext from "./UserContext";

export function userProvider({ children }) {
  // userLogged is the name of the "data" that gets stored in context
  const [userLogged, setUser] = useState({
    id: "",
    auth: false,
    token: "",
    admin: false,
  });

  // Login updates the userLogged data with a id parameter
  const login = (userLogged) => {
    setUser((userLogged) => ({
      id: userLogged.id,
      auth: true,
      token: userLogged.token,
      admin: userLogged.id === "635a3a474312cf3cf195923a" && true,
    }));
  };
  // Logout updates the userLogged data to default
  const logout = () => {
    setUser((userLogged) => ({
      id: "",
      auth: false,
      token: "",
      admin: false,
    }));
  };
  return (
    <UserContext.Provider value={{ userLogged, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default userProvider;
