import "./feedPage.scss";
import { useFetch } from "../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import Card from "../components/Card";
import Postinput from "../components/Postinput";
import Title from "../components/Title";

function FeedPage() {
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
