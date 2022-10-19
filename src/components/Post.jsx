// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Post.scss";

import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useState } from "react";
import Postinput from "./Postinput";
import { modifyPost, submitDelete } from "../providers/fetch";
import { useNavigate } from "react-router";
import { Box } from "react-bulma-components";

function Post(post) {
  const { userLogged } = useContext(UserContext);
  const navigateTo = useNavigate();
  const [isEditing, setEditing] = useState(false);

  // console.log("avatar:  ", post.author.avatar, "     image   :", post.url);
  //  Create a var for date layout

  const date = new Date(post.createdAt).toLocaleDateString("fr-FR");
  const time = new Date(post.createdAt).toLocaleTimeString("fr-FR");
  async function deletePost() {
    const _id = post._id;
    const token = userLogged.token;

    console.log(
      "post concerné  :   ",
      post,
      "    id du post    :",
      _id,
      "    token : ",
      token
    );

    const ret = await submitDelete(post, token, _id);
    console.log(ret);
    navigateTo("/login"); // voir avec yoann pour amélioration
  }

  async function modifyInput() {
    const _id = post._id;
    const token = userLogged.token;
    console.log(
      "post concerné  :   ",
      post,
      "    id du post    :",
      _id,
      "    token : ",
      token
    );

    console.log("je modifie un post groooos");
  }

  const isGoodUser = userLogged.id === post.author._id ? true : false;
  console.log(
    "utilisateur connecté",
    userLogged.id,
    "user ayant créé le post",
    post.author._id
  );
  const isAdmin = userLogged.admin;
  console.log("est ce un admin ?", isAdmin);
  console.log("est ce le bon createur du post ?", isGoodUser);
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
              <p>
                <strong>
                  {post.author.name}
                  {"       "}
                </strong>

                {date}
                {"         "}
                {"         "}
                {time}
                <h3 className="title is-4"> {post.title}</h3>
              </p>

              <figure id="file">
                <img src={post.url} alt="Image du post"></img>
              </figure>

              <p className="subtitle is-6 mb-5">{post.body}</p>
            </div>
            {/* <nav className="level is-mobile " id="comment">
              <div className="level-left ">
                <a className="level-item is-danger" aria-label="reply">
                  <span className="icon is-medium ">
                    <FontAwesomeIcon
                      icon={faHeartBroken}
                      className="iconsPost mx-2"
                    />

                    {/* {dislikes} 
                  </span>
                </a>
                <a className="level-item is-danger" aria-label="like">
                  <span className="icon is-medium">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="iconsPost mx-2"
                    />
                    {/* {likes} 
                  </span>
                </a>
              </div>
            </nav> */}
          </div>
        </article>
      )}
      {isEditing && <modifyPost post={post} />}
      {(isGoodUser || isAdmin) && (
        <footer className="">
          <button
            className="button is-small is-danger mx-1 "
            id={`ModifyButton `}
            onClick={modifyInput}
          >
            Modifier
          </button>

          <button
            className="button is-small is-danger mx-1 "
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
