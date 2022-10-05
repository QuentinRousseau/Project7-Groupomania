import Post from "../components/Post";
import Postinput from "../components/Postinput";
import Title from "../components/Title";
import { useState, useEffect, useContext } from "react";
import UserContext from "../providers/UserContext";

import "./FeedPage.scss";
import RoadToTest from "../components/RoadToTest";

function FeedPage() {
  const [feedPageData, setFeedPageData] = useState([]);
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
        
        const feedPageData = await response.json();
        
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
