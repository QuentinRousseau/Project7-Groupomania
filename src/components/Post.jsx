// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Post.scss";

import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useState } from "react";
import Postinput from "./Postinput";

function Post({
  author,
  avatar,
  title,
  body,
  url,
  createdAt,
  // likes,
  // dislikes,
}) {
  console.log("j'affiche l'auteur du post", author._id
,"la date de création", createdAt);

  //  Create a var for date layout

  const date = new Date(createdAt).toLocaleString("en-GB", {
    timeZone: "GMT",
  });

  // const { userLogged } = useContext(UserContext);
  // const [isGoodUser, setIsGoodUser] = useState(false);
  // if (userLogged.id == author._id) {
  //   setIsGoodUser(true);
  // }
  // console.log(
  //   "utilisateur connecté",
  //   userLogged.id,
  //   "user ayant créé le post",
  //   author._id
  // );
  // console.log(isGoodUser);
  return (
    <div>
      <div className="box has-background-danger-light ">
        <article className="media ">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={avatar} alt="Avatar"></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {author.name}
                  {"   "}
                </strong>

                {date}
              </p>
              <h3> {title}</h3>
              <p>
                {body}
                <figure id="file">
                  <img src={url} alt="Image du post"></img>
                </figure>
              </p>
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
        {/* {isGoodUser && ( */}
        <footer className="">
          <button
            className="button is-small is-danger mx-1 "
            id={`ModifyButton `}
            // onClick={modifyInput}
          >
            Modifier
          </button>

          <button
            className="button is-small is-danger mx-1 "
            id="DeleteButton"
            //   onClick={deletePost}
          >
            Supprimer
          </button>
        </footer>
        {/* )} */}
      </div>
    </div>
  );
}

export default Post;
