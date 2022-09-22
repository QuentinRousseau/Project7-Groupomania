import "./Card.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({ userId, postContent, picture, creationDate, likes, dislikes }) {
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
                <strong>{userId}</strong>
                {creationDate}
              </p>
              <p>{postContent}</p>
            </div>
            <nav className="level is-mobile " id="comment">
              <div className="level-left ">
                <a className="level-item is-danger" aria-label="reply">
                  <span className="icon is-medium">
                    <FontAwesomeIcon
                      icon={faHeartBroken}
                      className="iconsPost"
                    />
                    {dislikes}
                  </span>
                </a>
                <a className="level-item is-danger" aria-label="like">
                  <span className="icon is-medium">
                    <FontAwesomeIcon icon={faHeart} className="iconsPost" />
                    {likes}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
        <footer className="card-footer ">
          <button className="button is-small is-danger mx-1 ">Confirmer</button>

          <button className="button is-small is-danger mx-1 ">Modifier</button>

          <button className="button is-small is-danger mx-1 ">Supprimer</button>
        </footer>
      </div>
    </div>
  );
}

export default Card;
