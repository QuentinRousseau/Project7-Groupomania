import { createContext } from "react";

const UserContext = createContext({ id: "", auth: false });

export default UserContext;
