import { createContext } from "react";

const UserContext = createContext({
  id: "",
  auth: false,
  token: "",
  admin: false,
});

export default UserContext;
