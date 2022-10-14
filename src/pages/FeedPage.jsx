import Post from "../components/Post";
import Postinput from "../components/Postinput";
import Title from "../components/Title";
import { useState, useEffect, useContext } from "react";
import UserContext from "../providers/UserContext";
import { useUpdate } from "../providers/Update";

import "./FeedPage.scss";
import RoadToTest from "../components/RoadToTest";

function FeedPage() {
  const [feedPageData, setFeedPageData] = useState([]);
  const { userLogged } = useContext(UserContext);
  const lastUpdate = useUpdate();

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
  }, [lastUpdate]);

  return (
    <div className="feedPage">
      <Title />
      <RoadToTest />
      <div className="title">
        <Postinput key={lastUpdate} />
      </div>

      {feedPageData.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  );
}

export default FeedPage;
