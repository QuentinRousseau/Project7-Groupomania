import "./feedPage.scss";
import { useFetch } from "../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import Card from "../components/Card";
import Postinput from "../components/Postinput";
import Title from "../components/Title";

import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { Navigate } from "react-router";

function FeedPage() {
  // const { user } = useContext(UserContext);
  // console.log(user.auth);
  // if (!user.auth) return <Navigate to={"/login"} />;

  useFetch();
  return (
    <div className="feedPage">
      <Title />
      <div className="title">
        <Postinput />
      </div>

      <Card></Card>
    </div>
  );
}

export default FeedPage;
