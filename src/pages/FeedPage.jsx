import { useState, useEffect, useContext } from "react";
import { Container } from "react-bulma-components";

import Post from "../components/Post";
import Postinput from "../components/Postinput";
import UserContext from "../providers/UserContext";

import "./FeedPage.scss";

function FeedPage() {
  const [feedPageData, setFeedPageData] = useState([]);
  const { userLogged } = useContext(UserContext);

  const token = userLogged.token;

  useEffect(
    () => {
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
        } catch (error) {
          throw new Error();
        }
      }
      fetchAllPost();
    },
    [
      /*lastUpdate*/
    ]
  );

  return (
    <Container className="feedPage">
      <div className="title">
        <Postinput /*key=lastUpdate*/ />
      </div>

      {feedPageData.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </Container>
  );
}

export default FeedPage;
