import "./feedPage.scss";
import { useFetch } from "../providers/fetch";
import { Navigate, useParams } from "react-router-dom";
import withAuth from "../components/withAuth";
//import { Loader } from "../../components/Loader/Loader";
import { error } from "react";
import Card from "../components/Card";
import Postinput from "../components/Postinput";
import Title from "../components/Title";

//Voir pour rajouter l'id du user sur l'url pour eviter de pouvoir revenir
// sur le LoginPage ou le SignupPage
// Adapter le fetch sur l'url modifiée ?

function FeedPage() {
  useFetch();
  if (error) return <span>Oulà , on a un problème !</span>;
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
