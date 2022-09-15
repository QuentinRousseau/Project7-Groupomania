import "./feedPage.scss";
import { useFetch } from "../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import Card from "../components/Card";
import Postinput from "../components/Postinput";
import Title from "../components/Title";

function FeedPage() {
  const feedPageData = useFetch();

  return (
    <div className="feedPage">
      <Title />
      <div className="title">
        <Postinput />
      </div>
      <div>{JSON.stringify(feedPageData)}</div>
      {feedPageData.map((post) => (
        <Card
          key={post}
          userId={post.userId}
          title={post.title}
          picture={post.imageUrl}
          postContent={post.postContent}
          creationDate={post.creationDate}
          likes={post.likes}
          dislikes={post.dislikes}
        />
      ))}
    </div>
  );
}

export default FeedPage;
