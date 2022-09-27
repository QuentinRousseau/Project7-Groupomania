import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";


import "./Card.scss";
import { modifyPost } from "../providers/fetch";
import { useContext } from "react";
import UserContext from "../providers/UserContext";
import { useState } from "react";



function Card({
  userId,// plus tard le nom du User
  title,
  postContent,
  picture,
  creationDate,
  likes,
  dislikes,
}) {
  const {user} = useContext(UserContext)
const [isGoodUser, setIsGoodUser] = useState(false)
if(user.id === userId){setIsGoodUser(true)};

  return (
    <div>
      <div className="box has-background-danger-light ">
        <article className="media ">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={picture} alt="Image"></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>
                  {userId}
                  {"   "}
                </strong>
                {creationDate}
              </p>
              <p>{title}</p>
              <p>{postContent}</p>
            </div>
            <nav className="level is-mobile " id="comment">
              <div className="level-left ">
                <a className="level-item is-danger" aria-label="reply">
                  <span className="icon is-medium ">
                    <FontAwesomeIcon
                      icon={faHeartBroken}
                      className="iconsPost mx-2"
                    />

                    {dislikes}
                  </span>
                </a>
                <a className="level-item is-danger" aria-label="like">
                  <span className="icon is-medium">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="iconsPost mx-2"
                    />
                    {likes}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        {isGoodUser && <footer className="">
          <button
            className="button is-small is-danger mx-1 "
            // onClick={modifyPost}
          >
            Confirmer
          </button>

          <button className="button is-small is-danger mx-1 ">Modifier</button>

          <button
            className="button is-small is-danger mx-1 "
          //   onClick={deletePost}
          >
            Supprimer
          </button>
        </footer> }
      </div>
    </div>
  );
}

export default Card;
