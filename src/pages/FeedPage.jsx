import Post from "../components/Post";
import Postinput from "../components/Postinput";
import Title from "../components/Title";
import { useState, useEffect, useContext } from "react";
import UserContext from "../providers/UserContext";

import "./FeedPage.scss";
import RoadToTest from "../components/RoadToTest";

function FeedPage() {
  const [feedPageData, setFeedPageData] = useState([]);
  const { userLogged } = useContext(UserContext);

  const token = userLogged.token;

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

        const feedPageData = await response.json();
        feedPageData.reverse();
        setFeedPageData(feedPageData);
        console.log(feedPageData);
      } catch (error) {
        throw new Error();
      }
    }
    fetchAllPost();
  }, []);

  return (
    <div className="feedPage">
      <Title />
      <RoadToTest />
      <div className="title">
        <Postinput />
      </div>

      {feedPageData.map((post) => (
        <Post
          key={post}
          avatar={post.author.avatar}
          author={post.author}
          title={post.title}
          picture={post.url}
          body={post.body}
          creationDate={post.createdAt}
          // likes={post.likes}  A implémenter plus tard
          // dislikes={post.dislikes}
        />
      ))}
    </div>
  );
}

export default FeedPage;
