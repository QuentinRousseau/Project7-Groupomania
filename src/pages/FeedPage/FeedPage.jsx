import { useFetch } from "../../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import { error } from "react";
import { Card } from "react-bulma-components";
import check from "../../assets/check.png";
import images from "../../assets/images.png";

function HomePage() {
  const url = window.location.href;
  const postsList = [
    {
      title: "wallah",
      picture: "#",
      postContent: "wallah c'est la description",
      creationDate: "28-08-2022",
    },
  ]; //useFetch(url);
  if (error) return <span>Oulà , on a un problème !</span>;
  return (
    <div className="homePage">
      <div className="title">
        <h1 className="title is-1">Acceuil </h1>
        <h2 className="subtitle is-1">Découvrez les derniers posts !</h2>
      </div>
      {/* {isDataLoading ? (
        <div className="loaderWrapper">
          <Loader />
        </div>
     ) : (*/}
      <div className="cardsContainer">
        {postsList.map((post, index) => (
          <Card
            key={`${post}-${index}`}
            title={post.title}
            picture={post.picture}
            postContent={post.postContent}
            creationDate={post.creationDate}
          />
        ))}
      </div>
      <div className="cardsContainer">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={images} alt="Placeholder image"></img>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src={check} alt="Placeholder image"></img>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>

          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              Save
            </a>
            <a href="#" class="card-footer-item">
              Edit
            </a>
            <a href="#" class="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
