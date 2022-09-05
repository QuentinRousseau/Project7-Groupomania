import "./feedPage.scss";
import { useFetch } from "../../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import { error } from "react";
import { Card } from "react-bulma-components";
import check from "../../assets/check.png";
import images from "../../assets/images.png";
import Postinput from "../../components/Input/Postinput";
import Title from "../../components/Title/Title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faRetweet, faHeart } from "@fortawesome/free-solid-svg-icons";

function FeedPage() {
  const url = window.location.href;
  const postsList = [
    {
      title: "wallah",
      picture: "#",
      postContent: "wallah c'est la description",
      creationDate: "28-08-2022",
    },
    {
      userId: 12,
      title: "Test1",
      description: "Description test",
      imageUrl: "../../assets/images.png",
      creationDate: 1519211809934,
      likes: 0,
      dislikes: 0,
      usersLiked: [],
      usersDisliked: [],
    },
  ]; //useFetch(url);
  if (error) return <span>Oulà , on a un problème !</span>;
  return (
    <div className="feedPage">
      <Title />
      <div className="title">
        <h1 className="title is-1">Accueil </h1>

        <Postinput />

        <h2 className="subtitle is-1">Découvrez les derniers posts !</h2>
      </div>

      {/* {isDataLoading ? (
        <div className="loaderWrapper">
          <Loader />
        </div>
     ) : (
      <div className="cardsContainer">
        {postsList.map((post, index) => (
          <Card
            key={`${post}-${index}`}
            title={post.title}
            picture={post.imageUrl}
            postContent={post.description}
            creationDate={post.creationDate}
          />
        ))}
      </div>*/}
      <div className="cardsContainer">
        <div className="card">
          <div className="card-image">
            <figure className="image is-48x48">
              <img src={images} alt="Placeholder image"></img>
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
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <time datetime="2016-1-1">26-janv-2016</time>
            </div>
          </div>

          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Save
            </a>
            <a href="#" className="card-footer-item">
              Edit
            </a>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              ></img>
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
            <nav className="level is-mobile" id="comment">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <FontAwesomeIcon icone={faReply} />
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <FontAwesomeIcon icone={faRetweet} />
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <FontAwesomeIcon icone={faHeart} />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FeedPage;
