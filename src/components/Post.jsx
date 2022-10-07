import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

import "./Post.scss";
import { modifyPost } from "../providers/fetch";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useState } from "react";

function Post({
  author,
  avatar,
  title,
  body,
  picture,
  creationDate,
  // likes,
  // dislikes,
}) {
  // const { userLogged } = useContext(UserContext);
  // const [isGoodUser, setIsGoodUser] = useState(false);
  // if (userLogged.id == author.account) {
  //   setIsGoodUser(true);
  // }
  // console.log(
  //   "utilisateur connecté",
  //   userLogged.id,
  //   "user ayant créé le post",
  //   author.account
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
                {creationDate}
              </p>
              <p>{title}</p>
              <figure id="file">
                <img src={picture} alt="Image du post"></img>
              </figure>
              <p>{body}</p>
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
        {/* {isGoodUser && (
          <footer className="">
            <button
              className="button is-small is-danger mx-1 "
              // onClick={modifyPost}
            >
              Confirmer
            </button>

            <button className="button is-small is-danger mx-1 ">
              Modifier
            </button>

            <button
              className="button is-small is-danger mx-1 "
              //   onClick={deletePost}
            >
              Supprimer
            </button>
          </footer>
        )} */}
      </div>
    </div>
  );
}

export default Post;