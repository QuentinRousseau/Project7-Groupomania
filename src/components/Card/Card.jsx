import "./card.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

function Card({
  userId,
  title,
  postContent,
  picture,
  creationDate,
  likes,
  dislikes,
}) {
  return (
    <div>
      <div className="box has-background-danger-light ">
        <article className="media ">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="#" alt="Image"></img>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                <small>31m</small>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile " id="comment">
              <div className="level-left ">
                <a className="level-item is-danger" aria-label="reply">
                  <span className="icon is-medium">
                    <FontAwesomeIcon icon={faComment} className="iconsPost" />
                  </span>
                </a>
                <a className="level-item is-danger" aria-label="like">
                  <span className="icon is-medium">
                    <FontAwesomeIcon icon={faHeart} className="iconsPost" />
                  </span>
                </a>
              </div>
            </nav>
          </div>{" "}
        </article>
        <footer className="card-footer ">
          <button class="button is-small is-danger mx-1 ">Confirmer</button>

          <button class="button is-small is-danger mx-1 ">Modifier</button>

          <button class="button is-small is-danger mx-1 ">Supprimer</button>
        </footer>
      </div>
    </div>
  );
}

export default Card;
