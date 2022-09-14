import { useContext } from "react";
import { Navigate } from "react-router";
import UserContext from "../providers/UserContext";

function Logged() {
  const { user } = useContext(UserContext);
  console.log(user.auth);
  if (!user.auth) return <Navigate to={"/login"} />;
}

export default Logged;
