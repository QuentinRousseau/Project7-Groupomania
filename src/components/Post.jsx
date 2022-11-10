import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Box } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

import UserContext from "../providers/UserContext";
import { submitDelete, submitLikes } from "../providers/fetch";
import ModifyPost from "./ModifyPost";

import "./Post.scss";

function Post(post) {
  const { userLogged } = useContext(UserContext);
  const navigateTo = useNavigate();
  const [isEditing, setEditing] = useState(false);

  const [likeStatus, setLikeStatus] = useState("neutral");
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //  Create a var for date layout

  const createdDate = new Date(post.createdAt).toLocaleDateString("fr-FR");
  const createdTime = new Date(post.createdAt).toLocaleTimeString("fr-FR");

  const updatedDate = new Date(post.updatedAt).toLocaleDateString("fr-FR");
  const updatedTime = new Date(post.updatedAt).toLocaleTimeString("fr-FR");

  const isGoodUser = userLogged.id === post.author._id ? true : false;

  const isAdmin = userLogged.admin;

  const dislike = () => updateLikes(-1);
  const like = () => updateLikes(1);

  async function updateLikes(action) {
    // action étant le 1 || -1
    const postId = post._id;

    const token = userLogged.token;

    const userId = userLogged.id;

    setLikeStatus("waiting");
    const ret = await submitLikes(token, postId, userId, action);

    setLikes(ret.data.likes);
    setDislikes(ret.data.dislikes);
    setLikeStatus(ret.data.action);
    navigateTo("/posts");
  }

  async function deletePost() {
    const _id = post._id;
    const token = userLogged.token;

    const ret = await submitDelete(post, token, _id);
    console.log(ret);
    navigateTo("/login"); // voir avec yoann pour amélioration
  }

  return (
    <Box className="box has-background-danger-light  is-fluid">
      {!isEditing && (
        <article className="media ">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={post.author.avatar} alt="Avatar"></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <strong>
                  {post.author.name}
                  {"       "}
                </strong>

                {createdDate}
                {"         "}
                {"         "}
                {createdTime}
              </p>
              {isHovering && (
                <p>
                  Modifié le : {updatedDate} à {updatedTime}
                </p>
              )}
              <h3 className="title is-4"> {post.title}</h3>
              <figure id="file">
                <img src={post.url} alt="Image du post"></img>
              </figure>

              <p className="subtitle is-6 mb-5">{post.body}</p>
            </div>
            <nav className="level is-mobile " id="comment">
              <div className="level-left ">
                <a
                  className="level-item is-primary "
                  aria-label="reply"
                  onClick={likeStatus == "waiting" ? () => {} : dislike}
                >
                  <span className={`icon is-medium has-text-black `}>
                    <FontAwesomeIcon
                      icon={faHeartBroken}
                      className={`iconsPost mx-2 like--${
                        likeStatus == "disliked"
                          ? "disliked"
                          : likeStatus == "liked" && "neutral"
                      }`}
                    />

                    {dislikes}
                  </span>
                </a>
                <a
                  className={`level-item is-primary`} //rajouter du style en fonction de likeStatus
                  aria-label="like"
                  onClick={likeStatus == "waiting" ? () => {} : like}
                >
                  <span className={`icon ml-4 is-medium has-text-black `}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`iconsPost mx-2 like--${
                        likeStatus == "liked"
                          ? "liked"
                          : likeStatus == "disliked" && "neutral"
                      }`}
                    />
                    {likes}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      )}
      {isEditing && <ModifyPost post={post} />}
      {(isGoodUser || isAdmin) && (
        <footer className="">
          <button
            className="button is-small is-danger mx-3 mt-3 "
            id={`ModifyButton `}
            onClick={() => setEditing((val) => !val)}
          >
            Modifier
          </button>

          <button
            className="button is-small is-danger mx-3 mt-3"
            id="DeleteButton"
            onClick={deletePost}
          >
            Supprimer
          </button>
        </footer>
      )}
    </Box>
  );
}

export default Post;
