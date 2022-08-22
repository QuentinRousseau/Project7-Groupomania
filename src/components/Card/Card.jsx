import "./card.scss";
import PropTypes from "prop-types";

function Card({ title, postContent, picture }) {
  return (
    <div className="CardWrapper">
      <h3 className="CardWrapper--title"> {title}</h3>
      <img className="CardWrapper--image" src={picture} alt="freelance" />
      <span>{postContent}</span>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  postContent: "",
  picture: DefaultPicture,
};

export default Card;
