import { createContext } from "react";

const UserContext = createContext({ id: "", auth: false, token: "" });

export default UserContext;
