import "./feedPage.scss";
import { useFetch } from "../../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import { error } from "react";
import Card from "../../components/Card/Card";
import Postinput from "../../components/Input/Postinput";
import Title from "../../components/Title/Title";

//Voir pour rajouter l'id du user sur l'url pour eviter de pouvoir revenir
// sur le LoginPage ou le SignupPage
// Adapter le fetch sur l'url modifiée ?

function FeedPage() {
  const url = window.location.href;
  let postsList = useFetch(url);
  if (error) return <span>Oulà , on a un problème !</span>;
  return (
    <div className="feedPage">
      <Title />
      <div className="title">
        <h1 className="title is-1">Bienvenue </h1>

        <Postinput />

        <h2 className="subtitle is-1">Découvrez les derniers posts !</h2>
      </div>

      {/*    {isDataLoading ? (
        <div className="loaderWrapper">
          <Loader />
        </div>
) : (*/}
      <Card></Card>
      {/** )}*/}
    </div>
  );
}

export default FeedPage;
