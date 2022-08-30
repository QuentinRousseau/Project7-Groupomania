import { useFetch } from "../../providers/fetch";
//import { Loader } from "../../components/Loader/Loader";
import { error } from "react";

function HomePage() {
  const url = window.location.href;
  const postsList = useFetch(url);
  if (error) return <span>Oulà , on a un problème !</span>;
  return (
    <div className="homePage">
      <div className="titlebloc">
        <h1 className="titlebloc__title">Acceuil </h1>
        <h2 className="titlebloc__subtitle">Découvrez les derniers posts !</h2>
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
      {/*)}*/}
    </div>
  );
}

export default HomePage;
