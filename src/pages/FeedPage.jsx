import "./feedPage.scss";
import { useFetch } from "../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import Card from "../components/Card";
import Postinput from "../components/Postinput";
import Title from "../components/Title";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useState, useEffect } from "react";

function FeedPage() {
  // const  = useFetch();
  // console.log(useFetch());
  const [feedPageData, setFeedPageData] = useState({});
  const { user } = useContext(UserContext);

  const token = user.token;

  useEffect(() => {
    async function fetchAllPost() {
      try {
        const response = await fetch(`/api/posts`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const [feedPageData] = await response.json();
        setFeedPageData(feedPageData);
        console.log(feedPageData);
      } catch (error) {
        throw new Error();
      }
    }
    fetchAllPost();
    console.log(feedPageData);
  }, []);
  return (
    <div className="feedPage">
      <Title />
      <div className="title">
        <Postinput />
      </div>
      <div>{feedPageData}</div>
      {[feedPageData].map((post) => (
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
