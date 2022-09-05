import "./card.scss";
import PropTypes from "prop-types";

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
    <div className="cardsContainer">
      <div className="card">
        <div className="card-image">
          <figure className="image is-48x48">
            <img src={picture} alt={picture}></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={check} alt="Placeholder image"></img>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{userId}</p>
            </div>
          </div>

          <div className="content">
            {postContent}
            <time datetime={creationDate}>{creationDate}</time>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Save {/* ou likes*/}
        </a>
        <a href="#" className="card-footer-item">
          Edit {/** ou dislikes */}
        </a>
        <a href="#" className="card-footer-item">
          Delete {/** ou rien */}
        </a>
      </footer>
    </div>
  );
}

export default Card;
