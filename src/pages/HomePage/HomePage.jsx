import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";

function HomePage() {
  const [postsList, setpostsList] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDataLoading(true);
    try {
      const response = await fetch(`/api/posts`)
      const postsList = await response.json()
      setpostsList(postsList);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setDataLoading(false);
    }
  }, []);

  if (error) return <span>Oulà , on a un problème !</span>;
  return (
    <div className="homePage">
      <div className="titlebloc">
        <h1 className="titlebloc__title">Acceuil </h1>
        <h2 className="titlebloc__subtitle">Découvrez les derniers posts !</h2>
      </div>
      {isDataLoading ? (
        <div className="loaderWrapper">
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default HomePage;
